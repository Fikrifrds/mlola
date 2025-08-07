'use client';

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MessageSquare, Zap } from 'lucide-react';
import { LanguageProvider, useLanguage } from '../../../hooks/useLanguage';
import LanguageSwitcher from '../../../components/LanguageSwitcher';

function AIIntegrationPage() {
  const { t, language } = useLanguage();

  const integrationTypes = [
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: language === 'id' ? 'Customer Service Chatbot' : 'Customer Service Chatbot',
      description: language === 'id' 
        ? 'Chatbot AI untuk customer service yang dapat menangani pertanyaan umum dan eskalasi ke human agent'
        : 'AI chatbot for customer service that can handle common questions and escalate to human agents',
      features: language === 'id' 
        ? ['Response cepat', 'Tersedia 24/7', 'Eskalasi otomatis']
        : ['Quick response', 'Available 24/7', 'Automatic escalation']
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: language === 'id' ? 'Workflow Automation' : 'Workflow Automation',
      description: language === 'id' 
        ? 'Integrasi AI tools untuk mengotomatisasi proses bisnis dan meningkatkan efisiensi operasional'
        : 'Integrate AI tools to automate business processes and improve operational efficiency',
      features: language === 'id' 
        ? ['Proses otomatis', 'Efisiensi tinggi', 'Integrasi mudah']
        : ['Automated processes', 'High efficiency', 'Easy integration']
    }
  ];

  const aiTools = [
    'ChatGPT/OpenAI API',
    'Claude/Anthropic API', 
    'Google Gemini',
    'Custom AI Models'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
              <Image src="/mlola-logo.svg" alt="Mlola Logo" width={40} height={40} className="w-10 h-10" />
              <span className="text-xl font-semibold text-slate-800">Mlola</span>
            </Link>
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-cyan-50 to-white">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-700 mb-8">
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm font-medium">
              {language === 'id' ? 'Kembali ke Beranda' : 'Back to Home'}
            </span>
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                {language === 'id' ? 'Integrasi AI dengan Sistem Existing' : 'AI Integration with Existing Systems'}
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                {language === 'id' 
                  ? 'Manfaatkan AI tools seperti ChatGPT dan Claude dengan mengintegrasikannya ke sistem perusahaan. Mulai dari chatbot hingga workflow automation.'
                  : 'Leverage AI tools like ChatGPT and Claude by integrating them into company systems. From chatbots to workflow automation.'
                }
              </p>
              <a 
                href="#contact" 
                className="bg-cyan-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-cyan-700 inline-block"
              >
                {language === 'id' ? 'Konsultasi Integrasi' : 'Integration Consultation'}
              </a>
            </div>
            <div className="relative">
              <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageSquare className="h-8 w-8 text-cyan-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {language === 'id' ? 'AI Tools Terintegrasi' : 'Integrated AI Tools'}
                  </h3>
                  <p className="text-3xl font-bold text-cyan-600 mt-2">ChatGPT</p>
                  <p className="text-sm text-slate-600 mt-2">
                    {language === 'id' ? '+ tools AI lainnya' : '+ other AI tools'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Types Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {language === 'id' ? 'Jenis Integrasi AI' : 'AI Integration Types'}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {language === 'id' 
                ? 'Integrasi AI yang dapat disesuaikan dengan kebutuhan bisnis Anda'
                : 'AI integration that can be customized to your business needs'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {integrationTypes.map((type, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-cyan-100 rounded-lg flex items-center justify-center text-cyan-600">
                    {type.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">{type.title}</h3>
                </div>
                <p className="text-slate-600 mb-6 leading-relaxed">{type.description}</p>
                
                <div className="space-y-2">
                  {type.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-slate-600">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Tools Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {language === 'id' ? 'AI Tools yang Didukung' : 'Supported AI Tools'}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {language === 'id' 
                ? 'AI tools populer yang dapat diintegrasikan dengan sistem perusahaan'
                : 'Popular AI tools that can be integrated with company systems'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiTools.map((tool, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center">
                <h3 className="text-lg font-semibold text-slate-900">{tool}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {language === 'id' ? 'Siap Mengintegrasikan AI ke Sistem Anda?' : 'Ready to Integrate AI into Your Systems?'}
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            {language === 'id' 
              ? 'Konsultasi gratis untuk membahas kebutuhan integrasi AI dan merancang solusi yang tepat.'
              : 'Free consultation to discuss AI integration needs and design the right solution.'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:fikri.firdaus26@gmail.com" 
              className="bg-cyan-600 text-white px-8 py-3 rounded-lg hover:bg-cyan-700 font-medium"
            >
              {language === 'id' ? 'Konsultasi Integrasi AI' : 'AI Integration Consultation'}
            </a>
            <Link 
              href="/" 
              className="bg-white text-slate-900 px-8 py-3 rounded-lg hover:bg-gray-100 font-medium"
            >
              {language === 'id' ? 'Lihat Solusi Lain' : 'View Other Solutions'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function AIIntegrationApp() {
  return (
    <LanguageProvider>
      <AIIntegrationPage />
    </LanguageProvider>
  );
}