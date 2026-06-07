import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { blogPosts } from "../blogs/types";

const BlogPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-canvas text-obsidian font-sans selection:bg-accent/30 overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]" 
           style={{ 
             backgroundImage: 'linear-gradient(to right, #111 1px, transparent 1px), linear-gradient(to bottom, #111 1px, transparent 1px)',
             backgroundSize: '40px 40px'
           }} 
      />

      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        
        <main className="flex-grow container mx-auto max-w-[900px] px-6 py-12 md:px-10 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <span className="inline-block bg-accent/10 border border-accent/30 text-accent px-5 py-2 rounded-full text-xs font-bold uppercase tracking-[1.5px] mb-6">
              Blog
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.1] mb-6 text-obsidian tracking-tight">
              Latest <span className="text-accent">Insights</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
              Thought leadership, research, and insights from the BetterSwitch team on the future of payments.
            </p>
          </motion.div>

          <div className="space-y-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-accent/30 transition-all duration-300 group cursor-pointer"
                onClick={() => navigate(`/blog/${post.slug}`)}
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <Calendar size={14} />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-obsidian mb-4 group-hover:text-accent transition-colors">
                  {post.title}
                </h2>

                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all">
                  <span>Read Article</span>
                  <ArrowRight size={18} />
                </div>
              </motion.article>
            ))}
          </div>

          {blogPosts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No blog posts yet. Check back soon!</p>
            </div>
          )}
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default BlogPage;
