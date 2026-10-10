import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {zodResolver} from "@hookform/resolvers/zod";

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp"];

export const registerSchema = z.object({
    userName: z
    .string()
    .min(3,"Username must be at least 3 characters")
    .max(20, "Username cannot exceed 20 characters"),

    email: z
    .string()
    .email("Invalid email address"),

    fullName: z
    .string()
    .min(3, "full name cannot be less than 3 characters")
    .max(50, "Full name cannot be more than 50 characters"),

    password: z
    .string()
    .min(8, "password should contain at least 8 characters"),

    avatar: z
    .custom((files) => files instanceof FileList && files.length > 0, "Avatar is required")
    .refine(
      (files) => files?.[0]?.size <= MAX_FILE_SIZE,
      "Max file size is 5MB"
    )
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      "Only .jpg, .png, and .webp formats are supported"
    ),

    coverImage: z
    .custom((files) => !files || files instanceof FileList)
    .refine(
      (files) => !files?.length || files?.[0]?.size <= MAX_FILE_SIZE,
      "Max file size is 5MB"
    )
    .refine(
      (files) => !files?.length || ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      "Only .jpg, .png, and .webp formats are supported"
    )
    .optional(),
});