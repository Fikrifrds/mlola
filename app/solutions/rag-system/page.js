'use client';

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, FileText, MessageCircle, Search, Database, Shield, Zap } from 'lucide-react';
import { LanguageProvider, useLanguage } from '../../../hooks/useLanguage';
import Header from '../../../components/Header';

function RAGSystemPage() {
  const { t, language } = useLanguage();

  const ragFeatures = [
    {
      icon: <FileText className="h-6 w-6" />,
      title: language === 'id' ? 'Knowledge Base Custom' : 'Custom Knowledge Base',
      description: language === 'id' 
        ? 'Upload dan kelola dokumen perusahaan dalam format PDF, Word, Excel, dan PowerPoint' 
        : 'Upload and manage company documents in PDF, Word, Excel, and PowerPoint formats'
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: language === 'id' ? 'Chat Interface' : 'Chat Interface',
      description: language === 'id' 
        ? 'Interface chat yang intuitif untuk bertanya tentang data internal perusahaan' 
        : 'Intuitive chat interface to ask questions about internal company data'
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: language === 'id' ? 'Pencarian Semantik' : 'Semantic Search',
      description: language === 'id' 
        ? 'Pencarian cerdas yang memahami konteks dan makna, bukan hanya keyword matching' 
        : 'Intelligent search that understands context and meaning, not just keyword matching'
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: language === 'id' ? 'Multi-Format Support' : 'Multi-Format Support',
      description: language === 'id' 
        ? 'Mendukung berbagai format dokumen dan dapat terintegrasi dengan sistem existing' 
        : 'Supports various document formats and can integrate with existing systems'
    }
  ];

  const useCases = [
    {
      title: language === 'id' ? 'HR & Employee Handbook' : 'HR & Employee Handbook',
      description: language === 'id' 
        ? 'Karyawan dapat bertanya tentang kebijakan perusahaan, prosedur HR, dan benefit tanpa harus mencari manual'
        : 'Employees can ask about company policies, HR procedures, and benefits without manual searching',
      examples: language === 'id' 
        ? ['"Bagaimana prosedur cuti tahunan?"', '"Berapa hari sick leave yang tersedia?"', '"Apa saja benefit kesehatan?"']
        : ['"What is the annual leave procedure?"', '"How many sick leave days available?"', '"What health benefits are provided?"']
    },
    {
      title: language === 'id' ? 'Technical Documentation' : 'Technical Documentation',
      description: language === 'id' 
        ? 'Tim teknis dapat dengan mudah mengakses dokumentasi API, troubleshooting guide, dan best practices'
        : 'Technical teams can easily access API documentation, troubleshooting guides, and best practices',
      examples: language === 'id' 
        ? ['"Bagaimana cara deploy aplikasi ke production?"', '"Apa solusi untuk error database timeout?"', '"API endpoint untuk user authentication?"']
        : ['"How to deploy application to production?"', '"What is the solution for database timeout error?"', '"API endpoint for user authentication?"']
    },
    {
      title: language === 'id' ? 'Sales & Product Knowledge' : 'Sales & Product Knowledge',
      description: language === 'id' 
        ? 'Tim sales dapat cepat mendapatkan informasi produk, harga, dan competitive analysis untuk customer'
        : 'Sales teams can quickly get product information, pricing, and competitive analysis for customers',
      examples: language === 'id' 
        ? ['"Apa keunggulan produk A dibanding kompetitor?"', '"Berapa harga paket enterprise?"', '"Fitur apa yang baru di versi terbaru?"']
        : ['"What are the advantages of product A over competitors?"', '"What is the enterprise package price?"', '"What features are new in the latest version?"']
    },
    {
      title: language === 'id' ? 'Compliance & Legal' : 'Compliance & Legal',
      description: language === 'id' 
        ? 'Akses cepat ke dokumen legal, compliance requirements, dan regulatory guidelines'
        : 'Quick access to legal documents, compliance requirements, and regulatory guidelines',
      examples: language === 'id' 
        ? ['"Apa requirement GDPR untuk data customer?"', '"Bagaimana prosedur audit internal?"', '"Dokumen kontrak standar untuk vendor?"']
        : ['"What are GDPR requirements for customer data?"', '"What is the internal audit procedure?"', '"Standard contract documents for vendors?"']
    }
  ];

  const deploymentOptions = [
    {
      title: language === 'id' ? 'On-Premise RAG' : 'On-Premise RAG',
      description: language === 'id' 
        ? 'Model AI dan data tetap di server perusahaan untuk keamanan maksimal'
        : 'AI models and data remain on company servers for maximum security',
      benefits: language === 'id' 
        ? ['Kontrol data 100%', 'Compliance guarantee', 'Custom security policy', 'No external dependency']
        : ['100% data control', 'Compliance guarantee', 'Custom security policy', 'No external dependency'],
      bestFor: language === 'id' ? 'Perusahaan dengan data sangat sensitif (banking, healthcare, government)' : 'Companies with highly sensitive data (banking, healthcare, government)'
    },
    {
      title: language === 'id' ? 'Cloud RAG' : 'Cloud RAG',
      description: language === 'id' 
        ? 'Deployment di cloud dengan enkripsi tingkat enterprise untuk efisiensi biaya'
        : 'Cloud deployment with enterprise-grade encryption for cost efficiency',
      benefits: language === 'id' 
        ? ['Setup cepat', 'Maintenance minimal', 'Auto-scaling', 'Cost-effective']
        : ['Quick setup', 'Minimal maintenance', 'Auto-scaling', 'Cost-effective'],
      bestFor: language === 'id' ? 'Startup dan SME yang ingin implementasi cepat dengan budget terbatas' : 'Startups and SMEs wanting quick implementation with limited budget'
    },
    {
      title: language === 'id' ? 'Hybrid RAG' : 'Hybrid RAG',
      description: language === 'id' 
        ? 'Kombinasi on-premise untuk data sensitif dan cloud untuk data general'
        : 'Combination of on-premise for sensitive data and cloud for general data',
      benefits: language === 'id' 
        ? ['Data classification', 'Flexible deployment', 'Optimal cost', 'Balanced security']
        : ['Data classification', 'Flexible deployment', 'Optimal cost', 'Balanced security'],
      bestFor: language === 'id' ? 'Enterprise dengan beragam tingkat sensitivitas data' : 'Enterprises with varying data sensitivity levels'
    }
  ];


  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 mb-8">
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm font-medium">
              {language === 'id' ? 'Kembali ke Beranda' : 'Back to Home'}
            </span>
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                {language === 'id' ? 'Sistem RAG - Knowledge Base Perusahaan' : 'RAG System - Company Knowledge Base'}
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                {language === 'id' 
                  ? 'Transformasi dokumen perusahaan menjadi sistem tanya-jawab cerdas. Karyawan dapat bertanya tentang data internal dan mendapat jawaban akurat dalam hitungan detik.'
                  : 'Transform company documents into intelligent Q&A systems. Employees can ask about internal data and get accurate answers in seconds.'
                }
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contact" 
                  className="bg-orange-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-orange-700 inline-block text-center"
                >
                  {language === 'id' ? 'Demo RAG System' : 'RAG System Demo'}
                </a>
                <a 
                  href="mailto:fikri.firdaus26@gmail.com" 
                  className="bg-white border border-orange-200 text-orange-700 px-8 py-3 rounded-lg font-medium hover:bg-orange-50 inline-block text-center"
                >
                  {language === 'id' ? 'Diskusi Kebutuhan' : 'Discuss Requirements'}
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blue-600 text-sm font-medium">Q</span>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-3 flex-1">
                      <p className="text-sm text-slate-700">
                        {language === 'id' ? 'Bagaimana prosedur cuti tahunan?' : 'What is the annual leave procedure?'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <MessageCircle className="h-4 w-4 text-orange-600" />
                    </div>
                    <div className="bg-orange-50 rounded-lg p-3 flex-1">
                      <p className="text-sm text-slate-700">
                        {language === 'id' 
                          ? 'Berdasarkan Employee Handbook hal. 23, prosedur cuti tahunan adalah: 1) Ajukan permohonan minimal 2 minggu sebelumnya...'
                          : 'Based on Employee Handbook page 23, annual leave procedure is: 1) Submit request at least 2 weeks in advance...'
                        }
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {language === 'id' ? 'Fitur RAG System' : 'RAG System Features'}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {language === 'id' 
                ? 'Teknologi AI terdepan untuk mengubah dokumen statis menjadi knowledge base yang interaktif'
                : 'Advanced AI technology to transform static documents into interactive knowledge base'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ragFeatures.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4 text-orange-600">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {language === 'id' ? 'Use Case RAG System' : 'RAG System Use Cases'}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {language === 'id' 
                ? 'Berbagai department dapat memanfaatkan RAG system untuk meningkatkan efisiensi akses informasi'
                : 'Various departments can leverage RAG systems to improve information access efficiency'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4">{useCase.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{useCase.description}</p>
                
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="text-sm font-semibold text-orange-800 mb-2">
                    {language === 'id' ? 'Contoh Pertanyaan:' : 'Example Questions:'}
                  </h4>
                  <div className="space-y-1">
                    {useCase.examples.map((example, exampleIndex) => (
                      <p key={exampleIndex} className="text-sm text-orange-700 italic">
                        {example}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deployment Options Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {language === 'id' ? 'Pilihan Deployment RAG' : 'RAG Deployment Options'}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {language === 'id' 
                ? 'Fleksibilitas deployment sesuai kebutuhan keamanan dan anggaran perusahaan'
                : 'Deployment flexibility according to company security needs and budget'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {deploymentOptions.map((option, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md border-2 border-gray-200 hover:border-orange-200 transition-colors">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    {index === 0 && <Shield className="h-8 w-8 text-orange-600" />}
                    {index === 1 && <Zap className="h-8 w-8 text-orange-600" />}
                    {index === 2 && <Database className="h-8 w-8 text-orange-600" />}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{option.title}</h3>
                </div>
                
                <p className="text-slate-600 mb-6 leading-relaxed text-center">{option.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-900 mb-3">
                    {language === 'id' ? 'Keunggulan:' : 'Benefits:'}
                  </h4>
                  <ul className="space-y-2">
                    {option.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-slate-600">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 flex-shrink-0"></div>
                        {benefit}
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

      {/* Supported Capabilities Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {language === 'id' ? 'Yang Dapat Diproses RAG System' : 'What RAG System Can Process'}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {language === 'id' 
                ? 'Berbagai jenis dokumen dan data yang umum digunakan untuk knowledge base perusahaan'
                : 'Various document types and data commonly used for company knowledge bases'
              }
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md border border-gray-200 p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-sm font-semibold text-slate-500 uppercase mb-2">
                  {language === 'id' ? 'Format Dokumen' : 'Document Formats'}
                </h3>
                <div className="space-y-1">
                  {['PDF', 'Microsoft Word (.docx)', 'Excel (.xlsx)', 'PowerPoint (.pptx)', 'Plain Text (.txt)', 'CSV'].map((format, index) => (
                    <p key={index} className="text-sm text-slate-900 font-medium">{format}</p>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-sm font-semibold text-slate-500 uppercase mb-2">
                  {language === 'id' ? 'Bahasa yang Didukung' : 'Supported Languages'}
                </h3>
                <div className="space-y-1">
                  {[
                    language === 'id' ? 'Bahasa Indonesia' : 'Indonesian',
                    'English',
                    language === 'id' ? 'Lainnya' : 'Others'
                  ].map((lang, index) => (
                    <p key={index} className="text-sm text-slate-900 font-medium">{lang}</p>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-sm font-semibold text-slate-500 uppercase mb-2">
                  {language === 'id' ? 'Jenis Data Internal' : 'Internal Data Types'}
                </h3>
                <div className="space-y-1">
                  {[
                    language === 'id' ? 'Employee Handbook' : 'Employee Handbook',
                    language === 'id' ? 'SOP & Prosedur' : 'SOPs & Procedures', 
                    language === 'id' ? 'Dokumentasi Teknis' : 'Technical Documentation',
                    language === 'id' ? 'Knowledge Base' : 'Knowledge Base',
                    language === 'id' ? 'FAQ Internal' : 'Internal FAQs',
                    language === 'id' ? 'Training Materials' : 'Training Materials',
                    language === 'id' ? 'Lainnya' : 'Others'
                  ].map((type, index) => (
                    <p key={index} className="text-sm text-slate-900 font-medium">{type}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-orange-50 border border-orange-200 rounded-lg p-6">
            <p className="text-sm text-orange-800 text-center">
              {language === 'id' 
                ? '💡 Kemampuan spesifik dapat bervariasi tergantung kompleksitas dokumen dan kebutuhan implementasi'
                : '💡 Specific capabilities may vary depending on document complexity and implementation requirements'
              }
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {language === 'id' ? 'Siap Membangun Knowledge Base Perusahaan?' : 'Ready to Build Your Company Knowledge Base?'}
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            {language === 'id' 
              ? 'Demo gratis RAG system dengan dokumen perusahaan Anda. Lihat bagaimana teknologi ini dapat menghemat waktu tim dan meningkatkan akses informasi.'
              : 'Free RAG system demo with your company documents. See how this technology can save team time and improve information access.'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:fikri.firdaus26@gmail.com" 
              className="bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 font-medium"
            >
              {language === 'id' ? 'Request Demo RAG' : 'Request RAG Demo'}
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

export default function RAGSystemApp() {
  return (
    <LanguageProvider>
      <RAGSystemPage />
    </LanguageProvider>
  );
}