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
import SideBar from "./components/sideBar.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import SubscriptionList from "./pages/SubscriptionList.jsx";
const VideoPlayerPage = lazy(() => import("./pages/VideoPlayerPage.jsx"));
const Profile = lazy(() => import("./pages/Profile.jsx"));
const Channel = lazy(() => import("./pages/Channel.jsx"));
const Settings = lazy(() => import("./pages/Settings.jsx"));
const Subscriptions = lazy(() => import("./pages/Subscriptions.jsx"));

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

function HomeLayout() {
  return (
    <div className="flex">
      <SideBar />
      <main className="flex-1">
        <Suspense fallback={<p className="text-center py-10">Loading...</p>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [{
      element:<PublicOnlyRoute/>,
      children:[
      { index: true, element: <LandingPage/> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register />}
    ]
    },
      {
        element: <ProtectedRoute />,
        children: [
          { path: "/play/:videoId", element: <VideoPlayerPage /> },
          { path: "/profile", element: <Profile /> },
          { path: "/settings", element: <Settings /> },
          { path: "/Channel/:channelId", element: <Channel/>},
          {
            element:<HomeLayout/>,
            children:[
              { path: "/Home", element: <Home /> },
              { path: "/subscriptions/:userid", element: <Subscriptions/>},
              { path: "/subscriptionList/:userid", element: <SubscriptionList/>},
            ]
          }
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
