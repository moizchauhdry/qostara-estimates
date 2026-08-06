import { cn } from "@/lib/utils";

/**
 * Faint drafting grid. Rendered with layered gradients rather than an image so
 * it stays crisp at any zoom and costs nothing to download.
 */
export function BlueprintGrid({
  className,
  tone = "light",
  size = 56,
}: {
  className?: string;
  tone?: "light" | "dark";
  size?: number;
}) {
  const line =
    tone === "dark" ? "rgba(255,255,255,0.06)" : "rgba(11,27,41,0.055)";

  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0", className)}
      style={{
        backgroundImage: `linear-gradient(to right, ${line} 1px, transparent 1px), linear-gradient(to bottom, ${line} 1px, transparent 1px)`,
        backgroundSize: `${size}px ${size}px`,
      }}
    />
  );
}

/** Slow-drifting colour wash used behind hero and banner sections. */
export function GlowField({
  className,
  tone = "signal",
}: {
  className?: string;
  tone?: "signal" | "marker" | "mixed";
}) {
  const primary =
    tone === "marker" ? "bg-marker-400/25" : "bg-signal-500/20";
  const secondary =
    tone === "mixed" ? "bg-marker-400/20" : "bg-signal-300/25";

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
        className,
      )}
    >
      <div
        className={cn(
          "animate-drift absolute -top-32 -left-24 size-[min(28rem,100vw)] rounded-full blur-3xl",
          primary,
        )}
      />
      <div
        className={cn(
          "animate-drift absolute -top-24 -right-32 size-[min(26rem,100vw)] rounded-full blur-3xl [animation-delay:-8s]",
          secondary,
        )}
      />
    </div>
  );
}

/**
 * The hero illustration: an abstract quantity takeoff over a floor plan.
 * Built as vector primitives so it is sharp on every display and themeable
 * with the brand palette.
 */
export function TakeoffDrawing({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 640 470"
      role="img"
      aria-label="Abstract floor plan with quantity takeoff measurements and highlighted material areas"
      className={cn("h-auto w-full", className)}
    >
      <defs>
        <pattern
          id="hatch"
          width="8"
          height="8"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(45)"
        >
          <line
            x1="0"
            y1="0"
            x2="0"
            y2="8"
            stroke="#2467a0"
            strokeWidth="1.5"
            opacity="0.35"
          />
        </pattern>
        <linearGradient id="plateFill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#f6f8fb" />
        </linearGradient>
        <linearGradient id="roomFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2467a0" stopOpacity="0.14" />
          <stop offset="100%" stopColor="#2467a0" stopOpacity="0.04" />
        </linearGradient>
      </defs>

      <rect
        x="1"
        y="1"
        width="638"
        height="468"
        rx="22"
        fill="url(#plateFill)"
        stroke="#e3e9f1"
        strokeWidth="1.5"
      />

      {/* Drafting grid confined to the sheet */}
      <g opacity="0.5">
        {Array.from({ length: 15 }).map((_, index) => (
          <line
            key={`v${index}`}
            x1={40 * (index + 1)}
            y1="24"
            x2={40 * (index + 1)}
            y2="446"
            stroke="#0b1b29"
            strokeOpacity="0.045"
          />
        ))}
        {Array.from({ length: 10 }).map((_, index) => (
          <line
            key={`h${index}`}
            x1="24"
            y1={40 * (index + 1) + 12}
            x2="616"
            y2={40 * (index + 1) + 12}
            stroke="#0b1b29"
            strokeOpacity="0.045"
          />
        ))}
      </g>

      {/* Building envelope */}
      <path
        d="M96 128 H392 V96 H520 V352 H352 V392 H96 Z"
        fill="#ffffff"
        stroke="#0b1b29"
        strokeWidth="3"
        strokeLinejoin="round"
      />

      {/* Interior partitions */}
      <g stroke="#0b1b29" strokeWidth="2" strokeOpacity="0.55">
        <line x1="232" y1="128" x2="232" y2="392" />
        <line x1="232" y1="264" x2="520" y2="264" />
        <line x1="392" y1="96" x2="392" y2="264" />
      </g>

      {/* Measured areas */}
      <rect x="99" y="131" width="130" height="258" fill="url(#roomFill)" />
      <rect x="235" y="267" width="114" height="122" fill="url(#hatch)" />
      <rect
        x="395"
        y="99"
        width="122"
        height="162"
        fill="#eea33d"
        fillOpacity="0.12"
      />

      {/* Dimension line — overall width */}
      <g stroke="#2467a0" strokeWidth="1.5">
        <line x1="96" y1="64" x2="520" y2="64" />
        <line x1="96" y1="56" x2="96" y2="72" />
        <line x1="520" y1="56" x2="520" y2="72" />
      </g>
      <text
        x="308"
        y="52"
        textAnchor="middle"
        fill="#2467a0"
        fontSize="15"
        fontFamily="ui-monospace, monospace"
        fontWeight="600"
      >
        142&apos;-6&quot;
      </text>

      {/* Dimension line — depth */}
      <g stroke="#2467a0" strokeWidth="1.5">
        <line x1="60" y1="128" x2="60" y2="392" />
        <line x1="52" y1="128" x2="68" y2="128" />
        <line x1="52" y1="392" x2="68" y2="392" />
      </g>
      <text
        x="44"
        y="268"
        textAnchor="middle"
        fill="#2467a0"
        fontSize="15"
        fontFamily="ui-monospace, monospace"
        fontWeight="600"
        transform="rotate(-90 44 268)"
      >
        88&apos;-0&quot;
      </text>

      {/* Takeoff callouts */}
      {[
        { x: 164, y: 200, label: "01" },
        { x: 292, y: 328, label: "02" },
        { x: 456, y: 176, label: "03" },
      ].map((point) => (
        <g key={point.label}>
          <circle
            cx={point.x}
            cy={point.y}
            r="17"
            fill="#0b1b29"
            stroke="#ffffff"
            strokeWidth="2.5"
          />
          <text
            x={point.x}
            y={point.y + 5}
            textAnchor="middle"
            fill="#ffffff"
            fontSize="13"
            fontFamily="ui-monospace, monospace"
            fontWeight="600"
          >
            {point.label}
          </text>
        </g>
      ))}

      {/* Sheet stamp */}
      <g>
        <rect
          x="392"
          y="368"
          width="200"
          height="72"
          rx="12"
          fill="#0b1b29"
          opacity="0.94"
        />
        <text
          x="412"
          y="396"
          fill="#8dc0e6"
          fontSize="11"
          fontFamily="ui-monospace, monospace"
          letterSpacing="1.5"
        >
          TAKEOFF SHEET
        </text>
        <text
          x="412"
          y="422"
          fill="#ffffff"
          fontSize="17"
          fontFamily="ui-monospace, monospace"
          fontWeight="600"
        >
          A-101 · REV 03
        </text>
      </g>
    </svg>
  );
}

