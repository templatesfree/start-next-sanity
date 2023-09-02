import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { schema } from "./schemas";
import { structure } from "./deskStructure";
import { visionTool } from "@sanity/vision";

export const config = defineConfig({
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  apiVersion: "2023-08-23", // or today's date for latest
  useCdn: process.env.NODE_ENV === "production",
  basePath: "/admin",
  plugins: [
    deskTool({ structure }),
    visionTool({
      defaultApiVersion: "v2023-08-26",
      defaultDataset: "development",
    }),
  ],
  schema: schema,
  title: "Next.js Sanity CMS",
});
