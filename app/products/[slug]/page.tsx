import Link from "next/link";
import { notFound } from "next/navigation";

import { getProductBySlug, getProducts } from "@/lib/products";

type ProductDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getProducts().map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-stone-100 px-6 py-10 lg:px-10 lg:py-14">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <Link
          href="/"
          className="inline-flex w-fit items-center rounded-full border border-stone-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
        >
          Back to products
        </Link>

        <section className="grid gap-6 overflow-hidden rounded-[2rem] border border-stone-200 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.08)] lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex min-h-[420px] flex-col justify-between bg-gradient-to-br from-slate-950 via-slate-800 to-amber-700 p-8 text-white md:p-10">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-white/60">{product.category}</p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
                {product.name}
              </h1>
              <p className="mt-4 max-w-lg text-base leading-7 text-white/80">
                {product.description}
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-white/60">Brand</p>
                <p className="mt-2 text-lg font-medium">{product.brand}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-white/60">Inventory</p>
                <p className="mt-2 text-lg font-medium">{product.inventory} units</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-white/60">Colors</p>
                <p className="mt-2 text-lg font-medium">{product.colors.join(", ")}</p>
              </div>
            </div>
          </div>

          <div className="space-y-8 p-8 md:p-10">
            <div className="flex items-end justify-between gap-4 border-b border-stone-200 pb-6">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Price</p>
                <p className="mt-2 text-4xl font-semibold tracking-tight text-slate-900">
                  ${product.price}
                </p>
              </div>
              <span className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-700">
                Ready to ship
              </span>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-slate-900">What makes it useful</h2>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
                {product.highlights.map((highlight) => (
                  <li key={highlight} className="rounded-2xl bg-stone-50 px-4 py-3">
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-slate-900">Specifications</h2>
              <dl className="mt-4 grid gap-3 sm:grid-cols-2">
                {Object.entries(product.specifications).map(([label, value]) => (
                  <div key={label} className="rounded-2xl border border-stone-200 px-4 py-4">
                    <dt className="text-xs uppercase tracking-[0.2em] text-slate-500">{label}</dt>
                    <dd className="mt-2 text-sm font-medium text-slate-800">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}