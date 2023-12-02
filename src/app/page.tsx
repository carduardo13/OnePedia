import { prisma } from "@/lib/db/prisma";
import BannerSlider from "./components/banner-slider/banner-slider";

export default async function Home() {
  const pirates = await prisma.pirate.findMany({
    orderBy: {
      id: "asc",
    },
  });

  return (
    <main>
      <BannerSlider bannerData={pirates} />
    </main>
  );
}