/**
 * Abstract project artwork for portfolio cards. Four deterministic variants
 * stand in for photography while keeping the page weightless.
 */
export function ProjectVisual({
  variant,
  className,
}: {
  variant: "tower" | "campus" | "span" | "grid";
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "relative overflow-hidden bg-gradient-to-br from-ink-900 via-ink-950 to-signal-950",
        className,
      )}
    >
      <BlueprintGrid tone="dark" size={32} />
      <div className="absolute -top-16 -right-10 size-52 rounded-full bg-signal-500/25 blur-3xl" />

      <svg
        viewBox="0 0 400 260"
        className="relative h-full w-full"
        preserveAspectRatio="xMidYMax meet"
      >
        {variant === "tower" && (
          <g>
            {[
              { x: 96, w: 52, h: 150 },
              { x: 156, w: 68, h: 210 },
              { x: 232, w: 44, h: 120 },
              { x: 284, w: 30, h: 82 },
            ].map((bar) => (
              <g key={bar.x}>
                <rect
                  x={bar.x}
                  y={236 - bar.h}
                  width={bar.w}
                  height={bar.h}
                  rx="4"
                  fill="#ffffff"
                  fillOpacity="0.1"
                  stroke="#8dc0e6"
                  strokeOpacity="0.5"
                />
                {Array.from({ length: Math.floor(bar.h / 24) }).map((_, row) => (
                  <line
                    key={row}
                    x1={bar.x + 6}
                    y1={236 - bar.h + 20 + row * 24}
                    x2={bar.x + bar.w - 6}
                    y2={236 - bar.h + 20 + row * 24}
                    stroke="#579fd5"
                    strokeOpacity="0.35"
                  />
                ))}
              </g>
            ))}
            <line
              x1="72"
              y1="236"
              x2="336"
              y2="236"
              stroke="#eea33d"
              strokeWidth="2.5"
            />
          </g>
        )}

        {variant === "campus" && (
          <g>
            {[
              { x: 70, y: 150, w: 110, h: 86 },
              { x: 190, y: 118, w: 76, h: 118 },
              { x: 276, y: 168, w: 62, h: 68 },
            ].map((block) => (
              <rect
                key={block.x}
                x={block.x}
                y={block.y}
                width={block.w}
                height={block.h}
                rx="6"
                fill="#ffffff"
                fillOpacity="0.09"
                stroke="#8dc0e6"
                strokeOpacity="0.5"
              />
            ))}
            <path
              d="M60 236 H344"
              stroke="#eea33d"
              strokeWidth="2.5"
              strokeDasharray="10 8"
            />
            <circle cx="128" cy="120" r="22" stroke="#579fd5" fill="none" />
          </g>
        )}

        {variant === "span" && (
          <g>
            <path
              d="M50 218 Q200 84 350 218"
              stroke="#8dc0e6"
              strokeWidth="3"
              fill="none"
            />
            {Array.from({ length: 9 }).map((_, index) => {
              const x = 62 + index * 34;
              const t = (x - 50) / 300;
              const y = 218 - 134 * (4 * t * (1 - t));
              return (
                <line
                  key={index}
                  x1={x}
                  y1={y}
                  x2={x}
                  y2="236"
                  stroke="#579fd5"
                  strokeOpacity="0.5"
                />
              );
            })}
            <line
              x1="40"
              y1="236"
              x2="360"
              y2="236"
              stroke="#eea33d"
              strokeWidth="2.5"
            />
          </g>
        )}

        {variant === "grid" && (
          <g>
            {Array.from({ length: 4 }).map((_, row) =>
              Array.from({ length: 7 }).map((__, col) => (
                <rect
                  key={`${row}-${col}`}
                  x={78 + col * 36}
                  y={92 + row * 36}
                  width="28"
                  height="28"
                  rx="4"
                  fill="#ffffff"
                  fillOpacity={(row + col) % 3 === 0 ? 0.16 : 0.06}
                  stroke="#8dc0e6"
                  strokeOpacity="0.4"
                />
              )),
            )}
            <line
              x1="66"
              y1="248"
              x2="334"
              y2="248"
              stroke="#eea33d"
              strokeWidth="2.5"
            />
          </g>
        )}
      </svg>
    </div>
  );
}
