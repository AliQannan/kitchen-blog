"use client"
import Image from 'next/image';


// بيانات أدوات المطبخ
const kitchenToolsData = [
  {
    id: 1,
    name: "محضرة الطعام الذكية",
    image:"https://mcprod.hyperone.com.eg/media/catalog/product/cache/8d4e6327d79fd11192282459179cc69e/6/2/6223015370157_1.jpg",
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
    image: "https://www.bing.com/images/search?view=detailV2&ccid=2H%2fSxhqL&id=E7C6DEA6772E5245113804CCCA3BDFCBA14384FA&thid=OIP.2H_SxhqLmRiQ0csV_uJNXAHaGS&mediaurl=https%3a%2f%2fm.media-amazon.com%2fimages%2fI%2f61h3EK4H%2brL._AC_SL1500_.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.d87fd2c61a8b991890d1cb15fee24d5c%3frik%3d%252boRDocvfO8rMBA%26pid%3dImgRaw%26r%3d0&exph=1273&expw=1500&q=%d9%85%d9%8a%d8%b2%d8%a7%d9%86+%d8%a7%d9%84%d9%85%d8%b7%d8%a8%d8%ae+%d8%a7%d9%84%d8%b1%d9%82%d9%85%d9%8a&FORM=IRPRST&ck=9CED4C4F88BE28809028E00D2291EB78&selectedIndex=1&itb=0",
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
    image: "https://www.bing.com/images/search?view=detailV2&ccid=Vx7SzxFd&id=015F56C7215FC7F2F0F4239215E3621F8F48DD38&thid=OIP.Vx7SzxFdVoEJpU6KW5YA0gHaHa&mediaurl=https%3a%2f%2fgomlitna.com%2fwp-content%2fuploads%2f2023%2f07%2f0bb79f7a-dfef-4df6-bb62-4f66b7c36ad1.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.571ed2cf115d568109a54e8a5b9600d2%3frik%3dON1Ijx9i4xWSIw%26pid%3dImgRaw%26r%3d0&exph=1000&expw=1000&q=%d8%ae%d9%84%d8%a7%d8%b7+%d8%a7%d9%84%d8%b9%d8%b5%d8%a7%d8%a6%d8%b1+%d8%a7%d9%84%d9%85%d8%ad%d9%85%d9%88%d9%84&FORM=IRPRST&ck=522D798305FC529D022D002799C96081&selectedIndex=6&itb=0",
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
    image: "https://mcprod.hyperone.com.eg/media/catalog/product/cache/8d4e6327d79fd11192282459179cc69e/6/2/6223015370157_1.jpg",
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
