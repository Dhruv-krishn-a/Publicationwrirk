import { NextResponse } from 'next/server';
import { SignJWT } from 'jose';
import fs from 'fs';
import path from 'path';

const SECRET_KEY = new TextEncoder().encode(process.env.ADMIN_SECRET || 'super-secure-fallback-secret-wrirk');

// Simulated secure credentials
const VALID_USERNAME = process.env.ADMIN_USERNAME || 'admin';
const VALID_PASSWORD = process.env.ADMIN_PASSWORD || 'Wrirk@2025!';
const TARGET_PHONE = '+916395795204';

// Helper to manage OTP storage locally
const getOtpFilePath = () => path.join(process.cwd(), 'src', 'data', 'otp.json');

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { action, username, password, otp } = body;

    if (action === 'login') {
      // Step 1: Validate ID & Password
      if (username !== VALID_USERNAME || password !== VALID_PASSWORD) {
        return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 });
      }

      // Step 2: Generate 6-digit OTP
      const generatedOtp = Math.floor(100000 + Math.random() * 900000).toString();
      
      // Save OTP to local file with a 5-minute expiry
      const otpData = {
        otp: generatedOtp,
        expires: Date.now() + 5 * 60 * 1000
      };
      
      const otpPath = getOtpFilePath();
      // Ensure dir exists
      if (!fs.existsSync(path.dirname(otpPath))) {
        fs.mkdirSync(path.dirname(otpPath), { recursive: true });
      }
      fs.writeFileSync(otpPath, JSON.stringify(otpData));

      // [INTEGRATION HOOK]
      // Replace this console.log with your Twilio/Fast2SMS API call
      console.log(`\n\n[SECURITY] SIMULATED SMS SENT TO ${TARGET_PHONE}\nYour WRIRK Admin OTP is: ${generatedOtp}\n\n`);

      return NextResponse.json({ 
        success: true, 
        message: `OTP sent successfully to ${TARGET_PHONE}` 
      });
    }

    if (action === 'verify') {
      // Step 3: Validate OTP
      const otpPath = getOtpFilePath();
      
      if (!fs.existsSync(otpPath)) {
        return NextResponse.json({ success: false, message: 'OTP expired or not requested' }, { status: 400 });
      }

      const otpData = JSON.parse(fs.readFileSync(otpPath, 'utf8'));

      if (Date.now() > otpData.expires) {
        fs.unlinkSync(otpPath); // Delete expired OTP
        return NextResponse.json({ success: false, message: 'OTP has expired' }, { status: 400 });
      }

      if (otp !== otpData.otp) {
        return NextResponse.json({ success: false, message: 'Invalid OTP' }, { status: 400 });
      }

      // OTP is valid! Delete it so it can't be reused
      fs.unlinkSync(otpPath);

      // Step 4: Issue JWT Cookie
      const token = await new SignJWT({ user: 'admin', role: 'superadmin' })
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('12h')
        .sign(SECRET_KEY);

      const response = NextResponse.json({ success: true, message: 'Login successful' });
      
      // Set HTTP-only secure cookie
      response.cookies.set({
        name: 'admin_token',
        value: token,
        httpOnly: true,
        path: '/',
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 12, // 12 hours
      });

      return response;
    }

    return NextResponse.json({ success: false, message: 'Invalid action' }, { status: 400 });

  } catch (error) {
    console.error('Auth Error:', error);
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
  }
}
