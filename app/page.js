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

// Metadata for SEO - Optimized for Indonesia
export const metadata = {
  title: "Mlola - Solusi AI & Otomasi Bisnis Indonesia | RAG, Private AI & Integrasi AI Custom",
  description: "Transformasi bisnis Anda dengan solusi AI Mlola Indonesia. Kami menyediakan otomasi bisnis bertenaga AI, implementasi RAG/Private RAG, analitik data, dan layanan integrasi AI custom untuk perusahaan modern di Indonesia.",
  keywords: 'solusi AI Indonesia, otomasi bisnis AI, private RAG Indonesia, integrasi AI, analitik data, deployment AI aman, pengembangan AI custom, AI solutions Indonesia, business automation Indonesia, RAG implementation Indonesia, data analytics Indonesia, AI integration services Indonesia, machine learning Indonesia, artificial intelligence Indonesia, teknologi AI Indonesia, konsultan AI Indonesia, jasa AI Indonesia',
  authors: [{ name: 'Mlola Indonesia' }],
  creator: 'Mlola Indonesia',
  publisher: 'Mlola Indonesia',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://mlola.com'),
  alternates: {
    canonical: 'https://mlola.com',
    languages: {
      'id-ID': 'https://mlola.com/id',
      'en-US': 'https://mlola.com/en',
    },
  },
  openGraph: {
    title: 'Mlola - Solusi AI & Otomasi Bisnis Terdepan di Indonesia',
    description: 'Transformasi bisnis Anda dengan solusi AI terdepan di Indonesia. Pilih private deployment (deploy model sendiri) untuk kontrol maksimal atau API third-party yang cost-effective. Melayani seluruh Indonesia termasuk Jakarta, Surabaya, Bandung, Medan, Semarang.',
    url: 'https://mlola.com',
    siteName: 'Mlola Indonesia',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mlola - Solusi AI & Otomasi Bisnis Indonesia',
      },
    ],
    locale: 'id_ID',
    type: 'website',
    countryName: 'Indonesia',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mlola - Solusi AI & Otomasi Bisnis Indonesia',
    description: 'Transformasi bisnis Anda dengan solusi AI terdepan di Indonesia. Private deployment untuk kontrol maksimal atau API cost-effective. Melayani Jakarta, Surabaya, Bandung, dan seluruh Indonesia.',
    images: ['/og-image.jpg'],
    creator: '@mlola_indonesia',
    site: '@mlola_indonesia',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'technology',
  classification: 'AI Solutions, Business Automation, Technology Services',
};

