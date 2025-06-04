import Image from "next/image";
import Head from "next/head";

// Metadata for SEO
export const metadata = {
  title: "mlola - Innovative Tech Solutions | Data Analytics, AI Tools & More",
  description: "Discover mlola's cutting-edge technology products: Datafawn (AI data analytics), Tubegrasp (video analytics), Conversease (AI chat), Denahku (design tools), and Grammarquick (AI writing). Innovative solutions for modern businesses.",
  keywords: "AI data analytics, video analytics, AI chatbot, grammar checker, design tools, machine learning, business intelligence, tech solutions",
  authors: [{ name: "mlola" }],
  creator: "mlola",
  publisher: "mlola",
  robots: "index, follow",
  openGraph: {
    title: "mlola - Innovative Tech Solutions",
    description: "Cutting-edge technology products including AI data analytics, video analytics, AI chat tools, and more.",
    url: "https://mlola.com",
    siteName: "mlola",
    images: [
      {
        url: "/images/mlola_full.png",
        width: 1200,
        height: 630,
        alt: "mlola - Innovative Tech Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "mlola - Innovative Tech Solutions",
    description: "Cutting-edge technology products including AI data analytics, video analytics, AI chat tools, and more.",
    images: ["/images/mlola_full.png"],
    creator: "@mlola",
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
      image: "/product_images/datafawn.png",
      features: ["AI Powered Data Analytics", "Predictive Analytics", "Machine Learning", "Data Visualization"],
      category: "Data Analytics"
    },
    {
      name: "Tubegrasp",
      domain: "tubegrasp.com", 
      description: "Powerful video content management and analytics tool designed for content creators and marketers to optimize their video strategy.",
      image: "/product_images/tubegrasp.png",
      features: ["YouTube Video Analytics", "AI Search", "AI Powered Knowledge Base"],
      category: "Video Analytics"
    },
    {
      name: "Conversease",
      domain: "conversease.com",
      description: "AI-powered conversation platform that enhances customer communication and automates support workflows for businesses.",
      image: "/product_images/conversease.png", 
      features: ["AI Chat Tool", "AI Chatbot", "AI Chat Assistant"],
      category: "AI Communication"
    },
    {
      name: "Denahku",
      domain: "denahku.com",
      description: "Comprehensive design and planning application for creating floor plans and 2D visualizations.",
      image: "/product_images/denahku.png",
      features: ["Floor Plan", "2D View", "Design"],
      category: "Design Tools"
    },
    {
      name: "Grammarquick",
      domain: "grammarquick.com",
      description: "Advanced grammar checking and writing enhancement tool powered by AI to improve writing quality and communication.",
      image: "/product_images/grammarquick.png",
      features: ["Grammar Check", "Style Enhancement", "Real-time Suggestions"],
      category: "Writing Tools"
    }
  ];

  // Structured Data (JSON-LD) for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "mlola",
    "description": "Innovative technology company creating cutting-edge solutions for businesses and individuals",
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
      "name": "mlola Products",
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

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50" role="banner">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <div className="flex items-center">
                <a href="/" className="text-3xl font-bold text-black hover:text-gray-700 transition-colors" aria-label="mlola homepage">
                  mlola
                </a>
              </div>
              <nav className="hidden md:flex space-x-8" role="navigation" aria-label="Main navigation">
                <a href="#products" className="text-gray-600 hover:text-blue-600 transition-colors" aria-label="View our products">Products</a>
                <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors" aria-label="Learn about mlola">About</a>
                <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors" aria-label="Contact mlola">Contact</a>
              </nav>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8" role="main">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Innovative Tech
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              At mlola, we create cutting-edge technology products that empower businesses and individuals 
              to achieve more. Discover our suite of innovative solutions designed for the modern world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#products" 
                className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors font-medium"
                aria-label="Explore mlola products"
              >
                Explore Products
              </a>
              <a 
                href="#contact" 
                className="border border-gray-300 text-gray-700 px-8 py-3 rounded-full hover:bg-gray-50 transition-colors font-medium"
                aria-label="Get in touch with mlola"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50" role="region" aria-labelledby="products-heading">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 id="products-heading" className="text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Discover our comprehensive suite of technology solutions designed to transform your business operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
              {products.map((product, index) => (
                <article key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300" role="listitem" itemScope itemType="https://schema.org/SoftwareApplication">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={`${product.name} application interface showing ${product.features.join(', ')}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                      itemProp="image"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-2xl font-bold text-gray-900" itemProp="name">{product.name}</h3>
                      <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full font-medium" itemProp="url">
                        {product.domain}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed" itemProp="description">
                      {product.description}
                    </p>
                    <div className="space-y-2 mb-6" itemProp="featureList">
                      {product.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-500">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3" aria-hidden="true"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <a 
                        href={`https://${product.domain}`}
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="flex-1 bg-blue-600 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                        aria-label={`Visit ${product.name} website`}
                        itemProp="url"
                      >
                        Visit Site
                      </a>
                      <button 
                        className="border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                        aria-label={`Learn more about ${product.name}`}
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8" role="region" aria-labelledby="about-heading">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 id="about-heading" className="text-4xl font-bold text-gray-900 mb-6">About mlola</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  We are a forward-thinking technology company dedicated to creating innovative solutions 
                  that solve real-world problems. Our diverse portfolio spans across data analytics, video analytics, AI chat tools, Knowledge Base, RAG platform, and more.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Each product in our suite is designed with user experience at its core, ensuring that 
                  businesses and individuals can leverage technology to achieve their goals more efficiently.
                </p>
                <div className="grid grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">5</div>
                    <div className="text-gray-600">Products released</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">more</div>
                    <div className="text-gray-600">Products coming soon</div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 text-center">
                <div className="text-6xl mb-4" role="img" aria-label="Rocket emoji representing innovation">🚀</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Innovation at Heart</h3>
                <p className="text-gray-600">
                  We believe in the power of technology to transform lives and businesses. 
                  Our mission is to make advanced tools accessible and easy to use for everyone.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white" role="region" aria-labelledby="contact-heading">
          <div className="max-w-7xl mx-auto text-center">
            <h2 id="contact-heading" className="text-4xl font-bold mb-6">Get in Touch</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Ready to transform your business with our innovative solutions? 
              Let's discuss how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:fikri.firdaus26@gmail.com" 
                className="bg-white text-gray-900 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors font-medium"
                aria-label="Contact sales via email"
              >
                Contact Sales
              </a>
              <a 
                href="mailto:fikri.firdaus26@gmail.com" 
                className="border border-gray-600 text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors font-medium"
                aria-label="Contact technical support via email"
              >
                Technical Support
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-400 py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800" role="contentinfo">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-white text-lg font-bold mb-4">mlola</h3>
                <p className="text-sm">
                  Innovative technology solutions for the modern world.
                </p>
              </div>
              <div>
                <h4 className="text-white font-medium mb-4">Products</h4>
                <nav role="navigation" aria-label="Product links">
                  <ul className="space-y-2 text-sm">
                    {products.map((product, index) => (
                      <li key={index}>
                        <a 
                          href={`https://${product.domain}`} 
                          className="hover:text-white transition-colors"
                          aria-label={`Visit ${product.name} website`}
                        >
                          {product.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              <div>
                <h4 className="text-white font-medium mb-4">Company</h4>
                <nav role="navigation" aria-label="Company links">
                  <ul className="space-y-2 text-sm">
                    <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                    <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                  </ul>
                </nav>
              </div>
              <div>
                <h4 className="text-white font-medium mb-4">Connect</h4>
                <nav role="navigation" aria-label="Social media links">
                  <ul className="space-y-2 text-sm">
                    <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
              <p>&copy; 2024 mlola. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
