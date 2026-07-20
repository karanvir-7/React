import Link from "next/link";

import { getProducts } from "@/lib/products";

export default function Home() {
  const products = getProducts();

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.18),_transparent_24%),linear-gradient(180deg,_#fafaf9_0%,_#f5f5f4_100%)]">
      <section className="mx-auto flex max-w-7xl flex-col gap-12 px-6 py-10 lg:px-10 lg:py-14">
        <div className="grid gap-6 rounded-[2rem] border border-stone-200 bg-white/80 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur md:grid-cols-[1.4fr_0.8fr] md:p-10">
          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-700">
              Northstar Market
            </p>
            <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-slate-900 md:text-6xl">
              Modern essentials for the desk, studio, and daily carry.
            </h1>
            <p className="max-w-xl text-base leading-7 text-slate-600 md:text-lg">
              This starter ecommerce project renders product data from a local JSON file and
              includes a listing page plus detail views for each item.
            </p>
            <div className="flex flex-wrap gap-3 pt-2 text-sm text-slate-600">
              <span className="rounded-full bg-stone-100 px-4 py-2">JSON-backed catalog</span>
              <span className="rounded-full bg-stone-100 px-4 py-2">Next.js App Router</span>
              <span className="rounded-full bg-stone-100 px-4 py-2">Tailwind CSS</span>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1">
            {products.slice(0, 2).map((product) => (
              <article
                key={product.slug}
                className="rounded-3xl border border-stone-200 bg-stone-50 p-5"
              >
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
                  Featured pick
                </p>
                <h2 className="mt-3 text-xl font-semibold text-slate-900">{product.name}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">{product.shortDescription}</p>
                <p className="mt-4 text-lg font-semibold text-slate-900">${product.price}</p>
              </article>
            ))}
          </div>
        </div>

        <section className="space-y-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-slate-500">
                Product listing
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
                Browse the collection
              </h2>
            </div>
            <p className="text-sm text-slate-500">{products.length} products</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <article
                key={product.slug}
                className="group overflow-hidden rounded-[1.75rem] border border-stone-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="h-56 bg-gradient-to-br from-stone-900 via-slate-700 to-amber-700 p-6 text-white">
                  <div className="flex h-full flex-col justify-between">
                    <p className="text-xs uppercase tracking-[0.24em] text-white/70">
                      {product.category}
                    </p>
                    <div>
                      <p className="text-sm text-white/70">{product.brand}</p>
                      <h3 className="mt-2 text-2xl font-semibold">{product.name}</h3>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 p-6">
                  <p className="text-sm leading-6 text-slate-600">{product.shortDescription}</p>

                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-semibold text-slate-900">${product.price}</p>
                    <span className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">
                      {product.inventory > 0 ? "In stock" : "Sold out"}
                    </span>
                  </div>

                  <Link
                    href={`/products/${product.slug}`}
                    className="inline-flex items-center rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-700"
                  >
                    View details
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}