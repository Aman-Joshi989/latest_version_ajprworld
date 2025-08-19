'use client'

import { useState, useEffect, useRef } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'

const projects = Array.from({ length: 9 }).map((_, i) => ({
    id: i + 1,
    title: ['E-Commerce Platform', 'Healthcare App', 'FinTech Dashboard', 'EduTech Hub', 'Smart City IoT', 'Social Impact Network'][i % 6],
    category: ['Web Dev', 'Mobile', 'Finance', 'Education', 'IoT', 'Social'][i % 6],
    description: 'A scalable solution built with modern technologies, optimized for performance and UX.',
    gradient: ['from-blue-500 to-cyan-500', 'from-green-500 to-emerald-500', 'from-purple-500 to-pink-500', 'from-orange-500 to-red-500', 'from-indigo-500 to-purple-500', 'from-teal-500 to-green-500'][i % 6],
}))

export default function PortfolioPage() {
    const [isVisible, setIsVisible] = useState(false)
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const obs = new IntersectionObserver(([e]) => e.isIntersecting && setIsVisible(true), { threshold: 0.1 })
        if (sectionRef.current) obs.observe(sectionRef.current)
        return () => obs.disconnect()
    }, [])

    return (
        <section ref={sectionRef} className="py-24 bg-white dark:bg-slate-900">
            <div className="container mx-auto px-4">
                <div className={`text-center mb-16 transition-opacity ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <h2 className="text-4xl font-bold">Our Portfolio</h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                        Showcasing a selection of successful projects across industries.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((p, i) => (
                        <Card key={i} className={`group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-transform hover:-translate-y-2 ${isVisible ? 'opacity-100 animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: `${i * 0.1}s` }}>
                            <div className={`h-48 bg-gradient-to-br ${p.gradient} flex items-center justify-center text-white text-6xl font-bold`}>
                                {p.id.toString().padStart(2, '0')}
                            </div>
                            <CardContent className="p-6 space-y-4">
                                <Badge className="bg-transparent text-blue-600 border-blue-600">{p.category}</Badge>
                                <h3 className="text-xl font-semibold">{p.title}</h3>
                                <p className="text-slate-600 dark:text-slate-300 line-clamp-3">{p.description}</p>
                                <div className="flex space-x-2">
                                    <Button size="sm" asChild>
                                        <Link href="#">
                                            <ExternalLink className="w-4 h-4 mr-1" /> Live
                                        </Link>
                                    </Button>
                                    <Button size="sm" variant="outline" asChild>
                                        <Link href="#">
                                            <Github className="w-4 h-4 mr-1" /> Code
                                        </Link>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
