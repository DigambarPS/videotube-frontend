import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {zodResolver} from "@hookform/resolvers/zod";

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp"];

export const personalInformationSchema = z.object({
    email: z
    .string()
    .email("Invalid email address")
    .optional(),

    fullName: z
    .string()
    .min(3, "Full name cannot be less than 3 characters")
    .max(50, "Full name cannot be more than 50 characters")
    .optional(),

    about: z
    .string()
    .max(500, "About cannot be more than 500 characters")
    .optional()
});

export const avatarSchema = z.object({
    avatar: z
    .custom((files) => files instanceof FileList && files.length > 0, "Please Select a file")
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      "Max file size is 5MB"
    )
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      "Only .jpg, .png, and .webp formats are supported"
    )
});

export const coverImageSchema = z.object({
    coverImage: z
    .custom((files) => !files || files instanceof FileList && files.length > 0, "Please Select a file")
    .refine(
      (files) => !files?.length || files?.[0]?.size <= MAX_FILE_SIZE,
      "Max file size is 5MB"
    )
    .refine(
      (files) => !files?.length || ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      "Only .jpg, .png, and .webp formats are supported"
    )
});