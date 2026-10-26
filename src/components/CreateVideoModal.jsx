import React from "react";
import Modal from "./ui/Modal";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { uploadVideoSchema } from "../schemas/videoSchemas";
import { useUploadVideo } from "../hooks/useVideo";

const CreateVideoModal = ({ isClose, setIsClose }) => {
  // 1. Initialize react-hook-form with Zod resolver
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(uploadVideoSchema),
  });
  
  const { mutate: uploadVideo, isPending, error } = useUploadVideo();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    
    // 2. React Hook Form wraps file inputs in a FileList array
    if (data.thumbnail?.[0]) {
      formData.append("thumbnail", data.thumbnail[0]);
    }
    if (data.video?.[0]) {
      formData.append("videoFile", data.video[0]);
    }

    uploadVideo(formData, {
      onSuccess: () => {
        setIsClose(true); 
      },
    });
  };

  return (
    <Modal
      isClose={isClose}
      heading="Upload Video"
      position="h-auto w-[500px] rounded-2xl p-6"
      setIsClose={isPending ? () => {} : setIsClose}
      closeBtnVisible={!isPending}
    >
      {/* 3. FIXED: Pass handleSubmit(onSubmit) instead of just handleSubmit */}
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 mt-4">
        
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 text-sm p-3 rounded-lg">
            {error.message || "Failed to upload video. Please try again."}
          </div>
        )}

        {isPending && (
          <div className="bg-blue-50 border border-blue-200 text-blue-700 text-sm p-3 rounded-lg flex items-center gap-2">
            <svg className="animate-spin h-4 w-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Uploading video... Please do not close this window.
          </div>
        )}
        
        {/* Title Field */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-semibold text-gray-900 dark:text-white">Title</label>
          <input
            type="text"
            placeholder="Enter video title"
            disabled={isPending}
            {...register("title")} // 4. Connected to react-hook-form
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 dark:text-white focus:ring-blue-500 disabled:bg-gray-100"
          />
          {errors.title && <span className="text-xs text-red-500">{errors.title.message}</span>}
        </div>

        {/* Description Field */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-semibold text-gray-700 dark:text-white">Description</label>
          <textarea
            placeholder="Tell viewers about your video"
            rows="3"
            disabled={isPending}
            {...register("description")} // 4. Connected to react-hook-form
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 dark:text-white focus:ring-blue-500 disabled:bg-gray-100"
          />
          {errors.description && <span className="text-xs text-red-500">{errors.description.message}</span>}
        </div>

        {/* Video File Field */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-semibold text-gray-700 dark:text-white">Video File</label>
          <input
            type="file"
            accept="video/*"
            disabled={isPending}
            {...register("video")} // 4. Connected to react-hook-form
            className="text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 disabled:opacity-50"
          />
          {errors.video && <span className="text-xs text-red-500">{errors.video.message}</span>}
        </div>

        {/* Thumbnail Field */}
        <div className="flex flex-col gap-1">
          <label className="text-sm font-semibold text-gray-700 dark:text-white">Thumbnail</label>
          <input
            type="file"
            accept="image/*"
            disabled={isPending}
            {...register("thumbnail")} // 4. Connected to react-hook-form
            className="text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 disabled:opacity-50"
          />
          {errors.thumbnail && <span className="text-xs text-red-500">{errors.thumbnail.message}</span>}
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="mt-2 bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition min-w-20 disabled:opacity-50"
        >
          {isPending ? "Uploading..." : "Upload"}
        </button>
      </form>
    </Modal>
  );
};

export default CreateVideoModal;