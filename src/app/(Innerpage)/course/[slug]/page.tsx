import BreadCrumbSection from "@/components/breadcrumb/BreadCrumbSection";
import CourseDetailSection from "@/components/course/CourseDetailSection";
import Layout from "@/components/layout/Layout";
import { courseData } from "@/data/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eduleb - Course Detail",
  description: "Developed By ReactTemplateBuilder",
};

export default function Home({ params }: { params: { slug: string } }) {
  const courseInfo = courseData.find((item) => item.slug === params.slug);
  return (
    <main className="eduleb-course-detail-main">
      <Layout>
        <BreadCrumbSection currentPage="Course Details" />
        {courseInfo && <CourseDetailSection courseInfo={courseInfo} />}
      </Layout>
    </main>
  );
}
