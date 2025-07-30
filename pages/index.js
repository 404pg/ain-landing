import React from 'react';

export default function Home() {
  return (
    <div className="bg-[#2e2f24] text-[#f4f1e8] min-h-screen font-sans">
      <header className="flex items-center justify-between px-6 py-4 border-b border-[#444]">
        <div className="text-3xl font-bold">👁️ عين</div>
        <nav className="space-x-4 rtl:space-x-reverse">
          <a href="#about" className="hover:underline">عن المشروع</a>
          <a href="#how" className="hover:underline">كيف تعمل</a>
          <a href="#trends" className="hover:underline">قائمة التريندات</a>
          <a href="#report" className="hover:underline">أبلغ عن تريند</a>
        </nav>
      </header>
      <section className="text-center px-6 py-16">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">عين – وعيك قبل كل شيء</h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto">
          مشروع رقابي توعوي ذكي لرصد، تصنيف، ومواجهة التريندات السخيفة والخطيرة على الأطفال والمجتمع
        </p>
        <button className="mt-6 px-6 py-3 bg-[#f4f1e8] text-[#2e2f24] font-bold rounded-xl shadow hover:shadow-lg transition">
          شاهد كيف تعمل عين
        </button>
      </section>
    </div>
  );
}