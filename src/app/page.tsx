import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black flex items-center">
      <section className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-6xl md:text-7xl font-extrabold text-white tracking-tight">
          SaiyoniX
        </h1>

        <p className="mt-6 text-xl md:text-2xl text-cyan-400 font-medium">
          Engineering Transformative Evolution
        </p>

        <div className="mt-12 flex justify-center gap-6">
          <Link
            href="/about"
            className="px-8 py-3 rounded-lg bg-cyan-400 text-black font-semibold transition hover:scale-105"
          >
            Learn More
          </Link>

          <Link
            href="/contact"
            className="px-8 py-3 rounded-lg border border-cyan-400 text-cyan-400 font-semibold transition hover:bg-cyan-400 hover:text-black hover:scale-105"
          >
            Build With Us
          </Link>
        </div>
      </section>
    </main>
  );
}
