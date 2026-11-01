import React from "react";
import Button from "./ui/Button";
import { FiBell } from "react-icons/fi";
import { useToggleSubscribe } from "../hooks/useSubscription";

const SubscriptionButton = ({ data, size, className, user }) => {
  console.log(data);
  const isSubscribed = data?.isSubscribed ?? false;
  const { mutate: toggleSubscribe } = useToggleSubscribe(data?._id);

  const handleSubscribeClick = () => {
    toggleSubscribe();
  };

  return (
    <div className="flex items-center space-x-2 self-stretch sm:self-auto">
      {data && user && data?._id !== user?._id && (
        <Button
          func={() => handleSubscribeClick()}
          extra_class={`flex-1 sm:flex-none px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 flex items-center justify-center space-x-2 ${
            isSubscribed
              ? "bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700"
              : "bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200"
          }`}
        >
          {isSubscribed ? (
            <>
              <FiBell className="w-4 h-4" />
              <span>Subscribed</span>
            </>
          ) : (
            <span>Subscribe</span>
          )}
        </Button>
      )}
    </div>
  );
};

export default SubscriptionButton;
