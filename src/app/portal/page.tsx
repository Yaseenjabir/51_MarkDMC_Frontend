"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Brand {
  brand: string;
  img: string;
}

const brands: Brand[] = [
  { brand: "Acer", img: "https://cdn.dofy.in/v2//brand/Acer.png" },
  // "Acer",
  { brand: "Apple", img: "https://cdn.dofy.in/v2//brand/Apple.png" },
  // "Apple",
  { brand: "Microsoft", img: "https://cdn.dofy.in/v2//brand/Microsoft.png" },
  // "Microsoft",
  { brand: "Dell", img: "https://cdn.dofy.in/v2//brand/Dell.png" },
  // "Dell",
  { brand: "HP", img: "https://cdn.dofy.in/v2//brand/HP.png" },
  // "HP",
  { brand: "Lenovo", img: "https://cdn.dofy.in/v2//brand/Lenovo.png" },
  // "Lenovo",
  { brand: "Asus", img: "https://cdn.dofy.in/v2//brand/Asus.png" },
  // "Asus",
  { brand: "Samsung", img: "https://cdn.dofy.in/v2//brand/Samsung.png" },
  // "Samsung",
  { brand: "Realme", img: "https://cdn.dofy.in/v2//brand/Realme.png" },
  // "Realme",
  { brand: "Xiaomi", img: "https://cdn.dofy.in/v2//brand/Xiaomi.png" },
  // "Xiaomi",
  { brand: "AVITA", img: "https://cdn.dofy.in/v2//brand/AVITA.png" },
  // "MSI",
  { brand: "MSI", img: "https://cdn.dofy.in/v2//brand/MSI.png" },
  // "Avita",
];

export default function Portal() {
  const router = useRouter();

  const handleBrandClick = (brand: string) => {
    router.push(`/laptops?brand=${encodeURIComponent(brand)}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Choose Brand</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {brands.map((item, index) => (
          <Image
            onClick={() => handleBrandClick(item.brand)}
            className="hover:shadow-lg cursor-pointer transition-all ease-in-out duration-300 rounded-5 hover:scale-110"
            key={index}
            alt="laptop-images"
            src={item.img}
            width={500}
            height={500}
            layout="responsive"
          />
        ))}
      </div>
      <section className="bg-white py-12 px-4 mt-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why are we the Best in Market?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Card 1: Easy Doorstep Pickup */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center relative overflow-hidden">
            <h3 className="text-xl font-semibold text-mustard mb-2">
              Easy Doorstep Pickup:
            </h3>
            <p className="text-gray-600 mb-4">
              Enjoy the convenience of our hassle-less doorstep free pickup
              service. We come to you, saving you time and effort.
            </p>
            <div className="absolute inset-0 bg-pink-100 opacity-50 -z-10"></div>
            <Image
              src="https://cdn.dofy.in/v2//banner/Easy_Doorstep_Pickup.png" // Placeholder image
              alt="Delivery Person"
              width={250}
              height={250}
              className="rounded-full object-cover"
            />
          </div>

          {/* Card 2: Assured Best Price */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center relative overflow-hidden">
            <h3 className="text-xl font-semibold text-mustard mb-2">
              Assured Best Price:
            </h3>
            <p className="text-gray-600 mb-4">
              Receive the highest value for your gadgets with our guaranteed
              best-price offers. We ensure you get the maximum worth.
            </p>
            <div className="absolute inset-0 bg-pink-100 opacity-50 -z-10"></div>
            <Image
              src="https://cdn.dofy.in/v2//banner/Assured_Best_Price.png" // Placeholder image
              alt="Happy Person"
              width={250}
              height={250}
              className="rounded-full object-cover"
            />
          </div>

          {/* Card 3: Fast Service & Instant Payment */}
          <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center relative overflow-hidden">
            <h3 className="text-xl font-semibold text-mustard-dark mb-2">
              Fast Service & Instant Payment:
            </h3>
            <p className="text-gray-600 mb-4">
              Get paid instantly with our swift and secure payment system. No
              delays, just quick and reliable transactions.
            </p>
            <div className="absolute inset-0 bg-pink-100 opacity-50 -z-10"></div>
            <Image
              src="https://cdn.dofy.in/v2//banner/Fast_Service_Instant_Payment.png" // Placeholder image
              alt="Payment Person"
              width={250}
              height={250}
              className="rounded-full object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
