import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Bolt, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navigation() {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'Home', path: '/' },
    { href: '/about', label: 'About Us', path: '/about' },
    { href: '/services', label: 'Services', path: '/services' },
    { href: '/products', label: 'Products', path: '/products' },
    { href: '/blog', label: 'Success Stories', path: '/blog' },
    { href: '/contact', label: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location === path;

  const handleGetStarted = () => {
    window.location.href = '/contact';
  };

  return (
    <nav className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
      isScrolled ? 'shadow-sm border-b border-slate-200' : 'border-b border-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Bolt className="w-4 h-4 text-white" />
              </div>
              <span className="ml-2 text-xl font-bold text-secondary">TechCorp</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.href}
                  className={`font-medium hover:text-primary transition-colors ${
                    isActive(item.path)
                      ? 'text-primary font-medium'
                      : 'text-slate-600'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button onClick={handleGetStarted} className="bg-primary text-white hover:bg-primary/90">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-600 hover:text-primary"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-slate-200">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 hover:text-primary transition-colors ${
                  isActive(item.path)
                    ? 'text-primary font-medium'
                    : 'text-slate-600'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="px-3 py-2">
              <Button
                onClick={() => {
                  setIsMenuOpen(false);
                  handleGetStarted();
                }}
                className="w-full bg-primary text-white hover:bg-primary/90"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
