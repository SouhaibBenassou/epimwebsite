import BreadCrumbSection from "@/components/breadcrumb/BreadCrumbSection";
import FaqSection from "@/components/faq/FaqSection";
import Layout from "@/components/layout/Layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eduleb - FAQ",
  description: "Developed By ReactTemplateBuilder",
};

export default function Home() {
  return (
    <main className="eduleb-faq-main">
      <Layout>
        <BreadCrumbSection currentPage="FAQ" />
        <FaqSection />
      </Layout>
    </main>
  );
}
