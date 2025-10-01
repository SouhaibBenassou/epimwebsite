import BlogSection from "@/components/blog/BlogSection";
import BreadCrumbSection from "@/components/breadcrumb/BreadCrumbSection";
import Layout from "@/components/layout/Layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Epim",
  description: "",
};

export default function Home() {
  return (
    <main className="eduleb-blog-main">
      <Layout>
        <BreadCrumbSection currentPage="ÉVÉNEMENT" headerText="Nos ÉVÉNEMENT" />
        <BlogSection endIndex={6} />
      </Layout>
    </main>
  );
}
