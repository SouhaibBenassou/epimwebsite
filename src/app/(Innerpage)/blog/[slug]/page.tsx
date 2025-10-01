import BlogDetailSection from "@/components/blog/BlogDetailSection";
import BreadCrumbSection from "@/components/breadcrumb/BreadCrumbSection";
import Layout from "@/components/layout/Layout";
import { blogData } from "@/data/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eduleb - Blog Details",
  description: "Developed By ReactTemplateBuilder",
};

export default function Home({ params }: { params: { slug: string } }) {
  const blogInfo = blogData.find((item) => item.slug === params.slug);
  return (
    <main className="eduleb-blog-details-main">
      <Layout>
        <BreadCrumbSection currentPage="Blog Details" />
        {blogInfo && <BlogDetailSection blogInfo={blogInfo} />}
      </Layout>
    </main>
  );
}
