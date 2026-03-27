import Link from "next/link";
import React from "react";
import notfound from "../notfound";
import ProductCard from "@/components/ProductCard";

export default async function page() {
  const res = await fetch(
    "https://homework-api.noevchanmakara.site/api/v1/products",
    { next: { revalidate: 10 } },
  );

  if (!res.ok) {
    return notfound();
  }

  const data = await res.json();
  const products = Array.isArray(data.payload) ? data.payload : [];

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold mb-8">List of All Product</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((p) => (
            <Link key={p.productId} href={`/products/${p.productId}`}>
              <ProductCard
                title={p.name}
                price={p.price.toLocaleString()}
                image={p.imageUrl}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}