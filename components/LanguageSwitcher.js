'use client';

import { useLanguage } from '../hooks/useLanguage';

export default function LanguageSwitcher() {
  const { language, switchLanguage } = useLanguage();

  return (
    <div className="flex items-center bg-gray-100 rounded-lg p-1">
      <button
        onClick={() => switchLanguage('id')}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${
          language === 'id' 
            ? 'bg-white text-slate-900 shadow-sm' 
            : 'text-slate-600 hover:text-slate-900'
        }`}
      >
        ID
      </button>
      <button
        onClick={() => switchLanguage('en')}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${
          language === 'en' 
            ? 'bg-white text-slate-900 shadow-sm' 
            : 'text-slate-600 hover:text-slate-900'
        }`}
      >
        EN
      </button>
    </div>
  );
}