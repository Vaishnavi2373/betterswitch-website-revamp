import React, { Suspense, lazy } from "react";
import { useParams, Navigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Breadcrumb } from "../components/Breadcrumb";

interface BlogMeta {
  title: string;
  slug: string;
}

const blogLoaders: Record<string, () => Promise<{ default: React.FC }>> = {
  'agentic-commerce-reckoning': () => import('../blogs/agentic-commerce-reckoning'),
  'cbdc-catalyst': () => import('../blogs/cbdc-catalyst'),
};

const blogMeta: Record<string, BlogMeta> = {
  'agentic-commerce-reckoning': { title: 'Agentic Commerce Reckoning', slug: 'agentic-commerce-reckoning' },
  'cbdc-catalyst': { title: 'CBDC - The Catalyst', slug: 'cbdc-catalyst' },
};

const BlogPostFallback = () => (
  <div className="min-h-screen bg-canvas flex items-center justify-center" aria-label="Loading article">
    <div className="w-10 h-10 border-2 border-accent/30 border-t-accent rounded-full animate-spin" />
  </div>
);

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  if (!slug || !blogLoaders[slug]) {
    return <Navigate to="/blog" replace />;
  }

  const meta = blogMeta[slug];
  const BlogComponent = lazy(blogLoaders[slug]);
  const allBlogs = Object.values(blogMeta);
  const currentIndex = allBlogs.findIndex(b => b.slug === slug);
  const nextBlog = currentIndex < allBlogs.length - 1 ? allBlogs[currentIndex + 1] : null;

  return (
    <div className="relative min-h-screen bg-canvas text-obsidian font-sans">
      <div className="px-6 md:px-12 lg:px-20 py-4 bg-white border-b border-border/60 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Blog', href: '/blog' },
              { label: meta.title, href: `/blog/${slug}` },
            ]}
          />
        </div>
      </div>

      <main id="main-content">
        <Suspense fallback={<BlogPostFallback />}>
          <BlogComponent />
        </Suspense>

        <div className="px-6 md:px-12 lg:px-20 py-12 bg-canvas border-t border-border">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <a
                href="/blog"
                className="focus-ring flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover transition-colors rounded px-2"
              >
                <ArrowLeft size={16} aria-hidden="true" />
                Back to All Posts
              </a>

              {nextBlog && (
                <a
                  href={`/blog/${nextBlog.slug}`}
                  className="focus-ring flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover transition-colors rounded px-2"
                  title={`Read: ${nextBlog.title}`}
                >
                  Next Post: {nextBlog.title}
                  <ArrowLeft size={16} className="rotate-180" aria-hidden="true" />
                </a>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BlogPostPage;
