import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Users, Target, Award } from 'lucide-react';
import { Link } from 'wouter';
import SEOHead from '@/components/seo-head';

export default function About() {
  return (
    <>
      <SEOHead
        title="About Us - TechCorp Solutions"
        description="Learn about TechCorp Solutions' mission, vision, and team. Discover our decade of experience in digital transformation and business technology solutions."
        path="/about"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-semibold text-lg">About TechCorp Solutions</span>
            <h1 className="text-4xl lg:text-5xl font-bold text-secondary mt-4 mb-6">Building the Future of Business Technology</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              With over a decade of experience, we've been at the forefront of digital transformation, helping businesses adapt and thrive in an ever-evolving technological landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
                alt="Professional team meeting in modern conference room"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-secondary mb-6">Our Mission & Vision</h2>
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
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-6">Our Core Values</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              These principles guide everything we do and shape how we deliver value to our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4">Client-Centric</h3>
                <p className="text-slate-600">
                  We put our clients at the center of everything we do, ensuring their success is our primary focus.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4">Innovation</h3>
                <p className="text-slate-600">
                  We continuously explore new technologies and methodologies to deliver cutting-edge solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4">Excellence</h3>
                <p className="text-slate-600">
                  We maintain the highest standards in all our work, delivering quality that exceeds expectations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-6">Our Impact in Numbers</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              These numbers reflect our commitment to delivering exceptional results for our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-lg font-semibold text-secondary mb-2">Happy Clients</div>
              <div className="text-slate-600">Businesses transformed with our solutions</div>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">1000+</div>
              <div className="text-lg font-semibold text-secondary mb-2">Projects Completed</div>
              <div className="text-slate-600">Successful implementations delivered</div>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">10+</div>
              <div className="text-lg font-semibold text-secondary mb-2">Years Experience</div>
              <div className="text-slate-600">Decades of industry expertise</div>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">99%</div>
              <div className="text-lg font-semibold text-secondary mb-2">Client Satisfaction</div>
              <div className="text-slate-600">Consistently high satisfaction rates</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary mb-6">Meet Our Leadership Team</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our experienced leadership team brings together decades of industry expertise and vision.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <img src="/assets/images/sarah-johnson.jpg" alt="Sarah Johnson" className="w-24 h-24 rounded-full mx-auto mb-6 object-cover" />
                <h3 className="text-xl font-bold text-secondary mb-2">Sarah Johnson</h3>
                <p className="text-primary font-medium mb-4">Chief Executive Officer</p>
                <p className="text-slate-600">
                  20+ years leading technology companies and driving digital transformation initiatives.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <img src="/assets/images/michael-chen.jpg" alt="Michael Chen" className="w-24 h-24 rounded-full mx-auto mb-6 object-cover" />
                <h3 className="text-xl font-bold text-secondary mb-2">Michael Chen</h3>
                <p className="text-primary font-medium mb-4">Chief Technology Officer</p>
                <p className="text-slate-600">
                  Expert in cloud architecture and enterprise software development with 15+ years experience.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <img src="/assets/images/emily-rodriguez.jpg" alt="Emily Rodriguez" className="w-24 h-24 rounded-full mx-auto mb-6 object-cover" />
                <h3 className="text-xl font-bold text-secondary mb-2">Emily Rodriguez</h3>
                <p className="text-primary font-medium mb-4">Head of Operations</p>
                <p className="text-slate-600">
                  Specializes in process optimization and client success with a proven track record of excellence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Work with Our Team?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our expertise can help transform your business and achieve your goals.
          </p>
          <Button asChild size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
