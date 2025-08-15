import Link from 'next/link'
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
            <div className="container mx-auto px-4 py-12">
                <div className="grid md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <div className="bg-blue-600 text-white rounded-lg p-2 font-bold text-xl">
                                AJPR
                            </div>
                            <span className="font-bold text-xl">World</span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400">
                            Your trusted technology partner for digital transformation and innovative solutions.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">
                                <Linkedin className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">
                                <Twitter className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600">
                                <Github className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-semibold text-lg">Services</h4>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                            <li><Link href="/services" className="hover:text-blue-600 transition-colors">Web Development</Link></li>
                            <li><Link href="/services" className="hover:text-blue-600 transition-colors">Mobile Apps</Link></li>
                            <li><Link href="/services" className="hover:text-blue-600 transition-colors">Digital Marketing</Link></li>
                            <li><Link href="/services" className="hover:text-blue-600 transition-colors">IT Consulting</Link></li>
                            <li><Link href="/services" className="hover:text-blue-600 transition-colors">Cloud Solutions</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-semibold text-lg">Company</h4>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                            <li><Link href="/about" className="hover:text-blue-600 transition-colors">About Us</Link></li>
                            <li><Link href="/portfolio" className="hover:text-blue-600 transition-colors">Portfolio</Link></li>
                            <li><Link href="/contact" className="hover:text-blue-600 transition-colors">Contact</Link></li>
                            <li><Link href="/careers" className="hover:text-blue-600 transition-colors">Careers</Link></li>
                            <li><Link href="/blog" className="hover:text-blue-600 transition-colors">Blog</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-semibold text-lg">Contact Info</h4>
                        <div className="space-y-3 text-gray-600 dark:text-gray-400">
                            <div className="flex items-center space-x-2">
                                <MapPin className="h-4 w-4 flex-shrink-0" />
                                <span>Haldwani, Uttarakhand, India</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Mail className="h-4 w-4 flex-shrink-0" />
                                <span>info@ajprworld.com</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Phone className="h-4 w-4 flex-shrink-0" />
                                <span>+91 98765 43210</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center text-gray-600 dark:text-gray-400">
                    <p>&copy; 2025 AJPR World Private Limited. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