export default function Home() {
  const coreServices = [
    {
      name: "Business Automation",
      description: "Automate repetitive business processes using AI. Create AI-powered data entry and document processing, set up automated reporting and analytics, and streamline workflow management.",
      features: ["Document Processing", "Automated Reporting", "Process Optimization", "Workflow Management"],
      targetClients: "SMEs, retail chains, service businesses"
    },
    {
      name: "AI Integration & Implementation", 
      description: "Help businesses adopt existing AI tools (ChatGPT, Claude, etc.). Integrate AI APIs into existing business systems, implement intelligent chatbots for customer service, and set up AI-powered workflows and processes.",
      features: ["Intelligent Chatbots", "AI Tool Integration", "API Implementation", "Workflow Automation"],
      targetClients: "Traditional businesses wanting to modernize"
    },
    {
      name: "Data Analytics & Business Intelligence",
      description: "Transform business data into actionable insights. Create automated dashboards and reports, implement predictive analytics for sales/inventory, and provide customer behavior analysis and recommendations.",
      features: ["Automated Dashboards", "Predictive Analytics", "Customer Analysis", "Business Intelligence"],
      targetClients: "Data-driven organizations"
    },
    {
      name: "RAG Solutions",
      description: "Flexible Retrieval-Augmented Generation (RAG) systems tailored to your needs. Choose from private deployment (deploy models yourself on your own infrastructure) or cloud-based solutions for cost-effectiveness.",
      features: ["Private Knowledge Bases", "Document Q&A Systems", "Flexible Deployment (Private or Cloud)", "Custom RAG Implementation"],
      targetClients: "Businesses seeking intelligent document processing"
    }
  ];



  const businessChallenges = [
    {
      challenge: "Need to automate repetitive business processes?",
      solution: "Our AI-powered business automation solutions reduce manual work by up to 80% while improving accuracy and consistency."
    },
    {
      challenge: "Want to implement AI without compromising data security?",
      solution: "Choose from our flexible AI deployment options: Private RAG (deploy models yourself on your infrastructure) for enhanced control, or cost-effective third-party API integrations."
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

  // Structured Data (JSON-LD) for SEO - Indonesia Focused
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Mlola Indonesia",
    "alternateName": ["Mlola", "Mlola AI", "Mlola AI Indonesia"],
    "description": "Perusahaan solusi AI terdepan di Indonesia yang mengembangkan solusi SaaS cerdas untuk pertumbuhan dan efisiensi bisnis. Melayani Jakarta, Surabaya, Bandung, Medan, Semarang, dan seluruh Indonesia.",
    "url": "https://mlola.com",
    "logo": "https://mlola.com/images/mlola-logo.png",
    "image": "https://mlola.com/og-image.jpg",
    "foundingDate": "2024",
    "foundingLocation": {
      "@type": "Place",
      "name": "Sidoarjo, Indonesia",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Sidoarjo",
        "addressRegion": "Jawa Timur",
        "addressCountry": "Indonesia"
      }
    },
    "areaServed": [
      {
        "@type": "Country",
        "name": "Indonesia"
      },
      {
        "@type": "City",
        "name": "Jakarta"
      },
      {
        "@type": "City", 
        "name": "Surabaya"
      },
      {
        "@type": "City",
        "name": "Bandung"
      },
      {
        "@type": "City",
        "name": "Medan"
      },
      {
        "@type": "City",
        "name": "Semarang"
      }
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "",
      "contactType": "customer service",
      "email": "fikri.firdaus26@gmail.com",
      "availableLanguage": ["Indonesian", "English"],
      "areaServed": "Indonesia"
    },
    "sameAs": [
      "https://twitter.com/mlola_indonesia",
      "https://linkedin.com/company/mlola-indonesia",
      "https://github.com/mlola"
    ],
    "knowsAbout": [
      "Artificial Intelligence",
      "Machine Learning", 
      "Business Automation",
      "RAG Implementation",
      "Data Analytics",
      "AI Integration",
      "Private AI Deployment",
      "Custom AI Development"
    ],
    "serviceType": [
      "AI Solutions",
      "Business Automation", 
      "Data Analytics",
      "AI Integration",
      "RAG Implementation",
      "Private AI Deployment"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Mlola AI Services Indonesia",
      "itemListElement": coreServices.map((service, index) => ({
        "@type": "Offer",
        "name": service.name,
        "description": service.description,
        "category": "AI Services",
        "position": index + 1,
        "areaServed": "Indonesia",
        "availableLanguage": ["Indonesian", "English"]
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
      {
        "@type": "ListItem",
        "position": 2,
        "name": "AI Solutions Indonesia",
        "item": "https://mlola.com#services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "About Mlola Indonesia",
        "item": "https://mlola.com#about"
      }
    ]
  };

  // LocalBusiness Schema for Indonesia
  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Mlola Indonesia",
    "description": "Leading AI solutions and business automation provider in Indonesia, offering AI deployment, RAG implementation, and business automation services.",
    "url": "https://mlola.com",
    "telephone": "",
    "email": "fikri.firdaus26@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Sidoarjo",
      "addressRegion": "Jawa Timur",
      "addressCountry": "Indonesia"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-7.4479",
      "longitude": "112.7378"
    },
    "areaServed": [
       "Indonesia"
     ],
    "serviceArea": {
      "@type": "Country",
      "name": "Indonesia"
    },
    "priceRange": "$$",
    "currenciesAccepted": "IDR",
    "paymentAccepted": "Bank Transfer, Credit Card",
    "openingHours": "Mo-Fr 09:00-17:00",
    "hasOfferCatalog": {
       "@type": "OfferCatalog",
       "name": "Mlola AI Services",
       "itemListElement": [
         {
           "@type": "Offer",
           "name": "AI Business Solutions",
           "description": "AI implementation for business automation and operational efficiency improvement",
           "category": "AI Solutions"
         },
         {
           "@type": "Offer", 
           "name": "RAG Implementation",
           "description": "Retrieval-Augmented Generation implementation for enterprise knowledge base systems",
           "category": "AI Implementation"
         },
         {
           "@type": "Offer",
           "name": "Business Automation",
           "description": "Business process automation using AI and machine learning technologies",
           "category": "Business Automation"
         }
       ]
     }
  };

  // Service Schema for AI Services
  const serviceData = {
     "@context": "https://schema.org",
     "@type": "Service",
     "name": "AI Solutions and Business Automation",
     "description": "Comprehensive AI solutions, RAG implementation, business automation, and custom AI integration services",
    "provider": {
      "@type": "Organization",
      "name": "Mlola Indonesia"
    },
    "areaServed": "Indonesia",
    "availableLanguage": ["Indonesian", "English"],
    "serviceType": "AI Solutions and Business Automation",
    "category": "Technology Services",
    "hasOfferCatalog": {
       "@type": "OfferCatalog",
       "name": "Mlola AI Service Catalog",
      "itemListElement": coreServices.map((service, index) => ({
        "@type": "Offer",
        "name": service.name,
        "description": service.description,
        "category": "AI Services",
        "position": index + 1
      }))
    }
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceData),
        }}
      />

      <div id="top" className="min-h-screen bg-white">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50" role="banner">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <Link href="/" className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
                <Image src="/mlola-logo.svg" alt="Mlola Logo" width={40} height={40} className="w-10 h-10" />
                <span className="text-xl font-semibold text-slate-800">Mlola</span>
              </Link>
              
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
                  <Image src="/product_logos/dataFawn.png" alt="DataFawn Logo" width={20} height={20} className="w-5 h-5" />
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
              Mlola delivers comprehensive AI solutions including business automation, data analytics, and flexible AI deployment. 
              Choose from private deployment (deploy models yourself) for maximum control or cost-effective third-party APIs.
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
                <h3 className="text-xl font-bold text-slate-900 mb-3">RAG Solutions</h3>
                <p className="text-slate-600">Flexible AI deployment: private (deploy models yourself on your own infrastructure) or cloud-based for cost efficiency</p>
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
                Discover how Mlola's AI solutions can transform your business by addressing specific operational challenges and driving measurable results.
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
                <h2 id="about-heading" className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
                  How <span className="text-blue-600">Mlola</span> Adapts AI Solutions to Your Business
                </h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Mlola is an AI solutions company focused on business automation, data analytics, and AI deployment. We help organizations explore AI opportunities while considering their specific requirements for data security and operational needs.
                </p>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Our team works on developing AI solutions that range from implementing RAG systems to creating custom integrations for business processes. We approach each project with attention to the practical challenges of AI adoption in business environments.
                </p>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  We specialize in creating intelligent solutions that transform how businesses operate. 
              Our expertise spans from automated workflows to advanced analytics, with flexible deployment 
              options including private deployment (deploy models yourself) for enhanced security and control.
                </p>
                <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                  We recognize that adopting AI technology involves considerations around compliance, scalability, and integration. Our goal is to develop solutions that address these practical requirements while providing value to your business operations.
                </p>
              </div>
              <div className="relative">
                <div className="bg-white border border-gray-200 rounded-lg shadow-md p-12 text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 mb-6">
                    <Image src="/mlola-logo.svg" alt="Mlola Logo" width={40} height={40} className="w-20 h-20" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-6">Flexible AI Solutions</h3>
                  <p className="text-slate-600 leading-relaxed text-lg mb-8">
                    We provide adaptable AI deployment strategies tailored to your specific requirements and budget. Whether you need maximum security with private deployment (deploy models yourself), cost-efficiency with third-party APIs, or hybrid approaches, our team delivers solutions that align with your business goals and technical constraints.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2 text-slate-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Private Deployment</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>Private Options</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>Security Focused</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>Flexible Solutions</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Cost-Effective APIs</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span>Multiple Deployment Options</span>
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
              Ready to implement AI solutions that drive real business results? Whether you need business automation, private RAG deployment, or custom AI integration, we're here to help you succeed.
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
                <h3 className="text-lg font-semibold mb-2 text-slate-900">Data Privacy</h3>
                <p className="text-slate-600 text-sm">Your data can stay on your infrastructure</p>
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
                  <Image src="/mlola-logo.svg" alt="Mlola Logo" width={40} height={40} className="w-10 h-10" />
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
