import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-4xl font-serif text-[#d4af37] mb-4">Page Not Found</h1>
      <p className="text-gray-400 mb-6">The atelier room you are looking for does not exist.</p>
      <Link href="/" className="px-6 py-2 border border-[#d4af37] text-[#d4af37] rounded-full">
        Return to Boutique
      </Link>
    </div>
  );
}