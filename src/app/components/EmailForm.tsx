import { useState } from "react";

// Define available tone options
const toneOptions = [
  { value: "", label: "Default" },
  { value: "professional", label: "Professional" },
  { value: "friendly", label: "Friendly" },
  { value: "formal", label: "Formal" },
  { value: "casual", label: "Casual" },
  { value: "persuasive", label: "Persuasive" },
  { value: "confident", label: "Confident" },
  { value: "empathetic", label: "Empathetic" },
];

interface EmailFormProps {
  onSubmit: (data: {
    emailDraft: string;
    senderName: string;
    receiverName: string;
    tone: string;
  }) => void;
  loading: boolean;
}

export default function EmailForm({ onSubmit, loading }: EmailFormProps) {
  // Form state
  const [emailDraft, setEmailDraft] = useState("");
  const [senderName, setSenderName] = useState("");
  const [receiverName, setReceiverName] = useState("");
  const [tone, setTone] = useState("");

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      emailDraft,
      senderName,
      receiverName,
      tone,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-3xl">
      <div className="space-y-2">
        <label htmlFor="emailDraft" className="block text-sm font-medium dark:text-gray-200">
          Email Draft <span className="text-red-500 dark:text-red-400">*</span>
        </label>
        <textarea
          id="emailDraft"
          value={emailDraft}
          onChange={(e) => setEmailDraft(e.target.value)}
          rows={8}
          placeholder="Enter your rough email draft here..."
          className="w-full p-3 border rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-y placeholder-gray-400 dark:placeholder-gray-500"
          required
        />
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="senderName" className="block text-sm font-medium dark:text-gray-200">
            Sender's Name (Optional)
          </label>
          <input
            id="senderName"
            type="text"
            value={senderName}
            onChange={(e) => setSenderName(e.target.value)}
            placeholder="Your name"
            className="w-full p-3 border rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 dark:placeholder-gray-500"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="receiverName" className="block text-sm font-medium dark:text-gray-200">
            Receiver's Name (Optional)
          </label>
          <input
            id="receiverName"
            type="text"
            value={receiverName}
            onChange={(e) => setReceiverName(e.target.value)}
            placeholder="Recipient's name"
            className="w-full p-3 border rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 dark:placeholder-gray-500"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="tone" className="block text-sm font-medium dark:text-gray-200">
          Email Tone (Optional)
        </label>
        <select
          id="tone"
          value={tone}
          onChange={(e) => setTone(e.target.value)}
          className="w-full p-3 border rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          {toneOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        disabled={loading || !emailDraft.trim()}
        className="w-full py-3 px-6 text-white font-medium rounded-md bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {loading ? "Generating..." : "Generate Email"}
      </button>
    </form>
  );
} 