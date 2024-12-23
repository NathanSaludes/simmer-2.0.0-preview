import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
   return {
      name: "Simmer 2.0",
      short_name: "Simmer",
      description: "Simmer Website",
      start_url: "/",
      lang: "en",
      icons: [
         {
            src: "/favicon.ico",
            sizes: "any",
            type: "image/x-icon"
         }
      ]
   };
}
