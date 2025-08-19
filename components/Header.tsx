'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import {
    Menu, ChevronDown, Code2, Scale, Calculator,
    Users, Phone, Mail, Building
} from 'lucide-react'
import { ModeToggle } from '@/components/mode-toggle'

const navigation = [
    { name: 'Home', href: '/' },
    {
        name: 'Services',
        href: '/services',
        dropdown: [
            { name: 'Web Development', href: '/services/web-development', icon: Code2 },
            { name: 'Legal Services', href: '/services/legal', icon: Scale },
            { name: 'Financial Services', href: '/services/financial', icon: Calculator },
            { name: 'HR & Payroll', href: '/services/hr-payroll', icon: Users },
            { name: 'Business Registration', href: '/services/business', icon: Building },
            { name: 'Digital Marketing', href: '/services/digital-marketing', icon: Phone },
        ]
    },
    { name: 'About', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
]

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled
            ? 'bg-white/95 dark:bg-gray-950/95 backdrop-blur-lg shadow-lg'
            : 'bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm'
            } border-b border-gray-200/50 dark:border-gray-800/50`}>
            <div className="container flex h-20 items-center justify-between">
                <Link href="/" className="flex items-center space-x-3 group">
                    {/* Using your AJPR World logo */}
                    <div className="relative w-32 h-12 group-hover:scale-105 transition-transform duration-300">
                        <Image
                            src="/logo/ajpr-logo.png" // You'll place your logo file here
                            alt="AJPR World Private Limited"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center space-x-8">
                    {navigation.map((item) => (
                        <div
                            key={item.name}
                            className="relative group"
                            onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                            onMouseLeave={() => setActiveDropdown(null)}
                        >
                            <Link
                                href={item.href}
                                className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium py-2"
                            >
                                {item.name}
                                {item.dropdown && <ChevronDown className="ml-1 h-4 w-4" />}
                            </Link>

                            {item.dropdown && activeDropdown === item.name && (
                                <div className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-gray-900 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-800 py-2 animate-fade-down">
                                    {item.dropdown.map((subItem) => {
                                        const IconComponent = subItem.icon
                                        return (
                                            <Link
                                                key={subItem.name}
                                                href={subItem.href}
                                                className="flex items-center px-4 py-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-950/20 transition-colors"
                                            >
                                                <IconComponent className="w-5 h-5 mr-3 text-blue-600" />
                                                <div>
                                                    <div className="font-medium">{subItem.name}</div>
                                                </div>
                                            </Link>
                                        )
                                    })}
                                </div>
                            )}
                        </div>
                    ))}

                    <div className="flex items-center space-x-4">
                        <ModeToggle />
                        <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300" asChild>
                            <Link href="/contact">Get Quote</Link>
                        </Button>
                    </div>
                </nav>

                {/* Mobile Navigation */}
                <div className="lg:hidden flex items-center space-x-2">
                    <ModeToggle />
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="outline" size="icon">
                                <Menu className="h-5 w-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-80">
                            <div className="flex flex-col space-y-6 mt-8">
                                <div className="flex items-center space-x-2 pb-4 border-b">
                                    <Image
                                        src="/logo/ajpr-logo.png"
                                        alt="AJPR World"
                                        width={120}
                                        height={40}
                                        className="object-contain"
                                    />
                                </div>
                                {navigation.map((item) => (
                                    <div key={item.name}>
                                        <Link
                                            href={item.href}
                                            onClick={() => setIsOpen(false)}
                                            className="text-lg font-medium hover:text-blue-600 transition-colors block"
                                        >
                                            {item.name}
                                        </Link>
                                        {item.dropdown && (
                                            <div className="ml-4 mt-2 space-y-2">
                                                {item.dropdown.map((subItem) => {
                                                    const IconComponent = subItem.icon
                                                    return (
                                                        <Link
                                                            key={subItem.name}
                                                            href={subItem.href}
                                                            onClick={() => setIsOpen(false)}
                                                            className="flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors py-1"
                                                        >
                                                            <IconComponent className="w-4 h-4 mr-2" />
                                                            {subItem.name}
                                                        </Link>
                                                    )
                                                })}
                                            </div>
                                        )}
                                    </div>
                                ))}
                                <Button className="mt-6 bg-gradient-to-r from-blue-600 to-purple-600" asChild>
                                    <Link href="/contact">Get Quote</Link>
                                </Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}
