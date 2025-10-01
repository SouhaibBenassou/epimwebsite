import { blogData } from "@/data/data";
import { BlogType } from "@/types";
import Link from "next/link";
import React from "react";
import DivAnimateX from "@/components/utils/DivAnimateX";

const PopularBlogPosts = () => {
  return (
    <DivAnimateX className="sidebar-post mb-30">
      <div className="sidebar_title">
        <h4>Popular post</h4>
      </div>
      {blogData.slice(0, 5).map((item: BlogType) => (
        <div className="single_popular" key={item.id}>
          <Link href={`/blog/${item.slug}`}>
            <img src={item.img} alt="" />
          </Link>
          <h5>
            <Link href={`/blog/${item.slug}`}>{item.title}</Link>
          </h5>
        </div>
      ))}
    </DivAnimateX>
  );
};

export default PopularBlogPosts;
