import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, businessName, phone, email, collaborationType, campaignDescription } = body;

    // Server-side validation
    if (!name || !businessName || !phone || !email) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Securely log and return success
    console.log('[Collaboration Inquiry Received]:', {
      name,
      businessName,
      phone,
      email,
      collaborationType,
      campaignDescription,
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: 'Collaboration inquiry successfully received! We will be in touch within 24 hours.',
    });
  } catch (error) {
    console.error('API Error in /api/collaborate:', error);
    return NextResponse.json(
      { success: false, message: 'Server processing error' },
      { status: 500 }
    );
  }
}
