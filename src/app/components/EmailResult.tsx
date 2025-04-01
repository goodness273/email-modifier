interface EmailResultProps {
  modifiedEmail: string;
  onReset: () => void;
}

export default function EmailResult({ modifiedEmail, onReset }: EmailResultProps) {
  // Clean up the email content to remove any explanations
  const cleanEmail = () => {
    // Remove common explanation patterns that Gemini might add
    let cleaned = modifiedEmail;
    
    // Remove lines like "Here's an improved version:" or "Here's the refined email:"
    cleaned = cleaned.replace(/^(Here\'s|Here is)(.+?):\s*\n+/i, '');
    
    // Remove any lines starting with "I've" or "I have" (explanations about what was changed)
    cleaned = cleaned.replace(/^I\'ve(.+?)\n+/gim, '');
    cleaned = cleaned.replace(/^I have(.+?)\n+/gim, '');
    
    // Remove any section starting with "Changes made:" or similar
    cleaned = cleaned.replace(/\n+Changes made:(.+?)$/si, '');
    cleaned = cleaned.replace(/\n+Improvements:(.+?)$/si, '');
    cleaned = cleaned.replace(/\n+Note:(.+?)$/si, '');
    
    return cleaned.trim();
  };

  // Function to handle copying the email to clipboard
  const handleCopy = () => {
    navigator.clipboard.writeText(cleanEmail());
    alert("Email copied to clipboard!");
  };

  return (
    <div className="w-full max-w-3xl space-y-6">
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-sm p-6 space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Modified Email</h2>
          <button
            onClick={handleCopy}
            className="px-4 py-2 text-sm bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
          >
            Copy to Clipboard
          </button>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
          <div className="whitespace-pre-wrap text-gray-800 dark:text-gray-200">{cleanEmail()}</div>
        </div>
      </div>
      
      <div className="flex justify-center">
        <button
          onClick={onReset}
          className="px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-md font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        >
          Modify Another Email
        </button>
      </div>
    </div>
  );
} 