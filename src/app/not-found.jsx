import Link from "next/link";
import { Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-6">
      <div className="text-center max-w-xl">
        <div className="relative mb-6">
          <h1 className="text-[120px] font-bold text-gray-200 absolute inset-0 flex items-center justify-center pointer-events-none">
            404
          </h1>
          <h2 className="relative text-3xl font-extrabold text-gray-800 mb-16">
            Oops! Page not found.
          </h2>
        </div>

        <p className="text-gray-500 mb-8 leading-relaxed">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable. Don't worry, our products are
          still here!
        </p>

        <div className="flex items-center justify-center gap-4 mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white font-medium shadow-md hover:bg-blue-700 transition"
          >
            <Home className="w-4 h-4" />
            Back to Homepage
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-gray-300 text-gray-600 font-medium hover:bg-gray-100 transition"
          >
            <Search className="w-4 h-4" />
            Browse Products
          </Link>
        </div>
        <p className="text-sm text-gray-400">
          Need help?{" "}
          <span className="text-blue-600 hover:underline cursor-pointer">
            Contact Support
          </span>
        </p>
      </div>
    </div>
  );
}