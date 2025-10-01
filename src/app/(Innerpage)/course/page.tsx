import BreadCrumbSection from "@/components/breadcrumb/BreadCrumbSection";
import CourseSection from "@/components/course/CourseSection";
import Layout from "@/components/layout/Layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos Filières",
  description: "",
};

export default function Home() {
  return (
    <main className="eduleb-course-main">
      <Layout>
        <BreadCrumbSection headerText="nos Filières" currentPage="Filière" />
        <CourseSection />
      </Layout>
    </main>
  );
}
