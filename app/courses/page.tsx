import CoursesList from "@/components/CoursesList";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "CDL Training Courses | The Trucking Vault",
  description: "Explore our comprehensive CDL training courses, endorsements, dispatch training, and trucking business courses. FMCSA ELDT compliant programs.",
};

export default function CoursesPage() {
  return (
    <main>
      <Header />
      <CoursesList />
      <Footer />
    </main>
  );
}
