"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface Comment {
  id: string
  author: string
  authorImage?: string
  content: string
  date: string
  replies?: Comment[]
}

interface BlogCommentsProps {
  comments: Comment[]
}

export function BlogComments({ comments: initialComments }: BlogCommentsProps) {
  const [comments, setComments] = useState<Comment[]>(initialComments)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [comment, setComment] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      const newComment: Comment = {
        id: Date.now().toString(),
        author: name,
        content: comment,
        date: new Date().toLocaleDateString(),
      }

      setComments([...comments, newComment])
      setName("")
      setEmail("")
      setComment("")
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <div className="mt-12">
      <h3 className="mb-6 text-2xl font-bold">Comments ({comments.length})</h3>

      {comments.length > 0 ? (
        <div className="mb-8 space-y-6">
          {comments.map((comment) => (
            <div key={comment.id} className="rounded-lg border bg-background p-3 sm:p-4">
              <div className="flex items-start gap-3 sm:gap-4">
                <Avatar className="h-8 w-8 sm:h-10 sm:w-10">
                  {comment.authorImage ? (
                    <AvatarImage src={comment.authorImage || "/placeholder.svg"} alt={comment.author} />
                  ) : (
                    <AvatarFallback>{comment.author.charAt(0)}</AvatarFallback>
                  )}
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="mb-2 flex items-center justify-between flex-wrap gap-2">
                    <h4 className="font-medium">{comment.author}</h4>
                    <span className="text-xs sm:text-sm text-muted-foreground">{comment.date}</span>
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground break-words">{comment.content}</p>
                </div>
              </div>

              {comment.replies && comment.replies.length > 0 && (
                <div className="mt-4 space-y-4 pl-8 sm:pl-14">
                  {comment.replies.map((reply) => (
                    <div key={reply.id} className="rounded-lg border bg-muted/30 p-3 sm:p-4">
                      <div className="flex items-start gap-3 sm:gap-4">
                        <Avatar className="h-6 w-6 sm:h-8 sm:w-8">
                          {reply.authorImage ? (
                            <AvatarImage src={reply.authorImage || "/placeholder.svg"} alt={reply.author} />
                          ) : (
                            <AvatarFallback>{reply.author.charAt(0)}</AvatarFallback>
                          )}
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <div className="mb-2 flex items-center justify-between flex-wrap gap-2">
                            <h5 className="font-medium">{reply.author}</h5>
                            <span className="text-xs sm:text-sm text-muted-foreground">{reply.date}</span>
                          </div>
                          <p className="text-sm sm:text-base text-muted-foreground break-words">{reply.content}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="mb-8 text-muted-foreground">Be the first to comment on this article!</p>
      )}

      <div className="rounded-xl border bg-background p-6">
        <h4 className="mb-4 text-xl font-bold">Leave a Comment</h4>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Your name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Your email"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="comment">Comment</Label>
            <Textarea
              id="comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
              placeholder="Write your comment here..."
              rows={4}
            />
          </div>
          <Button type="submit" disabled={isSubmitting} className="bg-primary hover:bg-primary/90">
            {isSubmitting ? "Submitting..." : "Post Comment"}
          </Button>
        </form>
      </div>
    </div>
  )
}
