import LandingPageHeader from "@/sections/landing page header/LandingPageHeader";
import LandingPageImage from "@/sections/landing page image/LandingPageImage";
import LandingPageWebFeatures from "@/sections/landing page web features/LandingPageWebFeatures";
import LandingPageWelcomeText from "@/sections/landing page welcome text/LandingPageWelcomeText";
import SubHeaderAlert from "@/sections/sub header alert/SubHeaderAlert";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
<SubHeaderAlert/>
<LandingPageHeader/>
<section className="p-5 flex items-center justify-between w-full">
  <LandingPageWelcomeText/>
  <LandingPageImage/>
</section>
<LandingPageWebFeatures/>
    </main>
  );
}
