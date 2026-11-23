const LINKEDIN = "https://www.linkedin.com/in/dwivediapoorv/";
const INSTAGRAM = "https://www.instagram.com/dwivedi.apoorv/";

const offerings = [
  {
    title: "Shopify Development",
    body: "Custom themes, Online Store 2.0, Liquid, metafields and app blocks, built fast and easy for your team to manage.",
  },
  {
    title: "SEO & Google Ads",
    body: "Technical and on-page SEO plus search and shopping campaigns, so the right people find you and every rupee of ad spend is tracked to real revenue.",
  },
  {
    title: "Production-Ready Apps",
    body: "Laravel and Next.js apps built to be reliable, secure and ready for real users, from first idea to launch.",
  },
  {
    title: "Team Productivity Apps",
    body: "Internal tools, dashboards and workflows that save your team time and keep everyone on the same page.",
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

const journey = [
  {
    year: "2012",
    title: "Co-founded",
    org: "Softcrayons Tech Solutions Pvt Ltd",
  },
  {
    year: "2013 – 2015",
    title: "Software Engineer",
    org: "HCL Technologies",
  },
  {
    year: "2015 – 2023",
    title: "Freelance Consultant",
    org: "Independent",
  },
  {
    year: "2023",
    title: "Joined as Consulting CTO",
    org: "DigiRocket Technologies",
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
  "Databases",
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
              href="#what-i-do"
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

        {/* What I do */}
        <section id="what-i-do" className="scroll-mt-20 border-t border-zinc-200 py-16 dark:border-zinc-800">
          <Heading>What I do</Heading>
          <p className="mt-6 max-w-2xl text-2xl font-semibold leading-snug tracking-tight">
            Everything between &ldquo;I have an idea&rdquo; and &ldquo;it is
            making sales.&rdquo;
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {offerings.map((s) => (
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

        {/* Journey */}
        <section id="journey" className="scroll-mt-20 border-t border-zinc-200 py-16 dark:border-zinc-800">
          <Heading>My journey</Heading>
          <ol className="mt-10 border-l border-zinc-300 dark:border-zinc-700">
            {journey.map((j) => (
              <li key={j.year} className="relative pb-10 pl-8 last:pb-0">
                <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-foreground" />
                <p className="font-mono text-sm text-zinc-500">{j.year}</p>
                <h3 className="mt-1 text-lg font-semibold">{j.title}</h3>
                <p className="text-zinc-600 dark:text-zinc-400">{j.org}</p>
              </li>
            ))}
          </ol>
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
