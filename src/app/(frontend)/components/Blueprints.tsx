import type { ReactNode } from "react";

/** Rebar footing section — used for structural/foundation projects. */
export function BlueprintFooting() {
  return (
    <svg className="blueprint" viewBox="0 0 140 105" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      <path className="fillc" d="M28 58 L112 58 L112 74 L92 74 L92 92 L48 92 L48 74 L28 74 Z" />
      <g className="bar">
        <circle cx="36" cy="68" r="2" /><circle cx="52" cy="68" r="2" /><circle cx="70" cy="68" r="2" />
        <circle cx="88" cy="68" r="2" /><circle cx="104" cy="68" r="2" />
        <circle cx="58" cy="84" r="2" /><circle cx="70" cy="84" r="2" /><circle cx="82" cy="84" r="2" />
      </g>
      <rect className="thin" x="54" y="78" width="32" height="10" />
      <rect className="stroke" x="48" y="26" width="44" height="26" />
      <line className="thin" x1="48" y1="34" x2="92" y2="34" />
      <line className="thin" x1="48" y1="44" x2="92" y2="44" />
      <line className="dim" x1="20" y1="58" x2="120" y2="58" />
      <path className="thin" d="M24 58 l-3 4 M32 58 l-3 4 M116 58 l-3 4" />
      <text x="24" y="102">Semelle · Ø12 HA</text>
    </svg>
  );
}

/** Level plan — used for design/plan projects. */
export function BlueprintPlan() {
  return (
    <svg className="blueprint" viewBox="0 0 140 105" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      <rect className="stroke" x="14" y="14" width="112" height="77" />
      <line className="stroke" x1="70" y1="14" x2="70" y2="91" />
      <line className="stroke" x1="14" y1="52" x2="126" y2="52" />
      <rect className="thin" x="20" y="20" width="20" height="14" />
      <rect className="thin" x="98" y="58" width="22" height="27" />
      <path className="thin" d="M14 40 A8 8 0 0 1 22 48" />
      <path className="thin" d="M70 30 A8 8 0 0 0 62 22" />
      <line className="dim" x1="14" y1="99" x2="126" y2="99" />
      <line className="dim" x1="14" y1="96" x2="14" y2="102" />
      <line className="dim" x1="126" y1="96" x2="126" y2="102" />
      <text x="58" y="105">12,40 m</text>
    </svg>
  );
}

/** Façade elevation — used for elevation projects. */
export function BlueprintElevation() {
  return (
    <svg className="blueprint" viewBox="0 0 140 105" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
      <path className="stroke" d="M20 92 L20 34 L70 12 L120 34 L120 92 Z" />
      <line className="stroke" x1="20" y1="52" x2="120" y2="52" />
      <line className="stroke" x1="20" y1="72" x2="120" y2="72" />
      <rect className="fillc" x="30" y="58" width="14" height="10" />
      <rect className="fillc" x="63" y="58" width="14" height="10" />
      <rect className="fillc" x="96" y="58" width="14" height="10" />
      <rect className="fillc" x="34" y="78" width="16" height="12" />
      <rect className="thin" x="90" y="76" width="18" height="16" />
      <line className="dim" x1="128" y1="12" x2="128" y2="92" />
      <line className="dim" x1="125" y1="12" x2="131" y2="12" />
      <line className="dim" x1="125" y1="92" x2="131" y2="92" />
      <text x="130" y="56" transform="rotate(90 130 56)">R+2 · 9,20 m</text>
    </svg>
  );
}

export function blueprintFor(id: string): ReactNode {
  if (id === "villa-bamar") return <BlueprintFooting />;
  if (id === "baay-mass") return <BlueprintElevation />;
  return <BlueprintPlan />;
}
