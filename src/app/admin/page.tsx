import { prisma } from "@/lib/prisma";

export default async function AdminDashboard() {
  const inquiries = await prisma.inquiry.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">

      {/* DASHBOARD HEADER */}
      <section className="max-w-7xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-3">
          Admin Dashboard
        </h1>

        <p className="text-gray-400">
          Manage inquiries, track leads, and monitor client requests.
        </p>
      </section>


      {/* STATS CARDS */}
      <section className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 mb-16">

        <StatCard
          title="Total Inquiries"
          value={inquiries.length}
          highlight="All time leads"
        />

        <StatCard
          title="New Leads"
          value={inquiries.length}
          highlight="Awaiting response"
        />

        <StatCard
          title="Active Projects"
          value="—"
          highlight="Coming soon"
        />

      </section>


      {/* SEARCH BAR */}
      <section className="max-w-7xl mx-auto mb-12">
        <input
          placeholder="Search inquiries (name, email, service)"
          className="w-full bg-black border border-gray-800 rounded-xl px-6 py-4 text-gray-300 focus:border-cyan-400 outline-none transition"
        />
      </section>


      {/* INQUIRIES LIST */}
      <section className="max-w-7xl mx-auto space-y-6">

        <h2 className="text-2xl font-semibold mb-6">
          Client Inquiries
        </h2>

        {inquiries.length === 0 && (
          <p className="text-gray-500">
            No inquiries yet.
          </p>
        )}

        {inquiries.map((item) => (
          <div
            key={item.id}
            className="border border-gray-800 rounded-2xl p-6 hover:border-cyan-400 transition bg-black/60 backdrop-blur"
          >

            {/* TOP BAR */}
            <div className="flex justify-between items-center mb-4">

              <span className="px-3 py-1 text-xs rounded-full bg-cyan-500/20 text-cyan-400">
                {item.service}
              </span>

              <span className="text-gray-500 text-sm">
                {new Date(item.createdAt).toLocaleString()}
              </span>

            </div>


            {/* CLIENT INFO */}
            <div className="mb-4">
              <p className="text-lg font-semibold">
                {item.name}
              </p>

              <p className="text-gray-400 text-sm">
                {item.email} • {item.phone}
              </p>
            </div>


            {/* MESSAGE */}
            <p className="text-gray-300 leading-relaxed">
              {item.message}
            </p>

          </div>
        ))}

      </section>

    </main>
  );
}


/* ---------- STAT CARD COMPONENT ---------- */

function StatCard({ title, value, highlight }: any) {
  return (
    <div className="border border-gray-800 rounded-2xl p-8 bg-black/60 backdrop-blur text-center hover:border-cyan-400 transition">

      <p className="text-gray-400 text-sm mb-2">
        {title}
      </p>

      <p className="text-4xl font-bold text-cyan-400 mb-1">
        {value}
      </p>

      <p className="text-gray-500 text-xs">
        {highlight}
      </p>

    </div>
  );
}
