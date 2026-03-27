import CustomerHomepageCardComponent from "@/app/_componenet/CustomerHomepageCardComponent";
import ProductHomepageCardComponent from "@/app/_componenet/ProductHomepageCardComponent";

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
