"use client";
import { useParams } from "next/navigation";

// بيانات الوصفات
const recipes = [
  {
    id: 1,
    title: "الارز باللحم",
    image: "https://picsum.photos/id/297/800/500",
    ingredients: [
      "4 أكواب أرز",
      "¼ كوب زيت ذرة",
      "750 جرام لحم بقر او غنم مقطع مكعبات",
      "2 حبة كبيرة بصل، شرائح",
      "3-4 فص ثوم، شرائح",
      "2 قطعة ورق غار",
      "2 عود دارسين",
      "4-6 حبة مسمار (قرنفل)",
      "1 ملعقة كبيرة بهار مشكل",
      "½ ملعقة صغيرة هيل، مطحون",
      "½ ملعقة صغيرة دارسين، ناعم",
      "¼ ملعقة صغيرة فلفل اسود",
      "4 حبة كبيرة طماطم، مفروم",
      "4 كوب ماء",
      "2 ملعقة صغيرة ملح",
      "¼ كوب صنوبر مقلي",
    ],
    steps: [
      "اغسلي الأرز جيداً، ثم انقعيه في ماء مملح لمدة 20 دقيقة.",
      "في قدر متوسط الحجم، ضعي الزيت وسخنيه على نار متوسطة، ثم أضيفي اللحم وقلبي حتى يتحمص قليلاً.",
      "أضيفي البصل والثوم وقلبي باستمرار حتى يصبح البصل ذهبي اللون ويتبخر السائل.",
      "أضيفي ورق الغار، الدارسين، المسمار، الهيل، الفلفل الأسود، والطماطم. قلبي جيداً، ثم غطي القدر وخففي النار واتركيه 45 دقيقة حتى ينضج اللحم. أضف نصف كوب ماء إذا جف السائل.",
      "شغّل الفرن على درجة حرارة 170 مئوية. أحضِر طبق فرن عميق مناسب للتقديم.",
      "صفّي الأرز من ماء النقع، وضعيه في طبق الفرن، ثم أضيفي خليط اللحم فوقه، ثم الماء والملح. قلبي قليلاً ليختلط، ثم غطي الطبق بورق الألمنيوم.",
      "أدخلي الطبق إلى الفرن لمدة ساعة أو حتى ينضج الأرز ويَتشرب الماء كلياً.",
      "نزّعي ورق الألمنيوم، وزّعي الصنوبر المقلّي على الوجه، وقدميه ساخناً.",
    ],
    prepTime: "20 دقيقة",
    cookTime: "45 دقيقة + 60 دقيقة في الفرن",
    servings: "6 أشخاص",
    category: "أطباق رئيسية",
  },
];

export default function RecipePage() {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) {
    return (
      <div dir="rtl" className="min-h-screen flex items-center justify-center text-2xl text-red-600">
        الوصفة غير موجودة!
      </div>
    );
  }

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50">
      {/* التنقل */}
      <nav className="bg-white shadow-md px-6 py-4">
        <a href="/" className="text-red-600 hover:underline font-semibold">← العودة إلى الصفحة الرئيسية</a>
      </nav>

      {/* تفاصيل الوصفة */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <article className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* الصورة */}
          <div className="h-72 overflow-hidden">
            <Image
              src={recipe.image}
              alt={recipe.title}
              width={800}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>

          {/* المحتوى */}
          <div className="p-8">
            <span className="inline-block bg-orange-100 text-orange-800 text-sm px-4 py-1 rounded-full mb-4">
              {recipe.category}
            </span>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">{recipe.title}</h1>

            {/* معلومات الوصفة */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 text-center">
              <div className="p-4 bg-gray-100 rounded-lg">
                <strong className="text-gray-700">الحصص</strong>
                <p className="text-gray-600">{recipe.servings}</p>
              </div>
              <div className="p-4 bg-gray-100 rounded-lg">
                <strong className="text-gray-700">التحضير</strong>
                <p className="text-gray-600">{recipe.prepTime}</p>
              </div>
              <div className="p-4 bg-gray-100 rounded-lg">
                <strong className="text-gray-700">الطهي</strong>
                <p className="text-gray-600">{recipe.cookTime}</p>
              </div>
            </div>

            {/* المكونات */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">المكونات</h2>
              <ul className="space-y-2">
                {recipe.ingredients.map((item, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-red-500 rounded-full ml-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* خطوات التحضير */}
            <section>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">خطوات التحضير</h2>
              <ol className="space-y-4">
                {recipe.steps.map((step, i) => (
                  <li key={i} className="flex text-gray-700 leading-relaxed">
                    <span className="flex-shrink-0 w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold ml-4">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </section>

            {/* زر الطباعة (اختياري) */}
            <button
              onClick={() => window.print()}
              className="mt-10 w-full py-3 bg-gray-800 text-white font-semibold rounded-xl hover:bg-gray-700 transition"
            >
              🖨️ اطبع هذه الوصفة
            </button>
          </div>
        </article>
      </main>

      <footer className="bg-gray-900 text-gray-300 text-center py-6">
        <p>© {new Date().getFullYear()} طبّخة. جميع الحقوق محفوظة.</p>
      </footer>
    </div>
  );
}
