import { groq } from "next-sanity";

export const postFields = groq`
  _id,
  title,
  excerpt,
  imagePost {alt, "image": asset->url},
  "slug": slug.current,
  body,
  `;

export const indexQuery = groq`
*[_type == "post"] {
  ${postFields}
}`;
