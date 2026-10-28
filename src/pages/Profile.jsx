import React, { useState } from "react";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import Avatar from "../components/ui/Avatar";
import { useAuth } from "../context/authContext";
import {
  useUpdateProfileDetails,
  useUpdateAvatar,
  useUpdateCoverImage,
} from "../hooks/useUser";
import { ProfileSkeleton } from "../components/shimmerUI/ProfileSkeleton";
import {
  personalInformationSchema,
  avatarSchema,
  coverImageSchema,
} from "../schemas/userSchemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const Profile = () => {
  const { user, isLoading } = useAuth();
  const [fullName, setFullName] = useState(user?.fullName || "");
  const [email, setEmail] = useState(user?.email || "");
  const [coverImageFile, setCoverImageFile] = useState(null);
  const [infoUpdateSuccess, setInfoUpdateSuccess] = useState(false);
  const [avatarUpdateSuccess, setavatarUpdateSuccess] = useState(false);
  const [coverImgUpdateSuccess, setCoverImgUpdateSuccess] = useState(false);
  const { mutate: userInfoMutate, isPending: userInfoIsPending } =
    useUpdateProfileDetails();
  const { mutate: avatarMutate, isPending: avatarIsPending } =
    useUpdateAvatar();
  const { mutate: coverImageMutate, isPending: coverImageIsPending } =
    useUpdateCoverImage();

  const {
    register: registerInfo,
    handleSubmit: handleInfoSubmit,
    formState: { errors: personalInfoErrors , isSubmitting: isPersonalInfoSubmitting},
  } = useForm({
    resolver: zodResolver(personalInformationSchema),
  });

  function updateDetails(data) {
    userInfoMutate(data ,{
      onSuccess: () => {
      setInfoUpdateSuccess(true);
      setTimeout(() => {
        setInfoUpdateSuccess(false);
      }, 3000);
    }
    });
  }

  const {
    register: registerAvatar,
    handleSubmit: handleAvatarSubmit,
    formState: { errors: avatarErrors , isSubmitting: isavatarSubmitting},
  } = useForm({
    resolver: zodResolver(avatarSchema),
  });

  function updateAvatar(data) {
    const formData = new FormData();
    formData.append("avatar", data.avatar[0]);
    
    avatarMutate(formData ,{
      onSuccess: () => {
      setavatarUpdateSuccess(true);
      setTimeout(() => {
        setavatarUpdateSuccess(false);
      }, 3000);
    }
    });
  }

  const {
    register: registerCoverImage,
    handleSubmit: handleCoverImageSubmit,
    formState: { errors: coverImageErrors , isSubmitting: isCoverImageSubmitting},
  } = useForm({
    resolver: zodResolver(coverImageSchema),
  });

  function updateCoverImage(data) {
    const formData = new FormData();
    formData.append("coverImage", data.coverImage[0]);
    
    coverImageMutate(formData ,{
      onSuccess: () => {
      setCoverImgUpdateSuccess(true);
      setTimeout(() => {
        setCoverImgUpdateSuccess(false);
      }, 3000);
    }
    });
  }

  return (
    <>
      {isLoading && <ProfileSkeleton />}
      {user && (
        <div className="max-w-12xl mx-auto p-4 sm:p-6 flex flex-col gap-8 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 min-h-screen transition-colors duration-200">
          {/* Header */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
            <h1 className="text-2xl font-bold">Profile Settings</h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Manage your personal information and media
            </p>
          </div>

          {/* Personal Info Section */}
          <section className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60 rounded-xl p-6 shadow-sm">
            <h2 className="text-lg font-semibold mb-4 text-slate-900 dark:text-slate-100">
              Personal Information
            </h2>
            <form
              onSubmit={handleInfoSubmit(updateDetails)}
              className="flex flex-col gap-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <label className="w-full sm:w-1/4 font-medium text-slate-700 dark:text-slate-300">
                  Full Name
                </label>
                <Input
                  {...registerInfo("fullName")}
                  type="text"
                  placeholder="Enter Full Name"
                  Value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full sm:w-3/4 bg-slate-50 dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-100 focus:ring-2 focus:ring-blue-500"
                />
              </div>
              {personalInfoErrors.fullName && <p className="text-red-500 text-sm">{personalInfoErrors.fullName.message}</p>}

              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <label className="w-full sm:w-1/4 font-medium text-slate-700 dark:text-slate-300">
                  Email Address
                </label>
                <Input
                  {...registerInfo("email")}
                  type="email"
                  placeholder="Enter Email"
                  Value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full sm:w-3/4 bg-slate-50 dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-100 focus:ring-2 focus:ring-blue-500"
                />
              </div>
              {personalInfoErrors.email && <p className="text-red-500 text-sm">{personalInfoErrors.email.message}</p>}

              <div className="flex justify-end mt-2">
                <Button
                  val={isPersonalInfoSubmitting ? "Saving..." : "Save Details"}
                  extra_class="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-5 py-2 transition-colors font-medium"
                />
              </div>
              {infoUpdateSuccess && <p className="text-green-500 text-sm">Personal Information Updated Successfully</p>}
            </form>
          </section>

          {/* Avatar Section */}
          <section className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60 rounded-xl p-6 shadow-sm">
          <form onSubmit={handleAvatarSubmit(updateAvatar)}>
            <h2 className="text-lg font-semibold mb-4 text-slate-900 dark:text-slate-100">
              Avatar
            </h2>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Avatar size="w-28 h-28" src={user?.avatar} />
              <div className="flex flex-col gap-3 w-full">
                <label className="font-medium text-slate-700 dark:text-slate-300">
                  Upload New Avatar
                </label>
                <input
                  {...registerAvatar('avatar')}
                  type="file"
                  accept="image/*"
                  className="w-full bg-slate-50 dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-100 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 dark:file:bg-slate-800 file:text-blue-600 dark:file:text-blue-400 hover:file:bg-blue-100 dark:hover:file:bg-slate-700 cursor-pointer"
                />
                {avatarErrors.avatar && <p className="text-red-500 text-sm">{avatarErrors.avatar.message}</p>}
                <div className="flex justify-end mt-2">
                  <Button
                    val={isavatarSubmitting ? "Updating..." : "Update avatar"}
                    extra_class="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-5 py-2 transition-colors font-medium"
                  />
                </div>
              </div>
            </div>
            {avatarUpdateSuccess && <p className="text-green-500 text-sm">Avatar Updated Successfully</p>}
            </form>
          </section>

          {/* Cover Image Section */}
          <section className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60 rounded-xl p-6 shadow-sm">
          <form onSubmit={handleCoverImageSubmit(updateCoverImage)}>
            <h2 className="text-lg font-semibold mb-4 text-slate-900 dark:text-slate-100">
              Cover Image
            </h2>
            <div className="flex flex-col gap-4">
              {user?.coverImage ? (
                <img
                  className="bg-slate-100 dark:bg-slate-900 rounded-lg border border-dashed border-slate-300 dark:border-slate-700 flex items-center justify-center text-slate-400 object-cover"
                  src={user?.coverImage}
                />
              ) : (
                <div className="w-full h-32 bg-slate-100 dark:bg-slate-900 rounded-lg border border-dashed border-slate-300 dark:border-slate-700 flex items-center justify-center text-slate-400">
                  Cover Image Preview Area
                </div>
              )}
              <div className="flex flex-col gap-3">
                <label className="font-medium text-slate-700 dark:text-slate-300">
                  Upload Cover Image
                </label>
                <input
                  {...registerCoverImage('coverImage')}
                  type="file"
                  accept="image/*"
                  className="w-full bg-slate-50 dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-100 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 dark:file:bg-slate-800 file:text-blue-600 dark:file:text-blue-400 hover:file:bg-blue-100 dark:hover:file:bg-slate-700 cursor-pointer"
                />
                {coverImageErrors.coverImage && <p className="text-red-500 text-sm">{coverImageErrors.coverImage.message}</p>}
                <div className="flex justify-end mt-2">
                  <Button
                    val={isCoverImageSubmitting ? "Updating..." : "Update Cover Image"}
                    extra_class="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-5 py-2 transition-colors font-medium"
                  />
                </div>
              </div>
              {coverImgUpdateSuccess && <p className="text-green-500 text-sm">Cover Image Updated Successfully</p>}
            </div>
            </form>
          </section>
        </div>
      )}
    </>
  );
};

export default Profile;
