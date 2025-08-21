"use client"
import Image from "next/image";

export default function Home() {
  const products = [
    {
      title: "طقم سكاكين فاخر",
      description: "طقم سكاكين من الفولاذ المقاوم للصدأ لجميع احتياجات المطبخ.",
      image:
        "https://images.unsplash.com/photo-1627308595186-e2c9f9a64c0f?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "مقلاة غير لاصقة",
      description: "اطبخ وجبات صحية بسهولة مع هذه المقلاة المتينة غير اللاصقة.",
      image:
        "https://images.unsplash.com/photo-1617196036163-4f4f92c8f21d?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "خلاط كهربائي",
      description: "اصنع العصائر والصلصات في ثوانٍ مع هذا الخلاط السريع.",
      image:
        "https://images.unsplash.com/photo-1585238341984-4f019f6f9c35?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "ماكينة قهوة حديثة",
      description: "ابدأ يومك بكوب قهوة مثالي محضّر في المنزل.",
      image:
        "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "طقم أكواب زجاجية",
      description: "طقم أنيق من الكؤوس الزجاجية للمناسبات والضيوف.",
      image:
        "https://images.unsplash.com/photo-1617191519003-54b38183b081?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "لوح تقطيع خشبي",
      description: "لوح تقطيع خشبي فاخر، متين وأنيق لمطبخك.",
      image:
        "https://images.unsplash.com/photo-1600891965050-d0c4c87a9f23?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2 space-x-reverse">
          <div className="w-10 h-10 bg-red-500 text-white flex items-center justify-center font-bold rounded-full">
            GzP
          </div>
          <span className="text-2xl font-bold text-gray-800">
            مدونة المطبخ
          </span>
        </div>
      </nav>

      {/* Header */}
      <header className="bg-white shadow-md py-6 mt-2">
        <h1 className="text-4xl font-bold text-center text-gray-800">
          🍳 مدونة أساسيات المطبخ
        </h1>
        <p className="text-center text-gray-500 mt-2">
          اكتشف أفضل الأدوات لمطبخك
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-5">
                <h2 className="text-2xl font-semibold text-gray-800">
                  {item.title}
                </h2>
                <p className="text-gray-600 mt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-200 text-center py-6 mt-12">
        <p>© {new Date().getFullYear()} مدونة المطبخ. جميع الحقوق محفوظة.</p>
      </footer>
    </div>
  );
}
