import sanityClient from "@sanity/client";
import imageBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "9d21coch",
  apiVersion: "2021-06-07",
  dataset: "production",
  // token: process.env.SANITY_ATH_TOKEN,
  useCdn: true, // `false` if you want to ensure fresh data
  // ignoreBrowserTokenWarning: true,
});

const build = imageBuilder(client);

export const urlFor = (source) => build.image(source);
