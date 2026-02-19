import { Link } from "wouter";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <div className="bg-white rounded-[2rem] shadow-xl p-12 text-center max-w-md mx-4">
        <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertCircle className="w-10 h-10 text-red-500" />
        </div>
        <h1 className="text-4xl font-bold mb-4 font-fredoka text-gray-900">404</h1>
        <p className="text-lg text-gray-600 mb-8">
          Oops! The page you're looking for seems to have wandered off.
        </p>
        <Link href="/">
          <button className="px-8 py-3 bg-primary text-white rounded-xl font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
            Return Home
          </button>
        </Link>
      </div>
    </div>
  );
}
