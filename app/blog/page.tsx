'use client'

import { useState, useEffect, useRef } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import Image from 'next/image'
import {
    BookOpen, Calendar, Clock, Eye, Heart, MessageCircle, ArrowRight,
    Search, Filter, User, TrendingUp, Star
} from 'lucide-react'

const blogPosts = [
    {
        id: '1',
        title: 'The Future of Web Development: Next.js 14 and Beyond',
        excerpt: 'Explore the latest features in Next.js 14 including Server Components, improved performance, and the new App Router that\'s revolutionizing React development.',
        content: 'Next.js 14 introduces groundbreaking features that are reshaping how we build web applications...',
        author: 'Aman Joshi',
        authorRole: 'Co-Founder & CEO',
        authorAvatar: 'AJ',
        publishDate: '2025-08-15',
        readTime: '8 min read',
        category: 'Web Development',
        tags: ['Next.js', 'React', 'JavaScript', 'Performance'],
        image: '/api/placeholder/600/300',
        gradient: 'from-blue-500 to-cyan-500',
        stats: { views: '12.5K', likes: '340', comments: '89' },
        featured: true
    },
    {
        id: '2',
        title: 'AI Integration in Modern Web Apps: A Practical Guide',
        excerpt: 'Learn how to seamlessly integrate AI capabilities into your web applications using OpenAI, TensorFlow.js, and other cutting-edge tools.',
        content: 'Artificial Intelligence is no longer a futuristic concept but a present reality that\'s transforming web development...',
        author: 'Jatin Vaishnav',
        authorRole: 'SDE-3',
        authorAvatar: 'JV',
        publishDate: '2025-08-10',
        readTime: '12 min read',
        category: 'Artificial Intelligence',
        tags: ['AI', 'Machine Learning', 'OpenAI', 'TensorFlow'],
        image: '/api/placeholder/600/300',
        gradient: 'from-purple-500 to-pink-500',
        stats: { views: '18.2K', likes: '567', comments: '123' },
        featured: true
    },
    {
        id: '3',
        title: 'GST Compliance Made Simple: A Business Owner\'s Guide',
        excerpt: 'Navigate the complexities of GST filing, returns, and compliance with our comprehensive guide for business owners.',
        content: 'GST compliance can be overwhelming for business owners. Here\'s how to simplify the process...',
        author: ' Triveni Chandra Nainwal',
        authorRole: 'Account & Finance Manager',
        authorAvatar: 'TCN',
        publishDate: '2025-08-08',
        readTime: '10 min read',
        category: 'Finance',
        tags: ['GST', 'Tax Compliance', 'Business', 'Finance'],
        image: '/api/placeholder/600/300',
        gradient: 'from-green-500 to-emerald-500',
        stats: { views: '9.8K', likes: '245', comments: '67' },
        featured: false
    },
    {
        id: '4',
        title: 'Building Scalable Business Operations',
        excerpt: 'Essential strategies for scaling your business operations efficiently while maintaining quality and compliance.',
        content: 'Scaling business operations requires careful planning and the right systems...',
        author: 'Priyank Rakholia',
        authorRole: 'Business Development Manager',
        authorAvatar: 'PR',
        publishDate: '2025-08-05',
        readTime: '6 min read',
        category: 'Business',
        tags: ['Business Growth', 'Operations', 'Strategy', 'Management'],
        image: '/api/placeholder/600/300',
        gradient: 'from-orange-500 to-red-500',
        stats: { views: '15.3K', likes: '432', comments: '98' },
        featured: false
    },
    {
        id: '5',
        title: 'Legal Documentation Best Practices for Startups',
        excerpt: 'Essential legal documents every startup needs and best practices for maintaining proper documentation.',
        content: 'Proper legal documentation is crucial for startup success. Here\'s what you need to know...',
        author: 'Aman Joshi',
        authorRole: 'Co-Founder & CEO',
        authorAvatar: 'AJ',
        publishDate: '2025-08-01',
        readTime: '9 min read',
        category: 'Legal',
        tags: ['Legal', 'Startups', 'Documentation', 'Compliance'],
        image: '/api/placeholder/600/300',
        gradient: 'from-indigo-500 to-purple-500',
        stats: { views: '11.7K', likes: '298', comments: '76' },
        featured: false
    },
    {
        id: '6',
        title: 'Digital Marketing Trends for 2025',
        excerpt: 'Stay ahead of the curve with the latest digital marketing trends and strategies that will dominate 2025.',
        content: 'Digital marketing is constantly evolving. Here are the trends to watch in 2025...',
        author: 'Priyank Rakholia',
        authorRole: 'Business Development Manager',
        authorAvatar: 'PR',
        publishDate: '2025-07-28',
        readTime: '11 min read',
        category: 'Marketing',
        tags: ['Digital Marketing', 'SEO', 'Social Media', 'Trends'],
        image: '/api/placeholder/600/300',
        gradient: 'from-pink-500 to-rose-500',
        stats: { views: '8.9K', likes: '187', comments: '54' },
        featured: false
    }
]

