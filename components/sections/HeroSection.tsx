'use client'

import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import {
    ArrowRight, CheckCircle, Star, Zap, Sparkles,
    Code2, Palette, Cloud, Shield, Globe, Rocket,
    Play, Users, Trophy, Target
} from 'lucide-react'

const floatingIcons = [
    { icon: Code2, delay: 0 },
    { icon: Palette, delay: 0.5 },
    { icon: Cloud, delay: 1 },
    { icon: Shield, delay: 1.5 },
    { icon: Globe, delay: 2 },
    { icon: Rocket, delay: 2.5 },
]

const typewriterTexts = [
    "Digital Transformation",
    "Web Development",
    "Mobile Applications",
    "Cloud Solutions",
    "AI Integration",
    "Future-Ready Tech"
]

export default function HeroSection() {
    const [currentText, setCurrentText] = useState(0)
    const [isVisible, setIsVisible] = useState(false)
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const heroRef = useRef<HTMLElement>(null)

    useEffect(() => {
        setIsVisible(true)
        const interval = setInterval(() => {
            setCurrentText((prev) => (prev + 1) % typewriterTexts.length)
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }
        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [])

    return (
        <section
            ref={heroRef}
            className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-950 dark:via-blue-950 dark:to-indigo-950 floating-elements"
        >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Gradient Orbs */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-float"></div>
                <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-r from-pink-400/20 to-red-600/20 rounded-full blur-3xl animate-float animation-delay-1000"></div>
                <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-green-400/20 to-blue-600/20 rounded-full blur-3xl animate-float animation-delay-600"></div>

                {/* Floating Icons */}
                {floatingIcons.map((item, index) => {
                    const IconComponent = item.icon
                    return (
                        <div
                            key={index}
                            className={`absolute opacity-10 animate-float`}
                            style={{
                                top: `${20 + (index * 15)}%`,
                                left: `${10 + (index * 15)}%`,
                                animationDelay: `${item.delay}s`,
                                transform: `translateX(${mousePosition.x * 0.01}px) translateY(${mousePosition.y * 0.01}px)`
                            }}
                        >
                            <IconComponent className="w-8 h-8 text-blue-600" />
                        </div>
                    )
                })}
            </div>

            <div className="container mx-auto px-4 py-20 relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Top Badge */}
                    <div className={`text-center mb-8 transition-all duration-1000 ${isVisible ? 'animate-fade-down' : 'opacity-0'}`}>
                        <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 text-sm hover-lift shimmer-effect">
                            <Sparkles className="w-4 h-4 mr-2" />
                            🚀 Your Vision Deserves a Technology Partner
                        </Badge>
                    </div>

                    {/* Main Hero Content */}
                    <div className="text-center space-y-8">
                        {/* Dynamic Title */}
                        <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'animate-fade-up animation-delay-200' : 'opacity-0'}`}>
                            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tight leading-tight">
                                <span className="block text-slate-900 dark:text-white mb-4">
                                    Beyond Vendors:
                                </span>
                                <span className="block mb-4">
                                    Your{' '}
                                    <span
                                        key={currentText}
                                        className="text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text animate-scale-in typewriter inline-block"
                                    >
                                        {typewriterTexts[currentText]}
                                    </span>
                                </span>
                                <span className="block text-slate-700 dark:text-slate-300">
                                    Deserves a Partner
                                </span>
                            </h1>
                        </div>

                        {/* Subtitle */}
                        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-up animation-delay-400' : 'opacity-0'}`}>
                            <p className="text-xl md:text-2xl lg:text-3xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
                                We don't just build websites and apps - we craft
                                <span className="font-semibold text-blue-600"> digital experiences </span>
                                that transform businesses and delight users.
                            </p>
                        </div>

                        {/* CTA Buttons */}
                        <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-1000 ${isVisible ? 'animate-fade-up animation-delay-600' : 'opacity-0'}`}>
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg rounded-full hover-lift animate-pulse-glow group shadow-xl"
                                asChild
                            >
                                <Link href="/contact">
                                    <Rocket className="mr-2 h-5 w-5 group-hover:animate-bounce-gentle" />
                                    Start Your Journey
                                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>

                            <Button
                                variant="outline"
                                size="lg"
                                className="px-8 py-4 text-lg rounded-full hover-lift border-2 border-slate-300 dark:border-slate-700 group"
                                asChild
                            >
                                <Link href="#portfolio-preview">
                                    <Play className="mr-2 h-5 w-5 group-hover:animate-bounce-gentle" />
                                    Watch Our Story
                                </Link>
                            </Button>
                        </div>

                        {/* Trust Indicators with Enhanced Animations */}
                        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'animate-fade-up animation-delay-800' : 'opacity-0'}`}>
                            {[
                                { icon: Trophy, value: '3+', label: 'Years Excellence', color: 'text-yellow-600' },
                                { icon: Users, value: '100+', label: 'Happy Clients', color: 'text-green-600' },
                                { icon: Target, value: '500+', label: 'Projects Delivered', color: 'text-blue-600' },
                                { icon: Star, value: '5.0', label: 'Average Rating', color: 'text-purple-600' }
                            ].map((stat, index) => {
                                const IconComponent = stat.icon
                                return (
                                    <div
                                        key={index}
                                        className={`text-center group hover-lift stagger-animation glass-effect rounded-2xl p-6 hover:bg-white/20 transition-all duration-500`}
                                    >
                                        <div className={`mx-auto w-fit p-3 bg-white/10 rounded-full mb-3 group-hover:scale-110 transition-transform duration-300`}>
                                            <IconComponent className={`h-8 w-8 ${stat.color}`} />
                                        </div>
                                        <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                                            {stat.value}
                                        </div>
                                        <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                                            {stat.label}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        {/* Social Proof */}
                        <div className={`pt-12 transition-all duration-1000 ${isVisible ? 'animate-fade-up animation-delay-1000' : 'opacity-0'}`}>
                            <p className="text-slate-500 dark:text-slate-400 mb-4">Trusted by innovative companies worldwide</p>
                            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                                {['TechCorp', 'InnovateLab', 'FutureStack', 'CloudVision', 'DataFlow'].map((company, index) => (
                                    <div
                                        key={index}
                                        className="font-semibold text-lg text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors duration-300 cursor-pointer"
                                    >
                                        {company}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle">
                <div className="w-6 h-10 border-2 border-slate-400 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-pulse"></div>
                </div>
            </div>
        </section>
    )
}
