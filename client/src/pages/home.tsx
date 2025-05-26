import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PlayCircle, Users, Award, Clock, CheckCircle } from 'lucide-react';
import SEOHead from '@/components/seo-head';

export default function Home() {
  return (
    <>
      <SEOHead
        title="TechCorp Solutions - Professional Business Services"
        description="Leading provider of innovative business solutions. Discover our comprehensive services, products, and success stories."
        path="/"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="mb-12 lg:mb-0">
              <h1 className="text-4xl lg:text-6xl font-bold text-secondary leading-tight mb-6">
                Innovative Solutions for
                <span className="text-primary"> Modern Business</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                We deliver cutting-edge technology solutions that drive growth, efficiency, and success for businesses of all sizes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90">
                  <Link href="/services">Explore Our Services</Link>
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-primary text-primary hover:bg-primary hover:text-white">
                  <PlayCircle className="w-5 h-5 mr-2" />
                  Watch Demo
                </Button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-slate-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-slate-600 mt-1">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">1000+</div>
                  <div className="text-sm text-slate-600 mt-1">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">10+</div>
                  <div className="text-sm text-slate-600 mt-1">Years</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Modern office workspace with team collaboration"
                className="rounded-2xl shadow-2xl w-full"
              />
              
              {/* Floating cards */}
              <div className="absolute -top-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-slate-200">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-sm font-medium text-slate-700">99% Uptime</span>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 border border-slate-200">
                <div className="flex items-center">
                  <Award className="w-4 h-4 text-yellow-400 mr-2" />
                  <span className="text-sm font-medium text-slate-700">4.9/5 Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-lg">About TechCorp Solutions</span>
            <h2 className="text-4xl font-bold text-secondary mt-4 mb-6">Building the Future of Business Technology</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              With over a decade of experience, we've been at the forefront of digital transformation, helping businesses adapt and thrive in an ever-evolving technological landscape.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Professional team meeting in modern conference room"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
            
            <div>
              <h3 className="text-3xl font-bold text-secondary mb-6">Our Mission & Vision</h3>
              <p className="text-lg text-slate-600 mb-8">
                We believe technology should empower businesses to achieve their full potential. Our mission is to deliver innovative, scalable solutions that drive real business value and create lasting partnerships with our clients.
              </p>
              
              {/* Feature list */}
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary mb-2">Expert Team</h4>
                    <p className="text-slate-600">Certified professionals with deep industry expertise</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary mb-2">Proven Results</h4>
                    <p className="text-slate-600">Track record of successful implementations and satisfied clients</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary mb-2">24/7 Support</h4>
                    <p className="text-slate-600">Round-the-clock assistance and maintenance services</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Button asChild className="bg-primary text-white hover:bg-primary/90">
                  <Link href="/about">Learn More About Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-lg">Our Services</span>
            <h2 className="text-4xl font-bold text-secondary mt-4 mb-6">Comprehensive Solutions for Every Need</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From strategy to implementation, we offer end-to-end services designed to accelerate your digital transformation journey.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4">Digital Consulting</h3>
                <p className="text-slate-600">
                  Strategic guidance to help you navigate digital transformation and optimize your technology investments.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4">Custom Development</h3>
                <p className="text-slate-600">
                  Tailored software solutions built to meet your specific business requirements and scale with your growth.
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4">Cloud Solutions</h3>
                <p className="text-slate-600">
                  Secure, scalable cloud infrastructure and migration services to modernize your IT environment.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center">
            <Button asChild size="lg" className="bg-primary text-white hover:bg-primary/90">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our solutions can help you achieve your goals. Get started with a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
              <Link href="/contact">Get Free Consultation</Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
              <Link href="/products">View Our Products</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
