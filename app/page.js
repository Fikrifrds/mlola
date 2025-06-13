import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { ArrowRight, CheckCircle, Sparkles, Users, Building2, TrendingUp } from "lucide-react";

// Metadata for SEO
export const metadata = {
  title: "mlola - AI-Powered Products for Business Growth | Intelligent Solutions",
  description: "Transforming businesses with intelligent AI solutions. Discover Datafawn, Tubegrasp, Conversease, Denahku, and Grammarquick - cutting-edge AI software designed to solve real-world business challenges.",
  keywords: "AI products, AI software, business AI solutions, AI SaaS, intelligent software, business automation, AI tools",
  authors: [{ name: "mlola" }],
  creator: "mlola",
  publisher: "mlola",
  robots: "index, follow",
  openGraph: {
    title: "mlola - AI-Powered Products for Business Growth",
    description: "Transforming businesses with intelligent AI solutions. Cutting-edge AI software designed to solve real-world business challenges.",
    url: "https://mlola.com",
    siteName: "mlola",
    images: [
      {
        url: "/images/mlola-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "mlola - AI-Powered Products for Business Growth",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "mlola - AI-Powered Products for Business Growth",
    description: "Transforming businesses with intelligent AI solutions. Cutting-edge AI software designed to solve real-world business challenges.",
    images: ["/images/mlola-twitter-card.jpg"],
    creator: "@mlola",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  alternates: {
    canonical: "https://mlola.com",
  },
};

export default function Home() {
  const products = [
    {
      name: "Datafawn",
      domain: "datafawn.com",
      description: "Advanced data analytics and visualization platform that transforms raw data into actionable insights. Perfect for businesses looking to make data-driven decisions.",
      problemSolution: "Datafawn leverages AI to uncover actionable insights from your data, helping you make smarter business decisions faster.",
      image: "/product_logos/dataFawn.png",
      features: ["AI Powered Data Analytics", "Predictive Analytics", "Machine Learning", "Data Visualization"],
      category: "Data Analytics",
      accent: "coral"
    },
    {
      name: "Tubegrasp",
      domain: "tubegrasp.com", 
      description: "Powerful video content management and analytics tool designed for content creators and marketers to optimize their video strategy.",
      problemSolution: "Tubegrasp utilizes AI for efficient video content analysis, allowing you to extract key information and trends quickly.",
      image: "/product_logos/tubegrasp.png",
      features: ["YouTube Video Analytics", "AI Search", "AI Powered Knowledge Base"],
      category: "Video Analytics",
      accent: "coral"
    },
    {
      name: "Conversease",
      domain: "conversease.com",
      description: "AI-powered conversation platform that enhances customer communication and automates support workflows for businesses.",
      problemSolution: "Conversease powers intelligent chatbots trained on your own data, delivering instant and accurate answers to customer inquiries or internal knowledge needs.",
      image: "/product_logos/conversease.png", 
      features: ["AI Chat Tool", "AI Chatbot", "AI Chat Assistant"],
      category: "AI Communication",
      accent: "coral"
    },
    {
      name: "Denahku",
      domain: "denahku.com",
      description: "Comprehensive design and planning application for creating floor plans and 2D visualizations.",
      problemSolution: "Denahku applies AI to streamline design workflows, making floor plan creation and visualization faster and more intuitive.",
      image: "/product_logos/denahku.svg",
      features: ["Floor Plan", "2D View", "Design"],
      category: "Design Tools",
      accent: "coral"
    },
    {
      name: "Grammarquick",
      domain: "grammarquick.com",
      description: "Advanced grammar checking and writing enhancement tool powered by AI to improve writing quality and communication.",
      problemSolution: "Grammarquick applies AI to enhance your written communication, ensuring clarity, accuracy, and impact.",
      image: "/product_logos/grammarquick.avif",
      features: ["Grammar Check", "Style Enhancement", "Real-time Suggestions"],
      category: "Writing Tools",
      accent: "coral"
    }
  ];

  const businessChallenges = [
    {
      challenge: "Need faster customer support and reduced inquiry load?",
      solution: "Conversease, our AI-powered chatbot, provides instant, accurate answers from your existing knowledge base.",
      icon: Users,
      accent: "orange"
    },
    {
      challenge: "Struggling to extract insights from vast amounts of data?",
      solution: "Datafawn helps you leverage machine learning to uncover critical patterns and make data-driven decisions.",
      icon: TrendingUp,
      accent: "coral"
    },
    {
      challenge: "Want to optimize video content performance?",
      solution: "Tubegrasp analyzes your video content with AI to identify trends and optimization opportunities.",
      icon: Building2,
      accent: "multicolor"
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
      "name": "mlola AI Products",
      "itemListElement": products.map((product, index) => ({
        "@type": "Offer",
        "name": product.name,
        "description": product.description,
        "url": `https://${product.domain}`,
        "category": product.category,
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
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Products",
        "item": "https://mlola.com#products"
      }
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

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
        {/* Header */}
        <header className="bg-white/95 backdrop-blur-xl border-b border-slate-200 sticky top-0 z-50 shadow-sm" role="banner">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <div className="flex items-center">
                <Link href="/" className="text-3xl font-bold text-slate-900 hover:text-blue-600 transition-all duration-300 hover:scale-105" aria-label="mlola homepage">
                  mlola
                </Link>
              </div>
              <nav className="hidden md:flex space-x-8" role="navigation" aria-label="Main navigation">
                <a href="#products" className="text-slate-600 hover:text-blue-600 transition-all duration-300 font-medium hover:scale-105" aria-label="View our AI products">Products</a>
                <a href="#solutions" className="text-slate-600 hover:text-blue-600 transition-all duration-300 hover:scale-105" aria-label="See how we solve business challenges">Solutions</a>
                <a href="#about" className="text-slate-600 hover:text-blue-600 transition-all duration-300 hover:scale-105" aria-label="Learn about mlola">About</a>
                <a href="#contact" className="text-slate-600 hover:text-blue-600 transition-all duration-300 hover:scale-105" aria-label="Contact mlola">Contact</a>
              </nav>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden" role="main">
          {/* Background decoration */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
            <div className="absolute top-0 right-1/4 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
            <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-4000"></div>
          </div>
          
          <div className="max-w-7xl mx-auto text-center relative">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8 shadow-md border border-blue-100">
                <Sparkles className="h-4 w-4" />
                Innovative AI Products
              </div>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-slate-900 mb-8 leading-tight">
              AI-Powered Products
              <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-teal-600 bg-clip-text text-transparent">
                for Business Growth
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              At mlola, we develop and deliver cutting-edge AI software designed to solve real-world business challenges. Explore our suite of intelligent solutions built to drive efficiency, innovation, and unlock new opportunities for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="#products" 
                className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full hover:from-blue-700 hover:to-indigo-700 hover:shadow-2xl transition-all duration-300 font-medium transform hover:scale-105 hover:-translate-y-1"
                aria-label="Explore our AI solutions"
              >
                <span className="flex items-center gap-2">
                  Explore Our Solutions
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
          </a>
          <a
                href="#contact" 
                className="group border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-full hover:bg-slate-50 hover:border-blue-400 hover:text-blue-600 transition-all duration-300 font-medium hover:shadow-lg transform hover:scale-105"
                aria-label="Request a demo of our products"
              >
                <span className="flex items-center gap-2">
                  Request a Demo
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
          </a>
        </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-24 px-4 sm:px-6 lg:px-8 bg-white" role="region" aria-labelledby="products-heading">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-slate-200">
                <CheckCircle className="h-4 w-4" />
                Innovative AI Products
              </div>
              <h2 id="products-heading" className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">Our AI Solutions in Action</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Discover our comprehensive suite of AI-powered software solutions designed to transform your business operations and drive sustainable growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
              {products.map((product, index) => {
                const accentClasses = getAccentClasses(product.accent);
                return (
                  <article key={index} className="group relative h-full" role="listitem" itemScope itemType="https://schema.org/SoftwareApplication">
                    <div className="relative bg-white border border-slate-200 rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 h-full flex flex-col">
                      <div className="flex justify-center items-center h-48 bg-gradient-to-br from-slate-50 to-slate-100 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                        <div className="relative w-28 h-28 rounded-full bg-white shadow-xl flex items-center justify-center overflow-hidden transform group-hover:scale-110 transition-transform duration-500 border border-slate-100">
                          <Image
                            src={product.image}
                            alt={`${product.name} logo`}
                            width={80}
                            height={80}
                            className="object-contain p-3"
                            itemProp="image"
                          />
                        </div>
                      </div>
                      <div className="p-8 flex-1 flex flex-col">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-2xl font-bold text-slate-900" itemProp="name">{product.name}</h3>
                          <span className={`${accentClasses.badge} text-sm px-3 py-1 rounded-full font-medium shadow-sm border ${accentClasses.border}`} itemProp="url">
                            {product.domain}
                          </span>
                        </div>
                        <p className="text-slate-600 mb-3 leading-relaxed" itemProp="description">
                          {product.description}
                        </p>
                        <p className={`${accentClasses.text} mb-6 leading-relaxed text-sm font-medium ${accentClasses.bg} p-3 rounded-xl border ${accentClasses.border}`}>
                          {product.problemSolution}
                        </p>
                        <div className="space-y-3 mb-8 flex-1" itemProp="featureList">
                          {product.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center text-sm text-slate-600">
                              <CheckCircle className={`h-4 w-4 ${accentClasses.text} mr-3 flex-shrink-0`} />
                              {feature}
                            </div>
                          ))}
                        </div>
                        <div className="flex gap-3 mt-auto">
                          <a 
                            href={`https://${product.domain}`}
          target="_blank"
          rel="noopener noreferrer"
                            className={`group flex-1 ${accentClasses.button} text-white text-center py-3 px-4 rounded-xl hover:shadow-lg transition-all duration-300 font-medium transform hover:scale-105`}
                            aria-label={`Visit ${product.name} website`}
                            itemProp="url"
                          >
                            <span className="flex items-center justify-center gap-2">
                              Visit Site
                              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Business Solutions Section */}
        <section id="solutions" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50" role="region" aria-labelledby="solutions-heading">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 bg-white text-slate-700 px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-sm border border-slate-200">
                <Building2 className="h-4 w-4" />
                Business Solutions
              </div>
              <h2 id="solutions-heading" className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">Solving Your Business Challenges</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Discover how mlola's AI products can transform your business by addressing specific operational challenges and driving measurable results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {businessChallenges.map((item, index) => {
                const IconComponent = item.icon;
                const accentClasses = getAccentClasses(item.accent);
                return (
                  <div key={index} className="group relative">
                    <div className="relative bg-white border border-slate-200 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2">
                      <div className={`inline-flex items-center justify-center w-16 h-16 ${accentClasses.icon} rounded-full mb-6 shadow-lg border ${accentClasses.border}`}>
                        <IconComponent className="h-8 w-8" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-4">{item.challenge}</h3>
                      <p className="text-slate-600 leading-relaxed mb-6">
                        {item.solution}
                      </p>
                      <div className={`flex items-center ${accentClasses.text} font-medium group-hover:gap-2 transition-all duration-300`}>
                        Learn more <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="text-center mt-16">
              <a 
                href="#contact" 
                className="group inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-4 rounded-full hover:from-blue-700 hover:to-indigo-700 hover:shadow-2xl transition-all duration-300 font-medium transform hover:scale-105 hover:-translate-y-1"
                aria-label="Explore our AI products"
              >
                Explore Our AI Products
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden" role="region" aria-labelledby="about-heading">
          {/* Background decoration */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
            <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          </div>
          
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-slate-200">
                  <Sparkles className="h-4 w-4" />
                  About mlola
                </div>
                <h2 id="about-heading" className="text-5xl md:text-6xl font-bold text-slate-900 mb-8">About mlola</h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  mlola is an AI product company that develops practical SaaS solutions for businesses. We build software designed to help organizations work more efficiently and serve their customers better.
                </p>
                <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                  Our team focuses on creating user-friendly AI tools that solve real problems. We're committed to building products that deliver genuine value to the businesses that use them.
                </p>
                <div className="grid grid-cols-2 gap-8 mb-8">
                  <div className="text-center p-6 bg-blue-50 rounded-2xl border border-blue-100 shadow-sm">
                    <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">5</div>
                    <div className="text-slate-600 font-medium">AI Products Built</div>
                  </div>
                  <div className="text-center p-6 bg-indigo-50 rounded-2xl border border-indigo-100 shadow-sm">
                    <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-teal-600 bg-clip-text text-transparent mb-2">more</div>
                    <div className="text-slate-600 font-medium">to come</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-teal-50 rounded-3xl p-12 text-center shadow-2xl border border-blue-100 transform hover:scale-105 transition-transform duration-500">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl mb-8 shadow-lg">
                    <Sparkles className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-6">Building Practical AI Solutions</h3>
                  <p className="text-slate-600 leading-relaxed text-lg">
                    We focus on developing AI software that addresses real business needs. Our goal is to create tools that are both powerful and easy to use, helping organizations improve their operations and better serve their customers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden" role="region" aria-labelledby="contact-heading">
          {/* Background decoration */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 left-1/3 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>
          
          <div className="max-w-7xl mx-auto text-center relative">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-8 border border-white/20">
              <Sparkles className="h-4 w-4" />
              Get Started
            </div>
            <h2 id="contact-heading" className="text-5xl md:text-6xl font-bold mb-8">Ready to Discover the Power of AI?</h2>
            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Have questions about how mlola's AI products can benefit your organization? Contact us to learn more or schedule a demo of our solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="mailto:fikri.firdaus26@gmail.com" 
                className="group bg-white text-slate-900 px-10 py-4 rounded-full hover:bg-slate-100 hover:shadow-2xl transition-all duration-300 font-medium transform hover:scale-105 hover:-translate-y-1"
                aria-label="Contact us via email"
              >
                <span className="flex items-center gap-2">
                  Contact Us
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-900 text-slate-400 py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-800" role="contentinfo">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-white text-2xl font-bold mb-4">mlola</h3>
                <p className="text-sm mb-3 font-medium text-blue-400">
                  Innovative AI Products
                </p>
                <p className="text-sm leading-relaxed">
                  Developing intelligent SaaS solutions for business growth.
                </p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-6">Products</h4>
                <nav role="navigation" aria-label="Product links">
                  <ul className="space-y-3 text-sm">
                    {products.slice(0, 4).map((product, index) => (
                      <li key={index}>
                        <a 
                          href={`https://${product.domain}`} 
                          className="hover:text-white transition-colors flex items-center gap-2 group"
                          aria-label={`Visit ${product.name} website`}
                        >
                          <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                          {product.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-6">Company</h4>
                <nav role="navigation" aria-label="Company links">
                  <ul className="space-y-3 text-sm">
                    <li><a href="#about" className="hover:text-white transition-colors flex items-center gap-2 group"><ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />About</a></li>
                    <li><a href="#products" className="hover:text-white transition-colors flex items-center gap-2 group"><ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />Products</a></li>
                    <li><a href="#solutions" className="hover:text-white transition-colors flex items-center gap-2 group"><ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />Solutions</a></li>
                  </ul>
                </nav>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-6">Connect</h4>
                <nav role="navigation" aria-label="Contact links">
                  <ul className="space-y-3 text-sm">
                    <li><a href="mailto:fikri.firdaus26@gmail.com" className="hover:text-white transition-colors flex items-center gap-2 group"><ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />Contact</a></li>
                    <li><a href="#contact" className="hover:text-white transition-colors flex items-center gap-2 group"><ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />Demo Request</a></li>
                    <li><a href="#" className="hover:text-white transition-colors flex items-center gap-2 group"><ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />Support</a></li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-slate-800 text-center text-sm">
              <p>&copy; 2024 mlola. All rights reserved.</p>
            </div>
          </div>
      </footer>
    </div>
    </>
  );
}
