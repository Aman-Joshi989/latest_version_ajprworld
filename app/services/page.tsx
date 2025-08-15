import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import {
    Code2, Palette, Smartphone, Cloud, Shield, Search,
    CheckCircle, ArrowRight, Zap, Database, Globe
} from 'lucide-react'

const services = [
    {
        icon: Code2,
        title: 'Web Development',
        description: 'Custom websites and web applications built with modern technologies for optimal performance and user experience.',
        features: [
            'Next.js & React Development',
            'TypeScript Implementation',
            'Responsive Design',
            'Performance Optimization',
            'SEO-Friendly Architecture',
            'Progressive Web Apps (PWA)'
        ],
        technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
        pricing: 'Starting from ₹25,000',
        color: 'blue'
    },
    {
        icon: Smartphone,
        title: 'Mobile App Development',
        description: 'Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.',
        features: [
            'React Native Development',
            'Flutter Development',
            'Native iOS & Android',
            'Cross-platform Solutions',
            'App Store Optimization',
            'Push Notifications'
        ],
        technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
        pricing: 'Starting from ₹50,000',
        color: 'green'
    },
    {
        icon: Palette,
        title: 'UI/UX Design',
        description: 'Beautiful, intuitive designs that enhance user experience and drive conversions for your business.',
        features: [
            'User Research & Analysis',
            'Wireframing & Prototyping',
            'Visual Design',
            'Design Systems',
            'Usability Testing',
            'Brand Identity Design'
        ],
        technologies: ['Figma', 'Adobe XD', 'Sketch', 'Principle', 'InVision'],
        pricing: 'Starting from ₹15,000',
        color: 'purple'
    },
    {
        icon: Cloud,
        title: 'Cloud Solutions',
        description: 'Scalable cloud infrastructure and DevOps solutions to modernize your applications and improve efficiency.',
        features: [
            'Cloud Migration',
            'AWS/Azure/GCP Setup',
            'DevOps Implementation',
            'CI/CD Pipelines',
            'Container Orchestration',
            'Infrastructure as Code'
        ],
        technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform'],
        pricing: 'Starting from ₹30,000',
        color: 'orange'
    },
    {
        icon: Search,
        title: 'Digital Marketing',
        description: 'Comprehensive digital marketing strategies to boost your online presence and reach your target audience.',
        features: [
            'Search Engine Optimization',
            'Social Media Marketing',
            'Pay-Per-Click Advertising',
            'Content Marketing',
            'Email Marketing',
            'Analytics & Reporting'
        ],
        technologies: ['Google Analytics', 'Google Ads', 'Facebook Ads', 'SEMrush', 'Mailchimp'],
        pricing: 'Starting from ₹10,000/month',
        color: 'indigo'
    },
    {
        icon: Shield,
        title: 'Security Solutions',
        description: 'Comprehensive security audits and implementations to protect your applications and data.',
        features: [
            'Security Audits',
            'Penetration Testing',
            'Compliance Assessment',
            'Data Protection',
            'SSL Implementation',
            'Security Monitoring'
        ],
        technologies: ['OWASP', 'Nessus', 'Burp Suite', 'Wireshark', 'Kali Linux'],
        pricing: 'Starting from ₹20,000',
        color: 'red'
    },
    {
        icon: Database,
        title: 'Database Solutions',
        description: 'Robust database design, optimization, and management for high-performance applications.',
        features: [
            'Database Design',
            'Performance Optimization',
            'Data Migration',
            'Backup & Recovery',
            'NoSQL Solutions',
            'Real-time Analytics'
        ],
        technologies: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Firebase'],
        pricing: 'Starting from ₹15,000',
        color: 'teal'
    },
    {
        icon: Zap,
        title: 'API Development',
        description: 'Scalable and secure API solutions to connect your applications and enable seamless data exchange.',
        features: [
            'RESTful API Design',
            'GraphQL Implementation',
            'API Documentation',
            'Rate Limiting',
            'Authentication & Authorization',
            'Third-party Integrations'
        ],
        technologies: ['Node.js', 'Express', 'GraphQL', 'JWT', 'Swagger'],
        pricing: 'Starting from ₹18,000',
        color: 'yellow'
    }
]

