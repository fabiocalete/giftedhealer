export default function Loading() {
  return (
    <div className="bg-cream flex min-h-screen items-center justify-center">
      <div className="space-y-4 text-center">
        <div className="border-orange-accent mx-auto h-16 w-16 animate-spin rounded-full border-4 border-t-transparent" />
        <p className="text-forest/60 font-serif">Opening the portal...</p>
      </div>
    </div>
  );
}
