import { Component } from "react";
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
        <div className="min-h-screen flex flex-col items-center justify-center p-10 gap-4">
          <h1 className="text-4xl font-bold">Oops! Something went wrong</h1>
          <p>We&apos;re sorry for the inconvenience. Please try again later.</p>
          <Link to="/" className="underline font-semibold">
            Return Home
          </Link>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
