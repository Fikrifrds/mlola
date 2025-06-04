import Image from "next/image";

export default function Home() {
  const products = [
    {
      name: "Datafawn",
      domain: "datafawn.com",
      description: "Advanced data analytics and visualization platform that transforms raw data into actionable insights. Perfect for businesses looking to make data-driven decisions.",
      image: "/product_images/datafawn.png",
      features: ["AI Powered Data Analytics", "Predictive Analytics", "Machine Learning", "Data Visualization"]
    },
    {
      name: "Tubegrasp",
      domain: "tubegrasp.com", 
      description: "Powerful video content management and analytics tool designed for content creators and marketers to optimize their video strategy.",
      image: "/product_images/tubegrasp.png",
      features: ["YouTube Video Analytics", "AI Search", "AI Powered Knowledge Base"]
    },
    {
      name: "Conversease",
      domain: "conversease.com",
      description: "AI-powered conversation platform that enhances customer communication and automates support workflows for businesses.",
      image: "/product_images/conversease.png", 
      features: ["AI Chat Tool", "AI Chatbot", "AI Chat Assistant"]
    },
    {
      name: "Denahku",
      domain: "denahku.com",
      description: "Comprehensive financial planning and budgeting application that helps individuals and families manage their finances effectively.",
      image: "/product_images/denahku.png",
      features: ["Floor Plan", "2D View", "Design"]
    },
    {
      name: "Grammarquick",
      domain: "grammarquick.com",
      description: "Advanced grammar checking and writing enhancement tool powered by AI to improve writing quality and communication.",
      image: "/product_images/grammarquick.png",
      features: ["Grammar Check", "Style Enhancement", "Real-time Suggestions"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center">
              <a href="/" className="text-3xl font-bold text-black hover:text-gray-700 transition-colors">
                mlola
              </a>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#products" className="text-gray-600 hover:text-blue-600 transition-colors">Products</a>
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Innovative Tech
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            At mlola, we create cutting-edge technology products that empower businesses and individuals 
            to achieve more. Discover our suite of innovative solutions designed for the modern world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#products" 
              className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors font-medium"
            >
              Explore Products
            </a>
            <a 
              href="#contact" 
              className="border border-gray-300 text-gray-700 px-8 py-3 rounded-full hover:bg-gray-50 transition-colors font-medium"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our comprehensive suite of technology solutions designed to transform your business operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={`${product.name} Screenshot`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-2xl font-bold text-gray-900">{product.name}</h4>
                    <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full font-medium">
                      {product.domain}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-500">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
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
                    >
                      Visit Site
                    </a>
                    <button className="border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors font-medium">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold text-gray-900 mb-6">About mlola</h3>
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
              <div className="text-6xl mb-4">🚀</div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4">Innovation at Heart</h4>
              <p className="text-gray-600">
                We believe in the power of technology to transform lives and businesses. 
                Our mission is to make advanced tools accessible and easy to use for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-6">Get in Touch</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Ready to transform your business with our innovative solutions? 
            Let's discuss how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:fikri.firdaus26@gmail.com" 
              className="bg-white text-gray-900 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors font-medium"
            >
              Contact Sales
            </a>
            <a 
              href="mailto:fikri.firdaus26@gmail.com" 
              className="border border-gray-600 text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors font-medium"
            >
              Technical Support
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-white text-lg font-bold mb-4">mlola</h4>
              <p className="text-sm">
                Innovative technology solutions for the modern world.
              </p>
            </div>
            <div>
              <h5 className="text-white font-medium mb-4">Products</h5>
              <ul className="space-y-2 text-sm">
                {products.map((product, index) => (
                  <li key={index}>
                    <a href={`https://${product.domain}`} className="hover:text-white transition-colors">
                      {product.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="text-white font-medium mb-4">Company</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-medium mb-4">Connect</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white transition-colors">GitHub</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
            <p>&copy; 2024 mlola. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
