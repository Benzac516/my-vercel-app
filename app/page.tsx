import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 px-6 font-sans dark:bg-black">
      <main className="flex w-full max-w-2xl flex-col items-center gap-8 py-24 text-center">
        <p className="rounded-full border border-black/10 px-4 py-1 text-sm text-zinc-600 dark:border-white/15 dark:text-zinc-400">
          Deployed on Vercel
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-black sm:text-5xl dark:text-zinc-50">
          Hello from my Vercel app
        </h1>
        <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Next.js on Vercel with auto-deploys from GitHub. Edit{" "}
          <code className="rounded bg-black/[.06] px-1.5 py-0.5 font-mono text-[0.9em] dark:bg-white/[.08]">
            app/page.tsx
          </code>{" "}
          and push to see it go live.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="https://vercel.com/docs"
            className="flex h-12 items-center justify-center rounded-full bg-foreground px-6 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
          >
            Vercel Docs
          </Link>
          <Link
            href="https://nextjs.org/docs"
            className="flex h-12 items-center justify-center rounded-full border border-solid border-black/[.08] px-6 transition-colors hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
          >
            Next.js Docs
          </Link>
        </div>
      </main>
    </div>
  );
}
