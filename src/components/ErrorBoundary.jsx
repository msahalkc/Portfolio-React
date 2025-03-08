import { Component } from "react";
import { Card, CardBody, Button } from "@nextui-org/react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center p-4">
          <Card className="w-full max-w-2xl">
            <CardBody className="text-center space-y-4">
              <h1 className="text-4xl Bebas">Oops! Something went wrong</h1>
              <p>We're sorry for the inconvenience. Please try again later.</p>
              <Button
                as={Link}
                to="/"
                className="bg-blueee-500 dark:bg-emerald-500 text-white"
              >
                Return Home
              </Button>
            </CardBody>
          </Card>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
