'use client';

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle, Clock, TrendingUp, Users } from 'lucide-react';
import { LanguageProvider, useLanguage } from '../../../hooks/useLanguage';
import LanguageSwitcher from '../../../components/LanguageSwitcher';

function AutomationSolutionPage() {
  const { t, language } = useLanguage();

  const benefits = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: language === 'id' ? 'Hemat Waktu' : 'Time Savings',
      description: language === 'id' 
        ? 'Kurangi waktu untuk tugas berulang hingga beberapa jam per hari' 
        : 'Reduce time spent on repetitive tasks by several hours daily'
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: language === 'id' ? 'Akurasi Tinggi' : 'High Accuracy',
      description: language === 'id' 
        ? 'Minimalkan human error dalam pemrosesan data dan dokumen' 
        : 'Minimize human errors in data and document processing'
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: language === 'id' ? 'Produktivitas Tim' : 'Team Productivity',
      description: language === 'id' 
        ? 'Tim fokus pada pekerjaan strategis, bukan tugas administratif' 
        : 'Team focuses on strategic work, not administrative tasks'
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: language === 'id' ? 'Skalabilitas' : 'Scalability',
      description: language === 'id' 
        ? 'Sistem dapat berkembang seiring pertumbuhan bisnis' 
        : 'System can scale with business growth'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: language === 'id' ? 'Analisis Proses' : 'Process Analysis',
      description: language === 'id' 
        ? 'Kami menganalisis workflow existing untuk menemukan area yang dapat diotomatisasi' 
        : 'We analyze existing workflows to identify areas that can be automated'
    },
    {
      step: '02', 
      title: language === 'id' ? 'Desain Solusi' : 'Solution Design',
      description: language === 'id' 
        ? 'Merancang sistem otomasi yang disesuaikan dengan kebutuhan spesifik bisnis Anda' 
        : 'Design automation systems tailored to your specific business needs'
    },
    {
      step: '03',
      title: language === 'id' ? 'Implementasi' : 'Implementation', 
      description: language === 'id' 
        ? 'Mengimplementasikan dan mengintegrasikan sistem dengan infrastruktur existing' 
        : 'Implement and integrate system with existing infrastructure'
    },
    {
      step: '04',
      title: language === 'id' ? 'Training & Support' : 'Training & Support',
      description: language === 'id' 
        ? 'Pelatihan tim dan dukungan berkelanjutan untuk memastikan adopsi yang sukses' 
        : 'Team training and ongoing support to ensure successful adoption'
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8">
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm font-medium">
              {language === 'id' ? 'Kembali ke Beranda' : 'Back to Home'}
            </span>
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                {language === 'id' ? 'Otomasi Bisnis dengan AI' : 'Business Automation with AI'}
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                {language === 'id' 
                  ? 'Transformasi proses bisnis berulang menjadi sistem otomatis yang efisien. Tingkatkan produktivitas tim dengan teknologi AI yang dapat diandalkan.'
                  : 'Transform repetitive business processes into efficient automated systems. Increase team productivity with reliable AI technology.'
                }
              </p>
              <a 
                href="#contact" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 inline-block"
              >
                {language === 'id' ? 'Konsultasi Gratis' : 'Free Consultation'}
              </a>
            </div>
            <div className="relative">
              <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {language === 'id' ? 'Hemat Waktu Hingga' : 'Save Up To'}
                  </h3>
                  <p className="text-3xl font-bold text-blue-600 mt-2">
                    {language === 'id' ? '5 Jam/Hari' : '5 Hours/Day'}
                  </p>
                  <p className="text-sm text-slate-600 mt-2">
                    {language === 'id' ? 'untuk tugas administratif' : 'on administrative tasks'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {language === 'id' ? 'Manfaat Otomasi Bisnis' : 'Business Automation Benefits'}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {language === 'id' 
                ? 'Sistem otomasi kami membantu bisnis mencapai efisiensi optimal dengan pendekatan yang terbukti'
                : 'Our automation systems help businesses achieve optimal efficiency with proven approaches'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4 text-blue-600">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {language === 'id' ? 'Proses Implementasi' : 'Implementation Process'}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {language === 'id' 
                ? 'Pendekatan sistematis untuk memastikan implementasi otomasi yang sukses'
                : 'Systematic approach to ensure successful automation implementation'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((process, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <div className="text-4xl font-bold text-blue-100 mb-4">{process.step}</div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{process.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{process.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-gray-300"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {language === 'id' ? 'Siap Mengotomatisasi Bisnis Anda?' : 'Ready to Automate Your Business?'}
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            {language === 'id' 
              ? 'Konsultasi gratis untuk mengetahui bagaimana otomasi dapat menghemat waktu dan meningkatkan efisiensi tim Anda.'
              : 'Free consultation to learn how automation can save time and improve your team efficiency.'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:fikri.firdaus26@gmail.com" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 font-medium"
            >
              {language === 'id' ? 'Mulai Konsultasi' : 'Start Consultation'}
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

export default function AutomationSolutionApp() {
  return (
    <LanguageProvider>
      <AutomationSolutionPage />
    </LanguageProvider>
  );
}