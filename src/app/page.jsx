import CustomerHomepageCardComponent from "@/components/CustomerHomepageCardComponent";
import ProductHomepageCardComponent from "@/components/ProductHomepageCardComponent";

export default async function Home() {
  const response = await fetch(
    "https://homework-api.noevchanmakara.site/api/v1/customers",
  );
  const customer = await response.json();

  return (
    <div className="flex justify-center items-center w-full p-12 gap-8">
      <ProductHomepageCardComponent />
      <CustomerHomepageCardComponent customer={customer} />
    </div>
  );
}