const getColorClasses = (color: string) => {
    const colors = {
        blue: 'bg-blue-50 border-blue-200 dark:bg-blue-950/20 dark:border-blue-800',
        green: 'bg-green-50 border-green-200 dark:bg-green-950/20 dark:border-green-800',
        purple: 'bg-purple-50 border-purple-200 dark:bg-purple-950/20 dark:border-purple-800',
        orange: 'bg-orange-50 border-orange-200 dark:bg-orange-950/20 dark:border-orange-800',
        indigo: 'bg-indigo-50 border-indigo-200 dark:bg-indigo-950/20 dark:border-indigo-800',
        red: 'bg-red-50 border-red-200 dark:bg-red-950/20 dark:border-red-800',
        teal: 'bg-teal-50 border-teal-200 dark:bg-teal-950/20 dark:border-teal-800',
        yellow: 'bg-yellow-50 border-yellow-200 dark:bg-yellow-950/20 dark:border-yellow-800'
    }
    return colors[color as keyof typeof colors] || colors.blue
}

export default function ServicesPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950/20 dark:to-indigo-950/20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <Badge variant="secondary" className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300">
                            Our Services
                        </Badge>
                        <h1 className="text-4xl lg:text-6xl font-bold">
                            Comprehensive{' '}
                            <span className="gradient-text">Technology Solutions</span>{' '}
                            for Your Business
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            From web development to cloud solutions, we offer a complete range of
                            technology services to help your business thrive in the digital age.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-8">
                        {services.map((service, index) => {
                            const IconComponent = service.icon
                            return (
                                <Card key={index} className={`group hover:shadow-xl transition-all duration-300 ${getColorClasses(service.color)}`}>
                                    <CardHeader className="pb-6">
                                        <div className="flex items-start justify-between">
                                            <div className="flex items-center space-x-4">
                                                <div className="p-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
                                                    <IconComponent className="h-8 w-8 text-blue-600" />
                                                </div>
                                                <div>
                                                    <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                                                    <Badge variant="secondary" className="text-xs">
                                                        {service.pricing}
                                                    </Badge>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
                                            {service.description}
                                        </p>
                                    </CardHeader>

                                    <CardContent className="pt-0 space-y-6">
                                        <div>
                                            <h4 className="font-semibold mb-3 text-lg">Key Features:</h4>
                                            <ul className="grid grid-cols-1 gap-2">
                                                {service.features.map((feature, idx) => (
                                                    <li key={idx} className="flex items-center text-gray-700 dark:text-gray-300">
                                                        <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div>
                                            <h4 className="font-semibold mb-3">Technologies:</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {service.technologies.map((tech, idx) => (
                                                    <Badge key={idx} variant="outline" className="text-xs border-gray-200 dark:border-gray-800">
                                                        {tech}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>

                                        <Button
                                            className="w-full group-hover:bg-blue-600 group-hover:text-white transition-colors border-gray-200 dark:border-gray-800"
                                            variant="outline"
                                            asChild
                                        >
                                            <Link href="/contact">
                                                Get Quote
                                                <ArrowRight className="ml-2 h-4 w-4" />
                                            </Link>
                                        </Button>
                                    </CardContent>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 bg-gray-50 dark:bg-gray-900/50">
                <div className="container mx-auto px-4">
                    <div className="text-center space-y-6 mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold">Our Development Process</h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            We follow a proven methodology to ensure your project is delivered
                            on time, within budget, and exceeds expectations.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { step: '01', title: 'Discovery', description: 'Understanding your requirements and goals' },
                            { step: '02', title: 'Planning', description: 'Creating detailed project roadmap and timeline' },
                            { step: '03', title: 'Development', description: 'Building your solution with regular updates' },
                            { step: '04', title: 'Launch', description: 'Testing, deployment, and ongoing support' }
                        ].map((phase, index) => (
                            <Card key={index} className="text-center p-6 border-gray-200 dark:border-gray-800">
                                <CardContent className="space-y-4 p-0">
                                    <div className="text-3xl font-bold text-blue-600 mb-4">{phase.step}</div>
                                    <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-400">{phase.description}</p>
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
                            Ready to Get Started?
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300">
                            Let's discuss your project requirements and create a custom solution
                            that fits your business needs perfectly.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                                <Link href="/contact">
                                    Start Your Project
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" className="border-gray-200 dark:border-gray-800" asChild>
                                <Link href="/portfolio">View Our Work</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
