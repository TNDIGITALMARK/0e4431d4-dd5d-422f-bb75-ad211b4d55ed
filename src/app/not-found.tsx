import Link from "next/link";

export const dynamic = "force-dynamic";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-9xl font-bold text-[hsl(var(--navy-primary))] mb-4">
          404
        </h1>
        <h2 className="text-3xl font-bold mb-4 text-[hsl(var(--foreground))]">
          Page Not Found
        </h2>
        <p className="text-lg text-[hsl(var(--gray-600))] mb-8">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/">
            <button className="btn-primary">GO HOME</button>
          </Link>
          <Link href="/contact">
            <button className="btn-secondary">CONTACT US</button>
          </Link>
        </div>
      </div>
    </div>
  );
}