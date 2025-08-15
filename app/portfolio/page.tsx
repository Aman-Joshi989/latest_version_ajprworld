import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'

const projects = [
    {
        id: 1,
        title: 'E-Commerce Platform',
        category: 'Web Development',
        description: 'A full-featured e-commerce platform built with Next.js and TypeScript, featuring real-time inventory management, secure payment processing, and advanced analytics.',
        image: '/api/placeholder/600/400',
        technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'PostgreSQL'],
        features: ['Real-time Inventory', 'Payment Gateway', 'Admin Dashboard', 'Analytics'],
        client: 'Retail Business',
        duration: '3 months',
        liveUrl: '#',
        githubUrl: '#',
        color: 'blue'
    },
    {
        id: 2,
        title: 'Healthcare Management System',
        category: 'Mobile App',
        description: 'A comprehensive healthcare management app that connects patients with doctors, featuring appointment booking, medical records, and telemedicine capabilities.',
        image: '/api/placeholder/600/400',
        technologies: ['React Native', 'Node.js', 'MongoDB', 'Socket.io', 'AWS'],
        features: ['Appointment Booking', 'Video Consultations', 'Medical Records', 'Notifications'],
        client: 'Healthcare Startup',
        duration: '4 months',
        liveUrl: '#',
        githubUrl: '#',
        color: 'green'
    },
    {
        id: 3,
        title: 'Financial Dashboard',
        category: 'Web Application',
        description: 'A sophisticated financial dashboard for tracking investments, expenses, and financial goals with real-time data visualization and predictive analytics.',
        image: '/api/placeholder/600/400',
        technologies: ['React', 'D3.js', 'Express', 'PostgreSQL', 'Chart.js'],
        features: ['Data Visualization', 'Real-time Updates', 'Predictive Analytics', 'Export Reports'],
        client: 'FinTech Company',
        duration: '2 months',
        liveUrl: '#',
        githubUrl: '#',
        color: 'purple'
    },
    {
        id: 4,
        title: 'Restaurant Ordering System',
        category: 'Full Stack',
        description: 'An integrated restaurant management and online ordering system with inventory tracking, order management, and customer analytics.',
        image: '/api/placeholder/600/400',
        technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
        features: ['Online Ordering', 'Inventory Management', 'Payment Processing', 'Analytics'],
        client: 'Restaurant Chain',
        duration: '2.5 months',
        liveUrl: '#',
        githubUrl: '#',
        color: 'orange'
    },
    {
        id: 5,
        title: 'Learning Management Platform',
        category: 'Education Technology',
        description: 'A comprehensive LMS platform for online education with course management, student tracking, and interactive learning modules.',
        image: '/api/placeholder/600/400',
        technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Cloudinary', 'Stripe'],
        features: ['Course Management', 'Student Progress', 'Interactive Content', 'Certification'],
        client: 'Education Institute',
        duration: '5 months',
        liveUrl: '#',
        githubUrl: '#',
        color: 'indigo'
    },
    {
        id: 6,
        title: 'Real Estate Platform',
        category: 'Web Development',
        description: 'A modern real estate platform with property listings, virtual tours, mortgage calculators, and agent management system.',
        image: '/api/placeholder/600/400',
        technologies: ['Next.js', 'TypeScript', 'Supabase', 'Mapbox', 'Tailwind CSS'],
        features: ['Property Listings', 'Virtual Tours', 'Mortgage Calculator', 'Agent Portal'],
        client: 'Real Estate Agency',
        duration: '3.5 months',
        liveUrl: '#',
        githubUrl: '#',
        color: 'teal'
    }
]

const categories = ['All', 'Web Development', 'Mobile App', 'Web Application', 'Full Stack', 'Education Technology']

const getColorClasses = (color: string) => {
    const colors = {
        blue: 'bg-blue-50 border-blue-200 dark:bg-blue-950/20 dark:border-blue-800',
        green: 'bg-green-50 border-green-200 dark:bg-green-950/20 dark:border-green-800',
        purple: 'bg-purple-50 border-purple-200 dark:bg-purple-950/20 dark:border-purple-800',
        orange: 'bg-orange-50 border-orange-200 dark:bg-orange-950/20 dark:border-orange-800',
        indigo: 'bg-indigo-50 border-indigo-200 dark:bg-indigo-950/20 dark:border-indigo-800',
        teal: 'bg-teal-50 border-teal-200 dark:bg-teal-950/20 dark:border-teal-800'
    }
    return colors[color as keyof typeof colors] || colors.blue
}

