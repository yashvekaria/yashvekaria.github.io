import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.title,
    short_name: SITE.name,
    description: SITE.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0a192f",
    theme_color: "#0a192f",
    icons: [
      {
        src: SITE.icon,
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
