import Link from "next/link";
import { Search, Calendar, Eye } from "lucide-react";

export default async function Page() {
  const res = await fetch(
    "https://homework-api.noevchanmakara.site/api/v1/customers",
    { next: { revalidate: 10 } }
  );

  const data = await res.json();
  const customers = Array.isArray(data.payload) ? data.payload : [];

  return (
    <div className="min-h-screen bg-slate-100 px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-semibold text-gray-800">
            List of All Customer
          </h1>
          <div className="relative">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
            <input
              placeholder="Search customers..."
              className="pl-9 pr-4 py-2 w-64 rounded-lg border border-gray-300 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="grid grid-cols-4 px-6 py-4 text-sm font-medium text-gray-500 bg-gray-50">
            <p className="font-bold text-black">Customer Name</p>
            <p className="font-bold text-black">Birthdate</p>
            <p className="font-bold text-black">Amount Spent</p>
            <p className="text-right font-bold text-black mr-10">Action</p>
          </div>
          <div className="divide-y divide-gray-100">
            {customers.map((customer) => (
              <div
                key={customer.customerId}
                className="grid grid-cols-4 items-center px-6 py-4 text-sm"
              >
                <div>
                  <p className="font-medium text-gray-800">
                    {customer.firstName} {customer.lastName}
                  </p>
                  <p className="text-xs text-gray-400">
                    ID: {customer.customerId}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  {customer.birthDate}
                </div>

                <p className="font-semibold text-green-600">
                  ${customer.moneySpent}
                </p>

                <div className="text-right">
                  <Link
                    href={`/customers/${customer.customerId}`}
                    className="inline-flex items-center gap-2 px-4 py-1.5 text-sm border border-gray-300 rounded-full text-gray-600 hover:bg-gray-100 transition"
                  >
                    <Eye className="w-4 h-4" /> View Profile
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}