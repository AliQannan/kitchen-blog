"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link'; // ✨ استيراد مكون Link من Next.js

// بيانات أدوات المطبخ
const kitchenToolsData = [
  {
    id: 1,
    name: "محضرة الطعام الذكية",
    image: "https://cdn.pixabay.com/photo/2016/11/29/09/24/food-1867280_1280.jpg", 
    icon: "🥘",
    description: "محضرة طعام متعددة الوظائف، تقوم بالتقطيع، الخلط، والعجن بلمسة زر واحدة. تصميمها الأنيق يضيف لمسة عصرية لمطبخك.",
    benefits: [
      "توفير الوقت والجهد بشكل كبير",
      "نتائج مثالية وموحدة في التقطيع والخلط",
      "سهولة التنظيف بفضل أجزائها القابلة للإزالة"
    ],
    gradient: "from-purple-400 to-pink-400"
  },
  {
    id: 2,
    name: "ميزان المطبخ الرقمي",
    image: "https://cdn.pixabay.com/photo/2016/11/29/09/25/scale-1867281_1280.jpg", 
    icon: "⚖️",
    description: "ميزان عالي الدقة لقياس المكونات بدقة فائقة، مثالي للخبز وصناعة الحلويات التي تتطلب مقادير مضبوطة.",
    benefits: [
      "دقة متناهية في جميع الوصفات",
      "تحكم أفضل في الكميات لنتائج مضمونة",
      "تصميم صغير وخفيف الوزن لسهولة التخزين"
    ],
    gradient: "from-blue-400 to-indigo-400"
  },
  {
    id: 3,
    name: "خلاط العصائر المحمول",
    image: "https://cdn.pixabay.com/photo/2016/11/29/09/26/blender-1867282_1280.jpg", 
    icon: "🥤",
    description: "خلاط شخصي صغير ومحمول، يمكنك استخدامه لإعداد العصائر والسموذي في أي مكان، سواء في المنزل أو أثناء التنقل.",
    benefits: [
      "إعداد العصائر بسرعة وفي أي مكان",
      "سهل التنظيف والاستخدام",
      "بطارية تدوم طويلاً"
    ],
    gradient: "from-green-400 to-emerald-400"
  },
  {
    id: 4,
    name: "فرن كهربائي متعدد الوظائف",
    image: "https://cdn.pixabay.com/photo/2016/11/29/09/27/oven-1867283_1280.jpg", 
    icon: "🔥",
    description: "فرن كهربائي مدمج يجمع بين وظائف الشواء والتحمير والخبز، مما يجعله الحل الأمثل للمطابخ الصغيرة.",
    benefits: [
      "يوفر مساحة في المطبخ",
      "نتائج تحمير وخبز ممتازة",
      "درجات حرارة قابلة للتحكم بدقة"
    ],
    gradient: "from-orange-400 to-red-400"
  }
];

// مكون الجسيمات المتحركة
const AnimatedParticles = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = [];
    for (let i = 0; i < 50; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        delay: Math.random() * 6,
      });
    }
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute bg-white/10 rounded-full animate-bounce"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDelay: `${particle.delay}s`,
            animationDuration: '6s',
          }}
        />
      ))}
    </div>
  );
};

// مكون شريط التنقل
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // إضافة المسارات (href) لصفحاتك الجديدة
  const navItems = [
    { name: 'الرئيسية', href: '/' },
    { name: 'الأدوات', href: '/tools' },
    { name: 'التقييمات', href: '/reviews' },
    { name: 'تواصل معنا', href: '/contact' }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/98 backdrop-blur-xl shadow-lg' 
          : 'bg-white/95 backdrop-blur-lg'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center"> 
            <span className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              🍳 مدونة أدوات المطبخ
            </span>
          </Link>
          <div className="hidden md:flex space-x-6 space-x-reverse">
            {navItems.map((item) => (
              // 🔄 استخدام مكون Link بدلاً من <a>
              <Link
                key={item.name}
                href={item.href}
                className="relative px-4 py-2 text-gray-700 font-semibold rounded-full transition-all duration-300 hover:text-white group overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 rounded-full"></span>
                <span className="relative z-10">{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

// مكون بطاقة الأداة
const ToolCard = ({ tool, index }) => {
  const [imageError, setImageError] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 200);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div 
      className={`bg-white/95 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 transform hover:-translate-y-4 hover:scale-105 hover:shadow-purple-500/25 border border-white/20 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className={`h-1 bg-gradient-to-r ${tool.gradient}`} />
      
      <div className={`grid ${index % 2 === 0 ? 'md:grid-cols-2' : 'md:grid-cols-2'} min-h-[400px]`}>
        <div 
          className={`relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center ${
            index % 2 === 0 ? 'order-1' : 'order-2'
          }`}
        >
          {!imageError ? (
            <div className="relative w-full h-full group">
              <Image
                src={tool.image}
                alt={tool.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                onError={() => setImageError(true)}
                unoptimized
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${tool.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
            </div>
          ) : (
            <div className="flex items-center justify-center h-full">
              <div className="text-8xl transition-transform duration-500 hover:scale-125 hover:rotate-12">
                {tool.icon}
              </div>
            </div>
          )}
        </div>

        <div className={`p-8 md:p-12 flex flex-col justify-center ${
          index % 2 === 0 ? 'order-2' : 'order-1'
        }`}>
          <h2 className="text-3xl font-bold mb-6 text-gray-800 relative">
            {tool.name}
            <div className={`absolute bottom-0 right-0 w-16 h-1 bg-gradient-to-r ${tool.gradient} rounded-full`} />
          </h2>
          
          <p className="text-gray-600 mb-8 leading-relaxed text-lg">
            {tool.description}
          </p>
          
          <h3 className="text-xl font-semibold mb-4 text-gray-700">
            فوائده الرئيسية:
          </h3>
          
          <ul className="space-y-3">
            {tool.benefits.map((benefit, benefitIndex) => (
              <li 
                key={benefitIndex}
                className="flex items-start space-x-3 space-x-reverse text-gray-600 hover:text-purple-600 transition-colors duration-300 group"
              >
                <span className="text-xl group-hover:scale-110 transition-transform duration-300">✨</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  {benefit}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

// المكون الرئيسي
export default function KitchenBlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-800 relative overflow-x-hidden" dir="rtl">
      {/* الجسيمات المتحركة */}
      <AnimatedParticles />
      
      {/* شريط التنقل */}
      <Navbar />
      
      {/* المحتوى الرئيسي */}
      <main className="relative z-10 pt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* العنوان الرئيسي */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent animate-pulse">
                دليلك لأفضل أدوات المطبخ العصرية
              </span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full" />
          </div>
          
          {/* شبكة أدوات المطبخ */}
          <div className="space-y-16">
            {kitchenToolsData.map((tool, index) => (
              <ToolCard key={tool.id} tool={tool} index={index} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
