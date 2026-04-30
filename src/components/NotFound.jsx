import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-10 gap-4">
      <h1 className="text-6xl font-bold">404</h1>
      <h2 className="text-2xl">Page Not Found</h2>
      <p>The page you&apos;re looking for doesn&apos;t exist or has been moved.</p>
      <Link to="/" className="underline font-semibold">
        Return Home
      </Link>
    </div>
  );
};

export default NotFound;