const categories = [
    { name: 'All', count: blogPosts.length, icon: BookOpen },
    { name: 'Web Development', count: 1, icon: BookOpen },
    { name: 'Artificial Intelligence', count: 1, icon: BookOpen },
    { name: 'Finance', count: 1, icon: BookOpen },
    { name: 'Business', count: 1, icon: BookOpen },
    { name: 'Legal', count: 1, icon: BookOpen },
    { name: 'Marketing', count: 1, icon: BookOpen }
]

export default function BlogPage() {
    const [selectedCategory, setSelectedCategory] = useState('All')
    const [searchTerm, setSearchTerm] = useState('')
    const [isVisible, setIsVisible] = useState(false)
    const [featuredPost, setFeaturedPost] = useState(0)
    const sectionRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.1 }
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [])

    // Auto-rotate featured posts
    useEffect(() => {
        if (isVisible) {
            const featuredPosts = blogPosts.filter(post => post.featured)
            const interval = setInterval(() => {
                setFeaturedPost((prev) => (prev + 1) % featuredPosts.length)
            }, 6000)
            return () => clearInterval(interval)
        }
    }, [isVisible])

    const filteredPosts = blogPosts.filter(post => {
        const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
        const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
        return matchesCategory && matchesSearch
    })

    const featuredPosts = blogPosts.filter(post => post.featured)
    const currentFeaturedPost = featuredPosts[featuredPost] || featuredPosts[0]

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50 dark:from-slate-950 dark:to-purple-950">
            {/* Hero Section */}
            <section className="py-24 relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full blur-3xl animate-float"></div>
                    <div className="absolute bottom-40 left-20 w-96 h-96 bg-gradient-to-r from-blue-400 to-cyan-600 rounded-full blur-3xl animate-float animation-delay-1000"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    {/* Header */}
                    <div className={`text-center space-y-6 mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
                        <Badge className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 dark:text-purple-600 px-6 py-3 text-lg">
                            <BookOpen className="w-5 h-5 mr-2" />
                            Tech Insights & Business Guides
                        </Badge>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                            <span className="block text-slate-900 dark:text-white mb-4">Latest from</span>
                            <span className="text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text">
                                AJPR World Blog
                            </span>
                        </h1>

                        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
                            Stay ahead of the curve with our latest insights, tutorials, and deep dives
                            into technology, business, legal, and financial topics.
                        </p>

                        {/* Search Bar */}
                        <div className="max-w-2xl mx-auto relative">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                            <Input
                                type="text"
                                placeholder="Search articles..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-12 pr-4 py-4 text-lg rounded-full border-0 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm shadow-lg focus:ring-2 focus:ring-purple-500"
                            />
                        </div>
                    </div>

                    {/* Featured Post */}
                    {currentFeaturedPost && (
                        <div className={`mb-20 transition-all duration-1000 ${isVisible ? 'animate-fade-up animation-delay-200' : 'opacity-0'}`} ref={sectionRef}>
                            <Card className="overflow-hidden bg-white dark:bg-slate-800 border-0 shadow-2xl hover-lift">
                                <div className="grid lg:grid-cols-2 gap-0">
                                    {/* Featured Post Visual */}
                                    <div className="relative h-80 lg:h-auto bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800">
                                        <div className={`absolute inset-0 bg-gradient-to-r ${currentFeaturedPost.gradient} opacity-20`}></div>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="text-8xl opacity-30">
                                                <BookOpen />
                                            </div>
                                        </div>
                                        <Badge className="absolute top-6 left-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                                            Featured
                                        </Badge>
                                        <Badge className="absolute top-6 right-6 bg-white/20 text-white backdrop-blur-sm">
                                            {currentFeaturedPost.category}
                                        </Badge>
                                    </div>

                                    {/* Featured Post Content */}
                                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                                        <div className="mb-6">
                                            <h2 className="text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                                                {currentFeaturedPost.title}
                                            </h2>
                                            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6">
                                                {currentFeaturedPost.excerpt}
                                            </p>
                                        </div>

                                        {/* Author & Meta */}
                                        <div className="flex items-center space-x-4 mb-6">
                                            <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${currentFeaturedPost.gradient} text-white flex items-center justify-center font-bold`}>
                                                {currentFeaturedPost.authorAvatar}
                                            </div>
                                            <div>
                                                <div className="font-semibold">{currentFeaturedPost.author}</div>
                                                <div className="text-sm text-slate-500">{currentFeaturedPost.authorRole}</div>
                                            </div>
                                            <div className="ml-auto text-right text-sm text-slate-500">
                                                <div className="flex items-center mb-1">
                                                    <Calendar className="w-4 h-4 mr-1" />
                                                    {new Date(currentFeaturedPost.publishDate).toLocaleDateString()}
                                                </div>
                                                <div className="flex items-center">
                                                    <Clock className="w-4 h-4 mr-1" />
                                                    {currentFeaturedPost.readTime}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Stats */}
                                        <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                                            <div>
                                                <div className="text-lg font-bold text-blue-600 flex items-center justify-center">
                                                    <Eye className="w-4 h-4 mr-1" />
                                                    {currentFeaturedPost.stats.views}
                                                </div>
                                                <div className="text-xs text-slate-500">Views</div>
                                            </div>
                                            <div>
                                                <div className="text-lg font-bold text-red-600 flex items-center justify-center">
                                                    <Heart className="w-4 h-4 mr-1" />
                                                    {currentFeaturedPost.stats.likes}
                                                </div>
                                                <div className="text-xs text-slate-500">Likes</div>
                                            </div>
                                            <div>
                                                <div className="text-lg font-bold text-green-600 flex items-center justify-center">
                                                    <MessageCircle className="w-4 h-4 mr-1" />
                                                    {currentFeaturedPost.stats.comments}
                                                </div>
                                                <div className="text-xs text-slate-500">Comments</div>
                                            </div>
                                        </div>

                                        {/* Tags */}
                                        <div className="mb-6">
                                            <div className="flex flex-wrap gap-2">
                                                {currentFeaturedPost.tags.map((tag, idx) => (
                                                    <Badge key={idx} variant="outline" className="text-xs">
                                                        #{tag}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>

                                        {/* CTA */}
                                        <Button className="w-full" asChild>
                                            <Link href={`/blog/${currentFeaturedPost.id}`}>
                                                Read Full Article
                                                <ArrowRight className="ml-2 h-4 w-4" />
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    )}

                    {/* Category Filter */}
                    <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 ${isVisible ? 'animate-fade-up animation-delay-400' : 'opacity-0'}`}>
                        {categories.map((category) => {
                            const IconComponent = category.icon
                            return (
                                <button
                                    key={category.name}
                                    onClick={() => setSelectedCategory(category.name)}
                                    className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 hover-lift ${selectedCategory === category.name
                                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                                        : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:shadow-md'
                                        }`}
                                >
                                    <IconComponent className="w-5 h-5 mr-2" />
                                    <span className="font-medium">{category.name}</span>
                                    <Badge variant="secondary" className="ml-2 text-xs">
                                        {category.count}
                                    </Badge>
                                </button>
                            )
                        })}
                    </div>

                    {/* Blog Posts Grid */}
                    <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-up animation-delay-600' : 'opacity-0'}`}>
                        {filteredPosts.map((post, index) => (
                            <Card key={post.id} className="group hover-lift overflow-hidden bg-white dark:bg-slate-800 border-0 shadow-lg hover:shadow-2xl transition-all duration-500">
                                {/* Post Image */}
                                <div className="relative h-48 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 overflow-hidden">
                                    <div className={`absolute inset-0 bg-gradient-to-r ${post.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <BookOpen className="h-16 w-16 text-slate-400 group-hover:scale-110 transition-transform duration-300" />
                                    </div>
                                    <Badge className="absolute top-4 left-4 bg-white/20 text-white backdrop-blur-sm">
                                        {post.category}
                                    </Badge>
                                    {post.featured && (
                                        <Badge className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                                            Featured
                                        </Badge>
                                    )}
                                </div>

                                <CardHeader className="pb-3">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center space-x-2 text-sm text-slate-500">
                                            <Calendar className="w-4 h-4" />
                                            <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                                        </div>
                                        <div className="flex items-center space-x-1 text-sm text-slate-500">
                                            <Clock className="w-4 h-4" />
                                            <span>{post.readTime}</span>
                                        </div>
                                    </div>
                                    <CardTitle className="text-xl leading-tight group-hover:text-purple-600 transition-colors duration-300">
                                        {post.title}
                                    </CardTitle>
                                </CardHeader>

                                <CardContent className="pt-0">
                                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-4 line-clamp-3">
                                        {post.excerpt}
                                    </p>

                                    {/* Author */}
                                    <div className="flex items-center space-x-3 mb-4">
                                        <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${post.gradient} text-white flex items-center justify-center text-sm font-bold`}>
                                            {post.authorAvatar}
                                        </div>
                                        <div>
                                            <div className="font-medium text-sm">{post.author}</div>
                                            <div className="text-xs text-slate-500">{post.authorRole}</div>
                                        </div>
                                    </div>

                                    {/* Tags */}
                                    <div className="mb-4">
                                        <div className="flex flex-wrap gap-1">
                                            {post.tags.slice(0, 3).map((tag, idx) => (
                                                <Badge key={idx} variant="outline" className="text-xs">
                                                    #{tag}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Stats & CTA */}
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-4 text-xs text-slate-500">
                                            <div className="flex items-center">
                                                <Eye className="w-3 h-3 mr-1" />
                                                {post.stats.views}
                                            </div>
                                            <div className="flex items-center">
                                                <Heart className="w-3 h-3 mr-1" />
                                                {post.stats.likes}
                                            </div>
                                        </div>
                                        <Button size="sm" variant="ghost" className="group/btn" asChild>
                                            <Link href={`/blog/${post.id}`}>
                                                Read More
                                                <ArrowRight className="ml-1 h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                                            </Link>
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Newsletter Signup */}
                    <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-up animation-delay-800' : 'opacity-0'}`}>
                        <Card className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 shadow-2xl">
                            <CardContent className="p-12 text-center space-y-6">
                                <div className="mx-auto w-fit p-4 bg-white/20 rounded-full">
                                    <BookOpen className="h-12 w-12" />
                                </div>
                                <h3 className="text-3xl md:text-4xl font-bold">
                                    Never Miss Our Latest Insights
                                </h3>
                                <p className="text-xl text-purple-100 max-w-2xl mx-auto">
                                    Subscribe to our newsletter and get the latest tech trends, business insights,
                                    and expert advice delivered straight to your inbox.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                                    <Input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="flex-1 bg-white/10 border-white/20 text-white placeholder-purple-200 focus:ring-white"
                                    />
                                    <Button size="lg" variant="secondary" className="hover-lift px-8">
                                        Subscribe
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </div>
                                <p className="text-purple-200 text-sm">
                                    Join 10,000+ professionals who get our weekly newsletter. Unsubscribe anytime.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    )
}
