import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const MAX_IMAGE_SIZE = 5 * 1024 * 1024; // 5MB
const MAX_VIDEO_SIZE = 100 * 1024 * 1024; // 100MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp"];
const ACCEPTED_VIDEO_TYPES = ["video/mp4", "video/webm", "video/ogg"];

export const uploadVideoSchema = z.object({
  title: z
    .string()
    .min(3, "Title must be at least 3 characters")
    .max(100, "Title cannot exceed 100 characters"),

  description: z
    .string()
    .max(500, "Description cannot exceed 500 characters")
    .optional(),

  thumbnail: z
    .custom((files) => files instanceof FileList && files.length > 0, "Thumbnail is required")
    .refine(
      (files) => files?.[0]?.size <= MAX_IMAGE_SIZE,
      "Max thumbnail size is 5MB"
    )
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      "Only .jpg, .png, and .webp formats are supported for the thumbnail"
    ),

  video: z
    .custom((files) => files instanceof FileList && files.length > 0, "Video file is required")
    .refine(
      (files) => files?.[0]?.size <= MAX_VIDEO_SIZE,
      "Max video size is 100MB"
    )
    .refine(
      (files) => ACCEPTED_VIDEO_TYPES.includes(files?.[0]?.type),
      "Only video formats (like MP4) are supported"
    ),
});