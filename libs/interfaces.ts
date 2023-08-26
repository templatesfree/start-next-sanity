import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { PortableTextBlock } from "sanity";

export interface Post {
  _id: string | number;
  title: string;
  excerpt: string;
  imagePost: {
    alt: string;
    image: string;
  };
  slug: string;
  body: string;
}
