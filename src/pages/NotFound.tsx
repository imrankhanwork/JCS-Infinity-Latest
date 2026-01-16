import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 - Page Not Found:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-purple-600 flex items-center justify-center px-4">
      <div className="text-center text-white space-y-6">
        <h1 className="text-7xl font-bold tracking-tight">404</h1>
        <p className="text-2xl font-medium text-gray-300">
          Oops! The page <code className="text-purple-300">{location.pathname}</code> does not exist.
        </p>
        <Link
          to="/"
          className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
