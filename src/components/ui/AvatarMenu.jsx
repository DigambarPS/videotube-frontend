import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import Avatar from "./Avatar";
import { useAuth } from "../../context/authContext";
import { useLogout } from "../../hooks/useUser";

const AvatarMenu = ({ ref = "" }) => {
  const { mutate: logout, isPending } = useLogout();
  const { user } = useAuth();

  return (
    <div
      ref={ref}
      className="fixed h-auto p-2 w-60 right-5 rounded-lg bg-opacity-50 flex items-center justify-center bg-primary dark:bg-primary-dark text-black dark:text-white z-50"
    >
      <div className="flex flex-col w-full">
        <div className="flex gap-2">
          <Avatar src={user?.avatar} />
          <div className="flex flex-col gap-1">
            <div>{user?.fullName}</div>
            <Link to={`/Channel/${user?._id}`}>View Your Channel</Link>
          </div>
        </div>
        <ul className="flex flex-col gap-2 mt-2">
          <Link to="/Profile">
            <Button val="Profile" extra_class="w-full p-2 rounded-lg"></Button>
          </Link>
          <Button func={() => logout()} disabled={isPending} extra_class="w-full p-2 rounded-lg">
            {isPending ? "Logging out..." : "Log out"}
          </Button>
        </ul>
      </div>
    </div>
  );
};

export default AvatarMenu;
