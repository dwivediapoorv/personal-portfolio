const LINKEDIN = "https://www.linkedin.com/in/dwivediapoorv/";
const INSTAGRAM = "https://www.instagram.com/dwivedi.apoorv/";

const nav = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Teaching", href: "#teaching" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    title: "Shopify Development",
    body: "Custom themes, Online Store 2.0, Liquid, metafields and app blocks, built fast and easy for your team to manage.",
  },
  {
    title: "SEO",
    body: "Technical and on-page SEO that gets your store and content found by people ready to buy.",
  },
  {
    title: "Google Ads",
    body: "Search and shopping campaigns set up around your margins and tracked to real revenue.",
  },
  {
    title: "Web Applications",
    body: "Laravel and Next.js apps, dashboards and internal tools, from first idea to production.",
  },
  {
    title: "WordPress & Content Sites",
    body: "Clean, quick WordPress builds for blogs and business sites that are simple to publish on.",
  },
  {
    title: "AI Automation & Extensions",
    body: "Chrome extensions and AI-powered workflows that take repetitive work off your plate.",
  },
];

const steps = [
  {
    n: "01",
    title: "Understand",
    body: "We start with your goals, your customers and what is not working today.",
  },
  {
    n: "02",
    title: "Plan",
    body: "A clear scope, a simple timeline and the metrics that will tell us it worked.",
  },
  {
    n: "03",
    title: "Build",
    body: "Clean, fast, maintainable work, shared early so you can steer along the way.",
  },
  {
    n: "04",
    title: "Grow",
    body: "Launch, measure, then improve through SEO, ads and ongoing iteration.",
  },
];

const stack = [
  "Shopify",
  "Liquid",
  "Next.js",
  "React",
  "Laravel",
  "WordPress",
  "Flutter",
  "SEO",
  "Google Ads",
  "Chrome Extensions",
  "AI Automation",
];

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-500">
      {children}
    </h2>
  );
}

export default function Home() {
  return (
    <>
      <nav className="sticky top-0 z-10 border-b border-zinc-200 bg-background/80 backdrop-blur dark:border-zinc-800">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-semibold tracking-tight">
            Apoorv Dwivedi
          </a>
          <ul className="hidden gap-6 text-sm text-zinc-600 sm:flex dark:text-zinc-400">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="transition-colors hover:text-foreground">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <main id="top" className="mx-auto w-full max-w-4xl px-6">
        {/* Hero */}
        <section className="py-20 sm:py-28">
          <p className="font-mono text-sm text-zinc-500">Noida, India</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-6xl">
            Apoorv Dwivedi
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-600 sm:text-xl dark:text-zinc-400">
            Freelance web developer, digital marketer and educator. I build
            fast Shopify and web experiences, help them rank and sell, and
            teach what I know.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm font-medium">
            <a
              href="#contact"
              className="rounded-full bg-foreground px-5 py-2.5 text-background transition-opacity hover:opacity-80"
            >
              Get in touch
            </a>
            <a
              href="#services"
              className="rounded-full border border-zinc-300 px-5 py-2.5 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-900"
            >
              See what I do
            </a>
          </div>
        </section>

        {/* About */}
        <section id="about" className="scroll-mt-20 border-t border-zinc-200 py-16 dark:border-zinc-800">
          <Heading>About</Heading>
          <div className="mt-6 grid gap-8 sm:grid-cols-5">
            <p className="text-2xl font-semibold leading-snug tracking-tight sm:col-span-2">
              Developer by training, marketer by obsession.
            </p>
            <div className="space-y-4 leading-7 text-zinc-600 sm:col-span-3 dark:text-zinc-400">
              <p>
                I started in web development and grew into digital marketing
                because a beautiful site that nobody finds does not help
                anyone. Today I work across both sides: building the store or
                app, then making sure the right people reach it.
              </p>
              <p>
                I have co-founded and led technology teams, and I enjoy
                turning complicated problems into simple, dependable systems.
                I also teach, because explaining something clearly is the best
                way to understand it.
              </p>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="scroll-mt-20 border-t border-zinc-200 py-16 dark:border-zinc-800">
          <Heading>Services</Heading>
          <p className="mt-6 max-w-2xl text-2xl font-semibold leading-snug tracking-tight">
            Everything between &ldquo;I have an idea&rdquo; and &ldquo;it is
            making sales.&rdquo;
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-zinc-200 p-6 transition-colors hover:border-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-600"
              >
                <h3 className="font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Stack */}
        <section className="border-t border-zinc-200 py-16 dark:border-zinc-800">
          <Heading>Tools I work with</Heading>
          <ul className="mt-6 flex flex-wrap gap-2">
            {stack.map((t) => (
              <li
                key={t}
                className="rounded-full border border-zinc-300 px-4 py-1.5 text-sm dark:border-zinc-700"
              >
                {t}
              </li>
            ))}
          </ul>
        </section>

        {/* Process */}
        <section id="process" className="scroll-mt-20 border-t border-zinc-200 py-16 dark:border-zinc-800">
          <Heading>How I work</Heading>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.n}>
                <p className="font-mono text-sm text-zinc-500">{s.n}</p>
                <h3 className="mt-2 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Teaching */}
        <section id="teaching" className="scroll-mt-20 border-t border-zinc-200 py-16 dark:border-zinc-800">
          <Heading>Teaching</Heading>
          <div className="mt-6 grid gap-8 sm:grid-cols-5">
            <p className="text-2xl font-semibold leading-snug tracking-tight sm:col-span-2">
              Learning sticks when it is practical.
            </p>
            <p className="leading-7 text-zinc-600 sm:col-span-3 dark:text-zinc-400">
              Alongside client work I am an educator, helping students and
              teams pick up real, job-ready skills with clear explanations and
              hands-on practice instead of theory alone.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="scroll-mt-20 mb-16 rounded-3xl bg-foreground px-8 py-14 text-background sm:px-14"
        >
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Let&rsquo;s work together.
          </h2>
          <p className="mt-4 max-w-xl leading-7 opacity-80">
            Have a store to build, a site to grow or something to learn? Send
            me a message and I will get back to you.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm font-medium">
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-background px-5 py-2.5 text-foreground transition-opacity hover:opacity-80"
            >
              LinkedIn
            </a>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-background/40 px-5 py-2.5 transition-colors hover:bg-background/10"
            >
              Instagram
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200 py-8 text-center text-sm text-zinc-500 dark:border-zinc-800">
        © 2026 Apoorv Dwivedi
      </footer>
    </>
  );
}
