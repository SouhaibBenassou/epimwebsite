import BreadCrumbSection from "@/components/breadcrumb/BreadCrumbSection";
import Layout from "@/components/layout/Layout";
import TeamDetailSection from "@/components/team/TeamDetailSection";
import { teamData } from "@/data/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eduleb - Instructor Detail",
  description: "Developed By ReactTemplateBuilder",
};
export default function Home({ params }: { params: { slug: string } }) {
  const teamInfo = teamData.find((item) => item.slug === params.slug);
  return (
    <main className="eduleb-course-detail-main">
      <Layout>
        <BreadCrumbSection currentPage="Instructor Details" />
        {teamInfo && <TeamDetailSection teamInfo={teamInfo} />}
      </Layout>
    </main>
  );
}
