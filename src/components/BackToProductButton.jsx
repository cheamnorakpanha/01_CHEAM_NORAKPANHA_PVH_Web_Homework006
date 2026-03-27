import Link from "next/link";
import { MoveLeft } from "lucide-react";

export function BackToProductButton() {
  return (
    <Link
      href="/products"
      className="flex items-center text-sm text-gray-400 hover:text-black transition group"
    >
      <MoveLeft className="h-4 w-4 mr-2 transition-transform duration-200 group-hover:-translate-x-1 group-hover:rotate-0" />
      <span>Back to product</span>
    </Link>
  );
}
