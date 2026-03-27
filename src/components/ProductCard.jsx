import { Star, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

export default function ProductCard({ image, title, price }) {
  const imageUrl = "/img/macbook-pro.png";

  return (
    <div className="w-90 rounded-3xl bg-white shadow-md overflow-hidden hover:shadow-xl transition">
      <div className="flex relative bg-[#0b1b3b] p-16">
        <span className="absolute top-4 left-6 text-xs font-semibold text-white">
          NEW
        </span>

        <div className="absolute top-10 left-4 flex items-center gap-1 bg-white text-black text-xs px-2 py-0.5 rounded-full shadow">
          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
          4.9
        </div>

        <div className="flex justify-center">
          <Image
            src={imageUrl}
            alt={title}
            width={300}
            height={300}
            className="object-cover"
          />
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div className="flex justify-between items-center ">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">
            Flagship Series
          </span>
          <span className="text-lg font-extrabold text-gray-900">${price}</span>
        </div>

        <h3 className="text-lg font-extrabold text-gray-900 leading-tight hover:text-blue-600">
          {title}
        </h3>

        <p className="text-sm text-gray-500 leading-relaxed">
          Engineered for excellence, this flagship device brings tomorrow’s tech
          to your hands today.
        </p>

        <Button className="w-full bg-[#0b1b3b] hover:bg-blue-600 text-white rounded-2xl flex items-center justify-center gap-2 py-6">
          View Product
          <ArrowUpRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
