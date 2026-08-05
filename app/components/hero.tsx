import { ArrowRight, Check, Sparkles } from "lucide-react";
import { SiAirbnb, SiFigma, SiNotion, SiShopify, SiStripe } from "react-icons/si";

const kpis = [
  {
    label: "Open estimates",
    value: "$482k",
    delta: "+12.4%",
    trend: [10, 14, 12, 18, 16, 22, 20, 27],
  },
  {
    label: "Win rate",
    value: "38%",
    delta: "+4.1%",
    trend: [12, 11, 15, 14, 19, 18, 23, 25],
  },
  {
    label: "Avg. reply time",
    value: "2.4h",
    delta: "−18%",
    trend: [24, 22, 23, 18, 17, 14, 13, 9],
  },
];

const chartBars = [38, 52, 44, 67, 58, 79, 71, 92, 84, 100, 88, 74];

const logos = [
  { Icon: SiStripe, label: "Stripe" },
  { Icon: SiNotion, label: "Notion" },
  { Icon: SiFigma, label: "Figma" },
  { Icon: SiShopify, label: "Shopify" },
  { Icon: SiAirbnb, label: "Airbnb" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-gradient-to-b from-brand-100 via-brand-50/60 to-white"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(65%_55%_at_50%_0%,rgba(37,99,235,0.20),transparent_70%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -left-32 -z-10 size-[34rem] rounded-full bg-brand-400/25 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-32 -z-10 size-[30rem] rounded-full bg-brand-300/30 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(148,163,184,0.14)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.14)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_45%,transparent_100%)]"
      />

      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-20 sm:pt-28 sm:pb-24 lg:px-8 lg:pt-32 lg:pb-28">
        <div className="animate-fade-up mx-auto max-w-3xl text-center">
          <a
            href="#features"
            className="raise inline-flex items-center gap-2.5 rounded-full bg-white/70 py-2 pr-5 pl-2 text-sm text-slate-600 ring-1 ring-slate-900/5 shadow-soft backdrop-blur-xl hover:bg-white hover:shadow-lifted"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-br from-brand-500 to-brand-700 px-3 py-1 text-xs font-semibold text-white shadow-brand">
              <Sparkles className="size-3" aria-hidden />
              New
            </span>
            AI-drafted line items from a photo
            <ArrowRight className="size-3.5 text-slate-400" aria-hidden />
          </a>

          <h1 className="mt-8 text-[2.75rem] leading-[1.05] font-semibold text-balance sm:text-6xl lg:text-[5rem]">
            Send estimates that{" "}
            <span className="bg-gradient-to-br from-brand-500 via-brand-600 to-brand-400 bg-clip-text pb-1 text-transparent">
              win the job
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-pretty text-slate-600 sm:text-xl sm:leading-relaxed">
            Quotely turns your pricing into branded, client-ready estimates in
            minutes. Track every view, collect e-signatures, and take a deposit
            the moment they say yes.
          </p>

          <div className="mt-11 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
            <a
              href="#pricing"
              className="pill group w-full bg-brand-600 px-8 py-4 text-base text-white shadow-brand hover:bg-brand-700 hover:shadow-brand-lifted sm:w-auto"
            >
              Start free trial
              <ArrowRight className="size-4 transition-transform duration-500 ease-smooth group-hover:translate-x-0.5" aria-hidden />
            </a>
            <a
              href="#demo"
              className="pill w-full bg-white/80 px-8 py-4 text-base text-slate-800 ring-1 ring-slate-900/8 shadow-soft backdrop-blur-xl hover:bg-white hover:shadow-lifted sm:w-auto"
            >
              Book a demo
            </a>
          </div>

          <dl className="mt-9 flex flex-wrap items-center justify-center gap-x-7 gap-y-2.5 text-sm text-slate-500">
            {["Free 14-day trial", "No credit card required", "Cancel anytime"].map(
              (item) => (
                <div key={item} className="flex items-center gap-2">
                  <Check className="size-4 text-brand-600" aria-hidden />
                  <dt className="sr-only">Included</dt>
                  <dd>{item}</dd>
                </div>
              ),
            )}
          </dl>
        </div>

        <DashboardPreview />

        <div className="mt-20 sm:mt-24">
          <p className="text-center text-sm font-medium text-slate-500">
            Trusted by 12,000+ teams closing more work every week
          </p>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16">
            {logos.map(({ Icon, label }) => (
              <li key={label}>
                <Icon
                  aria-hidden
                  className="raise size-8 text-slate-400 hover:text-slate-700 sm:size-9"
                />
                <span className="sr-only">{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/**
 * Stand-in for a real product screenshot: built from layout primitives so it
 * stays sharp at any width. Swap the whole component for an <Image> when
 * marketing has a captured dashboard.
 */
function DashboardPreview() {
  return (
    <div
      role="img"
      aria-label="Illustration of the Quotely dashboard showing pipeline value, win rate, and estimates sent over time"
      className="relative mx-auto mt-20 max-w-5xl sm:mt-24"
    >
      <div
        aria-hidden
        className="absolute -inset-x-8 -top-10 bottom-6 rounded-[3rem] bg-gradient-to-b from-brand-500/25 via-brand-400/10 to-transparent blur-3xl"
      />

      <div className="raise relative overflow-hidden rounded-[2rem] bg-white shadow-float ring-1 ring-slate-900/8">
        <div className="flex items-center gap-2 border-b border-slate-900/5 bg-gradient-to-b from-slate-50 to-white px-5 py-3.5">
          <span className="flex gap-2" aria-hidden>
            <span className="size-3 rounded-full bg-slate-200" />
            <span className="size-3 rounded-full bg-slate-200" />
            <span className="size-3 rounded-full bg-slate-200" />
          </span>
          <span className="mx-auto hidden rounded-full bg-slate-50 px-4 py-1.5 text-xs text-slate-400 ring-1 ring-slate-900/5 sm:block">
            app.quotely.com/dashboard
          </span>
        </div>

        <div className="flex">
          <aside
            aria-hidden
            className="hidden w-16 shrink-0 flex-col gap-7 border-r border-slate-900/5 bg-gradient-to-b from-slate-50/80 to-white p-4 sm:flex lg:w-52 lg:p-5"
          >
            <span className="flex items-center gap-3">
              <span className="size-8 shrink-0 rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 shadow-brand" />
              <span className="hidden h-2.5 w-20 rounded-full bg-slate-200 lg:block" />
            </span>
            <span className="flex flex-col gap-2.5">
              {[0, 1, 2, 3, 4].map((item) => (
                <span
                  key={item}
                  className={`flex items-center gap-3 rounded-xl px-2 py-2.5 lg:px-3 ${
                    item === 0 ? "bg-brand-50 ring-1 ring-brand-100" : ""
                  }`}
                >
                  <span
                    className={`size-4 shrink-0 rounded-md ${
                      item === 0 ? "bg-brand-600" : "bg-slate-200"
                    }`}
                  />
                  <span
                    className={`hidden h-2 rounded-full lg:block ${
                      item === 0 ? "w-16 bg-brand-300" : "w-14 bg-slate-200"
                    }`}
                  />
                </span>
              ))}
            </span>
          </aside>

          <div className="min-w-0 flex-1 p-5 sm:p-6 lg:p-8">
            <div className="flex items-center justify-between gap-4">
              <span className="flex flex-col gap-2.5">
                <span
                  className="h-3 w-28 rounded-full bg-slate-200 sm:w-40"
                  aria-hidden
                />
                <span
                  className="h-2 w-20 rounded-full bg-slate-100 sm:w-24"
                  aria-hidden
                />
              </span>
              <span className="flex items-center gap-2.5" aria-hidden>
                <span className="hidden h-9 w-36 rounded-full bg-slate-50 ring-1 ring-slate-900/5 sm:block" />
                <span className="size-9 rounded-full bg-gradient-to-br from-brand-100 to-brand-200 ring-2 ring-white" />
              </span>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3 sm:gap-5">
              {kpis.map((kpi) => (
                <div
                  key={kpi.label}
                  className="rounded-2xl bg-white p-3.5 ring-1 ring-slate-900/5 shadow-soft sm:p-5"
                >
                  <p className="truncate text-[0.6875rem] text-slate-500 sm:text-xs">
                    {kpi.label}
                  </p>
                  <p className="mt-1.5 text-lg font-semibold tracking-tight text-slate-900 tabular-nums sm:text-2xl">
                    {kpi.value}
                  </p>
                  <div className="mt-3 flex items-end justify-between gap-2">
                    <span className="hidden rounded-full bg-emerald-50 px-2 py-0.5 text-[0.625rem] font-semibold text-emerald-700 ring-1 ring-emerald-100 sm:inline">
                      {kpi.delta}
                    </span>
                    <span className="w-full text-brand-500 sm:w-16">
                      <Sparkline points={kpi.trend} />
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-2xl bg-white p-5 ring-1 ring-slate-900/5 shadow-soft sm:mt-6">
              <div className="flex items-center justify-between">
                <span
                  className="h-2.5 w-28 rounded-full bg-slate-200"
                  aria-hidden
                />
                <span className="flex gap-2" aria-hidden>
                  <span className="h-6 w-14 rounded-full bg-brand-50 ring-1 ring-brand-100" />
                  <span className="hidden h-6 w-14 rounded-full bg-slate-50 ring-1 ring-slate-900/5 sm:block" />
                </span>
              </div>

              <div
                className="mt-5 flex h-28 items-end gap-1.5 sm:h-36 sm:gap-3"
                aria-hidden
              >
                {chartBars.map((height, index) => (
                  <span
                    key={index}
                    style={{ height: `${height}%` }}
                    className={`flex-1 rounded-t-lg bg-gradient-to-t ${
                      height === 100
                        ? "from-brand-500 to-brand-700 shadow-brand"
                        : "from-brand-100 to-brand-400"
                    }`}
                  />
                ))}
              </div>
            </div>

            <ul className="mt-5 hidden space-y-2.5 sm:block" aria-hidden>
              {[0, 1, 2].map((row) => (
                <li
                  key={row}
                  className="flex items-center gap-4 rounded-2xl bg-white px-5 py-3 ring-1 ring-slate-900/5 shadow-soft"
                >
                  <span className="size-8 shrink-0 rounded-full bg-gradient-to-br from-slate-100 to-slate-200" />
                  <span className="flex min-w-0 flex-1 flex-col gap-2">
                    <span className="h-2 w-2/5 rounded-full bg-slate-200" />
                    <span className="h-2 w-1/4 rounded-full bg-slate-100" />
                  </span>
                  <span className="h-2 w-12 rounded-full bg-slate-100" />
                  <span
                    className={`h-6 w-16 rounded-full ${
                      row === 0
                        ? "bg-emerald-50 ring-1 ring-emerald-100"
                        : "bg-brand-50 ring-1 ring-brand-100"
                    }`}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function Sparkline({ points }: { points: number[] }) {
  const max = Math.max(...points);
  const min = Math.min(...points);
  const range = max - min || 1;
  const coords = points
    .map((point, index) => {
      const x = (index / (points.length - 1)) * 100;
      const y = 26 - ((point - min) / range) * 22;
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");

  return (
    <svg
      viewBox="0 0 100 28"
      preserveAspectRatio="none"
      className="h-6 w-full"
      aria-hidden
    >
      <polyline
        points={coords}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
