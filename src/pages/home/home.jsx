"use client";

import CreativeStudio from "@/components/creative-studio/CreativeStudio";
import GallerySlider from "@/components/gallery/GallerySlyder";
import HeroBanner from "@/components/hero-banner/Hero-banner";
import LatestProjectsHome from "@/components/latest-projects/LatestProjectsHome";
import TalkSection from "@/components/talk-section/TalkSection";
import VideoSection from "@/components/video-section/VideoSection";
import WhatWeDo from "@/components/WhatWeDo/WhatWeDo";

const HomeMain = () => {
  return (

      <main className="pt-20">
        {/* hero area start */}
        <HeroBanner />
        {/* hero area end */}

        {/* gallery area start */}
        {/* <GallerySlider /> */}
        {/* gallery area end */}

        {/* what we do section start */}
        <WhatWeDo />
        {/* what we do section end */}

        {/* latest projects section start */}
        <LatestProjectsHome />
        {/* latest projects section end */}

        {/* video section start */}
        <VideoSection />
        {/* video section end */}

        {/* creative studio section start */}
        <CreativeStudio />
        {/* creative studio section end */}

        {/* talk section start */}
        <TalkSection />
        {/* talk section end */}
      </main>

  );
};

export default HomeMain;