export default function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 w-full max-w-3xl py-12">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      <p className="text-gray-600 dark:text-gray-300 font-medium">Generating your email...</p>
      <p className="text-gray-500 dark:text-gray-400 text-sm text-center max-w-md">
        We're using AI to refine your email. This may take a few seconds.
      </p>
    </div>
  );
} 