# Email Modifier App

A Next.js application that uses Google's Gemini API to polish and refine email drafts.

## Features

- Enter a rough email draft to get a polished version
- Provide optional context like sender and receiver names
- Select from various tones to influence the style of the email
- Simple, responsive interface with dark mode support

## Getting Started

### Prerequisites

- Node.js 18.x or later
- A Google AI Studio account and Gemini API key

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd email-modifier
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory and add your Gemini API key:

   ```
   GEMINI_API_KEY=your_gemini_api_key
   ```

   You can obtain a Gemini API key from [Google AI Studio](https://makersuite.google.com/).

### Running the Application

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Open [http://localhost:3000](http://localhost:3000) in your browser to use the application.

## How to Use

1. Enter your email draft in the main text area
2. Optionally, provide the sender and receiver names for context
3. Select a tone for the email (e.g., professional, friendly, formal)
4. Click "Generate Email" to process your draft
5. View the refined email and copy it to your clipboard if desired
6. Click "Modify Another Email" to start over
7. Toggle between light and dark mode using the theme button

## Technologies Used

- Next.js 14
- React
- Tailwind CSS
- Google Generative AI (Gemini 2.0 Flash)

## License

MIT

## Acknowledgments

- Google for providing the Gemini API
- Next.js team for the framework
# email-modifier
# email-modifier
