import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import PageLayout from "../components/layout/PageLayout";
import { blogPosts } from "../blogs/types";

const BlogPage: React.FC = () => {
  return (
    <PageLayout mainClassName="flex-grow container mx-auto max-w-[900px] px-6 py-12 md:px-10 md:py-20">
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(to right, #111 1px, transparent 1px), linear-gradient(to bottom, #111 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="inline-block bg-accent/10 border border-accent/30 text-accent px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
            Blog
          </span>
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6 text-obsidian tracking-tighter">
            Latest <span className="text-accent">Insights</span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
            Thought leadership, research, and insights from the BetterSwitch team on the future of payments.
          </p>
        </motion.div>

        <div className="space-y-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                to={`/blog/${post.slug}`}
                className="focus-ring block bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-accent/30 transition-all duration-300 group"
              >
                <article>
                  <div className="flex items-center gap-4 mb-4 flex-wrap">
                    <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <Calendar size={14} aria-hidden="true" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <Clock size={14} aria-hidden="true" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-semibold text-obsidian mb-4 group-hover:text-accent transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all">
                    <span>Read Article</span>
                    <ArrowRight size={18} aria-hidden="true" />
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </div>

        {blogPosts.length === 0 && (
          <div className="text-center py-20" role="status">
            <p className="text-gray-500 text-lg">No blog posts yet. Check back soon!</p>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default BlogPage;
