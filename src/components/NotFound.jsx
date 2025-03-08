import { Card, CardBody, Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl">
        <CardBody className="text-center space-y-4">
          <h1 className="text-6xl Bebas">404</h1>
          <h2 className="text-2xl">Page Not Found</h2>
          <p>The page you're looking for doesn't exist or has been moved.</p>
          <div className="flex justify-center gap-4">
            <Button
              as={Link}
              to="/"
              className="bg-blueee-500 dark:bg-emerald-500 text-white"
            >
              Return Home
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default NotFound;
