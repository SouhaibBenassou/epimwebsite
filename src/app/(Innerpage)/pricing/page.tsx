import BreadCrumbSection from "@/components/breadcrumb/BreadCrumbSection";
import Layout from "@/components/layout/Layout";
import PartnerSection from "@/components/partner/PartnerSection";
import PricingSection from "@/components/pricing/PricingSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eduleb - Pricing",
  description: "Developed By ReactTemplateBuilder",
};

export default function Home() {
  return (
    <main className="eduleb-pricing-main">
      <Layout>
        <BreadCrumbSection headerText="Pricing Plan" currentPage="Pricing" />
        <PricingSection />
        <PartnerSection style="pt-0" />
      </Layout>
    </main>
  );
}
