import { GoogleGenerativeAI } from "@google/generative-ai";

// Function to modify an email with Gemini
export async function modifyEmail(
  emailDraft: string, 
  senderName: string, 
  receiverName: string, 
  tone: string
): Promise<string> {
  try {
    // Initialize the Google Generative AI with the API key
    const apiKey = process.env.GEMINI_API_KEY || "";
    if (!apiKey) {
      throw new Error("Gemini API key is not configured");
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    
    // Get the generative model - using gemini-2.0-flash for faster responses
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    // Construct the prompt based on the provided information
    let prompt = `Improve the following email draft. Respond ONLY with the improved email without any explanations, introductions, or notes about what was changed:
    
${emailDraft}`;

    // Add optional context if provided
    if (senderName) {
      prompt += `\n\nThe email is from: ${senderName}`;
    }
    
    if (receiverName) {
      prompt += `\n\nThe email is to: ${receiverName}`;
    }
    
    if (tone) {
      prompt += `\n\nThe email should have a ${tone} tone.`;
    }
    
    // Add a final instruction to emphasize not including explanations
    prompt += `\n\nIMPORTANT: Do not include any explanations, reasoning, or notes about what was changed. Just provide the improved email text directly.`;

    // Generate content using the Gemini model
    const result = await model.generateContent({
      contents: [
        {
          parts: [
            { text: prompt }
          ]
        }
      ]
    });
    
    const response = await result.response;
    const text = response.text();
    
    return text;
  } catch (error) {
    console.error("Error modifying email:", error);
    throw new Error("Failed to modify the email. Please try again.");
  }
} 