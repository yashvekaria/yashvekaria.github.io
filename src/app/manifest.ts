import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.title,
    short_name: SITE.name,
    description: SITE.description,
    start_url: "/",
    // "browser" (not "standalone") so browsers don't show an install / add-to-
    // home-screen prompt — this is a regular site, not an installable app.
    display: "browser",
    background_color: "#0a192f",
    theme_color: "#0a192f",
    icons: [
      {
        src: SITE.icon,
        sizes: "166x166",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
