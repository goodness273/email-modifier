import { NextRequest, NextResponse } from "next/server";
import { modifyEmail } from "@/app/utils/gemini";

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const { emailDraft, senderName, receiverName, tone } = await request.json();

    // Validate the email draft
    if (!emailDraft || emailDraft.trim() === "") {
      return NextResponse.json(
        { error: "Email draft is required" },
        { status: 400 }
      );
    }

    // Modify the email using Gemini API
    const modifiedEmail = await modifyEmail(
      emailDraft,
      senderName || "",
      receiverName || "",
      tone || ""
    );

    // Return the modified email
    return NextResponse.json({ modifiedEmail });
  } catch (error) {
    console.error("Error in modify-email API:", error);
    return NextResponse.json(
      { error: "Failed to modify the email" },
      { status: 500 }
    );
  }
} 