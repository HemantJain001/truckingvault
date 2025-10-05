import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import Dispatch from "@/components/Dispatch";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Classes from "@/components/Classes";
import Founder from "@/components/Founder";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Programs />
      <Classes />
      <Dispatch />
      <Founder />
      <Testimonials />
      <Footer />
    </main>
  );
}
