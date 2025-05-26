import { Link } from 'wouter';
import { Bolt, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Bolt className="w-4 h-4 text-white" />
              </div>
              <span className="ml-2 text-xl font-bold">TechCorp</span>
            </div>
            <p className="text-slate-300 mb-6">
              Leading provider of innovative business solutions. We help companies transform their operations and achieve sustainable growth.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center text-slate-300 hover:bg-primary hover:text-white transition-all"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center text-slate-300 hover:bg-primary hover:text-white transition-all"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center text-slate-300 hover:bg-primary hover:text-white transition-all"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center text-slate-300 hover:bg-primary hover:text-white transition-all"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.618 5.367 11.986 11.988 11.986S24.014 18.605 24.014 11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-2.509 0-4.551-2.041-4.551-4.551S5.94 7.885 8.449 7.885s4.551 2.042 4.551 4.552-2.042 4.551-4.551 4.551zm7.424-8.157c-.569 0-1.032-.463-1.032-1.032s.463-1.032 1.032-1.032 1.032.463 1.032 1.032-.463 1.032-1.032 1.032z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-slate-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-slate-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-slate-300 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/products" className="text-slate-300 hover:text-white transition-colors">Products</Link></li>
              <li><Link href="/blog" className="text-slate-300 hover:text-white transition-colors">Success Stories</Link></li>
              <li><Link href="/contact" className="text-slate-300 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Digital Consulting</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Custom Development</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Cloud Solutions</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Data Analytics</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Cybersecurity</a></li>
              <li><a href="#" className="text-slate-300 hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <span className="text-slate-300">123 Business District, NY 10001</span>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <a href="tel:+1-555-123-4567" className="text-slate-300 hover:text-white transition-colors">+1 (555) 123-4567</a>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                <a href="mailto:contact@techcorp.com" className="text-slate-300 hover:text-white transition-colors">contact@techcorp.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-300 text-sm mb-4 md:mb-0">
              © 2024 TechCorp Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-slate-300 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
