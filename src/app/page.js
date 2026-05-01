import Hero from '@/components/Hero';
import AnimalCard from '@/components/AnimalCard';
import animals from '@/data/aminal.json'; // আপনার তৈরি করা JSON ফাইল

export default function Home() {
  // প্রথম ৪টি পশু ফিল্টার করে নেওয়া
  const featuredAnimals = animals.slice(0, 4);

  return (
    <main className="min-h-screen bg-gray-50">
      <Hero />

      {/* Featured Animals Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-gray-800 mb-4">
            সেরা কোরবানি কালেকশন
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto font-medium">
            আমাদের হাটের সবচেয়ে জনপ্রিয় এবং সুস্থ ৪টি পশুর ঝলক নিচে দেওয়া হলো।
          </p>
        </div>

        {/* গ্রিড লেআউট - আইটেম সেন্টার করার জন্য */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredAnimals.map(animal => (
            <AnimalCard key={animal.id} animal={animal} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="btn btn-outline btn-primary px-10 rounded-full">
            আরও সব পশু দেখুন
          </button>
        </div>
      </section>
    </main>
  );
}
