"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BlogAuthor } from "@/components/blog/blog-author"
import { BlogShare } from "@/components/blog/blog-share"
import { BlogRelatedPosts } from "@/components/blog/blog-related-posts"
import { BlogComments } from "@/components/blog/blog-comments"
import { ThemeToggle } from "@/components/theme-toggle"

// Mock blog post data
const blogPosts = [
  {
    slug: "essential-ui-ux-design-principles",
    title: "10 Essential UI/UX Design Principles Every Designer Should Know",
    coverImage: "/placeholder.svg?height=800&width=1600",
    date: "May 15, 2023",
    readingTime: "5 min read",
    author: {
      name: "Alex Smith",
      avatar: "/placeholder.svg?height=100&width=100",
      bio: "UI/UX Designer & Developer with over 5 years of experience creating beautiful digital experiences.",
      social: {
        twitter: "https://twitter.com",
        linkedin: "https://linkedin.com",
        github: "https://github.com",
      },
    },
    category: "Design",
    tags: ["UI/UX", "Design Principles", "Web Design"],
    content: `
      <p>User interface (UI) and user experience (UX) design are critical components of any successful digital product. Whether you're designing a website, mobile app, or any other digital interface, understanding and applying key design principles can significantly improve the user experience and overall effectiveness of your product.</p>
      
      <h2>1. Clarity is Key</h2>
      <p>Your design should communicate its purpose clearly. Users should understand what they're looking at and how to interact with it without having to think too hard. Use clear language, intuitive icons, and logical layout to guide users through your interface.</p>
      
      <h2>2. Maintain Consistency</h2>
      <p>Consistency in design creates familiarity and reduces the learning curve. Use consistent colors, typography, button styles, and interaction patterns throughout your interface. This helps users predict how elements will behave and makes your product feel cohesive.</p>
      
      <h2>3. Provide Feedback</h2>
      <p>Users should always know what's happening in your interface. Provide visual feedback for all interactions, such as button state changes, loading indicators, and confirmation messages. This reassures users that their actions have been recognized.</p>
      
      <h2>4. Respect the Hierarchy</h2>
      <p>Visual hierarchy guides users through your content in order of importance. Use size, color, contrast, and spacing to establish a clear hierarchy that helps users understand what to focus on first.</p>
      
      <h2>5. Make It Accessible</h2>
      <p>Design for all users, including those with disabilities. Ensure sufficient color contrast, provide text alternatives for images, make your interface keyboard-navigable, and follow accessibility guidelines like WCAG.</p>
      
      <h2>6. Simplify When Possible</h2>
      <p>Remove unnecessary elements and streamline your design. Every component should serve a purpose. As Antoine de Saint-Exupéry said, "Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away."</p>
      
      <h2>7. Design for Error Prevention</h2>
      <p>Anticipate potential user errors and design to prevent them. Use constraints, confirmation dialogs for irreversible actions, and clear error messages when something goes wrong.</p>
      
      <h2>8. Prioritize Usability</h2>
      <p>A beautiful design that's difficult to use isn't effective. Always prioritize usability over aesthetics. Test your designs with real users to identify and fix usability issues.</p>
      
      <h2>9. Create Visual Balance</h2>
      <p>Balance in design creates harmony and stability. Distribute visual elements evenly throughout your interface, considering both symmetrical and asymmetrical balance depending on your design goals.</p>
      
      <h2>10. Design for Context</h2>
      <p>Consider the context in which your product will be used. Think about different devices, environments, and user scenarios. A design that works well in one context might fail in another.</p>
      
      <h2>Conclusion</h2>
      <p>These principles form the foundation of effective UI/UX design. By applying them thoughtfully to your projects, you'll create more intuitive, accessible, and enjoyable user experiences. Remember that good design is often invisible—it simply makes things work well without drawing attention to itself.</p>
    `,
    comments: [
      {
        id: "1",
        author: "Sarah Johnson",
        authorImage: "/placeholder.svg?height=50&width=50",
        content:
          "This is such a helpful article! I'm just starting out in UI/UX design and these principles give me a solid foundation to work from. Thanks for sharing!",
        date: "May 16, 2023",
      },
      {
        id: "2",
        author: "Michael Chen",
        content:
          "I've been designing for years and still find myself coming back to these core principles. Great reminder of what matters most in design.",
        date: "May 17, 2023",
        replies: [
          {
            id: "2-1",
            author: "Alex Smith",
            authorImage: "/placeholder.svg?height=50&width=50",
            content: "Thanks Michael! Glad you found it useful even as an experienced designer.",
            date: "May 17, 2023",
          },
        ],
      },
    ],
    relatedPosts: [
      {
        title: "How to Build a Responsive Website Using Tailwind CSS",
        slug: "build-responsive-website-tailwind",
        coverImage: "/placeholder.svg?height=400&width=600",
      },
      {
        title: "The Psychology of Color in Web Design",
        slug: "psychology-color-web-design",
        coverImage: "/placeholder.svg?height=400&width=600",
      },
      {
        title: "Designing for Accessibility: Best Practices and Guidelines",
        slug: "designing-for-accessibility",
        coverImage: "/placeholder.svg?height=400&width=600",
      },
    ],
  },
  // Add more blog posts as needed
]

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug)

  // If post not found, return 404
  if (!post) {
    notFound()
  }

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Blog Post Content */}
      <main className="pt-32 pb-20 px-4 sm:px-6">
        <article className="container">
          {/* Back to blog */}
          <Link
            href="/blogs"
            className="mb-8 inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>

          {/* Post Header */}
          <div className="mx-auto max-w-4xl">
            <Badge className="mb-4 px-3 py-1 text-sm rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
              {post.category}
            </Badge>
            <h1 className="mb-6 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">{post.title}</h1>

            <div className="mb-8 flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-3 sm:gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{post.readingTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="relative h-6 w-6 overflow-hidden rounded-full">
                  <Image
                    src={post.author.avatar || "/placeholder.svg?height=50&width=50"}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <span>{post.author.name}</span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="mb-8 -mx-4 sm:mx-0 sm:rounded-xl overflow-hidden">
              <Image
                src={post.coverImage || "/placeholder.svg"}
                alt={post.title}
                width={1600}
                height={800}
                className="w-full h-[200px] sm:h-[400px] md:h-[500px] object-cover"
                priority
              />
            </div>

            {/* Tags */}
            <div className="mb-8 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="rounded-full text-sm">
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Post Content */}
            <div
              className="prose prose-sm sm:prose-base lg:prose-lg max-w-none dark:prose-invert prose-headings:font-bold prose-headings:tracking-tight prose-p:text-muted-foreground prose-a:text-primary prose-img:rounded-xl prose-img:-mx-4 sm:prose-img:mx-0"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Share */}
            <BlogShare
              title={post.title}
              url={typeof window !== "undefined" ? window.location.href : ""}
              className="mt-8"
            />

            {/* Author */}
            <div className="mt-12">
              <BlogAuthor
                name={post.author.name}
                avatar={post.author.avatar}
                bio={post.author.bio}
                social={post.author.social}
              />
            </div>

            {/* Related Posts */}
            <BlogRelatedPosts posts={post.relatedPosts} />

            {/* Comments */}
            <BlogComments comments={post.comments} />
          </div>
        </article>
      </main>
    </div>
  )
}
