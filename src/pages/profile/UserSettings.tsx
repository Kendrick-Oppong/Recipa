import { ErrorMessage } from "@/components/shared";
import { UserProfileImage, UserSettingsForm } from "./";
import { usePageTitle, useFetch as useGetUserProfile } from "@/hooks";
import { UserDetails } from "@/types/types";
import { User } from "lucide-react";
import { useAppDispatch } from "@/redux/store";
import { useEffect } from "react";
import { storeUserProfileImage } from "@/redux/userProfileImageSlice";

export const UserSettings = () => {
  usePageTitle("Profile - Settings");
  const dispatch = useAppDispatch();

  const {
    data: user,
    isLoading,
    error,
    refetch,
  } = useGetUserProfile<UserDetails>(
    "http://localhost:5000/user/profile",
    "userDetails"
  );

  useEffect(() => {
    dispatch(
      storeUserProfileImage(user?.profileImage ? user.profileImage : "")
    );
  }, [dispatch, user?.profileImage]);

  if (error)
    return (
      <div className="my-[3rem]">
        <ErrorMessage refetch={refetch} message={error?.message} />
      </div>
    );

  return (
    <main className="pt-5 mx-2 mt-4 mb-10 border rounded-lg shadow-lg sm:mx-10 border-green600">
      <h1 className="text-xl font-semibold text-center">Basic Settings</h1>
      <div className="mt-4">
        <div>
          <div className="text-center ">
            {user?.profileImage ? (
              <img
                src={user.profileImage}
                alt=""
                className="object-cover w-24 h-24 p-1 mx-auto border border-gray-500 rounded-full"
              />
            ) : (
              <User
                strokeWidth={1}
                className="w-24 h-24 p-1 mx-auto border border-gray-500 rounded-full "
              />
            )}

            <h3 className="font-semibold">
              {isLoading ? "loading profile..." : user?.name ?? ""}
            </h3>
          </div>
        </div>
        <UserProfileImage userImage={user && user?.profileImage} />
        {isLoading ? (
          <div className="animate-pulse">
            <form autoComplete="off" className="px-5 mt-12 mb-12">
              <div className="grid-cols-2 gap-4 mb-4 sm:grid">
                <div className="mb-4 sm:mb-0">
                  <div className="h-10 bg-gray-400 border border-gray-500 rounded dark:bg-gray-700"></div>
                </div>
                <div>
                  <div className="h-10 bg-gray-400 border border-gray-500 rounded dark:bg-gray-700"></div>
                </div>
              </div>
              <div className="grid-cols-2 gap-4 mb-4 sm:grid">
                <div className="mb-4 sm:mb-0">
                  <div className="h-10 bg-gray-400 border border-gray-500 rounded dark:bg-gray-700"></div>
                </div>
                <div>
                  <div className="h-10 bg-gray-400 border border-gray-500 rounded dark:bg-gray-700"></div>
                </div>
              </div>
              <div className="grid-cols-2 gap-4 mb-4 sm:grid">
                <div className="mb-4 sm:mb-0">
                  <div className="h-10 bg-gray-400 border border-gray-500 rounded dark:bg-gray-700"></div>
                </div>
                <div>
                  <div className="h-10 bg-gray-400 border border-gray-500 rounded dark:bg-gray-700"></div>
                </div>
              </div>
            </form>
          </div>
        ) : (
          <UserSettingsForm user={user} />
        )}
      </div>
    </main>
  );
};
