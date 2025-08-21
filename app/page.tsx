"use client"
import Image from 'next/image';


// بيانات أدوات المطبخ
const kitchenToolsData = [
  {
    id: 1,
    name: "محضرة الطعام الذكية",
    image: "https://images.unsplash.com/photo-1621345513824-c1157c14a93c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1ODU5OTV8MHwxfHNlYXJjaHwyMHx8a2l0Y2hlbiUyMGZvb2QlMjBwcm9jZXNzb3J8ZW58MHx8fHwxNzA3OTQ0NTQ1fDA&ixlib=rb-4.0.3&q=80&w=1080",
    description: "محضرة طعام متعددة الوظائف، تقوم بالتقطيع، الخلط، والعجن بلمسة زر واحدة. تصميمها الأنيق يضيف لمسة عصرية لمطبخك.",
    benefits: [
      "توفير الوقت والجهد بشكل كبير",
      "نتائج مثالية وموحدة في التقطيع والخلط",
      "سهولة التنظيف بفضل أجزائها القابلة للإزالة"
    ]
  },
  {
    id: 2,
    name: "ميزان المطبخ الرقمي",
    image: "https://images.unsplash.com/photo-1616790382833-25a07151e245?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1ODU5OTV8MHwxfHNlYXJjaHwyMHx8ZGlnaXRhbCUyMGtpY2hlbiUyMHNjYWxlfGVufDB8fHx8MTcwNzk0NDQ4NHww&ixlib=rb-4.0.3&q=80&w=1080",
    description: "ميزان عالي الدقة لقياس المكونات بدقة فائقة، مثالي للخبز وصناعة الحلويات التي تتطلب مقادير مضبوطة.",
    benefits: [
      "دقة متناهية في جميع الوصفات",
      "تحكم أفضل في الكميات لنتائج مضمونة",
      "تصميم صغير وخفيف الوزن لسهولة التخزين"
    ]
  },
  {
    id: 3,
    name: "خلاط العصائر المحمول",
    image: "https://images.unsplash.com/photo-1627993078864-f6511b846e4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1ODU5OTV8MHwxfHNlYXJjaHwyMnx8cG9ydGFibGUlMjBqb29nZXJ8ZW58MHx8fHwxNzA3OTQ1MDA0fDA&ixlib=rb-4.0.3&q=80&w=1080",
    description: "خلاط شخصي صغير ومحمول، يمكنك استخدامه لإعداد العصائر والسموذي في أي مكان، سواء في المنزل أو أثناء التنقل.",
    benefits: [
      "إعداد العصائر بسرعة وفي أي مكان",
      "سهل التنظيف والاستخدام",
      "بطارية تدوم طويلاً"
    ]
  },
  {
    id: 4,
    name: "فرن كهربائي متعدد الوظائف",
    image: "https://images.unsplash.com/photo-1628045995836-84d4b17f541b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1ODU5OTV8MHwxfHNlYXJjaHwxNXx8ZWxlY3RyaWMlMjBvdmVufGVufDB8fHx8MTcwNzk0NDgwMnww&ixlib=rb-4.0.3&q=80&w=1080",
    description: "فرن كهربائي مدمج يجمع بين وظائف الشواء والتحمير والخبز، مما يجعله الحل الأمثل للمطابخ الصغيرة.",
    benefits: [
      "يوفر مساحة في المطبخ",
      "نتائج تحمير وخبز ممتازة",
      "درجات حرارة قابلة للتحكم بدقة"
    ]
  }
];

// المكون الرئيسي للصفحة
export default function Home() {
  return (
    <>
      {/* Navbar - شريط التنقل */}
      <nav className="flex items-center justify-between p-6 bg-white shadow-md">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-gray-800">مدونة أدوات المطبخ</span>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-600 hover:text-gray-900 font-semibold">الرئيسية</a>
        </div>
      </nav>

      {/* المحتوى الرئيسي للمدونة */}
      <main className="container mx-auto p-8">
        <h1 className="text-4xl font-extrabold text-center mb-12 text-gray-900">
          دليلك لأفضل أدوات المطبخ العصرية
        </h1>

        {/* عرض أدوات المطبخ */}
        <div className="space-y-12">
          {kitchenToolsData.map((tool) => (
            <div key={tool.id} className="bg-white rounded-lg shadow-xl overflow-hidden md:flex flex-row-reverse">
              {/* جزء الصورة */}
              <div className="relative w-full h-80 md:w-1/2">
                <Image
                  src={tool.image}
                  alt={tool.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg md:rounded-l-none md:rounded-r-lg"
                  unoptimized={true} // لتجنب مشاكل التحسين مع الصور الخارجية
                />
              </div>
              {/* جزء المحتوى */}
              <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-4 text-gray-800">{tool.name}</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">{tool.description}</p>
                <h3 className="text-xl font-semibold mb-3 text-gray-700">فوائده الرئيسية:</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  {tool.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
