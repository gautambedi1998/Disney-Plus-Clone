import { NextRequest, NextResponse } from "next/server";
const { OAuth2Client } = require("google-auth-library");

export async function POST(req: NextRequest) {
  try {
    const { token } = await req.json();

    if (!token) {
      return NextResponse.json(
        { error: "No ID token provided" },
        { status: 400 }
      );
    }
    const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
    const validToken = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });

    const payload = validToken.getPayload();

    return NextResponse.json({ message: "User is verified" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}
