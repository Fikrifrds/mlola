'use client';

import Image from "next/image";
import Link from "next/link";
import { 
  Cog, 
  Database,
  Shield,
  MapPin
} from 'lucide-react';
import { LanguageProvider, useLanguage } from '../hooks/useLanguage';
import LanguageSwitcher from '../components/LanguageSwitcher';

function HomePage() {
  const { t, language } = useLanguage();

  // Get service data from translations
  const coreServices = t('coreServices');
  const businessChallenges = t('businessChallenges');

  // Structured Data (JSON-LD) for SEO - Language aware
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Mlola Indonesia",
    "alternateName": ["Mlola", "Mlola AI", "Mlola AI Indonesia"],
    "description": language === 'id' 
      ? "Penyedia solusi AI dan otomasi bisnis di Indonesia yang fokus membantu perusahaan mengimplementasikan teknologi AI dengan pendekatan praktis. Melayani Jakarta, Surabaya, Bandung, Medan, Semarang, dan kota besar Indonesia."
      : "AI and business automation solutions provider in Indonesia focused on helping companies implement AI technology with practical approaches. Serving Jakarta, Surabaya, Bandung, Medan, Semarang, and major Indonesian cities.",
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
      "On-Premise AI Deployment",
      "Custom AI Development"
    ],
    "serviceType": [
      "AI Solutions",
      "Business Automation", 
      "Data Analytics",
      "AI Integration",
      "RAG Implementation",
      "On-Premise AI Deployment"
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
                <a href="#services" className="text-slate-600 hover:text-slate-900 font-medium text-sm">{t('nav.aiSolutions')}</a>
                <a href="#about" className="text-slate-600 hover:text-slate-900 font-medium text-sm">{t('nav.about')}</a>
                <a href="#contact" className="text-slate-600 hover:text-slate-900 font-medium text-sm">{t('nav.contact')}</a>
              </nav>
              
              <div className="flex items-center gap-4">
                <LanguageSwitcher />
                <a 
                  href="#contact" 
                  className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium text-sm hover:bg-blue-700"
                >
                  {t('nav.getStarted')}
                </a>
                <a 
                  href="https://datafawn.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-orange-50 border border-orange-200 px-4 py-2 rounded-lg font-medium hover:bg-orange-100 hover:border-orange-300 flex items-center gap-2 transition-all duration-200"
                  title="Visit DataFawn"
                >
                  <Image src="/product_logos/dataFawn.png" alt="DataFawn Logo" width={20} height={20} className="w-5 h-5" />
                  <span className="text-sm font-semibold hidden lg:inline">{t('nav.datafawn')}</span>
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50" role="main">
          <div className="max-w-7xl mx-auto text-center">
            <div className="bg-white border border-gray-200 text-slate-700 px-6 py-3 rounded-full text-sm font-medium mb-8 inline-block">
              {t('page.badge')}
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 leading-tight">
              {t('page.title')}
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              {t('page.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <a 
                href="#contact" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 flex items-center justify-center gap-2"
              >
                {t('page.getConsultation')}
              </a>
              <a 
                href="#services" 
                className="bg-white border border-gray-300 text-slate-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 flex items-center justify-center gap-2"
              >
                {t('page.exploreSolutions')}
              </a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{t('hero.cards.automation.title')}</h3>
                <p className="text-slate-600">{t('hero.cards.automation.description')}</p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{t('hero.cards.rag.title')}</h3>
                <p className="text-slate-600">{t('hero.cards.rag.description')}</p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{t('hero.cards.integration.title')}</h3>
                <p className="text-slate-600">{t('hero.cards.integration.description')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Services Section */}
        <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-white" role="region" aria-labelledby="services-heading">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <div className="bg-gray-100 text-slate-700 px-6 py-3 rounded-full text-sm font-medium mb-6 inline-block">
                {t('services.badge')}
              </div>
              <h2 id="services-heading" className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                {t('services.title')}
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                {t('services.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8" role="list">
              {coreServices && coreServices.map((service, index) => {
                const isRAGService = service.name === t('coreServices')[3]?.name;
                const isDataAnalyticsService = service.name === t('coreServices')[2]?.name;
                const isAIIntegrationService = service.name === t('coreServices')[1]?.name;
                const ragLink = '/solutions/rag-system';
                const analyticsLink = '/solutions/analisis-data';
                const integrationLink = '/solutions/integrasi-ai';
                
                return (
                  <article key={index} className="bg-white border border-gray-200 rounded-lg shadow-md p-8 h-full flex flex-col" role="listitem">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">{service.name}</h3>
                    </div>
                    <p className="text-slate-600 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="space-y-3 mb-6 flex-1">
                      {service.features && service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-slate-600">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                    {isRAGService && (
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <Link 
                          href={ragLink} 
                          className="text-blue-600 font-medium hover:text-blue-700 inline-flex items-center gap-1 text-sm"
                        >
                          {language === 'id' ? 'Lihat Detail RAG System' : 'View RAG System Details'}
                          <span className="ml-1">→</span>
                        </Link>
                      </div>
                    )}
                    {isDataAnalyticsService && (
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <Link 
                          href={analyticsLink} 
                          className="text-blue-600 font-medium hover:text-blue-700 inline-flex items-center gap-1 text-sm"
                        >
                          {language === 'id' ? 'Lihat Detail Analisis Data' : 'View Data Analytics Details'}
                          <span className="ml-1">→</span>
                        </Link>
                      </div>
                    )}
                    {isAIIntegrationService && (
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <Link 
                          href={integrationLink} 
                          className="text-blue-600 font-medium hover:text-blue-700 inline-flex items-center gap-1 text-sm"
                        >
                          {language === 'id' ? 'Lihat Detail Integrasi AI' : 'View AI Integration Details'}
                          <span className="ml-1">→</span>
                        </Link>
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* Business Solutions Section */}
        <section id="solutions" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50" role="region" aria-labelledby="solutions-heading">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <div className="bg-white border border-gray-200 text-slate-700 px-6 py-3 rounded-full text-sm font-medium mb-6 inline-block">
                {t('solutions.badge')}
              </div>
              <h2 id="solutions-heading" className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                {t('solutions.title')}
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                {t('solutions.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {businessChallenges && businessChallenges.map((item, index) => {
                const solutionPaths = [
                  '/solutions/otomasi-bisnis',
                  '/solutions/keamanan-data', 
                  '/solutions/analisis-data',
                  '/solutions/rag-system'
                ];
                
                return (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-md p-8">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">{item.challenge}</h3>
                    <p className="text-slate-600 leading-relaxed mb-6">
                      {item.solution}
                    </p>
                    <Link 
                      href={solutionPaths[index] || '#'} 
                      className="text-blue-600 font-medium hover:text-blue-700 inline-flex items-center gap-1"
                    >
                      {t('solutions.learnMore')}
                      <span className="ml-1">→</span>
                    </Link>
                  </div>
                );
              })}
            </div>

            <div className="text-center mt-16">
              <a 
                href="#contact" 
                className="bg-blue-600 text-white px-12 py-4 rounded-lg hover:bg-blue-700 font-medium inline-block"
              >
                {t('solutions.exploreButton')}
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
                  {t('about.title')}
                </h2>
                {t('about.paragraphs') && t('about.paragraphs').map((paragraph, index) => (
                  <p key={index} className="text-lg text-slate-600 mb-6 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="relative">
                <div className="bg-white border border-gray-200 rounded-lg shadow-md p-12 text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 mb-6">
                    <Image src="/mlola-logo.svg" alt="Mlola Logo" width={40} height={40} className="w-20 h-20" />
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-6">{t('about.cardTitle')}</h3>
                  <p className="text-slate-600 leading-relaxed text-lg mb-8">
                    {t('about.cardDescription')}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    {t('about.features') && t('about.features').map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-slate-600">
                        <div className={`w-2 h-2 rounded-full ${
                          index % 3 === 0 ? 'bg-green-500' : 
                          index % 3 === 1 ? 'bg-blue-500' : 'bg-orange-500'
                        }`}></div>
                        <span>{feature}</span>
                      </div>
                    ))}
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
              {t('contact.badge')}
            </div>
            <h2 id="contact-heading" className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
              {t('contact.title')}
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              {t('contact.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <a 
                href="mailto:fikri.firdaus26@gmail.com" 
                className="bg-blue-600 text-white px-12 py-4 rounded-lg hover:bg-blue-700 font-medium inline-block"
              >
                {t('contact.consultationButton')}
              </a>
              
              <a 
                href="#services" 
                className="bg-white border border-gray-300 text-slate-700 px-12 py-4 rounded-lg font-medium hover:bg-gray-50 inline-block"
              >
                {t('contact.servicesButton')}
              </a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {t('contact.features') && t('contact.features').map((feature, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-md p-6 text-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    {index === 0 && <Shield className="h-6 w-6 text-white" />}
                    {index === 1 && <Cog className="h-6 w-6 text-white" />}
                    {index === 2 && <Database className="h-6 w-6 text-white" />}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-slate-900">{feature.title}</h3>
                  <p className="text-slate-600 text-sm">{feature.description}</p>
                </div>
              ))}
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
                  {t('footer.description')}
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-6">{t('footer.aiSolutions')}</h3>
                <ul className="space-y-4">
                  {t('footer.services') && t('footer.services').map((service, index) => (
                    <li key={index}><a href="#services" className="text-slate-300 hover:text-white">
                      {service}
                    </a></li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-6">{t('footer.company')}</h3>
                <ul className="space-y-4">
                  {t('footer.companyLinks') && t('footer.companyLinks').map((link, index) => (
                    <li key={index}><a href={index === 0 ? "#about" : index === 1 ? "#contact" : "#"} className="text-slate-300 hover:text-white">
                      {link}
                    </a></li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="border-t border-slate-700 mt-12 pt-8 text-center">
              <div className="text-slate-400">
                © 2024 <span className="font-medium">Mlola</span>. All rights reserved.
              </div>
              <div className="text-slate-500 text-sm mt-2 flex items-center justify-center">
                <MapPin className="inline-block w-4 h-4 mr-1" />
                <span>{t('footer.location')}</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <HomePage />
    </LanguageProvider>
  );
}