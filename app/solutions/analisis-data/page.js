'use client';

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, BarChart3, PieChart, TrendingUp, Eye } from 'lucide-react';
import { LanguageProvider, useLanguage } from '../../../hooks/useLanguage';
import Header from '../../../components/Header';

function DataAnalysisSolutionPage() {
  const { t, language } = useLanguage();

  const analysisTypes = [
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: language === 'id' ? 'Dashboard Otomatis' : 'Automated Dashboards',
      description: language === 'id' 
        ? 'Dashboard real-time yang menampilkan KPI bisnis penting dan dapat disesuaikan dengan kebutuhan' 
        : 'Real-time dashboards displaying important business KPIs, customizable to your needs'
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: language === 'id' ? 'Prediksi & Forecasting' : 'Predictive Analytics',
      description: language === 'id' 
        ? 'Analisis prediktif untuk penjualan, inventori, dan tren bisnis berdasarkan data historis' 
        : 'Predictive analytics for sales, inventory, and business trends based on historical data'
    },
    {
      icon: <PieChart className="h-6 w-6" />,
      title: language === 'id' ? 'Analisis Customer' : 'Customer Analytics',
      description: language === 'id' 
        ? 'Pemahaman mendalam tentang perilaku customer untuk strategi marketing yang lebih efektif' 
        : 'Deep insights into customer behavior for more effective marketing strategies'
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: language === 'id' ? 'Business Intelligence' : 'Business Intelligence',
      description: language === 'id' 
        ? 'Transformasi data mentah menjadi insight yang dapat ditindaklanjuti untuk pengambilan keputusan' 
        : 'Transform raw data into actionable insights for informed decision making'
    }
  ];

  const processFlow = [
    {
      step: '01',
      title: language === 'id' ? 'Audit Data' : 'Data Audit',
      description: language === 'id' 
        ? 'Evaluasi kualitas data existing dan identifikasi sumber data yang tersedia' 
        : 'Evaluate existing data quality and identify available data sources'
    },
    {
      step: '02', 
      title: language === 'id' ? 'Integrasi Data' : 'Data Integration',
      description: language === 'id' 
        ? 'Mengintegrasikan berbagai sumber data menjadi data warehouse yang terpusat' 
        : 'Integrate various data sources into a centralized data warehouse'
    },
    {
      step: '03',
      title: language === 'id' ? 'Analisis & Modeling' : 'Analysis & Modeling', 
      description: language === 'id' 
        ? 'Membangun model analitik dan algoritma machine learning sesuai kebutuhan bisnis' 
        : 'Build analytical models and machine learning algorithms based on business needs'
    },
    {
      step: '04',
      title: language === 'id' ? 'Visualisasi & Reporting' : 'Visualization & Reporting',
      description: language === 'id' 
        ? 'Membuat dashboard interaktif dan sistem reporting otomatis untuk stakeholder' 
        : 'Create interactive dashboards and automated reporting systems for stakeholders'
    }
  ];

  const useCases = [
    {
      title: language === 'id' ? 'Retail & E-commerce' : 'Retail & E-commerce',
      challenges: language === 'id' 
        ? ['Prediksi demand produk', 'Optimasi inventory', 'Analisis customer journey', 'Price optimization']
        : ['Product demand prediction', 'Inventory optimization', 'Customer journey analysis', 'Price optimization'],
      results: language === 'id' ? 'Peningkatan margin dan customer satisfaction' : 'Improved margins and customer satisfaction'
    },
    {
      title: language === 'id' ? 'Manufacturing' : 'Manufacturing',
      challenges: language === 'id' 
        ? ['Predictive maintenance', 'Quality control', 'Supply chain optimization', 'Production planning']
        : ['Predictive maintenance', 'Quality control', 'Supply chain optimization', 'Production planning'],
      results: language === 'id' ? 'Pengurangan downtime dan waste' : 'Reduced downtime and waste'
    },
    {
      title: language === 'id' ? 'Financial Services' : 'Financial Services',
      challenges: language === 'id' 
        ? ['Risk assessment', 'Fraud detection', 'Customer segmentation', 'Portfolio optimization']
        : ['Risk assessment', 'Fraud detection', 'Customer segmentation', 'Portfolio optimization'],
      results: language === 'id' ? 'Mitigasi risk dan peningkatan ROI' : 'Risk mitigation and improved ROI'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 mb-8">
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm font-medium">
              {language === 'id' ? 'Kembali ke Beranda' : 'Back to Home'}
            </span>
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                {language === 'id' ? 'Transformasi Data Menjadi Insight Bisnis' : 'Transform Data into Business Insights'}
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                {language === 'id' 
                  ? 'Ubah data mentah menjadi insight yang dapat ditindaklanjuti. Dashboard otomatis, prediksi akurat, dan analisis mendalam untuk keputusan bisnis yang lebih baik.'
                  : 'Transform raw data into actionable insights. Automated dashboards, accurate predictions, and deep analytics for better business decisions.'
                }
              </p>
              <a 
                href="#contact" 
                className="bg-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-purple-700 inline-block"
              >
                {language === 'id' ? 'Analisis Data Gratis' : 'Free Data Analysis'}
              </a>
            </div>
            <div className="relative">
              <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {language === 'id' ? 'Insight Akurasi' : 'Insight Accuracy'}
                  </h3>
                  <p className="text-3xl font-bold text-purple-600 mt-2">95%+</p>
                  <p className="text-sm text-slate-600 mt-2">
                    {language === 'id' ? 'prediksi bisnis' : 'business predictions'}
                  </p>
                  <p className="text-xs text-slate-500 mt-2 italic">
                    {language === 'id' ? '*akurasi tergantung kualitas dataset' : '*accuracy depends on dataset quality'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analysis Types Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {language === 'id' ? 'Jenis Analisis Data' : 'Data Analysis Types'}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {language === 'id' 
                ? 'Berbagai pendekatan analitis untuk mengoptimalkan performa bisnis Anda'
                : 'Various analytical approaches to optimize your business performance'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {analysisTypes.map((type, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4 text-purple-600">
                  {type.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{type.title}</h3>
                <p className="text-slate-600">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {language === 'id' ? 'Proses Analisis Data' : 'Data Analysis Process'}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {language === 'id' 
                ? 'Metodologi terstruktur untuk menghasilkan insight yang akurat dan relevan'
                : 'Structured methodology to generate accurate and relevant insights'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processFlow.map((process, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                  <div className="text-4xl font-bold text-purple-100 mb-4">{process.step}</div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{process.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{process.description}</p>
                </div>
                {index < processFlow.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-gray-300"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {language === 'id' ? 'Studi Kasus Industri' : 'Industry Case Studies'}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {language === 'id' 
                ? 'Contoh implementasi analisis data di berbagai sektor bisnis'
                : 'Examples of data analysis implementation across various business sectors'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
                <h3 className="text-xl font-bold text-slate-900 mb-6">{useCase.title}</h3>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-900 mb-3">
                    {language === 'id' ? 'Tantangan:' : 'Challenges:'}
                  </h4>
                  <ul className="space-y-2">
                    {useCase.challenges.map((challenge, challengeIndex) => (
                      <li key={challengeIndex} className="flex items-center text-sm text-slate-600">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 flex-shrink-0"></div>
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-sm text-slate-600">
                    <span className="font-medium text-purple-700">
                      {language === 'id' ? 'Hasil: ' : 'Results: '}
                    </span>
                    {useCase.results}
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
            {language === 'id' ? 'Mulai Mengoptimalkan Data Bisnis Anda' : 'Start Optimizing Your Business Data'}
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            {language === 'id' 
              ? 'Konsultasi gratis untuk menganalisis potensi data Anda dan merancang strategi analitik yang tepat.'
              : 'Free consultation to analyze your data potential and design the right analytics strategy.'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:fikri.firdaus26@gmail.com" 
              className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 font-medium"
            >
              {language === 'id' ? 'Analisis Data Gratis' : 'Free Data Analysis'}
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

export default function DataAnalysisSolutionApp() {
  return (
    <LanguageProvider>
      <DataAnalysisSolutionPage />
    </LanguageProvider>
  );
}