import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Users, CheckCircle, BarChart3, MessageSquare, Smartphone, Cog, Database, ArrowRight, Shield } from 'lucide-react';
import { Link } from 'wouter';
import SEOHead from '@/components/seo-head';

export default function Products() {
  const mainProduct = {
    name: "TechCorp Business Suite",
    description: "An all-in-one business management platform that combines CRM, project management, analytics, and communication tools in a single, intuitive interface.",
    features: [
      { icon: Users, label: "CRM & Lead Management" },
      { icon: CheckCircle, label: "Project Tracking" },
      { icon: BarChart3, label: "Advanced Analytics" },
      { icon: MessageSquare, label: "Team Collaboration" }
    ]
  };

  const additionalProducts = [
    {
      icon: Smartphone,
      title: "Mobile Workforce App",
      description: "Empower your field teams with real-time communication, task management, and reporting capabilities."
    },
    {
      icon: Cog,
      title: "Process Automation",
      description: "Streamline repetitive tasks and workflows with intelligent automation tools and custom integrations."
    },
    {
      icon: Database,
      title: "Data Intelligence",
      description: "Advanced analytics platform with AI-powered insights, predictive modeling, and custom dashboards."
    }
  ];

  return (
    <>
      <SEOHead
        title="Products - TechCorp Solutions"
        description="Explore our ready-to-deploy software products including TechCorp Business Suite, Mobile Workforce App, Process Automation, and Data Intelligence platforms."
        path="/products"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-lg">Our Products</span>
            <h1 className="text-4xl lg:text-5xl font-bold text-secondary mt-4 mb-6">Ready-to-Deploy Solutions</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Powerful, pre-built software products designed to accelerate your business operations and drive immediate value.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Product */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="inline-flex items-center bg-primary/10 text-primary mb-6">
                <Star className="w-4 h-4 mr-2" />
                Featured Product
              </Badge>
              <h2 className="text-3xl font-bold text-secondary mb-6">{mainProduct.name}</h2>
              <p className="text-lg text-slate-600 mb-8">
                {mainProduct.description}
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                {mainProduct.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <feature.icon className="w-5 h-5 text-primary mr-3" />
                    <span className="text-slate-700">{feature.label}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
                  Start Free Trial
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                  View Demo
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Modern business dashboard interface on laptop screen"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Products */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-6">More Solutions for Your Business</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Discover our complete portfolio of business solutions designed to optimize different aspects of your operations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {additionalProducts.map((product, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <product.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-4">{product.title}</h3>
                  <p className="text-slate-600 mb-6">{product.description}</p>
                  <Button variant="ghost" className="text-primary font-semibold hover:text-primary/80 p-0">
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-6">Why Choose Our Products?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our products are built with modern technologies and designed to scale with your business needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-secondary mb-2">Fast Deployment</h3>
              <p className="text-slate-600">Get up and running in days, not months</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-secondary mb-2">User-Friendly</h3>
              <p className="text-slate-600">Intuitive interfaces that require minimal training</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-secondary mb-2">Scalable</h3>
              <p className="text-slate-600">Grows with your business from startup to enterprise</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-secondary mb-2">Secure</h3>
              <p className="text-slate-600">Enterprise-grade security and compliance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-6">Flexible Pricing Options</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Choose the plan that best fits your business size and requirements. All plans include full support and regular updates.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-secondary mb-4">Starter</h3>
                <div className="text-4xl font-bold text-primary mb-2">$49</div>
                <div className="text-slate-600 mb-6">per month</div>
                <ul className="space-y-3 text-left mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Up to 10 users
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Basic CRM features
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Email support
                  </li>
                </ul>
                <Button className="w-full" variant="outline">
                  Start Free Trial
                </Button>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow border-primary">
              <CardContent className="p-8 text-center">
                <Badge className="mb-4">Most Popular</Badge>
                <h3 className="text-2xl font-bold text-secondary mb-4">Professional</h3>
                <div className="text-4xl font-bold text-primary mb-2">$149</div>
                <div className="text-slate-600 mb-6">per month</div>
                <ul className="space-y-3 text-left mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Up to 50 users
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Full platform access
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Priority support
                  </li>
                </ul>
                <Button className="w-full bg-primary text-white hover:bg-primary/90">
                  Start Free Trial
                </Button>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-secondary mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-primary mb-2">$399</div>
                <div className="text-slate-600 mb-6">per month</div>
                <ul className="space-y-3 text-left mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Unlimited users
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Custom integrations
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    Dedicated support
                  </li>
                </ul>
                <Button className="w-full" variant="outline">
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Experience Our Products?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Start your free trial today and see how our solutions can transform your business operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
              <Link href="/contact">Start Free Trial</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Link href="/contact">Request Demo</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
