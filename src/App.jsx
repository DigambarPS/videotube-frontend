import {lazy, Suspense } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import ThemeContextProvider from "./context/ThemeContextProvider.jsx";
import AuthContextProvider from "./context/AuthContextProvider.jsx";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Home from "./pages/Home.jsx";
import { logoutUserApi } from "./api/authApi.js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProtectedRoute from './components/ProtectedRoute.jsx'
import PublicOnlyRoute from "./components/PublicOnlyRoute.jsx";
const VideoPlayerPage = lazy(() => import("./pages/VideoPlayerPage.jsx"));
const Profile = lazy(() => import("./pages/Profile.jsx"));
const Channel = lazy(() => import("./pages/Channel.jsx"));
const Settings = lazy(() => import("./pages/Settings.jsx"));

function RootLayout() {
  return (
    <>
      <Header />
      <Suspense fallback={<p className="text-center py-10">Loading...</p>}>
      <Outlet />
      </Suspense>
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [{
      element:<PublicOnlyRoute/>,
      children:[
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register />}
    ]
    },
      {
        element: <ProtectedRoute />,
        children: [
          { path: "/Home", element: <Home /> },
          { path: "/play/:videoId", element: <VideoPlayerPage /> },
          { path: "/profile", element: <Profile /> },
          { path: "/settings", element: <Settings /> },
          { path: "/Channel/:channelId", element: <Channel/>},
        ],
      },
    ],
  },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthContextProvider>
          <ThemeContextProvider>
            <RouterProvider router={router} />
          </ThemeContextProvider>
        </AuthContextProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
