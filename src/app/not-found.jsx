import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-green-400">404</h1>
        <h2 className="text-3xl font-semibold mt-4">Page Not Found</h2>
        <p className="text-gray-400 mt-2">
          Sorry, the page you are looking for does not exist.
        </p>

        <Link
          href="/"
          className="inline-block mt-6 px-6 py-3 bg-green-500 hover:bg-green-600 rounded-xl transition"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}