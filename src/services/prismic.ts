import * as Prismic from "@prismicio/client";

export const client = Prismic.createClient(
  `${import.meta.env.VITE_PRISMIC_ENVIRONMENTS}`,
  {
    accessToken: `${import.meta.env.VITE_PRISMIC_ACCESS_TOKEN}`,
  }
);
