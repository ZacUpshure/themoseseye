import { createClient } from "@sanity/client";

import imageUrlBuilder from '@sanity/image-url';

const client = createClient({
    projectId: "0j7okveo",
    dataset: 'production',
    apiVersion: '2023-07-20',
    useCdn: true,
    token: process.env.REACT_APP_PUBLIC_SANITY_TOKEN
});

export default client;

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);