"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="bg-cream flex min-h-screen items-center justify-center px-6">
      <div className="max-w-md space-y-6 text-center">
        <h2 className="font-headline text-forest text-3xl">
          Something went wrong
        </h2>
        <p className="text-forest/60 font-serif">Please try again.</p>
        <button
          onClick={reset}
          className="from-orange-accent to-gold-warm rounded-xl bg-gradient-to-br px-6 py-3 font-medium text-white transition-transform hover:scale-105"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
