'use client';

import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import {
    Code2, Smartphone, Cloud, TrendingUp, Palette, Database,
    ArrowRight, Check, Zap, Layers, Shield, Cpu
} from 'lucide-react';

export default function ServicesPage() {
    const [isVisible, setIsVisible] = useState(false);
    const heroRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const services = [
        {
            id: 'web',
            icon: Code2,
            title: 'Custom Web Development',
            description: 'High-performance web applications built with modern frameworks like Next.js and React. We focus on speed, SEO, and scalability.',
            features: ['Progressive Web Apps (PWA)', 'eCommerce Solutions', 'Enterprise Dashboards', 'API Integration'],
            color: 'text-blue-500',
            bg: 'bg-blue-500/10'
        },

        {
            id: 'cloud',
            icon: Cloud,
            title: 'Cloud Solutions & DevOps',
            description: 'Scalable cloud infrastructure on AWS and Azure. We optimize your deployment pipelines and ensure 99.9% uptime.',
            features: ['Cloud Architecture', 'CI/CD Pipelines', 'Serverless Computing', 'Security & Compliance'],
            color: 'text-cyan-500',
            bg: 'bg-cyan-500/10'
        },
        {
            id: 'marketing',
            icon: TrendingUp,
            title: 'Digital Marketing & SEO',
            description: 'Data-driven growth strategies to increase your visibility. We combine technical SEO with creative content marketing.',
            features: ['Technical SEO', 'Social Media Marketing', 'Conversion Optimization', 'Pay-Per-Click (PPC)'],
            color: 'text-green-500',
            bg: 'bg-green-500/10'
        },
        {
            id: 'design',
            icon: Palette,
            title: 'UI/UX Design',
            description: 'User-centric design that converts. We create intuitive interfaces that delight users and streamline complex workflows.',
            features: ['User Research', 'Wireframing & Prototyping', 'Design Systems', 'Interactive Mockups'],
            color: 'text-pink-500',
            bg: 'bg-pink-500/10'
        },
        {
            id: 'backend',
            icon: Database,
            title: 'Backend & API Development',
            description: 'Robust server-side logic and database management. We build secure, efficient APIs that power your entire digital ecosystem.',
            features: ['Database Design', 'REST & GraphQL APIs', 'Microservices', 'Data Migration'],
            color: 'text-orange-500',
            bg: 'bg-orange-500/10'
        }
    ];

    const process = [
        { title: 'Discovery', desc: 'We dive deep into your business goals and technical requirements.', icon: Zap },
        { title: 'Strategy', desc: 'Our architects design a scalable roadmap and technology stack.', icon: Layers },
        { title: 'Development', desc: 'We code using agile sprints, ensuring regular updates and feedback.', icon: Cpu },
        { title: 'Launch', desc: 'Rigorous testing followed by a smooth, zero-downtime deployment.', icon: RocketIcon },
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 font-sans">
            {/* 1. Hero Section */}
            <section className="relative py-24 lg:py-32 overflow-hidden bg-slate-50 dark:bg-slate-900/20">
                <div className="absolute inset-0 z-0 opacity-30 dark:opacity-20">
                    <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-[120px] opacity-20 animate-pulse-slow"></div>
                    <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-br from-cyan-400 to-emerald-500 rounded-full blur-[100px] opacity-20 animate-pulse-slow delay-1000"></div>
                </div>

                <div className="container relative z-10 px-4 mx-auto text-center max-w-4xl">
                    <Badge variant="outline" className="mb-6 border-blue-200 text-blue-700 bg-blue-50 dark:border-blue-900 dark:text-blue-300 dark:bg-blue-900/30">
                        Our Expertise
                    </Badge>
                    <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-8">
                        Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Digital Excellence</span>
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-10 max-w-2xl mx-auto">
                        From disruptive startups to intuitive enterprise platforms, we deliver full-cycle software development services adaptable to your specific needs.
                    </p>
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-full shadow-lg shadow-blue-500/20" asChild>
                        <Link href="/contact">Schedule a Consultation</Link>
                    </Button>
                </div>
            </section>

            {/* 2. Services Grid */}
            <section className="py-24 bg-white dark:bg-slate-950">
                <div className="container px-4 mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, idx) => {
                            const Icon = service.icon;
                            return (
                                <Card key={service.id} className="group border border-slate-100 dark:border-slate-800 hover:border-blue-100 dark:hover:border-blue-900 shadow-sm hover:shadow-2xl transition-all duration-300 bg-white dark:bg-slate-900">
                                    <CardContent className="p-8">
                                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${service.bg} ${service.color}`}>
                                            <Icon className="w-7 h-7" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{service.title}</h3>
                                        <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                                            {service.description}
                                        </p>
                                        <ul className="space-y-3 mb-8">
                                            {service.features.map((feature, fIdx) => (
                                                <li key={fIdx} className="flex items-start text-sm text-slate-500 dark:text-slate-400">
                                                    <Check className="w-5 h-5 text-green-500 mr-2 shrink-0" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
                                            <Link
                                                href={`/contact?service=${service.id}`}
                                                className="inline-flex items-center font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                                            >
                                                Start Project <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                            </Link>
                                        </div>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 3. Tech Stack Marquee (Conceptual) */}
            <section className="py-20 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-slate-500 dark:text-slate-400 font-medium tracking-wide uppercase mb-10">Powering Next-Gen Ideas With</p>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Simple Text Placeholders for Tech Logos - In a real app, use SVGs */}
                        {['Next.js', 'AWS', 'PostgreSQL', 'TailwindCSS', 'Node.js', 'Figma', 'Docker'].map((tech) => (
                            <span key={tech} className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-300">{tech}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Process Section */}
            <section className="py-24 bg-white dark:bg-slate-950">
                <div className="container px-4 mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-6">Our Development Process</h2>
                        <p className="text-xl text-slate-600 dark:text-slate-400">
                            We follow a proven agile methodology to deliver high-quality software on time and within budget.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {process.map((step, idx) => {
                            const Icon = step.icon;
                            return (
                                <div key={idx} className="relative text-center group">
                                    <div className="w-20 h-20 mx-auto bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                        <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400 group-hover:text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{step.title}</h3>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                        {step.desc}
                                    </p>

                                    {/* Connector Line (Hidden on mobile) */}
                                    {idx < process.length - 1 && (
                                        <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-[2px] bg-slate-100 dark:bg-slate-800 -z-10"></div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 5. Final CTA */}
            <section className="py-24 bg-slate-900 text-white rounded-t-[3rem] mt-10 mx-auto max-w-[98%] overflow-hidden relative">
                <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:32px_32px]"></div>
                <div className="container relative z-10 px-4 mx-auto text-center">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6">Build something extraordinary.</h2>
                    <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                        Don't let your idea remain just an idea. Let's engineer a solution that scales with your ambition.
                    </p>
                    <div className="flex justify-center">
                        <Button size="lg" className="bg-white text-slate-900 hover:bg-blue-50 text-lg px-10 py-7 rounded-full font-bold" asChild>
                            <Link href="/contact">Let's Talk Code</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}

function RocketIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
            <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
        </svg>
    )
}
