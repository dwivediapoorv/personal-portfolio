const skills = [
  "Shopify (custom themes, OS 2.0, Liquid, metafields, app blocks)",
  "SEO & Google Ads",
  "Laravel, Next.js, WordPress, Flutter",
  "Chrome extensions",
  "AI automation & multi-agent workflows",
];

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-20 sm:py-28">
      <header>
        <p className="font-mono text-sm text-zinc-500">Kanpur, India</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
          Apoorv
        </h1>
        <p className="mt-4 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Freelance web developer and digital marketer. I build fast Shopify
          and web experiences, then help them rank and sell.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 text-sm font-medium">
          <a
            href="https://rareinput.com"
            className="rounded-full bg-foreground px-5 py-2.5 text-background transition-opacity hover:opacity-80"
          >
            Work with me
          </a>
        </div>
      </header>

      <section className="mt-20">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
          What I do
        </h2>
        <ul className="mt-5 space-y-3">
          {skills.map((s) => (
            <li
              key={s}
              className="border-l-2 border-zinc-300 pl-4 dark:border-zinc-700"
            >
              {s}
            </li>
          ))}
        </ul>
      </section>

      <footer className="mt-24 border-t border-zinc-200 pt-6 text-sm text-zinc-500 dark:border-zinc-800">
        © 2026 Apoorv. Get in touch via{" "}
        <a className="underline" href="https://rareinput.com">
          rareinput.com
        </a>
        .
      </footer>
    </main>
  );
}
