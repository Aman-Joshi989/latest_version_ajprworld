import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Users, Target, Award, MapPin, Calendar, Building } from 'lucide-react'

const teamMembers = [
    {
        name: 'Aman Joshi',
        role: 'Founder & Lead Developer',
        expertise: 'Full-Stack Development, System Architecture',
        initials: 'AJ'
    },
    {
        name: 'Priya Rawat',
        role: 'UI/UX Designer',
        expertise: 'Design Systems, User Experience',
        initials: 'PR'
    },
    {
        name: 'Rohit Sharma',
        role: 'DevOps Engineer',
        expertise: 'Cloud Infrastructure, Automation',
        initials: 'RS'
    }
]

const companyStats = [
    { icon: Calendar, label: 'Founded', value: '2025' },
    { icon: MapPin, label: 'Location', value: 'Haldwani, Uttarakhand' },
    { icon: Users, label: 'Team Size', value: '5+ Experts' },
    { icon: Building, label: 'Company Type', value: 'Private Limited' }
]

export default function AboutPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950/20 dark:to-indigo-950/20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <Badge variant="secondary" className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300">
                            About AJPR World
                        </Badge>
                        <h1 className="text-4xl lg:text-6xl font-bold">
                            Building Tomorrow's{' '}
                            <span className="gradient-text">Digital Solutions</span>{' '}
                            Today
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Founded in 2025, AJPR World Private Limited is a technology company
                            committed to delivering innovative software solutions that drive business growth.
                        </p>
                    </div>
                </div>
            </section>

            {/* Company Stats */}
            <section className="py-16 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-4 gap-8">
                        {companyStats.map((stat, index) => {
                            const IconComponent = stat.icon
                            return (
                                <Card key={index} className="text-center p-6 border-gray-200 dark:border-gray-800">
                                    <CardContent className="space-y-4 p-0">
                                        <div className="mx-auto w-fit p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                                            <IconComponent className="h-8 w-8 text-blue-600" />
                                        </div>
                                        <div>
                                            <div className="text-2xl font-bold text-blue-600 mb-1">{stat.value}</div>
                                            <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
                                        </div>
                                    </CardContent>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-24 bg-gray-50 dark:bg-gray-900/50">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="space-y-6">
                                <h2 className="text-3xl lg:text-4xl font-bold">Our Story</h2>
                                <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                                    <p>
                                        AJPR World was founded with a simple yet powerful vision: to bridge the gap
                                        between innovative technology and business success. Based in the beautiful
                                        city of Haldwani, Uttarakhand, we bring global expertise to local businesses.
                                    </p>
                                    <p>
                                        Our journey began with the understanding that every business deserves access
                                        to cutting-edge technology solutions. We've built our reputation on delivering
                                        exceptional results using modern technologies like Next.js, TypeScript, and
                                        cloud-native architectures.
                                    </p>
                                    <p>
                                        Today, we're proud to be your trusted technology partner, helping businesses
                                        transform their ideas into successful digital products.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-6">
                            <Card className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-blue-200 dark:border-blue-800">
                                <div className="flex items-center space-x-4">
                                    <Target className="h-8 w-8 text-blue-600" />
                                    <div>
                                        <h3 className="font-bold text-lg">Our Mission</h3>
                                        <p className="text-gray-600 dark:text-gray-300">
                                            To empower businesses with innovative technology solutions that drive growth and success.
                                        </p>
                                    </div>
                                </div>
                            </Card>

                            <Card className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-green-200 dark:border-green-800">
                                <div className="flex items-center space-x-4">
                                    <Award className="h-8 w-8 text-green-600" />
                                    <div>
                                        <h3 className="font-bold text-lg">Our Vision</h3>
                                        <p className="text-gray-600 dark:text-gray-300">
                                            To be the leading technology partner for businesses seeking digital transformation.
                                        </p>
                                    </div>
                                </div>
                            </Card>

                            <Card className="p-6 bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-950/20 dark:to-violet-950/20 border-purple-200 dark:border-purple-800">
                                <div className="flex items-center space-x-4">
                                    <Users className="h-8 w-8 text-purple-600" />
                                    <div>
                                        <h3 className="font-bold text-lg">Our Values</h3>
                                        <p className="text-gray-600 dark:text-gray-300">
                                            Excellence, integrity, innovation, and customer success guide everything we do.
                                        </p>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-24 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-4">
                    <div className="text-center space-y-6 mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold">Meet Our Team</h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                            Our diverse team of experts brings together years of experience in
                            software development, design, and technology consulting.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {teamMembers.map((member, index) => (
                            <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300 border-gray-200 dark:border-gray-800">
                                <CardContent className="space-y-4 p-0">
                                    <div className="w-20 h-20 bg-blue-600 text-white rounded-full mx-auto flex items-center justify-center text-2xl font-bold">
                                        {member.initials}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                                        <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm">{member.expertise}</p>
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
                            Ready to Work with Us?
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300">
                            Let's discuss how AJPR World can help transform your business with
                            innovative technology solutions.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                                <Link href="/contact">Get in Touch</Link>
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

