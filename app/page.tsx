import BestSellerCategory from "@/sections/best seller category/BestSellerCategory";
import FeaturedProducts from "@/sections/featured products/FeaturedProducts";
import FeaturedSellers from "@/sections/featured sellers/FeaturedSellers";
import LandingPageHeader from "@/sections/landing page header/LandingPageHeader";
import LandingPageImage from "@/sections/landing page image/LandingPageImage";
import LandingPageWebFeatures from "@/sections/landing page web features/LandingPageWebFeatures";
import LandingPageWelcomeText from "@/sections/landing page welcome text/LandingPageWelcomeText";
import PopularBrands from "@/sections/popular brands/PopularBrands";
import SubHeaderAlert from "@/sections/sub header alert/SubHeaderAlert";
import Testimonial from "@/sections/testimonial/Testimonial";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">

<section className="p-5 flex items-center justify-between w-full">
  <LandingPageWelcomeText/>
  <LandingPageImage/>
</section>
<LandingPageWebFeatures/>
<BestSellerCategory/>
<FeaturedProducts/>
<FeaturedSellers/>
<Testimonial/>
<PopularBrands/>
    </main>
  );
}