export default function PortfolioPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950/20 dark:to-indigo-950/20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <Badge variant="secondary" className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300">
                            Our Portfolio
                        </Badge>
                        <h1 className="text-4xl lg:text-6xl font-bold">
                            Success Stories &{' '}
                            <span className="gradient-text">Project Highlights</span>
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Discover how we've helped businesses across various industries
                            achieve their digital transformation goals with innovative solutions.
                        </p>
                    </div>
                </div>
            </section>

            {/* Portfolio Stats */}
            <section className="py-16 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                            <div className="text-gray-600 dark:text-gray-400">Projects Completed</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
                            <div className="text-gray-600 dark:text-gray-400">Happy Clients</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                            <div className="text-gray-600 dark:text-gray-400">Industries Served</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                            <div className="text-gray-600 dark:text-gray-400">Success Rate</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Portfolio Filter */}
            <section className="py-8 bg-gray-50 dark:bg-gray-900/50">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map((category) => (
                            <Button
                                key={category}
                                variant="outline"
                                className="border-gray-200 dark:border-gray-800 hover:bg-blue-600 hover:text-white hover:border-blue-600"
                            >
                                {category}
                            </Button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-24 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-8">
                        {projects.map((project) => (
                            <Card key={project.id} className={`group hover:shadow-xl transition-all duration-300 overflow-hidden ${getColorClasses(project.color)}`}>
                                <div className="aspect-video bg-gray-200 dark:bg-gray-800 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 flex items-center justify-center">
                                        <div className="text-6xl font-bold text-white/30">
                                            {project.id.toString().padStart(2, '0')}
                                        </div>
                                    </div>
                                    <Badge className="absolute top-4 left-4 bg-white/90 text-gray-900">
                                        {project.category}
                                    </Badge>
                                </div>

                                <CardContent className="p-8">
                                    <div className="space-y-6">
                                        <div>
                                            <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                                {project.description}
                                            </p>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4 text-sm">
                                            <div>
                                                <div className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Client:</div>
                                                <div className="text-gray-600 dark:text-gray-400">{project.client}</div>
                                            </div>
                                            <div>
                                                <div className="font-semibold text-gray-900 dark:text-gray-100 mb-1">Duration:</div>
                                                <div className="text-gray-600 dark:text-gray-400">{project.duration}</div>
                                            </div>
                                        </div>

                                        <div>
                                            <div className="font-semibold mb-2">Key Features:</div>
                                            <div className="flex flex-wrap gap-2">
                                                {project.features.map((feature, idx) => (
                                                    <Badge key={idx} variant="secondary" className="text-xs">
                                                        {feature}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>

                                        <div>
                                            <div className="font-semibold mb-2">Technologies:</div>
                                            <div className="flex flex-wrap gap-2">
                                                {project.technologies.map((tech, idx) => (
                                                    <Badge key={idx} variant="outline" className="text-xs border-gray-200 dark:border-gray-800">
                                                        {tech}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="flex space-x-4 pt-4">
                                            <Button size="sm" asChild className="bg-blue-600 hover:bg-blue-700">
                                                <Link href={project.liveUrl}>
                                                    <ExternalLink className="mr-2 h-4 w-4" />
                                                    Live Demo
                                                </Link>
                                            </Button>
                                            <Button size="sm" variant="outline" asChild className="border-gray-200 dark:border-gray-800">
                                                <Link href={project.githubUrl}>
                                                    <Github className="mr-2 h-4 w-4" />
                                                    Code
                                                </Link>
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-blue-50 dark:bg-blue-950/20">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center space-y-8">
                        <h2 className="text-3xl lg:text-4xl font-bold">
                            Ready to Start Your Project?
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300">
                            Let's create something amazing together. We're here to turn
                            your vision into a successful digital solution.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                                <Link href="/contact">
                                    Start Your Project
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" className="border-gray-200 dark:border-gray-800" asChild>
                                <Link href="/services">View Services</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
