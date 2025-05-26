import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
import SEOHead from '@/components/seo-head';

export default function Blog() {
  const featuredStory = {
    title: "Manufacturing Giant Achieves 40% Efficiency Boost",
    description: "Global manufacturing company transformed their operations with our integrated IoT and analytics platform, resulting in significant cost savings and productivity improvements.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
    stats: [
      { value: "40%", label: "Efficiency Increase" },
      { value: "$2.5M", label: "Annual Savings" },
      { value: "6 Months", label: "Implementation" }
    ]
  };

  const stories = [
    {
      category: "Retail Industry",
      title: "Omnichannel Transformation Drives 60% Sales Growth",
      description: "Regional retailer unified online and offline experiences, resulting in increased customer satisfaction and revenue.",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250"
    },
    {
      category: "Healthcare",
      title: "Digital Health Platform Improves Patient Outcomes",
      description: "Healthcare network deployed telemedicine solution, enhancing patient care and operational efficiency.",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250"
    },
    {
      category: "Financial Services",
      title: "AI-Powered Risk Management Reduces Losses by 35%",
      description: "Investment firm implemented machine learning algorithms for enhanced risk assessment and portfolio optimization.",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250"
    }
  ];

  return (
    <>
      <SEOHead
        title="Success Stories - TechCorp Solutions"
        description="Read real success stories and case studies of how TechCorp Solutions has helped businesses achieve digital transformation and drive measurable growth."
        path="/blog"
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-lg">Success Stories</span>
            <h1 className="text-4xl lg:text-5xl font-bold text-secondary mt-4 mb-6">Real Results for Real Businesses</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Discover how we've helped organizations across industries achieve their digital transformation goals and drive measurable business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="overflow-hidden shadow-lg">
            <div className="lg:grid lg:grid-cols-2">
              <div className="p-12">
                <Badge className="inline-flex items-center bg-green-100 text-green-700 mb-6">
                  <Trophy className="w-4 h-4 mr-2" />
                  Featured Case Study
                </Badge>
                <h2 className="text-3xl font-bold text-secondary mb-6">{featuredStory.title}</h2>
                <p className="text-lg text-slate-600 mb-8">
                  {featuredStory.description}
                </p>
                
                <div className="grid grid-cols-3 gap-6 mb-8">
                  {featuredStory.stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-primary">{stat.value}</div>
                      <div className="text-sm text-slate-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
                
                <Button className="bg-primary text-white hover:bg-primary/90">
                  Read Full Story
                </Button>
              </div>
              
              <div className="h-64 lg:h-auto">
                <img
                  src={featuredStory.image}
                  alt="Modern manufacturing facility with automation equipment"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Success Stories Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-6">More Success Stories</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Explore more case studies and see how we've helped businesses across different industries achieve their goals.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <Badge variant="secondary" className="text-primary mb-2">{story.category}</Badge>
                  <h3 className="text-xl font-bold text-secondary mb-3">{story.title}</h3>
                  <p className="text-slate-600 mb-4">{story.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-500">{story.readTime}</span>
                    <Button variant="ghost" className="text-primary font-semibold hover:text-primary/80 p-0">
                      Read Story <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* View All Button */}
          <div className="text-center mt-12">
            <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
              View All Success Stories
            </Button>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-6">Industries We Serve</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our solutions have helped businesses across various industries achieve digital transformation and operational excellence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-secondary mb-2">Manufacturing</h3>
              <p className="text-slate-600 text-sm">IoT, automation, and process optimization</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-secondary mb-2">Retail</h3>
              <p className="text-slate-600 text-sm">Omnichannel experiences and e-commerce</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-secondary mb-2">Healthcare</h3>
              <p className="text-slate-600 text-sm">Digital health and patient management</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-secondary mb-2">Financial</h3>
              <p className="text-slate-600 text-sm">Fintech solutions and risk management</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Write Your Success Story?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join the hundreds of businesses that have transformed their operations with our innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
              <Link href="/contact">Start Your Transformation</Link>
            </Button>
            <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
              <Link href="/services">Explore Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
