import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutContent from "@/components/AboutContent";

export const metadata = {
  title: "About Us | The Trucking Vault - Your CDL Training Partner",
  description: "Learn about The Trucking Vault's mission, meet our experienced team of CDL instructors, and discover why we're the best choice for your trucking career.",
};

export default function AboutPage() {
  return (
    <main>
      <Header />
      <AboutContent />
      <Footer />
    </main>
  );
}
