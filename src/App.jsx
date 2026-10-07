import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header.jsx";
import ThemeContextProvider from "./context/ThemeContextProvider.jsx";
import AuthContextProvider from "./context/AuthContextProvider.jsx";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Home from "./pages/Home.jsx";
import Profile from "./pages/Profile.jsx";
import VideoPlayerPage from "./pages/VideoPlayerPage.jsx";
import Settings from "./pages/Settings.jsx";
import Channel from "./pages/Channel.jsx";
import { logoutUserApi } from "./api/authApi.js";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProtectedRoute from './components/ProtectedRoute.jsx'
import PublicOnlyRoute from "./components/PublicOnlyRoute.jsx";

function RootLayout() {
  return (
    <>
      <Header />
      <Outlet />
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
          {
            path: "/logout",
            loader: async () => {
              const res = await logoutUserApi();
              if (res.data.statusCode == 200) return redirect("/");
            },
          },
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
