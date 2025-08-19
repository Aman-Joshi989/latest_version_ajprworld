'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Link from 'next/link'
import { ArrowLeft, Calendar, Clock, Eye, Heart, Share2, User } from 'lucide-react'

// This would typically come from a database or CMS
const getBlogPost = (id: string) => {
    const posts = {
        '1': {
            title: 'The Future of Web Development: Next.js 14 Deep Dive',
            content: `
        <p>Next.js 14 represents a significant leap forward in React-based web development, introducing groundbreaking features that reshape how we build modern applications.</p>
        
        <h2>Revolutionary Server Components</h2>
        <p>The new server components architecture allows for unprecedented performance optimizations by rendering components on the server, reducing client-side JavaScript bundles and improving initial page load times.</p>
        
        <h2>Enhanced App Router</h2>
        <p>The stable App Router provides a more intuitive file-system based routing approach, making it easier to organize and scale large applications.</p>
        
        <h2>Performance Improvements</h2>
        <p>With built-in optimizations for images, fonts, and scripts, Next.js 14 delivers exceptional performance out of the box.</p>
        
        <h2>Conclusion</h2>
        <p>Next.js 14 is setting new standards for web development, offering developers powerful tools to create fast, scalable, and maintainable applications.</p>
      `,
            excerpt: 'Explore the latest features in Next.js 14 including Server Components, improved performance, and the new App Router.',
            author: 'Aman Joshi',
            date: '2025-08-15',
            readTime: '8 min read',
            category: 'Web Development',
            tags: ['Next.js', 'React', 'JavaScript', 'Performance']
        }
    }

    return posts[id as keyof typeof posts] || posts['1']
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
    const post = getBlogPost(params.id)

    return (
        <article className="py-24 bg-white dark:bg-slate-900">
            <div className="container mx-auto px-4 max-w-4xl">
                {/* Back Button */}
                <Button variant="ghost" className="mb-8" asChild>
                    <Link href="/blog">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Blog
                    </Link>
                </Button>

                {/* Article Header */}
                <header className="mb-12">
                    <Badge className="mb-4 bg-blue-100 text-blue-800">{post.category}</Badge>
                    <h1 className="text-4xl font-bold mb-6 leading-tight">{post.title}</h1>
                    <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">{post.excerpt}</p>

                    {/* Meta Information */}
                    <div className="flex flex-wrap items-center gap-6 text-slate-500 mb-8">
                        <div className="flex items-center">
                            <User className="w-4 h-4 mr-2" />
                            <span>{post.author}</span>
                        </div>
                        <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-2" />
                            <span>{post.readTime}</span>
                        </div>
                        <div className="flex items-center">
                            <Eye className="w-4 h-4 mr-2" />
                            <span>1.2k views</span>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-4">
                        <Button size="sm" variant="outline">
                            <Heart className="w-4 h-4 mr-2" />
                            Like (98)
                        </Button>
                        <Button size="sm" variant="outline">
                            <Share2 className="w-4 h-4 mr-2" />
                            Share
                        </Button>
                    </div>
                </header>

                {/* Article Content */}
                <div
                    className="prose prose-lg dark:prose-invert max-w-none mb-12"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Tags */}
                <div className="mb-12">
                    <h3 className="text-lg font-semibold mb-4">Tags:</h3>
                    <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag, index) => (
                            <Badge key={index} variant="secondary">#{tag}</Badge>
                        ))}
                    </div>
                </div>

                {/* Related Posts */}
                <Card className="p-8">
                    <CardContent className="p-0">
                        <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                { title: 'React 18 Features Every Developer Should Know', category: 'React' },
                                { title: 'Building Scalable APIs with Node.js', category: 'Backend' }
                            ].map((related, index) => (
                                <Card key={index} className="p-4 hover-lift">
                                    <CardContent className="p-0">
                                        <Badge className="mb-2 text-xs">{related.category}</Badge>
                                        <h4 className="font-semibold hover:text-blue-600 transition-colors">
                                            <Link href="/blog/2">{related.title}</Link>
                                        </h4>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </article>
    )
}
