"use client"
import Image from "next/image";

export default function Home() {
  const articles = [
    {
      title: "أفضل أدوات تقطيع الخضار",
      description: "تعرف على أدوات تقطيع الخضار التي تجعل تحضير الطعام أسرع وأسهل.",
      image:
        "https://img.alicdn.com/imgextra/i1/615133320/O1CN01eZyq4q1Z1i9q3j1Qq_!!615133320.jpg",
    },
    {
      title: "مقالي غير لاصقة للطهي الصحي",
      description: "اختر المقلاة الصحيحة للحفاظ على صحتك وطعم الطعام اللذيذ.",
      image:
        "https://img.alicdn.com/imgextra/i3/789026534/O1CN01L5Z1tU1a4u8d2q3XG_!!789026534.jpg",
    },
    {
      title: "خلاطات كهربائية متعددة الاستخدام",
      description: "خلاطات للعصائر والصلصات بسرعة وبدون مجهود.",
      image:
        "https://img.alicdn.com/imgextra/i1/2203732066/O1CN01VzJ3kI1N1lZ1s6h3p_!!2203732066.jpg",
    },
    {
      title: "أدوات قياس دقيقة للطبخ",
      description: "استخدم أدوات القياس الدقيقة لضمان نتائج مثالية في وصفاتك.",
      image:
        "https://img.alicdn.com/imgextra/i1/226598385/O1CN01f5u4qL1c3a5q9k0B5_!!226598385.jpg",
    },
    {
      title: "أكواب وأواني تقديم أنيقة",
      description: "تعلم كيفية تقديم الطعام بأناقة باستخدام الأواني المناسبة.",
      image:
        "https://img.alicdn.com/imgextra/i4/1112726513/O1CN01o0qYrY1r6p1q3a5gS_!!1112726513.jpg",
    },
    {
      title: "لوحات تقطيع خشبية متينة",
      description: "لوحات خشبية لتحضير الطعام بشكل صحي وسهل التنظيف.",
      image:
        "https://img.alicdn.com/imgextra/i3/2205410857/O1CN01vB6q7w1Y4d1a4u9yK_!!2205410857.jpg",
    },
  ];

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2 space-x-reverse">
          <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-pink-600 text-white flex items-center justify-center font-bold rounded-full shadow-md">
            GzP
          </div>
          <span className="text-2xl font-bold text-gray-800">
            مدونة المطبخ
          </span>
        </div>
      </nav>

      {/* Header */}
      <header className="bg-gradient-to-r from-red-500 to-pink-600 text-white py-16 mt-2">
        <div className="text-center max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
            🍳 مقالات الطبخ وأدوات المطبخ
          </h1>
          <p className="text-xl opacity-90">
            اكتشف أفضل المنتجات والأدوات الذكية لمطبخك مع نصائح احترافية.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 transform"
            >
              <div className="h-64 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {item.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          هل تريد شراء هذه المنتجات بأسعار مذهلة؟
        </h2>
        <p className="text-gray-600 mb-8">
          اضغط على المنتج في المدونة واحصل عليه مباشرة من AliExpress مع شحن عالمي!
        </p>
        <button className="bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition transform hover:scale-105">
          ابدأ التسوق الآن
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 text-center py-8 mt-16">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-2xl font-bold text-white mb-2">مدونة المطبخ</h3>
          <p className="mb-4">
            نصائح، مراجعات، وأفضل المنتجات لجعل مطبخك أكثر كفاءة.
          </p>
          <p>© {new Date().getFullYear()} مدونة المطبخ. جميع الحقوق محفوظة.</p>
        </div>
      </footer>
    </div>
  );
}
