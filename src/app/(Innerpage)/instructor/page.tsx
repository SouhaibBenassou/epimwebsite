import BreadCrumbSection from "@/components/breadcrumb/BreadCrumbSection";
import Layout from "@/components/layout/Layout";
import TeamSection from "@/components/team/TeamSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eduleb - Instructor",
  description: "Developed By ReactTemplateBuilder",
};

export default function Home() {
  return (
    <main className="eduleb-instructor-main">
      <Layout>
        <BreadCrumbSection
          headerText="Nos enseignants"
          currentPage="enseignante"
        />
        <TeamSection />
      </Layout>
    </main>
  );
}
