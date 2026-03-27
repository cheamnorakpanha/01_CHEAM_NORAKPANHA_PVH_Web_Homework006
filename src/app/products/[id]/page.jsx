import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ShoppingCart,
  Heart,
  Minus,
  Plus,
  MoveLeft,
  Share2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { BackToProductButton } from "@/components/BackToProductButton";

export default async function Page({ params }) {
  const { id } = await params;

  const res = await fetch(
    `https://homework-api.noevchanmakara.site/api/v1/products/${id}`,
    { next: { revalidate: 10 } },
  );

  if (!res.ok) return notFound();

  const data = await res.json();

  const product = Array.isArray(data.payload) ? data.payload[0] : data.payload;

  if (!product) return notFound();

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-lg grid md:grid-cols-2 overflow-hidden">
        <div className="bg-slate-100 flex items-center justify-center p-10 relative">
          <div className="absolute top-6 left-6 flex flex-col gap-2">
            <span className="bg-black text-white text-xs px-3 py-1 rounded-full">
              NEW ARRIVAL
            </span>
            <span className="bg-cyan-100 text-cyan-600 text-xs px-3 py-1 rounded-full font-semibold">
              FREE SHIPPING
            </span>
          </div>

          <div className="absolute top-6 right-6 flex flex-col gap-3">
            <button className="bg-white p-2 rounded-full shadow hover:scale-110 transition">
              <Heart className="w-4 h-4" />
            </button>
            <button className="bg-white p-2 rounded-full shadow hover:scale-110 transition">
              <Share2 className="w-4 h-4" />
            </button>
          </div>

          <Image
            src={product.imageUrl || "/img/macbook-pro.png"}
            alt={product.name}
            width={350}
            height={350}
            className="object-contain transition-transform duration-700 hover:scale-110 hover:-rotate-12"
          />
        </div>

        <div className="p-10 flex flex-col justify-center space-y-6">
          <BackToProductButton />

          <span className="text-xs uppercase tracking-widest text-cyan-500 font-bold">
            Premium Experience
          </span>

          <h1 className="text-4xl font-extrabold text-slate-900 leading-tight">
            {product.name}
          </h1>

          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold text-slate-900">
              ${product.price}
            </span>
            <span className="text-sm text-green-500 font-semibold">
              Save 20% Today
            </span>
          </div>

          <p className="text-gray-500 leading-relaxed border-l-2 border-cyan-400 pl-4">
            {product.description}
          </p>

          <div className="space-y-2">
            <span className="text-xs font-semibold text-gray-500 uppercase">
              Select Quantity
            </span>

            <div className="flex items-center gap-4 bg-slate-100 w-fit px-4 py-2 rounded-xl">
              <Minus className="w-4 h-4 cursor-pointer" />
              <span className="font-semibold">1</span>
              <Plus className="w-4 h-4 cursor-pointer" />
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <Button className="flex-1 bg-[#0b1b3b] text-white rounded-xl py-6 flex items-center justify-center gap-2 hover:bg-cyan-600">
              <ShoppingCart className="w-4 h-4" />
              Add to Cart
            </Button>

            <Button className="flex-1 rounded-xl py-6 bg-white text-black border border-gray-300">
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
