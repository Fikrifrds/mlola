'use client';

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { LanguageProvider, useLanguage } from '../../hooks/useLanguage';
import Header from '../../components/Header';

function ProductsPage() {
  const { language } = useLanguage();

  const products = [
    {
      name: 'DataFawn',
      logo: '/product_logos/dataFawn.png',
      image: '/product_images/datafawn.png',
      description: language === 'id'
        ? 'Platform analisis data dan visualisasi yang powerful untuk mengubah data mentah menjadi insights bisnis yang actionable.'
        : 'Powerful data analysis and visualization platform to transform raw data into actionable business insights.',
      features: language === 'id'
        ? ['Visualisasi Data Interaktif', 'Business Intelligence', 'Real-time Analytics', 'Custom Dashboards']
        : ['Interactive Data Visualization', 'Business Intelligence', 'Real-time Analytics', 'Custom Dashboards'],
      url: 'https://datafawn.com',
      gradient: 'from-orange-50 to-white'
    },
    {
      name: 'TubeGrasp',
      logo: '/product_logos/tubegrasp.png',
      image: '/product_images/tubegrasp.png',
      description: language === 'id'
        ? 'Tools untuk mengekstrak insights dari konten video, memudahkan analisis dan dokumentasi video secara otomatis.'
        : 'Tools to extract insights from video content, facilitating automatic video analysis and documentation.',
      features: language === 'id'
        ? ['Video Transcription', 'Content Extraction', 'Automatic Summarization', 'Multi-language Support']
        : ['Video Transcription', 'Content Extraction', 'Automatic Summarization', 'Multi-language Support'],
      url: 'https://tubegrasp.com',
      gradient: 'from-red-50 to-white'
    },
    {
      name: 'Denahku',
      logo: '/product_logos/denahku.svg',
      image: '/product_images/denahku.png',
      description: language === 'id'
        ? 'Aplikasi untuk membuat dan mengelola denah ruangan, floor plan, dan layout interior secara mudah dan profesional.'
        : 'Application to create and manage room layouts, floor plans, and interior layouts easily and professionally.',
      features: language === 'id'
        ? ['Floor Plan Designer', 'Interior Layout', 'Export Multiple Formats', 'Collaboration Tools']
        : ['Floor Plan Designer', 'Interior Layout', 'Export Multiple Formats', 'Collaboration Tools'],
      url: 'https://denahku.com',
      gradient: 'from-blue-50 to-white'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8">
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm font-medium">
              {language === 'id' ? 'Kembali ke Beranda' : 'Back to Home'}
            </span>
          </Link>

          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              {language === 'id' ? 'Produk Kami' : 'Our Products'}
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              {language === 'id'
                ? 'Jelajahi portfolio produk AI dan solusi digital yang kami kembangkan untuk membantu bisnis dan individu mencapai produktivitas maksimal.'
                : 'Explore our portfolio of AI products and digital solutions developed to help businesses and individuals achieve maximum productivity.'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            {products.map((product, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content Side */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative w-16 h-16 flex-shrink-0">
                      <Image
                        src={product.logo}
                        alt={`${product.name} Logo`}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                      {product.name}
                    </h2>
                  </div>

                  <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-slate-900 mb-3 uppercase">
                      {language === 'id' ? 'Fitur Utama:' : 'Key Features:'}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {product.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-slate-600">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {product.url !== '#' ? (
                    <a
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                    >
                      {language === 'id' ? 'Kunjungi Website' : 'Visit Website'}
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  ) : (
                    <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-600 px-6 py-3 rounded-lg font-medium">
                      {language === 'id' ? 'Segera Hadir' : 'Coming Soon'}
                    </div>
                  )}
                </div>

                {/* Image Side */}
                <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className={`bg-gradient-to-br ${product.gradient} rounded-2xl shadow-xl border border-gray-200 p-8`}>
                    <div className="relative w-full aspect-video">
                      <Image
                        src={product.image}
                        alt={`${product.name} Screenshot`}
                        fill
                        className="object-contain rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {language === 'id' ? 'Butuh Solusi Custom?' : 'Need a Custom Solution?'}
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            {language === 'id'
              ? 'Kami siap membantu mengembangkan produk AI dan solusi digital sesuai kebutuhan spesifik bisnis Anda.'
              : 'We are ready to help develop AI products and digital solutions tailored to your specific business needs.'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:fikri.firdaus26@gmail.com"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 font-medium"
            >
              {language === 'id' ? 'Hubungi Kami' : 'Contact Us'}
            </a>
            <Link
              href="/"
              className="bg-white text-slate-900 px-8 py-3 rounded-lg hover:bg-gray-100 font-medium"
            >
              {language === 'id' ? 'Kembali ke Beranda' : 'Back to Home'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function ProductsApp() {
  return (
    <LanguageProvider>
      <ProductsPage />
    </LanguageProvider>
  );
}
