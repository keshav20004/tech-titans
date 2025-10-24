import { Phone, Mail, Store, Smartphone, Globe, MessageCircle, Check, Sparkles, Zap, TrendingUp, Star } from 'lucide-react';
import { useEffect, useState } from 'react';

function App() {
  const whatsappNumber = "9451363788";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const plans = [
    {
      name: "Basic",
      price: "₹999",
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
      price: "₹1499",
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
      price: "₹1999",
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
    { icon: Store, number: "150+", label: "Shops Online" },
    { icon: TrendingUp, number: "300%", label: "Avg. Growth" },
    { icon: Star, number: "4.9/5", label: "Client Rating" },
    { icon: Zap, number: "24/7", label: "Support" }
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-20 -left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        />
        <div
          className="absolute bottom-20 -right-20 w-96 h-96 bg-green-500/5 rounded-full blur-3xl animate-pulse"
          style={{ transform: `translateY(${scrollY * -0.2}px)`, animationDelay: '1s' }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-pulse"
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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 mb-8 animate-fade-in-down">
              <div className="relative">
                <Store className="w-10 h-10 sm:w-12 sm:h-12 animate-bounce-slow" />
                <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-yellow-400 animate-pulse" />
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-white">
                Tech Titans
              </h1>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <span className="inline-block hover:scale-110 transition-transform duration-300">Bringing</span>{' '}
              <span className="inline-block hover:scale-110 transition-transform duration-300 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">Local</span>{' '}
              <span className="inline-block hover:scale-110 transition-transform duration-300 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400">Shops</span>{' '}
              <span className="inline-block hover:scale-110 transition-transform duration-300">Online</span>
            </h2>

            <p className="text-xl sm:text-2xl text-slate-300 max-w-3xl mx-auto mb-12 px-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              We help local shops create a strong online presence and reach more customers with beautiful, affordable websites that work on any device.
            </p>

            <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold px-10 py-5 rounded-2xl text-xl transition-all duration-300 shadow-2xl hover:shadow-green-500/50 transform hover:scale-105 hover:-translate-y-1"
              >
                <MessageCircle className="w-7 h-7 animate-bounce-slow" />
                Contact Us on WhatsApp
                <Sparkles className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>

            {/* Stats Bar */}
            <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:-translate-y-2"
                  style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-3 text-blue-400 group-hover:text-green-400 transition-colors duration-300 group-hover:animate-bounce-slow" />
                  <div className="text-3xl font-bold mb-1 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                    {stat.number}
                  </div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement Section */}
      <section className="relative py-20 sm:py-28 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 group">
              <div className="inline-block p-4 bg-red-100 rounded-2xl mb-6 transform group-hover:rotate-12 transition-transform duration-300">
                <Store className="w-12 h-12 text-red-600" />
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6 hover:scale-105 transition-transform duration-300">
                Your Shop Deserves to Be Seen
              </h2>
            </div>

            <div className="space-y-6">
              <div className="group bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-red-500">
                <p className="text-lg text-slate-700">
                  Most small businesses rely only on foot traffic and word of mouth. Without an online presence, you're missing out on countless customers who search online before visiting a store.
                </p>
              </div>
              <div className="group bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-orange-500">
                <p className="text-lg text-slate-700">
                  Your competitors are already online. Customers expect to find your products, hours, and location with a simple search. If they can't find you, they'll find someone else.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="relative py-20 sm:py-28 bg-gradient-to-br from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block p-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl mb-6 animate-bounce-slow">
              <Zap className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4 hover:scale-105 transition-transform duration-300">
              Simple Websites That Bring Results
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We design custom websites specifically for local shops. Everything your customers need, nothing they don't.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Store, title: "Product Listings", desc: "Showcase your products with photos, descriptions, and prices that customers can browse anytime.", color: "from-blue-500 to-blue-600", bg: "bg-blue-50" },
              { icon: MessageCircle, title: "WhatsApp Ordering", desc: "Let customers place orders directly through WhatsApp with one simple click.", color: "from-green-500 to-emerald-600", bg: "bg-green-50" },
              { icon: Globe, title: "Google Maps", desc: "Integrated location map so customers can easily find your shop and get directions.", color: "from-cyan-500 to-teal-600", bg: "bg-cyan-50" },
              { icon: Smartphone, title: "Mobile Friendly", desc: "Perfect viewing on phones, tablets, and computers. Works everywhere your customers are.", color: "from-orange-500 to-amber-600", bg: "bg-orange-50" }
            ].map((item, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500" style={{ background: `linear-gradient(to bottom right, ${item.color})` }} />

                <div className="relative p-8">
                  <div className={`${item.bg} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg`}>
                    <item.icon className={`w-8 h-8 bg-gradient-to-r ${item.color} bg-clip-text text-transparent`} style={{ WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text' }} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 transition-all duration-300">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative py-20 sm:py-28 bg-gradient-to-br from-slate-50 to-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(148, 163, 184, 0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block p-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl mb-6 animate-bounce-slow">
              <Check className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4 hover:scale-105 transition-transform duration-300">
              Affordable Plans for Every Shop
            </h2>
            <p className="text-xl text-slate-600">
              Choose the plan that fits your business. No hidden fees, no surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`group relative bg-white rounded-3xl shadow-xl p-8 transition-all duration-500 transform hover:-translate-y-6 hover:rotate-1 ${
                  plan.popular
                    ? 'ring-4 ring-blue-500 shadow-2xl shadow-blue-500/30 scale-105'
                    : 'hover:shadow-2xl'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                    <span className="relative inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse-slow">
                      <Sparkles className="w-4 h-4" />
                      Most Popular
                      <Sparkles className="w-4 h-4" />
                    </span>
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  <h3 className="text-3xl font-bold text-slate-900 mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                    {plan.name}
                  </h3>
                  <div className="mb-8">
                    <span className="text-5xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                      {plan.price}
                    </span>
                    <span className="text-slate-600 text-lg"> one-time</span>
                  </div>

                  <ul className="space-y-4 mb-10">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-300"
                      >
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mt-0.5 group-hover/item:scale-125 transition-transform duration-300">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-slate-700 leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block text-center font-bold px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 shadow-lg hover:shadow-xl ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600 shadow-blue-500/50'
                        : 'bg-gradient-to-r from-slate-900 to-slate-800 text-white hover:from-slate-800 hover:to-slate-700'
                    }`}
                  >
                    Get Started
                  </a>
                </div>

                <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="relative py-20 sm:py-28 bg-gradient-to-br from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block p-4 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl mb-6 animate-bounce-slow">
              <Star className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4 hover:scale-105 transition-transform duration-300">
              Websites We've Built
            </h2>
            <p className="text-xl text-slate-600">
              Real websites for real local businesses
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {examples.map((example, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-500 transform hover:-translate-y-4 hover:rotate-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-56 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${example.color} opacity-80 group-hover:opacity-100 transition-opacity duration-500`} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Store className="w-20 h-20 text-white transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500" />
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />

                  {/* Floating particles */}
                  <div className="absolute top-4 left-4 w-3 h-3 bg-white/50 rounded-full animate-float-slow" />
                  <div className="absolute top-8 right-6 w-2 h-2 bg-white/40 rounded-full animate-float" style={{ animationDelay: '1s' }} />
                  <div className="absolute bottom-6 left-8 w-2 h-2 bg-white/40 rounded-full animate-float" style={{ animationDelay: '2s' }} />
                </div>

                <div className="p-6 relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 transition-all duration-300">
                    {example.name}
                  </h3>
                  <p className="text-slate-600">{example.category}</p>
                </div>

                <div className="absolute inset-0 border-2 border-transparent group-hover:border-white rounded-3xl transition-colors duration-500" style={{ margin: '4px' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-20 sm:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                             linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block p-4 bg-white/10 backdrop-blur-sm rounded-2xl mb-8 animate-bounce-slow">
            <Store className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-8 hover:scale-105 transition-transform duration-300">
            About <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">Tech Titans</span>
          </h2>

          <div className="space-y-6">
            <p className="text-xl text-slate-300 leading-relaxed bg-white/5 backdrop-blur-sm p-8 rounded-3xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              We believe every local business deserves a chance to thrive in the digital world. Our mission is to make professional websites accessible and affordable for small shop owners who want to grow their customer base.
            </p>
            <p className="text-xl text-slate-300 leading-relaxed bg-white/5 backdrop-blur-sm p-8 rounded-3xl hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              We're not just building websites — we're building bridges between local shops and the communities they serve. Simple, effective, and built with care.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-20 sm:py-28 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.15) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block p-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl mb-8 animate-bounce-slow">
            <MessageCircle className="w-12 h-12 text-white" />
          </div>

          <h2 className="text-4xl sm:text-5xl font-bold mb-6 hover:scale-105 transition-transform duration-300">
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
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold px-12 py-6 rounded-2xl text-xl transition-all duration-300 shadow-2xl shadow-green-500/50 hover:shadow-green-500/70 transform hover:scale-110 hover:-translate-y-2"
            >
              <MessageCircle className="w-8 h-8 animate-bounce-slow" />
              WhatsApp Us Now
              <Sparkles className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <a
              href="tel:+91 9451363788"
              className="group inline-flex items-center gap-3 text-slate-300 hover:text-white transition-all duration-300 bg-white/5 hover:bg-white/10 px-6 py-4 rounded-2xl transform hover:scale-105"
            >
              <div className="p-2 bg-blue-500/20 rounded-full group-hover:bg-blue-500/30 transition-colors">
                <Phone className="w-6 h-6" />
              </div>
              <span className="text-lg">+91 9451363788</span>
            </a>
            <a
              href="mailto:ikeshav62@gmail.com"
              className="group inline-flex items-center gap-3 text-slate-300 hover:text-white transition-all duration-300 bg-white/5 hover:bg-white/10 px-6 py-4 rounded-2xl transform hover:scale-105"
            >
              <div className="p-2 bg-green-500/20 rounded-full group-hover:bg-green-500/30 transition-colors">
                <Mail className="w-6 h-6" />
              </div>
              <span className="text-lg">ikeshav62@gmail.com</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-slate-950 text-slate-400 py-12 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: '100px 100px'
          }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Store className="w-6 h-6 text-blue-400" />
            <p className="text-lg">Tech Titans</p>
          </div>
          <p className="text-slate-500">&copy; 2025 Tech Titans. Bringing local shops online, one website at a time.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
