"use client";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 1,
    title: "أفضل أدوات تقطيع الخضار",
    description: "تعرف على أدوات تقطيع الخضار التي تجعل تحضير الطعام أسرع وأسهل.",
    image: "https://img.alicdn.com/imgextra/i1/615133320/O1CN01eZyq4q1Z1i9q3j1Qq_!!615133320.jpg",
    category: "أدوات يدوية",
    price: "$12.99",
    rating: 4.8,
  },
  {
    id: 2,
    title: "مقالي غير لاصقة للطهي الصحي",
    description: "اختر المقلاة الصحيحة للحفاظ على صحتك وطعم الطعام اللذيذ.",
    image: "https://img.alicdn.com/imgextra/i3/789026534/O1CN01L5Z1tU1a4u8d2q3XG_!!789026534.jpg",
    category: "أواني طهي",
    price: "$24.50",
    rating: 4.9,
  },
  {
    id: 3,
    title: "خلاطات كهربائية متعددة الاستخدام",
    description: "خلاطات للعصائر والصلصات بسرعة وبدون مجهود.",
    image: "https://img.alicdn.com/imgextra/i1/2203732066/O1CN01VzJ3kI1N1lZ1s6h3p_!!2203732066.jpg",
    category: "أجهزة كهربائية",
    price: "$39.99",
    rating: 4.7,
  },
];

export default function Home() {
  return (
    <div dir="rtl" className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2 space-x-reverse">
          <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-pink-600 text-white flex items-center justify-center font-bold rounded-full shadow-md">
            GzP
          </div>
          <span className="text-2xl font-bold text-gray-800">مدونة المطبخ</span>
        </div>
      </nav>

      <header className="bg-gradient-to-r from-red-500 to-pink-600 text-white py-16 mt-2">
        <div className="text-center max-w-4xl mx-auto px-6">
          <h1 className="text-5xl font-extrabold mb-4">🍳 مقالات الطبخ وأدوات المطبخ</h1>
          <p className="text-xl opacity-90">اكتشف أفضل المنتجات الذكية لمطبخك</p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Link
              href={`/product/${product.id}`}
              key={product.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300 transform"
            >
              <div className="h-64 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="inline-block text-sm bg-red-100 text-red-700 px-3 py-1 rounded-full mb-2">
                  {product.category}
                </span>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{product.title}</h2>
                <p className="text-gray-600 mb-3">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-red-600">{product.price}</span>
                  <span className="text-yellow-500">⭐ {product.rating}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <footer className="bg-gray-900 text-gray-300 text-center py-8 mt-16">
        <div className="max-w-6xl mx-auto px-6">
          <p>© {new Date().getFullYear()} مدونة المطبخ. جميع الحقوق محفوظة.</p>
        </div>
      </footer>
    </div>
  );
}
