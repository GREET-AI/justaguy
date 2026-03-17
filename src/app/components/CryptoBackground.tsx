import type React from "react";

const coinCount = 40;
const coins = Array.from({ length: coinCount }, (_, i) => {
  const t = i / coinCount;
  const wobble = Math.sin(i * 1.7) * 0.5 + Math.cos(i * 0.9) * 0.5;
  const left = Math.round((t * 96 + (wobble * 3 + 2)) * 10) / 10;
  const size = Math.round(22 + ((Math.sin(i * 2.1) + 1) / 2) * 34);
  const dur = 6.6 + ((Math.cos(i * 1.3) + 1) / 2) * 7.4;
  const delay = -((i * 0.85) % dur);
  const drift = Math.round((Math.sin(i * 1.11) * 28 + Math.cos(i * 0.77) * 18) * 10) / 10;
  const spin = Math.round(520 + ((Math.sin(i * 0.6) + 1) / 2) * 980);
  const blur = Math.round((((Math.sin(i * 1.9) + 1) / 2) * 0.18) * 100) / 100;
  const alpha = Math.round((0.78 + ((Math.cos(i * 1.6) + 1) / 2) * 0.20) * 100) / 100;

  return {
    left: `${Math.min(96, Math.max(2, left))}%`,
    size,
    delay: `${delay.toFixed(2)}s`,
    dur: `${dur.toFixed(2)}s`,
    drift,
    spin,
    blur,
    alpha,
  };
});

type CSSVarStyle = React.CSSProperties & Record<`--${string}`, string>;

export function CryptoBackground() {
  return (
    <div className="crypto-bg" aria-hidden="true">
      <div className="crypto-bg__mesh" />
      <div className="crypto-bg__grid" />
      <div className="crypto-bg__scan" />
      <div className="crypto-bg__noise" />
      <div className="crypto-bg__vignette" />

      <div className="crypto-bg__coins">
        {coins.map((c, i) => (
          <span
            key={`${c.left}-${c.size}-${i}`}
            className="crypto-bg__coin"
            style={
              {
                left: c.left,
                width: c.size,
                height: c.size,
                animationDelay: c.delay,
                animationDuration: c.dur,
                "--coin-drift": `${c.drift}px`,
                "--coin-spin": `${c.spin}deg`,
                "--coin-blur": `${c.blur}px`,
                "--coin-alpha": `${c.alpha}`,
              } as CSSVarStyle
            }
          />
        ))}
      </div>
    </div>
  );
}

