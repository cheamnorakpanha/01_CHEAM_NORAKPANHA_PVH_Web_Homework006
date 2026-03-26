import CustomerHomepageCardComponent from "@/components/CustomerHomepageCardComponent";
import ProductHomepageCardComponent from "@/components/ProductHomepageCardComponent";

export default function Home() {
  return (
    <div className="flex justify-center items-center w-full m-10 gap-8">
      <ProductHomepageCardComponent />
      <CustomerHomepageCardComponent />
    </div>
  );
}