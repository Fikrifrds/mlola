import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { 
  ArrowRight, 
  Brain, 
  Zap, 
  Users, 
  TrendingUp, 
  Phone, 
  Mail, 
  Calendar, 
  Cog, 
  Database,
  Shield,
  MapPin
} from 'lucide-react'

// Metadata for SEO
export const metadata = {
  title: "Mlola - AI Solutions & Business Automation | RAG, Private AI & Custom AI Integration",
  description: "Transform your business with Mlola's AI solutions. We provide AI-powered business automation, RAG/Private RAG implementation, data analytics, and custom AI integration services for modern enterprises.",
  keywords: 'AI solutions, business automation, private RAG, AI integration, data analytics, secure AI deployment, custom AI development',
  openGraph: {
    title: 'Mlola - AI Solutions & Business Automation',
    description: 'Transform your business with AI solutions, private RAG deployment, and custom integration. Deploy secure AI models on your infrastructure while maintaining complete data privacy.',
    url: 'https://mlola.com',
    siteName: 'Mlola',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mlola - AI Solutions & Business Automation',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mlola - AI Solutions & Business Automation',
    description: 'Transform your business with AI solutions, private RAG deployment, and custom integration. Deploy secure AI models on your infrastructure while maintaining complete data privacy.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function Home() {
  const coreServices = [
    {
      name: "Business Automation",
      description: "Automate repetitive business processes using AI. Implement intelligent chatbots for customer service, create AI-powered data entry and document processing, and set up automated reporting and analytics.",
      features: ["Intelligent Chatbots", "Document Processing", "Automated Reporting", "Process Optimization"],
      targetClients: "SMEs, retail chains, service businesses"
    },
    {
      name: "AI Integration & Implementation", 
      description: "Help businesses adopt existing AI tools (ChatGPT, Claude, etc.). Integrate AI APIs into existing business systems, set up AI-powered workflows and processes, and train employees on AI tool usage.",
      features: ["AI Tool Integration", "API Implementation", "Workflow Automation", "Employee Training"],
      targetClients: "Traditional businesses wanting to modernize"
    },
    {
      name: "Data Analytics & Business Intelligence",
      description: "Transform business data into actionable insights. Create automated dashboards and reports, implement predictive analytics for sales/inventory, and provide customer behavior analysis and recommendations.",
      features: ["Automated Dashboards", "Predictive Analytics", "Customer Analysis", "Business Intelligence"],
      targetClients: "Data-driven organizations"
    },
    {
      name: "Private RAG Solutions",
      description: "Deploy secure, private AI models on your infrastructure. Implement Retrieval-Augmented Generation (RAG) systems that work with your proprietary data without involving third-party services.",
      features: ["Private Model Deployment", "Secure Data Processing", "Custom RAG Implementation", "On-Premise Solutions"],
      targetClients: "Enterprise clients with security requirements"
    }
  ];



  const businessChallenges = [
    {
      challenge: "Need to automate repetitive business processes?",
      solution: "Our AI-powered business automation solutions reduce manual work by up to 80% while improving accuracy and consistency."
    },
    {
      challenge: "Want to implement AI without compromising data security?",
      solution: "Our Private RAG solutions deploy AI models directly on your infrastructure, ensuring complete data privacy and control."
    },
    {
      challenge: "Struggling to extract insights from your business data?",
      solution: "Our data analytics and BI services transform raw data into actionable insights with predictive capabilities."
    }
  ];

  const getAccentClasses = (accent) => {
    const accentMap = {
      coral: {
        badge: "bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700",
        button: "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700",
        text: "text-blue-600",
        icon: "bg-gradient-to-br from-blue-100 to-indigo-100 text-blue-600",
        border: "border-blue-200",
        bg: "bg-gradient-to-br from-blue-50 to-indigo-50"
      },
      multicolor: {
        badge: "bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700",
        button: "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700",
        text: "text-purple-600",
        icon: "bg-gradient-to-br from-purple-100 to-pink-100 text-purple-600",
        border: "border-purple-200",
        bg: "bg-gradient-to-br from-purple-50 to-pink-50"
      },
      purple: {
        badge: "bg-gradient-to-r from-violet-50 to-purple-50 text-violet-700",
        button: "bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700",
        text: "text-violet-600",
        icon: "bg-gradient-to-br from-violet-100 to-purple-100 text-violet-600",
        border: "border-violet-200",
        bg: "bg-gradient-to-br from-violet-50 to-purple-50"
      },
      emerald: {
        badge: "bg-gradient-to-r from-emerald-50 to-green-50 text-emerald-700",
        button: "bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700",
        text: "text-emerald-600",
        icon: "bg-gradient-to-br from-emerald-100 to-green-100 text-emerald-600",
        border: "border-emerald-200",
        bg: "bg-gradient-to-br from-emerald-50 to-green-50"
      },
      fawn: {
        badge: "bg-gradient-to-r from-fawn-50 to-fawn-50 text-fawn-700",
        button: "bg-gradient-to-r from-fawn-600 to-fawn-600 hover:from-fawn-700 hover:to-fawn-700",
        text: "text-fawn-600",
        icon: "bg-gradient-to-br from-fawn-100 to-fawn-100 text-fawn-600",
        border: "border-fawn-200",
        bg: "bg-gradient-to-br from-fawn-50 to-fawn-50"
      },
      orange: {
        badge: "bg-gradient-to-r from-orange-50 to-orange-50 text-orange-700",
        button: "bg-gradient-to-r from-orange-600 to-orange-600 hover:from-orange-700 hover:to-orange-700",
        text: "text-orange-600",
        icon: "bg-gradient-to-br from-orange-100 to-orange-100 text-orange-600",
        border: "border-orange-200",
        bg: "bg-gradient-to-br from-orange-50 to-orange-50"
      }
    };
    return accentMap[accent] || accentMap.coral;
  };

  // Structured Data (JSON-LD) for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "mlola",
    "description": "AI product company developing intelligent SaaS solutions for business growth and efficiency",
    "url": "https://mlola.com",
    "logo": "https://mlola.com/images/mlola-logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "",
      "contactType": "customer service",
      "email": "fikri.firdaus26@gmail.com"
    },
    "sameAs": [
      "https://twitter.com/mlola",
      "https://linkedin.com/company/mlola",
      "https://github.com/mlola"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "mlola AI Services",
      "itemListElement": coreServices.map((service, index) => ({
        "@type": "Offer",
        "name": service.name,
        "description": service.description,
        "category": service.category,
        "position": index + 1
      }))
    }
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://mlola.com"
      },

    ]
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbData),
        }}
      />

      <div id="top" className="min-h-screen bg-white">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50" role="banner">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <a href="#top" className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
                <img src="/mlola-logo.svg" alt="Mlola Logo" className="w-10 h-10" />
                <span className="text-xl font-semibold text-slate-800">Mlola</span>
              </a>
              
              <nav className="hidden md:flex items-center gap-8" role="navigation" aria-label="Main navigation">
                <a href="#services" className="text-slate-600 hover:text-slate-900 font-medium text-sm">AI Solutions</a>
                <a href="#about" className="text-slate-600 hover:text-slate-900 font-medium text-sm">About</a>
                <a href="#contact" className="text-slate-600 hover:text-slate-900 font-medium text-sm">Contact</a>
              </nav>
              
              <div className="flex items-center gap-4">
                <a 
                  href="#contact" 
                  className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium text-sm hover:bg-blue-700"
                >
                  Get Started
                </a>
                <a 
                  href="https://datafawn.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-orange-50 border border-orange-200 px-4 py-2 rounded-lg font-medium hover:bg-orange-100 hover:border-orange-300 flex items-center gap-2 transition-all duration-200"
                  title="Visit DataFawn"
                >
                  <img src="/product_logos/dataFawn.png" alt="DataFawn Logo" className="w-5 h-5" />
                  <span className="text-sm font-semibold hidden lg:inline">Datafawn</span>
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50" role="main">
          <div className="max-w-7xl mx-auto text-center">
            <div className="bg-white border border-gray-200 text-slate-700 px-6 py-3 rounded-full text-sm font-medium mb-8 inline-block">
              AI Solutions & Business Automation
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 leading-tight">
                Transform Your Business with <span className="text-blue-600">AI</span>
              </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Mlola delivers comprehensive AI solutions including business automation, data analytics, private RAG deployment, 
              and custom AI integration. Deploy secure AI models on your infrastructure while maintaining complete data control.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <a 
                href="#contact" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 flex items-center justify-center gap-2"
              >
                Get Free Consultation
              </a>
              <a 
                href="#services" 
                className="bg-white border border-gray-300 text-slate-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 flex items-center justify-center gap-2"
              >
                Explore Solutions
              </a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Business Automation</h3>
                <p className="text-slate-600">Automate workflows and processes with AI solutions</p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Private RAG</h3>
                <p className="text-slate-600">Secure AI deployment on your infrastructure with complete data control</p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Custom AI Integration</h3>
                <p className="text-slate-600">Tailored AI solutions that integrate seamlessly with your systems</p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Services Section */}
        <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-white" role="region" aria-labelledby="services-heading">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <div className="bg-gray-100 text-slate-700 px-6 py-3 rounded-full text-sm font-medium mb-6 inline-block">
                Core AI Services
              </div>
              <h2 id="services-heading" className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Our <span className="text-blue-600">AI Solutions</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Comprehensive AI services designed to transform your business operations, from automation to private AI deployment.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8" role="list">
              {coreServices.map((service, index) => (
                <article key={index} className="bg-white border border-gray-200 rounded-lg shadow-md p-8 h-full flex flex-col" role="listitem">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{service.name}</h3>
                  </div>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-3 mb-6 flex-1">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-slate-600">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-gray-200 pt-4 mt-auto">
                    <div className="text-sm text-slate-500">
                      <span><strong>Target:</strong> {service.targetClients}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>



        {/* Business Solutions Section */}
        <section id="solutions" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50" role="region" aria-labelledby="solutions-heading">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <div className="bg-white border border-gray-200 text-slate-700 px-6 py-3 rounded-full text-sm font-medium mb-6 inline-block">
                Business Solutions
              </div>
              <h2 id="solutions-heading" className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Solving Your <span className="text-blue-600">Business Challenges</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Discover how Mlola&apos;s AI solutions can transform your business by addressing specific operational challenges and driving measurable results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {businessChallenges.map((item, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-md p-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{item.challenge}</h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {item.solution}
                  </p>
                  <div className="text-blue-600 font-medium">
                    Learn more
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <a 
                href="#contact" 
                className="bg-blue-600 text-white px-12 py-4 rounded-lg hover:bg-blue-700 font-medium inline-block"
                aria-label="Explore our AI solutions"
              >
                Explore Our AI Solutions
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-white" role="region" aria-labelledby="about-heading">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="bg-gray-100 text-slate-700 px-6 py-3 rounded-full text-sm font-medium mb-6 inline-block">
                  About Mlola
                </div>
                <h2 id="about-heading" className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
                  About <span className="text-blue-600">Mlola</span>
                </h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Mlola is a comprehensive AI solutions company that specializes in business automation, data analytics, and private AI deployment. We help organizations transform their operations through intelligent automation while maintaining complete data security and control.
                </p>
                <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                  Our expertise spans from implementing RAG/Private RAG solutions on client infrastructure to developing custom AI integrations that modernize traditional business processes. We also create AI products that can work for client projects, demonstrating our capabilities across various industries.
                </p>
                <div className="grid grid-cols-2 gap-8 mb-8">
                  <div className="text-center p-6 bg-white border border-gray-200 rounded-lg shadow-md">
                    <div className="text-4xl font-bold text-blue-600 mb-2">4</div>
                    <div className="text-slate-600 font-medium">Core AI Services</div>
                  </div>
                  <div className="text-center p-6 bg-white border border-gray-200 rounded-lg shadow-md">
                    <div className="text-4xl font-bold text-blue-600 mb-2">5</div>
                    <div className="text-slate-600 font-medium">AI Products Built</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white border border-gray-200 rounded-lg shadow-md p-12 text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-lg mb-8">
                    <Shield className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-6">Secure AI Solutions</h3>
                  <p className="text-slate-600 leading-relaxed text-lg mb-8">
                    We specialize in deploying AI models directly on client infrastructure, ensuring complete data privacy and security. Our Private RAG solutions enable businesses to leverage powerful AI capabilities without compromising sensitive information.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2 text-slate-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>100% Private</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>On-Premise</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>Secure</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>Scalable</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-100" role="region" aria-labelledby="contact-heading">
          <div className="max-w-7xl mx-auto text-center">
            <div className="bg-white text-slate-700 px-6 py-3 rounded-full text-sm font-medium mb-8 inline-block">
              Get Started
            </div>
            <h2 id="contact-heading" className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
              Ready to Transform Your Business with <span className="text-blue-600">AI?</span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Ready to implement AI solutions that drive real business results? Whether you need business automation, private RAG deployment, or custom AI integration, we&apos;re here to help you succeed.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <a 
                href="mailto:fikri.firdaus26@gmail.com" 
                className="bg-blue-600 text-white px-12 py-4 rounded-lg hover:bg-blue-700 font-medium inline-block"
                aria-label="Contact us for AI consultation"
              >
                Get AI Consultation
              </a>
              
              <a 
                href="#services" 
                className="bg-white border border-gray-300 text-slate-700 px-12 py-4 rounded-lg font-medium hover:bg-gray-50 inline-block"
                aria-label="View our AI services"
              >
                View AI Services
              </a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-slate-900">100% Private</h3>
                <p className="text-slate-600 text-sm">Your data stays on your infrastructure</p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Cog className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-slate-900">Custom Integration</h3>
                <p className="text-slate-600 text-sm">Tailored AI solutions for your business</p>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Database className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-slate-900">Enterprise Ready</h3>
                <p className="text-slate-600 text-sm">Scalable solutions for any business size</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8" role="contentinfo">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              <div className="md:col-span-2">
                <div className="flex items-center gap-3 mb-6">
                  <img src="/mlola-logo.svg" alt="Mlola Logo" className="w-10 h-10" />
                  <span className="text-2xl font-bold">Mlola</span>
                </div>
                <p className="text-slate-300 mb-6 leading-relaxed max-w-md">
                  Transforming businesses through AI solutions, secure private deployments, and comprehensive automation services.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-6">AI Solutions</h3>
                <ul className="space-y-4">
                  <li><a href="#services" className="text-slate-300 hover:text-white">
                    Business Automation
                  </a></li>
                  <li><a href="#services" className="text-slate-300 hover:text-white">
                    AI Integration
                  </a></li>
                  <li><a href="#services" className="text-slate-300 hover:text-white">
                    Data Analytics
                  </a></li>
                  <li><a href="#services" className="text-slate-300 hover:text-white">
                    Private RAG
                  </a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-6">Company</h3>
                <ul className="space-y-4">
                  <li><a href="#about" className="text-slate-300 hover:text-white">
                    About
                  </a></li>
                  <li><a href="#contact" className="text-slate-300 hover:text-white">
                    Contact
                  </a></li>
                  <li><a href="#" className="text-slate-300 hover:text-white">
                    Case Studies
                  </a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-slate-700 mt-12 pt-8 text-center">
              <div className="text-slate-400">
                © 2024 <span className="font-medium">Mlola</span>. All rights reserved. 
                <span className="hidden sm:inline">Secure AI Solutions & Business Automation.</span>
              </div>
              <div className="text-slate-500 text-sm mt-2 flex items-center justify-center">
                <MapPin className="inline-block w-4 h-4 mr-1" />
                <span>Sidoarjo, Indonesia</span>
              </div>
            </div>
          </div>
        </footer>
    </div>
    </>
  );
}
