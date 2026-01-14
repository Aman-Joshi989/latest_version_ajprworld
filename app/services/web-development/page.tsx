'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import {
    Code2, Globe, Server, Database, Smartphone, ShieldCheck,
    ArrowRight, Check, Zap, Layers, Cpu, Rocket
} from 'lucide-react';

export default function WebDevelopmentPage() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const services = [
        {
            icon: Globe,
            title: 'Enterprise Web Applications',
            description: 'Scalable, secure, and robust web solutions designed to handle complex business processes and high user loads.',
            tech: ['Next.js', 'React', 'Titanium Security']
        },
        {
            icon: Smartphone,
            title: 'Progressive Web Apps (PWA)',
            description: 'Deliver app-like experiences on the web. Offline capabilities, push notifications, and fast loading speeds.',
            tech: ['Service Workers', 'Manifest', 'Mobile First']
        },
        {
            icon: Database,
            title: 'SaaS Platform Development',
            description: 'End-to-end engineering for multi-tenant software-as-a-service products, from architecture to subscription management.',
            tech: ['Multi-tenancy', 'Stripe', 'AWS']
        },
        {
            icon: Server,
            title: 'API & Microservices',
            description: 'Decoupled architectures that allow independent scaling and faster deployment cycles for large-scale systems.',
            tech: ['GraphQL', 'REST', 'Docker']
        },
        {
            icon: Layers,
            title: 'Headless E-Commerce',
            description: 'Decoupled frontend and backend for ultimate design freedom and lightning-fast shopping experiences.',
            tech: ['Shopify Headless', 'Sanity CMS', 'Vercel']
        },
        {
            icon: ShieldCheck,
            title: 'Web Security & Audit',
            description: 'Comprehensive security assessments, penetration testing, and implementation of best practices to protect your data.',
            tech: ['OWASP', 'Pen Testing', 'Encryption']
        }
    ];

    const techStack = [
        'Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis',
        'AWS', 'Docker', 'Kubernetes', 'TailwindCSS', 'Framer Motion', 'GraphQL'
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 font-sans selection:bg-blue-100 selection:text-blue-900">
            {/* 1. Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50 dark:bg-slate-900/30">
                <div className="container relative z-10 px-4 mx-auto text-center max-w-5xl">
                    <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <Badge variant="outline" className="mb-6 border-blue-200 text-blue-700 bg-blue-50 dark:border-blue-900 dark:text-blue-300 dark:bg-blue-900/30">
                            Web Development Services
                        </Badge>
                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
                            Constructing the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Digital Backbone</span> of Your Business
                        </h1>
                        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10">
                            We architecture high-performance, scalable web solutions that drive growth and streamline operations. No templates, just pure engineering.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-full text-lg shadow-lg shadow-blue-500/20" asChild>
                                <Link href="/contact">Build Your Solution</Link>
                            </Button>
                            <Button size="lg" variant="outline" className="border-slate-300 text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800 px-8 py-6 rounded-full text-lg" asChild>
                                <Link href="/portfolio">View Our Work</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Services Grid */}
            <section className="py-24 bg-white dark:bg-slate-950">
                <div className="container px-4 mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">Engineering Excellence</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            Our development methodology focuses on performance, scalability, and security from day one.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, idx) => {
                            const Icon = service.icon;
                            return (
                                <Card key={idx} className="group border border-slate-100 dark:border-slate-800 hover:border-blue-100 dark:hover:border-blue-900 shadow-sm hover:shadow-xl transition-all duration-300 bg-slate-50 dark:bg-slate-900/50">
                                    <CardContent className="p-8">
                                        <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 text-blue-600 dark:text-blue-400">
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{service.title}</h3>
                                        <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm leading-relaxed">
                                            {service.description}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {service.tech.map((t, i) => (
                                                <span key={i} className="px-2 py-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded text-xs font-medium text-slate-600 dark:text-slate-300">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 3. Tech Stack Marquee */}
            <section className="py-20 border-y border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/30">
                <div className="container px-4 mx-auto text-center">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-10">Powered by Modern Technology</h3>
                    <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
                        {techStack.map((tech) => (
                            <div key={tech} className="px-6 py-3 bg-white dark:bg-slate-800 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm text-slate-600 dark:text-slate-300 font-semibold text-sm sm:text-base">
                                {tech}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Why Choose Us (Minimalist List) */}
            <section className="py-24 bg-white dark:bg-slate-950">
                <div className="container px-4 mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-6">
                                Why Visionaries Choose AJPR World
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                                We don't act as a typical vendor. We embed ourselves as your technical partner, taking ownership of the code quality, uptime, and future scalability of your product.
                            </p>
                            <div className="space-y-4">
                                {[
                                    'Zero Technical Debt Philosophy',
                                    'Transparency in Code & Communication',
                                    'Cloud-Native Architecture Experts',
                                    'Post-Launch Support & Evolution'
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center">
                                        <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-4 shrink-0">
                                            <Check className="w-3 h-3" />
                                        </div>
                                        <span className="text-slate-700 dark:text-slate-300 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative h-[400px] bg-slate-100 dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 flex items-center justify-center">
                            <div className="absolute inset-0 bg-grid-slate-200/50 dark:bg-grid-slate-700/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
                            <Code2 className="w-32 h-32 text-slate-300 dark:text-slate-600" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. CTA Section */}
            <section className="py-24 bg-slate-900 dark:bg-blue-950 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 p-12 opacity-10">
                    <Cpu size={400} />
                </div>
                <div className="container px-4 mx-auto relative z-10 text-center max-w-4xl">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">Got a Complex Challenge?</h2>
                    <p className="text-xl text-slate-300 mb-10 mx-auto">
                        Whether it's a legacy system migration or a greenfield AI project, we have the engineering chops to handle it.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 text-lg px-8 py-6 rounded-full font-semibold" asChild>
                            <Link href="/contact">Talk to an Architect</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
