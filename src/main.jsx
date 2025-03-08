import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App';
import ToolsLayout from './components/Tools/ToolsLayout';
import ErrorBoundary from './components/ErrorBoundary';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar'; // Add import for Navbar

const AppWithNavbar = ({ children }) => (
  <>
    <Navbar />
    {children}
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppWithNavbar><App /></AppWithNavbar>,
    errorElement: <NotFound />,
  },
  {
    path: "/dns-lookup-tools",
    element: <AppWithNavbar><ToolsLayout /></AppWithNavbar>,
    errorElement: <NotFound />,
  },
  { 
    path: "*", 
    element: <NotFound /> 
  },
]);

createRoot(document.getElementById("root")).render(
  <ErrorBoundary>
    <RouterProvider router={router} />
  </ErrorBoundary>
);