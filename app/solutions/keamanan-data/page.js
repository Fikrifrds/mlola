'use client';

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Shield, Server, Lock } from 'lucide-react';
import { LanguageProvider, useLanguage } from '../../../hooks/useLanguage';
import LanguageSwitcher from '../../../components/LanguageSwitcher';

function DataSecuritySolutionPage() {
  const { t, language } = useLanguage();

  const securityFeatures = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: language === 'id' ? 'Data Tetap Internal' : 'Data Stays Internal',
      description: language === 'id' 
        ? 'Deployment on-premise memastikan data sensitif tidak keluar dari infrastruktur perusahaan' 
        : 'On-premise deployment ensures sensitive data never leaves company infrastructure'
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: language === 'id' ? 'Kontrol Penuh' : 'Full Control',
      description: language === 'id' 
        ? 'Anda memiliki kontrol penuh atas sistem AI dan dapat mengatur akses sesuai kebijakan perusahaan' 
        : 'You have full control over AI systems and can configure access according to company policies'
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: language === 'id' ? 'Keamanan Data' : 'Data Security',
      description: language === 'id' 
        ? 'Implementasi best practices keamanan untuk melindungi data perusahaan dari akses tidak authorized' 
        : 'Implementation of security best practices to protect company data from unauthorized access'
    },
  ];

  const deploymentOptions = [
    {
      title: language === 'id' ? 'On-Premise Deployment' : 'On-Premise Deployment',
      description: language === 'id' 
        ? 'Model AI dijalankan sepenuhnya di server perusahaan Anda'
        : 'AI models run entirely on your company servers',
      pros: language === 'id' 
        ? ['Kontrol data maksimal', 'Zero data sharing', 'Customizable security', 'Compliance guarantee']
        : ['Maximum data control', 'Zero data sharing', 'Customizable security', 'Compliance guarantee'],
      bestFor: language === 'id' ? 'Perusahaan dengan data sangat sensitif' : 'Companies with highly sensitive data'
    },
    {
      title: language === 'id' ? 'Hybrid Deployment' : 'Hybrid Deployment', 
      description: language === 'id' 
        ? 'Kombinasi on-premise untuk data sensitif dan cloud untuk efisiensi'
        : 'Combination of on-premise for sensitive data and cloud for efficiency',
      pros: language === 'id' 
        ? ['Fleksibilitas tinggi', 'Cost-effective', 'Scalable', 'Data classification']
        : ['High flexibility', 'Cost-effective', 'Scalable', 'Data classification'],
      bestFor: language === 'id' ? 'Perusahaan dengan beragam tingkat sensitivitas data' : 'Companies with varying data sensitivity levels'
    },
    {
      title: language === 'id' ? 'Private Cloud' : 'Private Cloud',
      description: language === 'id' 
        ? 'Cloud infrastructure khusus untuk perusahaan Anda'
        : 'Dedicated cloud infrastructure for your company',
      pros: language === 'id' 
        ? ['Isolasi penuh', 'Managed security', 'High availability', 'Professional support']
        : ['Full isolation', 'Managed security', 'High availability', 'Professional support'],
      bestFor: language === 'id' ? 'Perusahaan yang membutuhkan keseimbangan keamanan dan kemudahan' : 'Companies needing balance of security and convenience'
    }
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-white">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 mb-8">
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm font-medium">
              {language === 'id' ? 'Kembali ke Beranda' : 'Back to Home'}
            </span>
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                {language === 'id' ? 'AI Aman dengan Data Terlindungi' : 'Secure AI with Protected Data'}
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                {language === 'id' 
                  ? 'Implementasi AI dengan keamanan data tingkat enterprise. Pilih deployment on-premise untuk kontrol penuh atau hybrid untuk fleksibilitas optimal.'
                  : 'Implement AI with enterprise-grade data security. Choose on-premise deployment for full control or hybrid for optimal flexibility.'
                }
              </p>
              <a 
                href="#contact" 
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 inline-block"
              >
                {language === 'id' ? 'Konsultasi Keamanan' : 'Security Consultation'}
              </a>
            </div>
            <div className="relative">
              <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {language === 'id' ? 'Keamanan Data' : 'Data Security'}
                  </h3>
                  <p className="text-3xl font-bold text-green-600 mt-2">100%</p>
                  <p className="text-sm text-slate-600 mt-2">
                    {language === 'id' ? 'dalam kendali Anda' : 'under your control'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {language === 'id' ? 'Fitur Keamanan Enterprise' : 'Enterprise Security Features'}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {language === 'id' 
                ? 'Teknologi keamanan terdepan untuk melindungi data bisnis kritis Anda'
                : 'Advanced security technology to protect your critical business data'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4 text-green-600">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deployment Options Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {language === 'id' ? 'Pilihan Deployment Fleksibel' : 'Flexible Deployment Options'}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {language === 'id' 
                ? 'Sesuaikan strategi deployment dengan kebutuhan keamanan dan budget perusahaan'
                : 'Customize deployment strategy to match your security needs and budget'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {deploymentOptions.map((option, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4">{option.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{option.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-900 mb-3">
                    {language === 'id' ? 'Keunggulan:' : 'Benefits:'}
                  </h4>
                  <ul className="space-y-2">
                    {option.pros.map((pro, proIndex) => (
                      <li key={proIndex} className="flex items-center text-sm text-slate-600">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-slate-600">
                    <span className="font-medium">
                      {language === 'id' ? 'Cocok untuk: ' : 'Best for: '}
                    </span>
                    {option.bestFor}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {language === 'id' ? 'Diskusikan Kebutuhan Keamanan Data Anda' : 'Discuss Your Data Security Needs'}
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            {language === 'id' 
              ? 'Konsultasi dengan ahli keamanan kami untuk menemukan solusi AI yang tepat dan aman untuk bisnis Anda.'
              : 'Consult with our security experts to find the right and secure AI solution for your business.'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:fikri.firdaus26@gmail.com" 
              className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 font-medium"
            >
              {language === 'id' ? 'Konsultasi Keamanan' : 'Security Consultation'}
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

export default function DataSecuritySolutionApp() {
  return (
    <LanguageProvider>
      <DataSecuritySolutionPage />
    </LanguageProvider>
  );
}