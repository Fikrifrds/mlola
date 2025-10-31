'use client';

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from '../hooks/useLanguage';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const { t } = useLanguage();

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50" role="banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
            <Image src="/mlola-logo.svg" alt="Mlola Logo" width={40} height={40} className="w-10 h-10" />
            <span className="text-xl font-semibold text-slate-800">Mlola</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8" role="navigation" aria-label="Main navigation">
            <Link href="/#services" className="text-slate-600 hover:text-slate-900 font-medium text-sm">{t('nav.aiSolutions')}</Link>
            <Link href="/products" className="text-slate-600 hover:text-slate-900 font-medium text-sm">{t('nav.products')}</Link>
            <Link href="/#about" className="text-slate-600 hover:text-slate-900 font-medium text-sm">{t('nav.about')}</Link>
            <Link href="/#contact" className="text-slate-600 hover:text-slate-900 font-medium text-sm">{t('nav.contact')}</Link>
          </nav>

          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <Link
              href="/#contact"
              className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium text-sm hover:bg-blue-700"
            >
              {t('nav.getStarted')}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
