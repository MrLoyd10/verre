import AboutUs from "@/app/components/about-us";
import CenteredContent from "@/app/components/centered-content";
import Collections from "@/app/components/collections";
import ExtraCollection from "@/app/components/extra-collection";
import ExtraSection from "@/app/components/extra-section";
import Footer from "@/app/components/footer";
import Header from "@/app/components/header";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* Front Section */}
      <div className="relative w-full h-screen">
        {/* Background Image */}
        <Image
          src="/homepage/1/FOLLI.jpg"
          alt="Background"
          fill
          style={{ objectFit: "cover" }}
          quality={100}
          className="-z-10"
        />

        {/* Overlay Content */}
        <div className="relative z-10 flex flex-col justify-between h-full">
          {/* Header */}
          <Header />

          {/* Centered Content */}
          <CenteredContent />
        </div>
      </div>

      {/* About Us Section */}
      <AboutUs />

      {/* Collections */}
      <Collections />

      {/* Extra Section */}
      <ExtraSection />

      {/* Extra Collection */}
      <ExtraCollection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
