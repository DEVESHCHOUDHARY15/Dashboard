import Analytics from "./Components/Content/Analytics";
import Sidebar from "./Components/Sidebar/Sidebar";
import Dashboard from "./Components/Content/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./Components/Content/Contact";
import Help from "./Components/Content/Help";
import { ThemeProvider } from "./Components/theme-provider";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Sidebar />,
      children: [
        {
          path: "/Dashboard",
          element: <Dashboard />,
        },
        {
          path: "/Analytics",
          element: <Analytics />,
        },
        {
          path: "/Contact",
          element: <Contact />,
        },
        {
          path: "/Help",
          element: <Help />,
        },
      ],
    },
  ]);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
