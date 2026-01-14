'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink, Github, ArrowRight, Layers, Code2, Globe } from 'lucide-react';

// Filtered projects as per user request
const projects = [
  {
    id: 1,
    title: 'Tarot Tanishk',
    url: 'https://tarottanishk.com',
    category: 'Web Platform',
    tech: ['React', 'Interactive UI', 'Digital Commerce'],
    description: 'A premium digital platform for spiritual guidance, featuring interactive sessions and seamless booking integration.',
    image: '/images/portfolio/tarot.png',
    year: '2025'
  },
  {
    id: 4,
    title: 'Dwaparyug Foundation',
    url: 'https://dwaparyug.org',
    category: 'Cultural Archives',
    tech: ['Next.js', 'Neon DB', 'Prisma', 'Tailwind'],
    description: 'A modern digital archive preserving cultural heritage. Built with a high-performance Jamstack architecture for speed and scalability.',
    image: '/images/portfolio/dwaparyug.png',
    year: '2025'
  },
  {
    id: 5,
    title: 'Kumaun University',
    url: 'https://www.kunainital.ac.in/',
    category: 'Enterprise Education',
    tech: ['PHP/Laravel', 'Complex Data Systems', 'Student Portal'],
    description: 'A massive-scale university portal handling data for over 20,000 students, including exam results, admissions, and administration.',
    image: '/images/portfolio/kumaun.png',
    year: '2023'
  }
];

export default function PortfolioPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50 dark:bg-slate-900/30">
        <div className="container relative z-10 px-4 mx-auto text-center">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <Badge variant="outline" className="mb-6 border-blue-200 text-blue-700 bg-blue-50 dark:border-blue-900 dark:text-blue-300 dark:bg-blue-900/30">
              Our Work
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
              Proven <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Digital Impact</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
              We don't just build software; we build businesses. Explore a selection of our deployed enterprise solutions.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Projects Grid */}
      <section className="py-24">
        <div className="container px-4 mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, idx) => (
              <Card key={project.id} className="group border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white dark:bg-slate-900 overflow-hidden flex flex-col h-full ring-1 ring-slate-100 dark:ring-slate-800">
                {/* Visual Placeholder / Thumbnail */}
                <div className="h-56 relative overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>

                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                    <Badge className="bg-white/90 text-slate-900 hover:bg-white backdrop-blur-sm border-0 font-medium">
                      {project.year}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-8 flex-1 flex flex-col">
                  <div className="mb-4">
                    <span className="text-xs font-bold tracking-wider text-blue-600 dark:text-blue-400 uppercase mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed text-sm flex-1">
                    {project.description}
                  </p>

                  <div className="space-y-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t, i) => (
                        <span key={i} className="px-2 py-1 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-xs rounded-md font-medium">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-semibold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors group/link"
                      >
                        Visit Live Site <ExternalLink className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 3. GitHub / Open Source Callout (Optional filler for tech cred) */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800">
        <div className="container px-4 mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-900 text-white mb-6">
            <Github className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Open Source & Experiments</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8">
            We constantly experiment with new technologies. Checkout our labs for experimental AI models and open-source contributions.
          </p>
          <Button variant="outline" className="border-slate-300 text-slate-700 hover:bg-white hover:text-slate-900" asChild>
            <Link href="https://github.com/Aman-Joshi989">View GitHub Profile</Link>
          </Button>
        </div>
      </section>

      {/* 4. Contact CTA */}
      <section className="py-24 bg-white dark:bg-slate-950">
        <div className="container px-4 mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">Have a Vision?</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-10">
            We have the engineering expertise to bring it to life.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-7 rounded-full text-lg shadow-xl shadow-blue-200 dark:shadow-none" asChild>
            <Link href="/contact">Start Your Project</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}