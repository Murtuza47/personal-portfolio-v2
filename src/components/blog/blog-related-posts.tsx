import Link from "next/link"
import Image from "next/image"

interface RelatedPost {
  title: string
  slug: string
  coverImage: string
}

interface BlogRelatedPostsProps {
  posts: RelatedPost[]
}

export function BlogRelatedPosts({ posts }: BlogRelatedPostsProps) {
  if (posts.length === 0) return null

  return (
    <div className="mt-12">
      <h3 className="mb-6 text-2xl font-bold">Related Articles</h3>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group overflow-hidden rounded-lg border bg-background transition-all hover:shadow-md"
          >
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={post.coverImage || "/placeholder.svg?height=400&width=600"}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <h4 className="line-clamp-2 font-medium group-hover:text-primary transition-colors">{post.title}</h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
