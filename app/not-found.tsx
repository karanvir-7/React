import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-stone-100 px-6">
      <div className="max-w-md rounded-[2rem] border border-stone-200 bg-white p-10 text-center shadow-lg">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-amber-700">404</p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900">
          Product not found
        </h1>
        <p className="mt-4 text-sm leading-6 text-slate-600">
          The item you requested is not in this demo catalog.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-700"
        >
          Return to listing
        </Link>
      </div>
    </main>
  );
}