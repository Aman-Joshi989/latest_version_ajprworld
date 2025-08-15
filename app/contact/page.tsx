'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '../../components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import {
    Mail, Phone, MapPin, Clock, Send,
    MessageCircle, Calendar, ArrowRight
} from 'lucide-react'

const contactInfo = [
    {
        icon: Mail,
        title: 'Email Us',
        value: 'info@ajprworld.com',
        description: 'Send us an email anytime',
        action: 'mailto:info@ajprworld.com'
    },
    {
        icon: Phone,
        title: 'Call Us',
        value: '+91 98765 43210',
        description: 'Mon-Sat from 9am to 6pm',
        action: 'tel:+919876543210'
    },
    {
        icon: MapPin,
        title: 'Visit Us',
        value: 'Haldwani, Uttarakhand',
        description: 'Come say hello at our office',
        action: '#'
    },
    {
        icon: MessageCircle,
        title: 'Live Chat',
        value: 'Chat with us',
        description: 'We\'re online right now',
        action: '#'
    }
]

const services = [
    'Web Development',
    'Mobile App Development',
    'UI/UX Design',
    'Digital Marketing',
    'Cloud Solutions',
    'E-commerce Development',
    'API Development',
    'Other'
]

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        budget: '',
        message: '',
        timeline: ''
    })

    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000))

        alert('Thank you for your message! We\'ll get back to you within 24 hours.')
        setFormData({
            name: '',
            email: '',
            phone: '',
            company: '',
            service: '',
            budget: '',
            message: '',
            timeline: ''
        })
        setIsSubmitting(false)
    }

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950/20 dark:to-indigo-950/20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <Badge variant="secondary" className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300">
                            Get In Touch
                        </Badge>
                        <h1 className="text-4xl lg:text-6xl font-bold">
                            Let's Build Something{' '}
                            <span className="gradient-text">Amazing Together</span>
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Ready to transform your business with cutting-edge technology?
                            We're here to help. Get in touch for a free consultation.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Contact Information */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
                                <p className="text-gray-600 dark:text-gray-300 mb-8">
                                    Have a project in mind? Let's discuss how we can help bring your vision to life.
                                </p>
                            </div>

                            <div className="space-y-6">
                                {contactInfo.map((info, index) => {
                                    const IconComponent = info.icon
                                    return (
                                        <Card key={index} className="p-4 hover:shadow-md transition-all duration-300 border-gray-200 dark:border-gray-800">
                                            <CardContent className="p-0">
                                                <div className="flex items-center space-x-4">
                                                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                                                        <IconComponent className="h-6 w-6 text-blue-600" />
                                                    </div>
                                                    <div className="flex-1">
                                                        <h3 className="font-semibold">{info.title}</h3>
                                                        <p className="text-blue-600 font-medium">{info.value}</p>
                                                        <p className="text-sm text-gray-600 dark:text-gray-400">{info.description}</p>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    )
                                })}
                            </div>

                            <Card className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-blue-200 dark:border-blue-800">
                                <CardContent className="p-0 space-y-4">
                                    <div className="flex items-center space-x-3">
                                        <Clock className="h-6 w-6 text-blue-600" />
                                        <h3 className="font-semibold">Business Hours</h3>
                                    </div>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex justify-between">
                                            <span>Monday - Friday</span>
                                            <span className="font-medium">9:00 AM - 6:00 PM</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Saturday</span>
                                            <span className="font-medium">10:00 AM - 4:00 PM</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Sunday</span>
                                            <span className="font-medium">Closed</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <Card className="border-gray-200 dark:border-gray-800">
                                <CardHeader>
                                    <CardTitle className="text-2xl">Send us a Message</CardTitle>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        Fill out the form below and we'll get back to you within 24 hours.
                                    </p>
                                </CardHeader>
                                <CardContent>
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <Label htmlFor="name">Full Name *</Label>
                                                <Input
                                                    id="name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleInputChange}
                                                    placeholder="Your full name"
                                                    required
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="email">Email Address *</Label>
                                                <Input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    placeholder="your.email@example.com"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <Label htmlFor="phone">Phone Number</Label>
                                                <Input
                                                    id="phone"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    placeholder="+91 98765 43210"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="company">Company Name</Label>
                                                <Input
                                                    id="company"
                                                    name="company"
                                                    value={formData.company}
                                                    onChange={handleInputChange}
                                                    placeholder="Your company name"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <Label htmlFor="service">Service Interested In *</Label>
                                                <select
                                                    id="service"
                                                    name="service"
                                                    value={formData.service}
                                                    onChange={handleInputChange}
                                                    className="w-full px-3 py-2 border border-gray-200 dark:border-gray-800 rounded-md bg-white dark:bg-gray-900"
                                                    required
                                                >
                                                    <option value="">Select a service</option>
                                                    {services.map((service) => (
                                                        <option key={service} value={service}>
                                                            {service}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="budget">Project Budget</Label>
                                                <select
                                                    id="budget"
                                                    name="budget"
                                                    value={formData.budget}
                                                    onChange={handleInputChange}
                                                    className="w-full px-3 py-2 border border-gray-200 dark:border-gray-800 rounded-md bg-white dark:bg-gray-900"
                                                >
                                                    <option value="">Select budget range</option>
                                                    <option value="under-25k">Under ₹25,000</option>
                                                    <option value="25k-50k">₹25,000 - ₹50,000</option>
                                                    <option value="50k-100k">₹50,000 - ₹1,00,000</option>
                                                    <option value="100k-250k">₹1,00,000 - ₹2,50,000</option>
                                                    <option value="above-250k">Above ₹2,50,000</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="timeline">Project Timeline</Label>
                                            <select
                                                id="timeline"
                                                name="timeline"
                                                value={formData.timeline}
                                                onChange={handleInputChange}
                                                className="w-full px-3 py-2 border border-gray-200 dark:border-gray-800 rounded-md bg-white dark:bg-gray-900"
                                            >
                                                <option value="">Select timeline</option>
                                                <option value="asap">ASAP</option>
                                                <option value="1-month">Within 1 month</option>
                                                <option value="2-3-months">2-3 months</option>
                                                <option value="3-6-months">3-6 months</option>
                                                <option value="flexible">Flexible</option>
                                            </select>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="message">Project Description *</Label>
                                            <Textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                placeholder="Tell us about your project requirements, goals, and any specific features you need..."
                                                rows={5}
                                                required
                                            />
                                        </div>

                                        <Button
                                            type="submit"
                                            size="lg"
                                            className="w-full bg-blue-600 hover:bg-blue-700"
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    Send Message
                                                    <Send className="ml-2 h-4 w-4" />
                                                </>
                                            )}
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Contact Options */}
            <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
                <div className="container mx-auto px-4">
                    <div className="text-center space-y-6 mb-12">
                        <h2 className="text-3xl font-bold">Need Immediate Assistance?</h2>
                        <p className="text-gray-600 dark:text-gray-300">
                            Choose the quickest way to reach us
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 border-gray-200 dark:border-gray-800">
                            <CardContent className="space-y-4 p-0">
                                <div className="mx-auto w-fit p-4 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                                    <Calendar className="h-8 w-8 text-blue-600" />
                                </div>
                                <h3 className="text-xl font-bold">Schedule a Call</h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Book a free 30-minute consultation
                                </p>
                                <Button variant="outline" className="w-full border-gray-200 dark:border-gray-800">
                                    Schedule Now
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 border-gray-200 dark:border-gray-800">
                            <CardContent className="space-y-4 p-0">
                                <div className="mx-auto w-fit p-4 bg-green-100 dark:bg-green-900/30 rounded-full">
                                    <MessageCircle className="h-8 w-8 text-green-600" />
                                </div>
                                <h3 className="text-xl font-bold">Live Chat</h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Chat with our team instantly
                                </p>
                                <Button variant="outline" className="w-full border-gray-200 dark:border-gray-800">
                                    Start Chat
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 border-gray-200 dark:border-gray-800">
                            <CardContent className="space-y-4 p-0">
                                <div className="mx-auto w-fit p-4 bg-purple-100 dark:bg-purple-900/30 rounded-full">
                                    <Phone className="h-8 w-8 text-purple-600" />
                                </div>
                                <h3 className="text-xl font-bold">Call Directly</h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Speak with us right now
                                </p>
                                <Button variant="outline" className="w-full border-gray-200 dark:border-gray-800" asChild>
                                    <a href="tel:+919876543210">
                                        Call Now
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </a>
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    )
}
