'use client';

import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import {
    Target, Award, Lightbulb, Users, Globe, Zap, ArrowRight,
    CheckCircle, BarChart3, ShieldCheck, Laptop
} from 'lucide-react';

export default function AboutPage() {
    const [isVisible, setIsVisible] = useState(false);
    const heroRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const values = [
        {
            icon: Lightbulb,
            title: 'Innovation Driven',
            description: 'We simply don’t settle for "good enough". We push boundaries with AI, cloud, and modern architectures to give you a competitive edge.',
            color: 'bg-blue-500/10 text-blue-600 dark:text-blue-400'
        },
        {
            icon: ShieldCheck,
            title: 'Reliability & Trust',
            description: 'Your business data and uptime are sacred. We build robust, secure systems that you can rely on 24/7.',
            color: 'bg-green-500/10 text-green-600 dark:text-green-400'
        },
        {
            icon: Target,
            title: 'Result Oriented',
            description: 'Code is just a tool. Our real focus is on your KPIs—revenue, efficiency, and user engagement.',
            color: 'bg-purple-500/10 text-purple-600 dark:text-purple-400'
        },
        {
            icon: Users,
            title: 'Collaborative Partnership',
            description: 'We are not just vendors; we are extended members of your team, committed to your long-term success.',
            color: 'bg-orange-500/10 text-orange-600 dark:text-orange-400'
        }
    ];

    const stats = [
        { label: 'Successful Projects', value: '50+' },
        { label: 'Client Retention', value: '100%' },
        { label: 'Years of Excellence', value: '3+' },
        { label: 'Core Tech Domains', value: '4' }
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 font-sans selection:bg-blue-100 selection:text-blue-900">
            {/* 1. Hero Section - Professional & Minimal */}
            <section ref={heroRef} className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-100/50 dark:bg-blue-900/20 blur-[100px] rounded-full opacity-60"></div>
                </div>

                <div className="container relative z-10 px-4 mx-auto text-center">
                    <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                        <Badge variant="secondary" className="mb-6 px-4 py-1.5 text-sm font-medium bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                            About AJPR World
                        </Badge>
                        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
                            Architecting the <span className="text-blue-600 dark:text-blue-500">Digital Future</span>
                        </h1>
                        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
                            We are a premier technology consultancy transforming complex business challenges into elegant, scalable digital solutions.
                        </p>
                    </div>
                </div>
            </section>

            {/* 2. Mission Statement - Solid & Impactful */}
            <section className="py-20 bg-slate-50 dark:bg-slate-900/50">
                <div className="container px-4 mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 relative">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white dark:bg-slate-800 p-8 border border-slate-100 dark:border-slate-700">
                                <div className="grid grid-cols-2 gap-6">
                                    {stats.map((stat, i) => (
                                        <div key={i} className="text-center p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50">
                                            <div className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-1">{stat.value}</div>
                                            <div className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* Decorative element */}
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600 rounded-full opacity-20 blur-2xl"></div>
                        </div>

                        <div className="order-1 lg:order-2 space-y-6">
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white">
                                Our Mission
                            </h2>
                            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                                At AJPR World, we believe technology is the greatest enabler of our time. Our mission is to democratize access to enterprise-grade software capabilities for businesses of all sizes.
                            </p>
                            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                                From AI-driven insights to seamless cloud migrations, we don't just write code; we engineer value. We partner with visionaries to build platforms that define their industries.
                            </p>
                            <div className="pt-4">
                                <Button className="bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 px-8 py-6 text-lg rounded-full" asChild>
                                    <Link href="/services">Discover Our Expertise</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Core Values - Clean Grid */}
            <section className="py-24 bg-white dark:bg-slate-950">
                <div className="container px-4 mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">The Principles That Guide Us</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400">
                            We don't operate on guesswork. Our methodology is rooted in transparency, technical excellence, and measurable outcomes.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((val, idx) => {
                            const Icon = val.icon;
                            return (
                                <Card key={idx} className="border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 group bg-white dark:bg-slate-900">
                                    <CardContent className="p-8">
                                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 text-xl ${val.color} group-hover:scale-110 transition-transform duration-300`}>
                                            <Icon className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{val.title}</h3>
                                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                                            {val.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 4. Minimal Timeline / Journey */}
            <section className="py-24 border-t border-slate-100 dark:border-slate-900 bg-slate-50 dark:bg-slate-900/30">
                <div className="container px-4 mx-auto max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Our Journey</h2>
                    </div>

                    <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 dark:bg-slate-900 dark:border-slate-700">
                                <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                            </div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white dark:bg-slate-800 shadow-lg border border-slate-100 dark:border-slate-700">
                                <div className="flex items-center justify-between space-x-2 mb-1">
                                    <div className="font-bold text-slate-900 dark:text-white">Service Expansion</div>
                                    <time className="font-mono italic text-sm text-slate-500">2025</time>
                                </div>
                                <div className="text-slate-600 dark:text-slate-400 text-sm">
                                    Launched specialized tech divisions including Cloud Architecture and AI Solutions, solidifying our position as a full-stack tech partner.
                                </div>
                            </div>
                        </div>

                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 dark:bg-slate-900 dark:border-slate-700">
                                <div className="w-3 h-3 bg-slate-400 rounded-full"></div>
                            </div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white dark:bg-slate-800 shadow-lg border border-slate-100 dark:border-slate-700">
                                <div className="flex items-center justify-between space-x-2 mb-1">
                                    <div className="font-bold text-slate-900 dark:text-white">Inception</div>
                                    <time className="font-mono italic text-sm text-slate-500">2025</time>
                                </div>
                                <div className="text-slate-600 dark:text-slate-400 text-sm">
                                    AJPR World was founded with a singular vision: to bridge the gap between complex technology and business success.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Professional CTA */}
            <section className="py-24 bg-slate-900 dark:bg-blue-950 text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 p-12 opacity-10">
                    <Laptop size={400} />
                </div>
                <div className="container px-4 mx-auto relative z-10 text-center">
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight">Ready to Modernize Your Business?</h2>
                    <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                        Join the forward-thinking companies that trust AJPR World to power their digital infrastructure.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 text-lg px-8 py-6 rounded-full font-semibold" asChild>
                            <Link href="/contact">Start Your Project</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="bg-transparent border-white/20 text-white hover:bg-white/10 hover:text-white hover:border-white text-lg px-8 py-6 rounded-full transition-all" asChild>
                            <Link href="/portfolio">View Case Studies</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
