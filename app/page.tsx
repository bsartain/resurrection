import Intro from "@/components/HomePage/Intro";
import OurStory from "@/components/HomePage/OurStory";
import MenuSlider from "@/components/HomePage/MenuSlider";
import Testimonials from "@/components/HomePage/Testimonials";
import Gallery from "@/components/HomePage/Gallery";
import HighlightSections from "@/components/HomePage/HighlightSections";

export default function Home() {
  return (
    <>
      <Intro />
      <HighlightSections />
      <OurStory />
      <MenuSlider />
      <Testimonials />
      <Gallery />
    </>
  );
}
