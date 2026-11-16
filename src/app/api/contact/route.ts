import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, subject, service, message } = body;

    if (!fullName || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Console logging for verification
    console.log("[TTL Contact Inquiry Received]", {
      fullName,
      email,
      phone,
      subject,
      service,
      message,
      timestamp: new Date().toISOString()
    });

    return NextResponse.json(
      {
        success: true,
        message: "Your inquiry has been received by Trans Team Ltd. A logistics coordinator will contact you shortly."
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
