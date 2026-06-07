import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { AgenticCommerceReckoning } from "../blogs/agentic-commerce-reckoning";
import CBDCBlog from "../blogs/cbdc-catalyst";

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  const blogComponents: Record<string, React.FC> = {
    'agentic-commerce-reckoning': AgenticCommerceReckoning,
    'cbdc-catalyst': CBDCBlog,
  };

  const BlogComponent = slug ? blogComponents[slug] : null;

  if (!BlogComponent) {
    return <Navigate to="/blog" replace />;
  }

  return <BlogComponent />;
};

export default BlogPostPage;
