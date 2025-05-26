import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Lightbulb, Code, Cloud, BarChart3, Shield, Headphones, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
import SEOHead from '@/components/seo-head';

export default function Services() {
  const services = [
    {
      icon: Lightbulb,
      title: "Digital Consulting",
      description: "Strategic guidance to help you navigate digital transformation and optimize your technology investments.",
      features: [
        "Technology Assessment",
        "Digital Strategy",
        "Process Optimization"
      ]
    },
    {
      icon: Code,
      title: "Custom Development",
      description: "Tailored software solutions built to meet your specific business requirements and scale with your growth.",
      features: [
        "Web Applications",
        "Mobile Apps",
        "API Integration"
      ]
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Secure, scalable cloud infrastructure and migration services to modernize your IT environment.",
      features: [
        "Cloud Migration",
        "Infrastructure Setup",
        "Security & Compliance"
      ]
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      description: "Transform your data into actionable insights with advanced analytics and business intelligence solutions.",
      features: [
        "Data Visualization",
        "Predictive Analytics",
        "Real-time Reporting"
      ]
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your business from evolving cyber threats and vulnerabilities.",
      features: [
        "Security Audits",
        "Threat Monitoring",
        "Incident Response"
      ]
    },
    {
      icon: Headphones,
      title: "Support & Maintenance",
      description: "Ongoing support and maintenance services to ensure your systems run smoothly and efficiently.",
      features: [
        "24/7 Monitoring",
        "Regular Updates",
        "Performance Optimization"
      ]
    }
  ];

  return (
    <>
      <SEOHead
        title="Services - TechCorp Solutions"
        description="Discover our comprehensive technology services including digital consulting, custom development, cloud solutions, data analytics, cybersecurity, and 24/7 support."
        path="/services"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-lg">Our Services</span>
            <h1 className="text-4xl lg:text-5xl font-bold text-secondary mt-4 mb-6">Comprehensive Solutions for Every Need</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From strategy to implementation, we offer end-to-end services designed to accelerate your digital transformation journey.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-4">{service.title}</h3>
                  <p className="text-slate-600 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2 text-sm text-slate-600 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="ghost" className="text-primary font-semibold hover:text-primary/80 p-0">
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-6">Our Proven Process</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We follow a structured approach to ensure successful project delivery and client satisfaction.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-bold text-secondary mb-4">Discovery</h3>
              <p className="text-slate-600">
                We analyze your business needs, current systems, and objectives to create a comprehensive understanding.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-bold text-secondary mb-4">Strategy</h3>
              <p className="text-slate-600">
                We develop a tailored strategy and roadmap that aligns with your business goals and technical requirements.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-bold text-secondary mb-4">Implementation</h3>
              <p className="text-slate-600">
                Our expert team executes the solution using best practices and industry-leading technologies.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                4
              </div>
              <h3 className="text-xl font-bold text-secondary mb-4">Support</h3>
              <p className="text-slate-600">
                We provide ongoing support and optimization to ensure your solution continues to deliver value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-secondary mb-6">Why Choose TechCorp Solutions?</h2>
              <p className="text-lg text-slate-600 mb-8">
                We combine deep technical expertise with a client-first approach to deliver solutions that truly make a difference for your business.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary mb-2">Industry Expertise</h4>
                    <p className="text-slate-600">Our team has deep knowledge across multiple industries and technologies</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary mb-2">Proven Methodology</h4>
                    <p className="text-slate-600">We use time-tested processes and best practices for consistent results</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary mb-2">Scalable Solutions</h4>
                    <p className="text-slate-600">Our solutions grow with your business and adapt to changing needs</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <CheckCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary mb-2">Ongoing Partnership</h4>
                    <p className="text-slate-600">We build long-term relationships and provide continuous support</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Team collaborating on technology solutions"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and how our services can help you achieve your business objectives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
              <Link href="/contact">Start Your Project</Link>
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
