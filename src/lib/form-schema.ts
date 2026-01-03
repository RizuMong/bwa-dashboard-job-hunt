import { JOBTYPES } from "@/constants";
import { z } from "zod"

export const jobFormSchema = z.object({
    roles: z.string("Job Title is required").min(3, "Job Title must be at least 3 characters"),
    jobType: JOBTYPES,
    salaryFrom: z.string("Salary From is Required"),
    salaryTo: z.string("Salary To is Required"),
    categoryId: z.string("You need to select category"),
    requiredSkills: z.string().array().nonempty("Required Skill must be at least 1 skill"),
    jobDescription: z.string("Job Description is required").min(10, "Too short!"),
    responsibility: z.string("Responsibility is required").min(10, "Too short!"),
    whoYouAre: z.string("Who You Are is required").min(10, "Too short!"),
    niceToHaves: z.string("Nice to Have is required").min(10, "Too short!"),
    benefits: z.object({
        benefit: z.string(),
        description: z.string(),
    }).array().nonempty("Benefits at least 1 benefit")
});

export const overviewFormSchema = z.object({
    image: z.any().refine((item: any) => item?.name, "Image is required"),
    name: z.string("Name is required").min(5, "Too short!"),
    website: z.string("Website is required"),
    location: z.string("Location is required"),
    employee: z.string("Employee is required"),
    industry: z.string("Industry is required"),
    dateFounded: z.date("Date Founded is required"),
    techStack: z.string("Techstack is required").array().nonempty("Tech Stack is required, must be at least 1 tech stack"),
    description: z.string("Description is required")
});

export const socialMediaFormSchema = z.object({
    facebook: z.string("Facebook Link is required"),
    instagram: z.string("Instagram Link is required"),
    linkedin: z.string("LinkedIn Link is required"),
    twitter: z.string("Twitter Link is required"),
    youtube: z.string("YouTube Link is required"),
});

export const teamFormSchema = z.object({
    name: z.string("Name is required"),
    position: z.string("Position is required"),
    facebook: z.string("Facebook Link is required"),
    instagram: z.string("Instagram Link is required"),
    linkedin: z.string("LinkedIn Link is required"),
    twitter: z.string("Twitter Link is required"),
    youtube: z.string("YouTube Link is required"),
});

export const signInFormSchema = z.object({
    email: z.string("Email is required").email("Invalid email address"),
    password: z.string("Password is required").min(6, "Password must be at least 6 characters"),
});