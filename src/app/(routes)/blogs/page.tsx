"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BlogPostCard } from "@/components/blog/blog-post-card"
import { BlogCategories } from "@/components/blog/blog-categories"
import { BlogSearch } from "@/components/blog/blog-search"
import { BlogPagination } from "@/components/blog/blog-pagination"
import { HomeAnimation } from "@/components/animation/home-animation"
import { AnimatedBadge } from "@/components/animation/animated-badge"
import { CTASection } from "@/containers/home/cta-section"

// Mock data for blog posts
const blogPosts = [
  {
    id: "1",
    title: "10 Essential UI/UX Design Principles Every Designer Should Know",
    slug: "essential-ui-ux-design-principles",
    excerpt:
      "Learn the fundamental principles that can elevate your design work and create better user experiences for your clients.",
    coverImage: "/placeholder.svg?height=600&width=800",
    date: "May 15, 2023",
    readingTime: "5 min read",
    author: {
      name: "Alex Smith",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    category: "Design",
    featured: true,
  },
  {
    id: "2",
    title: "How to Build a Responsive Website Using Tailwind CSS",
    slug: "build-responsive-website-tailwind",
    excerpt:
      "A step-by-step guide to creating beautiful, responsive websites using the popular utility-first CSS framework.",
    coverImage: "/placeholder.svg?height=600&width=800",
    date: "April 28, 2023",
    readingTime: "8 min read",
    author: {
      name: "Alex Smith",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    category: "Development",
  },
  {
    id: "3",
    title: "The Future of Web Development: Trends to Watch in 2023",
    slug: "future-web-development-trends",
    excerpt: "Explore the emerging technologies and methodologies that are shaping the future of web development.",
    coverImage: "/placeholder.svg?height=600&width=800",
    date: "April 10, 2023",
    readingTime: "6 min read",
    author: {
      name: "Alex Smith",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    category: "Technology",
  },
  {
    id: "4",
    title: "Designing for Accessibility: Best Practices and Guidelines",
    slug: "designing-for-accessibility",
    excerpt: "Learn how to create inclusive designs that work for everyone, including users with disabilities.",
    coverImage: "/placeholder.svg?height=600&width=800",
    date: "March 22, 2023",
    readingTime: "7 min read",
    author: {
      name: "Alex Smith",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    category: "Design",
  },
  {
    id: "5",
    title: "Optimizing Website Performance: Speed and User Experience",
    slug: "optimizing-website-performance",
    excerpt:
      "Discover techniques to improve your website's loading speed and overall performance for better user experience.",
    coverImage: "/placeholder.svg?height=600&width=800",
    date: "March 15, 2023",
    readingTime: "9 min read",
    author: {
      name: "Alex Smith",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    category: "Development",
  },
  {
    id: "6",
    title: "The Psychology of Color in Web Design",
    slug: "psychology-color-web-design",
    excerpt: "Understanding how color choices affect user perception and behavior on your website.",
    coverImage: "/placeholder.svg?height=600&width=800",
    date: "February 28, 2023",
    readingTime: "6 min read",
    author: {
      name: "Alex Smith",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    category: "Design",
  },
  {
    id: "7",
    title: "Getting Started with React: A Beginner's Guide",
    slug: "getting-started-with-react",
    excerpt: "A comprehensive introduction to React.js for beginners who want to build modern web applications.",
    coverImage: "/placeholder.svg?height=600&width=800",
    date: "February 15, 2023",
    readingTime: "10 min read",
    author: {
      name: "Alex Smith",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    category: "Development",
  },
  {
    id: "8",
    title: "The Importance of User Research in Product Design",
    slug: "importance-user-research-product-design",
    excerpt: "Why understanding your users is crucial for creating successful products that meet their needs.",
    coverImage: "/placeholder.svg?height=600&width=800",
    date: "January 30, 2023",
    readingTime: "7 min read",
    author: {
      name: "Alex Smith",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    category: "Design",
  },
  {
    id: "9",
    title: "Building a Personal Brand as a Developer",
    slug: "building-personal-brand-developer",
    excerpt: "Tips and strategies for developers to establish a strong personal brand in the tech industry.",
    coverImage: "/placeholder.svg?height=600&width=800",
    date: "January 15, 2023",
    readingTime: "8 min read",
    author: {
      name: "Alex Smith",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    category: "Career",
  },
]

// Extract unique categories
const categories = Array.from(new Set(blogPosts.map((post) => post.category)))

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 6

  // Filter posts based on category and search query
  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory ? post.category === selectedCategory : true
    const matchesSearch = searchQuery
      ? post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      : true
    return matchesCategory && matchesSearch
  })

  // Get featured post
  const featuredPost = filteredPosts.find((post) => post.featured)

  // Get regular posts (excluding featured post if it exists and is in the filtered results)
  const regularPosts = featuredPost ? filteredPosts.filter((post) => post.id !== featuredPost.id) : filteredPosts

  // Pagination
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = regularPosts.slice(indexOfFirstPost, indexOfLastPost)
  const totalPages = Math.ceil(regularPosts.length / postsPerPage)

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[calc(100vh-65px)] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <HomeAnimation />
        </div>
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <AnimatedBadge
              prefix="My"
              services={["Blog", "Posts", "Writings", "Articles", "Stories"]}
              className="mb-6 inline-flex"
            />
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Insights & Perspectives</h1>
            <p className="mb-8 text-xl text-muted-foreground">
              Thoughts, ideas, and insights on design, development, and technology.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="grid gap-12 md:grid-cols-3">
            {/* Sidebar */}
            <div className="space-y-8">
              <BlogSearch onSearch={setSearchQuery} />
              <div>
                <h3 className="mb-4 text-lg font-medium">Categories</h3>
                <BlogCategories
                  categories={categories}
                  selectedCategory={selectedCategory}
                  onSelectCategory={setSelectedCategory}
                />
              </div>
              <div>
                <h3 className="mb-4 text-lg font-medium">Recent Posts</h3>
                <div className="space-y-4">
                  {blogPosts.slice(0, 3).map((post) => (
                    <Link key={post.id} href={`/blog/${post.slug}`} className="flex items-center gap-3 group">
                      <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
                        <img
                          src={post.coverImage || "/placeholder.svg"}
                          alt={post.title}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="line-clamp-2 font-medium group-hover:text-primary transition-colors">
                          {post.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">{post.date}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="mb-4 text-lg font-medium">Subscribe</h3>
                <div className="rounded-xl border bg-background p-4">
                  <p className="mb-4 text-sm text-muted-foreground">
                    Subscribe to my newsletter to get the latest articles and insights delivered to your inbox.
                  </p>
                  <form className="space-y-2">
                    <input
                      type="email"
                      placeholder="Your email"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                    <Button className="w-full bg-primary hover:bg-primary/90">Subscribe</Button>
                  </form>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="md:col-span-2">
              {/* Featured Post */}
              {featuredPost && (
                <div className="mb-12">
                  <h2 className="mb-6 text-2xl font-bold">Featured Article</h2>
                  <BlogPostCard {...featuredPost} />
                </div>
              )}

              {/* Regular Posts */}
              <div>
                <h2 className="mb-6 text-2xl font-bold">Latest Articles</h2>
                {currentPosts.length > 0 ? (
                  <div className="grid gap-6 sm:grid-cols-2">
                    {currentPosts.map((post) => (
                      <BlogPostCard key={post.id} {...post} />
                    ))}
                  </div>
                ) : (
                  <div className="rounded-xl border bg-background p-12 text-center">
                    <h3 className="mb-2 text-xl font-medium">No articles found</h3>
                    <p className="mb-6 text-muted-foreground">
                      We couldn't find any articles matching your search criteria.
                    </p>
                    <Button
                      onClick={() => {
                        setSelectedCategory(null)
                        setSearchQuery("")
                      }}
                    >
                      Clear filters
                    </Button>
                  </div>
                )}

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="mt-12">
                    <BlogPagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
