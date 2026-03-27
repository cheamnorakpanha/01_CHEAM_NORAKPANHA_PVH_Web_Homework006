import Link from "next/link";
import { ArrowLeft, User, Calendar, DollarSign, CreditCard } from "lucide-react";

export default async function Page({ params }) {
  const { id } = await params;

  const res = await fetch(
    `https://homework-api.noevchanmakara.site/api/v1/customers/${id}`,
    { next: { revalidate: 10 } }
  );

  const data = await res.json();
  const customer = data.payload;

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-6">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg overflow-hidden flex">
        <div className="w-1/3 bg-slate-50 flex flex-col items-center justify-center p-10 border-r">
          <div className="w-28 h-28 rounded-full bg-gray-200 flex items-center justify-center shadow-inner">
            <User className="w-12 h-12 text-gray-500" />
          </div>
          <h2 className="mt-6 text-lg font-semibold text-gray-800">
            {customer.firstName} {customer.lastName}
          </h2>
        </div>

        <div className="flex-1 p-10">
          <Link
            href="/customers"
            className="flex items-center gap-2 text-xs font-semibold text-gray-400 mb-6 hover:text-gray-600"
          >
            <ArrowLeft className="w-4 h-4" />
            BACK TO CUSTOMER
          </Link>

          <div className="grid grid-cols-2 gap-y-6 gap-x-10 mb-10">
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase mb-1">
                Full Name
              </p>
              <div className="flex items-center gap-2 text-gray-800 font-medium">
                <User className="w-4 h-4 text-yellow-500" />
                {customer.firstName} {customer.lastName}
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase mb-1">
                Total Spent
              </p>
              <div className="flex items-center gap-2 text-green-600 font-semibold">
                <DollarSign className="w-4 h-4" />
                ${customer.moneySpent}
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase mb-1">
                Birthdate
              </p>
              <div className="flex items-center gap-2 text-gray-700">
                <Calendar className="w-4 h-4 text-yellow-500" />
                {customer.birthDate}
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase mb-1">
                Account ID
              </p>
              <div className="flex items-center gap-2 text-gray-400 text-sm break-all">
                {customer.customerId}
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <button className="flex-1 py-3 rounded-xl bg-slate-900 text-white font-bold shadow hover:bg-slate-800 transition">
              Edit Profile
            </button>
            <button className="flex-1 py-3 rounded-xl bg-red-100 text-gray-500 font-bold border border-red-200 hover:bg-red-200 transition">
              Delete This User
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}