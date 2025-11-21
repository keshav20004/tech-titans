import { Phone, Mail, Store, Smartphone, Globe, MessageCircle, Check, Sparkles, Zap, TrendingUp, Star } from 'lucide-react';
import { useEffect, useState, useRef, ReactNode } from 'react';

// --- Utility Components for "Wow" Factors ---

// 1. RevealOnScroll: Triggers animation when element enters viewport
const RevealOnScroll = ({ children, className = "", delay = 0 }: { children: ReactNode, className?: string, delay?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect(); // Only animate once
      }
    }, { threshold: 0.1 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={ref} 
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${className}`}
    >
      {children}
    </div>
  );
};

// 2. CountUp: Animates numbers from 0 to target
const CountUp = ({ end, duration = 2000, suffix = "" }: { end: number, duration?: number, suffix?: string }) => {
  const [count,ZS] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out quart
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      
      setCount(Math.floor(easeProgress * end));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [isVisible, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

// --- Main Application ---

function App() {
  const whatsappNumber = "9451363788";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  const [scrollY, setScrollY] = useState(0);
  
  // Ref for the spotlight effect to avoid re-renders
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    
    const handleMouseMove = (e: MouseEvent) => {
      if (spotlightRef.current) {
        // Updates the gradient position directly in the DOM
        spotlightRef.current.style.background = `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, rgba(56, 189, 248, 0.15), transparent 40%)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const plans = [
    {
      name: "Basic",
      price: "999",
      features: [
        "Single page website",
        "Product gallery (up to 20 items)",
        "Contact information & location map",
        "WhatsApp integration",
        "Mobile responsive design"
      ]
    },
    {
      name: "Standard",
      price: "1499",
      popular: true,
      features: [
        "Multi-page website",
        "Product gallery (up to 50 items)",
        "Contact form & WhatsApp ordering",
        "Google Maps integration",
        "Social media links",
        "Basic SEO setup"
      ]
    },
    {
      name: "Pro",
      price: "1999",
      features: [
        "Custom multi-page website",
        "Unlimited product listings",
        "Advanced WhatsApp ordering system",
        "Photo gallery & testimonials",
        "Premium SEO optimization",
        "Monthly updates & support"
      ]
    }
  ];

  const examples = [
    { name: "Bakery Shop", category: "Food & Beverages", color: "from-amber-400 to-orange-500" },
    { name: "Fashion Boutique", category: "Retail", color: "from-pink-400 to-rose-500" },
    { name: "Home Decor Store", category: "Home & Living", color: "from-teal-400 to-cyan-500" },
    { name: "Electronics Shop", category: "Technology", color: "from-blue-400 to-indigo-500" }
  ];

  const stats = [
    { icon: Store, number: 150, suffix: "+", label: "Shops Online" },
    { icon: TrendingUp, number: 300, suffix: "%", label: "Avg. Growth" },
    { icon: Star, number: 4.9, suffix: "/5", label: "Client Rating", isDecimal: true }, // Special handling simplified
    { icon: Zap, number: 24, suffix: "/7", label: "Support" }
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden selection:bg-blue-500 selection:text-white">
      {/* Wow Factor: Interactive Mouse Spotlight */}
      <div 
        ref={spotlightRef}
        className="fixed inset-0 pointer-events-none z-50 transition-opacity duration-300"
        style={{ background: 'radial-gradient(600px circle at 0px 0px, rgba(29, 78, 216, 0.15), transparent 40%)' }}
      />

      {/* Animated Background Elements (Parallax) */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div
          className="absolute top-20 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse mix-blend-multiply"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        />
        <div
          className="absolute bottom-20 -right-20 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse mix-blend-multiply"
          style={{ transform: `translateY(${scrollY * -0.2}px)`, animationDelay: '1s' }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse mix-blend-multiply"
          style={{ transform: `translate(-50%, -50%) translateY(${scrollY * 0.1}px)`, animationDelay: '2s' }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, rgba(148, 163, 184, 0.1) 1px, transparent 1px),
                             linear-gradient(to bottom, rgba(148, 163, 184, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`
              }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36 z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 mb-8 animate-fade-in-down backdrop-blur-md bg-white/5 px-6 py-2 rounded-full border border-white/10">
              <div className="relative">
                <Store className="w-6 h-6 animate-bounce-slow text-blue-400" />
                <Sparkles className="w-3 h-3 absolute -top-1 -right-1 text-yellow-400 animate-pulse" />
              </div>
              <span className="text-sm font-medium tracking-wider uppercase text-blue-200">Tech Titans</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-8 tracking-tight">
              <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400 animate-fade-in-up">
                Tech Titans
              </span>
            </h1>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Bringing <span className="bg-clip-text text-transparent bg-[linear-gradient(110deg,#60a5fa,45%,#e879f9,55%,#60a5fa)] bg-[length:200%_100%] animate-shimmer">Local Shops</span> Online
            </h2>

            <p className="text-xl sm:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 px-4 animate-fade-in-up leading-relaxed" style={{ animationDelay: '0.4s' }}>
              We help local shops create a strong online presence and reach more customers with beautiful, affordable websites that work on any device.
            </p>

            <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold px-10 py-5 rounded-2xl text-xl transition-all duration-300 shadow-[0_0_40px_-10px_rgba(16,185,129,0.5)] hover:shadow-[0_0_60px_-15px_rgba(16,185,129,0.7)] transform hover:scale-105 hover:-translate-y-1 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-700 ease-out" />
                <MessageCircle className="w-7 h-7 animate-bounce-slow" />
                <span className="relative">Contact Us on WhatsApp</span>
              </a>
            </div>

            {/* Animated Stats Bar */}
            <div className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <RevealOnScroll
                  key={index}
                  delay={index * 100}
                  className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-blue-500/30"
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-3 text-blue-400 group-hover:text-green-400 transition-colors duration-300 group-hover:scale-110 transform" />
                  <div className="text-3xl sm:text-4xl font-bold mb-1 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                    {stat.isDecimal ? stat.number : <CountUp end={stat.number} suffix={stat.suffix} />}
                    {stat.isDecimal && stat.suffix}
                  </div>
                  <div className="text-sm text-slate-400 font-medium tracking-wide uppercase">{stat.label}</div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement Section - Scroll Revealed */}
      <section className="relative py-20 sm:py-28 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <RevealOnScroll className="text-center mb-12 group">
              <div className="inline-block p-4 bg-red-100 rounded-2xl mb-6 transform group-hover:rotate-12 transition-transform duration-300">
                <Store className="w-12 h-12 text-red-600" />
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">
                Your Shop Deserves to Be Seen
              </h2>
            </RevealOnScroll>

            <div className="space-y-6">
              <RevealOnScroll delay={200} className="group bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-red-500 hover:border-red-600">
                <p className="text-lg text-slate-700">
                  Most small businesses rely only on foot traffic. Without an online presence, you're missing out on countless customers who search online before visiting a store.
                </p>
              </RevealOnScroll>
              <RevealOnScrollHN delay={400} className="group bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-orange-500 hover:border-orange-600">
                <p className="text-lg text-slate-700">
                  Your competitors are already online. Customers expect to find your products, hours, and location with a simple search. If they can't find you, they'll find someone else.
                </p>
              </RevealOnScrollHN>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="relative py-20 sm:py-28 bg-gradient-to-br from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll className="text-center mb-16">
            <div className="inline-block p-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl mb-6 animate-bounce-slow shadow-lg shadow-blue-500/30">
              <Zap className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              Simple Websites That Bring Results
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We design custom websites specifically for local shops. Everything your customers need, nothing they don't.
            </p>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Store, title: "Product Listings", desc: "Showcase your products with photos, descriptions, and prices.", color: "from-blue-500 to-blue-600", bg: "bg-blue-50" },
              { icon: MessageCircle, title: "WhatsApp Ordering", desc: "Let customers place orders directly through WhatsApp.", color: "from-green-500 to-emerald-600", bg: "bg-green-50" },
              { icon: Globe, title: "Google Maps", desc: "Integrated location map so customers can easily find your shop.", color: "from-cyan-500 to-teal-600", bg: "bg-cyan-50" },
              { icon: Smartphone, title: "Mobile Friendly", desc: "Perfect viewing on phones, tablets, and computers.", color: "from-orange-500 to-amber-600", bg: "bg-orange-50" }
            ].map((item, index) => (
              <RevealOnScroll
                key={index}
                delay={index * 150}
                className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 overflow-hidden border border-slate-100"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500" style={{ background: `linear-gradient(to bottom right, ${item.color})` }} />

                <div className="relative p-8">
                  <div className={`${item.bg} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-sm`}>
                    <item.icon className={`w-8 h-8 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`} style={{ WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text' }} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative py-20 sm:py-28 bg-gradient-to-br from-slate-50 to-white overflow-hidden">
        {/* Background grid pattern */}
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(148, 163, 184, 0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll className="text-center mb-16">
            <div className="inline-block p-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl mb-6 animate-bounce-slow shadow-lg shadow-green-500/30">
              <Check className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              Affordable Plans
            </h2>
            <p className="text-xl text-slate-600">
              Choose the plan that fits your business. No hidden fees.
            </p>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <RevealOnScroll
                key={index}
                delay={index * 200}
                className={`group relative bg-white rounded-3xl shadow-xl p-8 transition-all duration-500 transform hover:-translate-y-4 ${
                  plan.popular
                    ? 'ring-4 ring-blue-500 shadow-blue-500/20 scale-105 z-10'
                    : 'hover:shadow-2xl border border-slate-100'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-full text-center">
                    <span className="relative inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse-slow">
                      <Sparkles className="w-4 h-4" />
                      Most Popular
                      <Sparkles className="w-4 h-4" />
                    </span>
                  </div>
                )}

                <div className="relative">
                  <h3 className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {plan.name}
                  </h3>
                  <div className="mb-8">
                    <span className="text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                      ₹{plan.price}
                    </span>
                    <span className="text-slate-600 text-lg"> one-time</span>
                  </div>

                  <ul className="space-y-4 mb-10">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start gap-3 group/item"
                      >
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5 group-hover/item:bg-green-500 transition-colors duration-300">
                          <Check className="w-4 h-4 text-green-600 group-hover/item:text-white transition-colors duration-300" />
                        </div>
                        <span className="text-slate-700 leading-relaxed group-hover/item:text-slate-900">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block text-center font-bold px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600 shadow-blue-500/30'
                        : 'bg-slate-900 text-white hover:bg-slate-800'
                    }`}
                  >
                    Get Started
                  </a>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="relative py-20 sm:py-28 bg-gradient-to-br from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll className="text-center mb-16">
            <div className="inline-block p-4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl mb-6 animate-bounce-slow shadow-lg shadow-orange-500/30">
              <Star className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              Websites We've Built
            </h2>
            <p className="text-xl text-slate-600">
              Real websites for real local businesses
            </p>
          </RevealOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {examples.map((example, index) => (
              <RevealOnScroll
                key={index}
                delay={index * 100}
                className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1 border border-slate-100"
              >
                <div className="relative h-56 overflow-hidden bg-slate-100">
                  <div className={`absolute inset-0 bg-gradient-to-br ${example.color} opacity-80 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Store className="w-20 h-20 text-white transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 drop-shadow-md" />
                  </div>
                  
                  {/* Glare effect */}
                  <div className="absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 left-[-100%] group-hover:animate-shimmer" />
                </div>

                <div className="p-6 relative">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 transition-all duration-300">
                    {example.name}
                  </h3>
                  <p className="text-slate-600">{example.category}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-20 sm:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                             linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <RevealOnScroll>
            <div className="inline-block p-4 bg-white/10 backdrop-blur-sm rounded-2xl mb-8 animate-bounce-slow border border-white/10">
              <Store className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-8">
              About <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">Tech Titans</span>
            </h2>
          </RevealOnScroll>

          <div className="space-y-6">
            <RevealOnScroll delay={200}>
              <p className="text-xl text-slate-300 leading-relaxed bg-white/5 backdrop-blur-sm p-8 rounded-3xl hover:bg-white/10 transition-all duration-300 border border-white/5">
                We believe every local business deserves a chance to thrive in the digital world. Our mission is to make professional websites accessible and affordable for small shop owners who want to grow their customer base.
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={400}>
              <p className="text-xl text-slate-300 leading-relaxed bg-white/5 backdrop-blur-sm p-8 rounded-3xl hover:bg-white/10 transition-all duration-300 border border-white/5">
                We're not just building websites — we're building bridges between local shops and the communities they serve. Simple, effective, and built with care.
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-20 sm:py-28 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <RevealOnScroll>
            <div className="inline-block p-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl mb-8 animate-bounce-slow shadow-lg shadow-green-500/30">
              <MessageCircle className="w-12 h-12 text-white" />
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Ready to Take Your Shop Online?
            </h2>
            <p className="text-xl text-slate-300 mb-12">
              Get in touch today and let's discuss how we can help your business grow.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold px-12 py-6 rounded-2xl text-xl transition-all duration-300 shadow-[0_0_50px_-12px_rgba(16,185,129,0.5)] hover:shadow-[0_0_70px_-12px_rgba(16,185,129,0.7)] transform hover:scale-110 hover:-translate-y-2"
              >
                <MessageCircle className="w-8 h-8 animate-bounce-slow" />
                WhatsApp Us Now
                <Sparkles className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" />
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <a
                href="tel:+91 9451363788"
                className="group inline-flex items-center gap-3 text-slate-300 hover:text-white transition-all duration-300 bg-white/5 hover:bg-white/10 px-6 py-4 rounded-2xl transform hover:scale-105 border border-white/5"
              >
                <div className="p-2 bg-blue-500/20 rounded-full group-hover:bg-blue-500/30 transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <span className="text-lg">+91 9451363788</span>
              </a>
              <a
                href="mailto:ikeshav62@gmail.com"
                className="group inline-flex items-center gap-3 text-slate-300 hover:text-white transition-all duration-300 bg-white/5 hover:bg-white/10 px-6 py-4 rounded-2xl transform hover:scale-105 border border-white/5"
              >
                <div className="p-2 bg-green-500/20 rounded-full group-hover:bg-green-500/30 transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="text-lg">ikeshav62@gmail.com</span>
              </a>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-slate-950 text-slate-400 py-12 overflow-hidden border-t border-slate-900">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Store className="w-6 h-6 text-blue-400" />
            <p className="text-lg font-semibold text-slate-300">Tech Titans</p>
          </div>
          <p className="text-slate-500">&copy; 2025 Tech Titans. Bringing local shops online, one website at a time.</p>
        </div>
      </footer>
    </div>
  );
}

// Fix helper component for RevealOnScroll to handle "HN" naming if copypasted
const RevealOnScrollHN = RevealOnScroll;

export default App;
