import { SanityClient, createClient } from "next-sanity";
import { apiVersion, dataset, projectId, useCdn } from "./sanity.api";
import { indexQuery } from "./sanity.queries";
import { Post } from "./interfaces";

export function getClient(preview?: { token: string }): SanityClient {
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn,
    perspective: "published",
  });
  return client;
}

export const getSanityImageConfig = () => getClient();

export async function getAllPosts(client: SanityClient): Promise<Post[]> {
  return (await client.fetch(indexQuery)) || [];
}
