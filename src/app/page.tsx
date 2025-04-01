"use client";

import { useState } from "react";
import EmailForm from "./components/EmailForm";
import EmailResult from "./components/EmailResult";
import LoadingSpinner from "./components/LoadingSpinner";
import ThemeToggle from "./components/ThemeToggle";

export default function Home() {
  // State for managing the application
  const [loading, setLoading] = useState(false);
  const [modifiedEmail, setModifiedEmail] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Function to handle email submission and modification
  const handleSubmit = async (data: {
    emailDraft: string;
    senderName: string;
    receiverName: string;
    tone: string;
  }) => {
    setLoading(true);
    setError(null);

    try {
      // Call the API route to modify the email
      const response = await fetch("/api/modify-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // Handle non-200 responses
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to modify email");
      }

      // Process the successful response
      const result = await response.json();
      setModifiedEmail(result.modifiedEmail);
    } catch (err) {
      console.error("Error modifying email:", err);
      setError(
        err instanceof Error
          ? err.message
          : "An unexpected error occurred. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  // Function to reset the form for a new email
  const handleReset = () => {
    setModifiedEmail(null);
    setError(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-end mb-4">
          <ThemeToggle />
        </div>
        
        <header className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            Email Modifier
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Refine your emails with AI assistance. Enter your rough draft and 
            additional context, and our AI will help polish it to perfection.
          </p>
        </header>

        <main className="flex flex-col items-center justify-center">
          {error && (
            <div className="w-full max-w-3xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 text-red-700 dark:text-red-400 px-4 py-3 rounded-md mb-6">
              <p>{error}</p>
            </div>
          )}

          {loading ? (
            <LoadingSpinner />
          ) : modifiedEmail ? (
            <EmailResult modifiedEmail={modifiedEmail} onReset={handleReset} />
          ) : (
            <EmailForm onSubmit={handleSubmit} loading={loading} />
          )}
        </main>

        <footer className="mt-16 text-center text-gray-500 dark:text-gray-400 text-sm">
          <p>
            Powered by Next.js and Google Gemini AI. Remember to set your API key in .env.local.
          </p>
        </footer>
      </div>
    </div>
  );
}
