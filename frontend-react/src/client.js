import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'yiuk9hi',
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token: process.env.SANITY_STUDIO_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

