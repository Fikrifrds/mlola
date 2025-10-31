'use client';

import { createContext, useContext, useEffect, useState } from 'react';

const LanguageContext = createContext();

// Translation data
const translations = {
  id: {
    page: {
      title: "Solusi AI untuk Bisnis Indonesia",
      description: "Mlola membantu bisnis Indonesia menggunakan teknologi AI dengan cara yang praktis. Dari otomasi proses hingga analisis data, kami sesuaikan dengan kebutuhan dan anggaran perusahaan Anda.",
      badge: "Solusi AI & Otomasi Bisnis",
      getConsultation: "Konsultasi Gratis",
      exploreSolutions: "Lihat Solusi Kami"
    },
    hero: {
      cards: {
        automation: {
          title: "Otomasi Bisnis",
          description: "Mengotomatisasi pekerjaan berulang dengan AI untuk menghemat waktu tim Anda"
        },
        rag: {
          title: "Sistem RAG",
          description: "Pilih deployment di server sendiri untuk keamanan maksimal, atau gunakan cloud untuk efisiensi biaya"
        },
        integration: {
          title: "Integrasi AI Custom",
          description: "Mengintegrasikan AI dengan sistem yang sudah ada di perusahaan Anda"
        }
      }
    },
    services: {
      title: "Layanan AI Kami",
      subtitle: "Kami membantu bisnis Anda menggunakan AI dengan cara yang masuk akal, mulai dari otomasi hingga implementasi yang aman dan terjangkau.",
      badge: "Layanan Utama"
    },
    solutions: {
      title: "Solusi untuk Masalah Bisnis Anda",
      subtitle: "Temukan bagaimana AI dapat membantu mengatasi tantangan operasional di perusahaan Anda dengan pendekatan yang realistis.",
      badge: "Solusi Bisnis",
      learnMore: "Pelajari lebih lanjut",
      exploreButton: "Lihat Semua Solusi AI"
    },
    businessChallenges: [
      {
        challenge: "Perlu mengotomatisasi pekerjaan berulang setiap hari?",
        solution: "Sistem otomasi kami dapat membantu mengurangi pekerjaan manual dan meningkatkan akurasi. Hasilnya bervariasi tergantung kompleksitas bisnis, namun biasanya dapat menghemat waktu yang signifikan."
      },
      {
        challenge: "Ingin menggunakan AI namun khawatir dengan keamanan data?",
        solution: "Kami menyediakan pilihan yang fleksibel. Anda dapat melakukan deployment di server sendiri untuk menjaga data tetap di infrastruktur internal, atau menggunakan API eksternal yang lebih ekonomis sesuai anggaran dan kebutuhan."
      },
      {
        challenge: "Memiliki banyak data namun kesulitan dalam menganalisisnya?",
        solution: "Kami membantu mengubah data mentah menjadi insight yang berguna untuk bisnis. Pendekatan kami disesuaikan dengan kebutuhan spesifik perusahaan Anda untuk hasil yang lebih relevan."
      },
      {
        challenge: "Karyawan sering kesulitan mencari informasi dalam dokumen perusahaan?",
        solution: "Sistem RAG kami mengubah dokumen perusahaan menjadi knowledge base yang dapat dichat. Karyawan dapat bertanya tentang kebijakan, prosedur, atau data internal dan mendapat jawaban akurat dalam hitungan detik."
      }
    ],
    coreServices: [
      {
        name: "Otomasi Bisnis",
        description: "Mengotomatisasi proses bisnis berulang menggunakan AI. Mulai dari input data, pemrosesan dokumen, hingga pembuatan laporan otomatis. Tim Anda dapat fokus pada hal yang lebih strategis.",
        features: ["Pemrosesan Dokumen Otomatis", "Laporan Real-time", "Optimasi Workflow", "Manajemen Proses Bisnis"]
      },
      {
        name: "Integrasi & Implementasi AI",
        description: "Membantu bisnis menggunakan tools AI yang sudah tersedia (ChatGPT, Claude, dll). Mengintegrasikan ke sistem perusahaan, membuat chatbot untuk customer service, atau mengatur workflow AI.",
        features: ["Chatbot Cerdas", "Integrasi Tool AI", "Implementasi API", "Otomasi Workflow"]
      },
      {
        name: "Analisis Data & Business Intelligence",
        description: "Mengubah data bisnis menjadi insight yang dapat ditindaklanjuti. Membuat dashboard otomatis, prediksi penjualan/inventori, plus analisis perilaku customer dengan rekomendasi yang praktis.",
        features: ["Dashboard Otomatis", "Prediksi & Forecasting", "Analisis Customer", "Business Intelligence"]
      },
      {
        name: "Sistem RAG",
        description: "Sistem tanya-jawab dokumen yang fleksibel sesuai kebutuhan. Dapat melakukan deployment di server sendiri untuk kontrol penuh, atau menggunakan cloud untuk efisiensi biaya.",
        features: ["Knowledge Base Custom", "Sistem Tanya-Jawab Dokumen", "Deployment Fleksibel", "Implementasi RAG Custom"]
      }
    ],
    about: {
      title: "Bagaimana Mlola Mengadaptasi Solusi AI untuk Bisnis Anda",
      paragraphs: [
        "Mlola adalah perusahaan yang fokus membantu bisnis Indonesia menggunakan AI dengan cara yang praktis. Kami memahami bahwa setiap perusahaan memiliki kebutuhan yang berbeda, sehingga solusi kami disesuaikan dengan kondisi spesifik masing-masing.",
        "Tim kami mengembangkan solusi AI mulai dari sistem RAG hingga integrasi custom untuk proses bisnis. Setiap proyek kami tangani dengan memperhatikan tantangan nyata dalam implementasi AI di lingkungan bisnis.",
        "Keahlian kami mencakup workflow otomatis hingga analitik advanced. Tersedia pilihan deployment yang fleksibel - di server sendiri untuk keamanan maksimal, atau menggunakan cloud untuk efisiensi biaya.",
        "Kami memahami bahwa adopsi teknologi AI melibatkan banyak pertimbangan seperti compliance, scalability, dan integrasi. Tujuan kami adalah mengembangkan solusi yang mengatasi masalah praktis ini sambil memberikan nilai nyata untuk operasional bisnis Anda."
      ],
      cardTitle: "Solusi AI yang Fleksibel",
      cardDescription: "Kami menyediakan strategi deployment AI yang dapat disesuaikan dengan kebutuhan dan anggaran spesifik Anda. Baik untuk keamanan data dengan deployment di infrastruktur sendiri, efisiensi biaya dengan API pihak ketiga, atau pendekatan hybrid - tim kami memberikan solusi yang selaras dengan tujuan bisnis dan kondisi teknis Anda.",
      features: [
        "Deployment On-Premise",
        "Opsi Private",
        "Fokus Keamanan",
        "Solusi Fleksibel", 
        "API Hemat Biaya",
        "Berbagai Pilihan Deployment"
      ]
    },
    contact: {
      title: "Siap Mentransformasi Bisnis dengan AI?",
      subtitle: "Siap mengimplementasikan solusi AI yang memberikan hasil bisnis nyata? Baik untuk otomasi bisnis, deployment RAG on-premise, atau integrasi AI custom - kami siap membantu kesuksesan Anda.",
      badge: "Mulai Sekarang",
      consultationButton: "Konsultasi AI Gratis",
      servicesButton: "Lihat Layanan AI",
      features: [
        {
          title: "Privasi Data",
          description: "Data Anda dapat tetap di infrastruktur sendiri"
        },
        {
          title: "Integrasi Custom",
          description: "Solusi AI yang disesuaikan dengan bisnis Anda"
        },
        {
          title: "Enterprise Ready", 
          description: "Dapat diskalakan untuk berbagai ukuran bisnis"
        }
      ]
    },
    footer: {
      description: "Membantu transformasi bisnis melalui solusi AI, deployment on-premise yang aman, dan layanan otomasi yang komprehensif.",
      aiSolutions: "Solusi AI",
      services: [
        "Otomasi Bisnis",
        "Integrasi AI",
        "Analisis Data", 
        "RAG On-Premise"
      ],
      company: "Perusahaan",
      companyLinks: [
        "Tentang Kami",
        "Kontak",
        "Studi Kasus"
      ],
      location: "Sidoarjo, Indonesia"
    },
    nav: {
      aiSolutions: "Solusi AI",
      products: "Produk",
      about: "Tentang",
      contact: "Kontak",
      getStarted: "Mulai",
      datafawn: "Datafawn"
    }
  },
  en: {
    page: {
      title: "AI Solutions for Indonesian Businesses", 
      description: "Mlola helps Indonesian businesses implement AI technology in practical ways. From process automation to data analysis, we customize solutions to match your company's specific needs and budget requirements.",
      badge: "AI Solutions & Business Automation",
      getConsultation: "Free Consultation",
      exploreSolutions: "Explore Our Solutions"
    },
    hero: {
      cards: {
        automation: {
          title: "Business Automation",
          description: "Transform repetitive tasks into automated processes with AI technology to optimize your team's productivity"
        },
        rag: {
          title: "RAG Systems",
          description: "Choose on-premise deployment for maximum security, or cloud-based solutions for enhanced cost efficiency"
        },
        integration: {
          title: "Custom AI Integration", 
          description: "Seamlessly integrate AI capabilities with your existing company systems and workflows"
        }
      }
    },
    services: {
      title: "Our AI Services",
      subtitle: "We help your business implement AI technology in practical and meaningful ways, from automation to secure and cost-effective deployment.",
      badge: "Core Services"
    },
    solutions: {
      title: "Solutions for Your Business Challenges",
      subtitle: "Discover how AI can help address operational challenges in your company through realistic and proven approaches.",
      badge: "Business Solutions",
      learnMore: "Learn more",
      exploreButton: "Explore All AI Solutions"
    },
    businessChallenges: [
      {
        challenge: "Need to automate repetitive daily tasks?",
        solution: "Our automation systems can help reduce manual workload and improve operational accuracy. Results vary depending on business complexity, but typically deliver significant time savings."
      },
      {
        challenge: "Want to implement AI while maintaining data security?",
        solution: "We provide flexible deployment options. You can choose on-premise deployment to keep data within your infrastructure, or utilize external APIs for more economical solutions, tailored to your budget and security requirements."
      },
      {
        challenge: "Have extensive data but struggling with analysis?",
        solution: "We help transform raw data into actionable business insights. Our approach is customized to your company's specific requirements to ensure more relevant and valuable outcomes."
      },
      {
        challenge: "Employees often struggle to find information in company documents?",
        solution: "Our RAG system transforms company documents into a chateable knowledge base. Employees can ask about policies, procedures, or internal data and get accurate answers in seconds."
      }
    ],
    coreServices: [
      {
        name: "Business Automation",
        description: "Automate repetitive business processes using AI technology. From data input and document processing to automated report generation. Your team can focus on more strategic initiatives.",
        features: ["Automated Document Processing", "Real-time Reporting", "Workflow Optimization", "Business Process Management"]
      },
      {
        name: "AI Integration & Implementation", 
        description: "Help businesses implement existing AI tools (ChatGPT, Claude, etc.). We integrate them into company systems, develop chatbots for customer service, and configure AI-powered workflows.",
        features: ["Intelligent Chatbots", "AI Tool Integration", "API Implementation", "Workflow Automation"]
      },
      {
        name: "Data Analysis & Business Intelligence",
        description: "Transform business data into actionable insights. We create automated dashboards, develop predictive analytics for sales and inventory, and provide customer behavior analysis with practical recommendations.",
        features: ["Automated Dashboards", "Predictive Analytics", "Customer Analysis", "Business Intelligence Solutions"]
      },
      {
        name: "RAG Systems",
        description: "Flexible document Q&A systems designed for your specific requirements. Deploy on your own servers for complete control, or utilize cloud infrastructure for cost-effective solutions.",
        features: ["Custom Knowledge Base", "Document Q&A Systems", "Flexible Deployment Options", "Custom RAG Implementation"]
      }
    ],
    about: {
      title: "How Mlola Adapts AI Solutions to Your Business",
      paragraphs: [
        "Mlola is a company dedicated to helping Indonesian businesses implement AI technology in practical and effective ways. We understand that each company has unique requirements, so we tailor our solutions to match specific organizational needs.",
        "Our team develops comprehensive AI solutions ranging from RAG systems to custom integrations for business processes. Each project is handled with careful attention to the real-world challenges of implementing AI in business environments.",
        "Our expertise encompasses automated workflows to advanced analytics solutions. We offer flexible deployment options - whether on your own servers for enhanced security, or utilizing cloud infrastructure for greater cost efficiency.",
        "We recognize that adopting AI technology involves numerous considerations including compliance, scalability, and system integration. Our objective is to develop solutions that address these practical requirements while delivering measurable value to your business operations."
      ],
      cardTitle: "Flexible AI Solutions",
      cardDescription: "We provide comprehensive AI deployment strategies that can be customized to your specific requirements and budget constraints. Whether you need enhanced data security through on-premise deployment, cost efficiency with third-party APIs, or hybrid approaches - our team delivers solutions that align with your business objectives and technical requirements.",
      features: [
        "On-Premise Deployment",
        "Private Infrastructure Options",
        "Security-Focused Solutions",
        "Flexible Implementation",
        "Cost-Effective APIs",
        "Multiple Deployment Strategies"
      ]
    },
    contact: {
      title: "Ready to Transform Your Business with AI?",
      subtitle: "Ready to implement AI solutions that deliver measurable business results? Whether you need business automation, on-premise RAG deployment, or custom AI integration - we are prepared to support your success.",
      badge: "Get Started",
      consultationButton: "Schedule Free AI Consultation",
      servicesButton: "View Our AI Services",
      features: [
        {
          title: "Data Privacy",
          description: "Your data can remain within your own infrastructure"
        },
        {
          title: "Custom Integration", 
          description: "AI solutions precisely tailored to your business requirements"
        },
        {
          title: "Enterprise Ready",
          description: "Scalable solutions suitable for businesses of all sizes"
        }
      ]
    },
    footer: {
      description: "Supporting business transformation through AI solutions, secure on-premise deployment, and comprehensive automation services.",
      aiSolutions: "AI Solutions",
      services: [
        "Business Automation",
        "AI Integration",
        "Data Analysis",
        "On-Premise RAG"
      ],
      company: "Company",
      companyLinks: [
        "About Us",
        "Contact",
        "Case Studies"
      ],
      location: "Sidoarjo, Indonesia"
    },
    nav: {
      aiSolutions: "AI Solutions",
      products: "Products",
      about: "About",
      contact: "Contact",
      getStarted: "Get Started",
      datafawn: "Datafawn"
    }
  }
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('id'); // Default to Indonesian

  useEffect(() => {
    // Load language preference from localStorage
    const savedLanguage = localStorage.getItem('mlola-language');
    if (savedLanguage && (savedLanguage === 'id' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    }
  }, []);

  const switchLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    localStorage.setItem('mlola-language', newLanguage);
  };

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        return key; // Return key if not found
      }
    }
    
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, switchLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}