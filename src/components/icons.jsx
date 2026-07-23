// Minimal line-art icons used across selection cards. Deliberately plain —
// single-color, stroke-based, no branded logo artwork.
const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function IconEducate({ className }) {
  return (
    <svg {...base} className={className}>
      <path d="M4 5.5c2-1 5-1 8 0v13c-3-1-6-1-8 0v-13Z" />
      <path d="M20 5.5c-2-1-5-1-8 0v13c3-1 6-1 8 0v-13Z" />
    </svg>
  )
}

export function IconMarketInsight({ className }) {
  return (
    <svg {...base} className={className}>
      <path d="M4 17 9 11l4 3 7-8" />
      <path d="M15 6h5v5" />
    </svg>
  )
}

export function IconRealtor({ className }) {
  return (
    <svg {...base} className={className}>
      <path d="M4 11 12 4l8 7" />
      <path d="M6 10v9h12v-9" />
      <path d="M10 19v-5h4v5" />
    </svg>
  )
}

export function IconCredibility({ className }) {
  return (
    <svg {...base} className={className}>
      <path d="M12 4.5 14 9l5 .7-3.6 3.4.9 4.9L12 15.8 7.7 18l.9-4.9L5 9.7 10 9l2-4.5Z" />
    </svg>
  )
}

export function IconLinkedIn({ className }) {
  return (
    <svg {...base} className={className}>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M8 10.5v6" />
      <circle cx="8" cy="7.5" r="0.75" fill="currentColor" stroke="none" />
      <path d="M12 16.5v-3.5c0-1.5 3-2 3 0v3.5" />
      <path d="M12 10.5v2" />
    </svg>
  )
}

export function IconInstagram({ className }) {
  return (
    <svg {...base} className={className}>
      <rect x="4" y="4" width="16" height="16" rx="4" />
      <circle cx="12" cy="12" r="3.25" />
      <circle cx="16.2" cy="7.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function IconFacebook({ className }) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="8" />
      <path d="M13.8 8.6h-1.3c-.7 0-1.3.6-1.3 1.3V11H9.8v2h1.4v5h2V13h1.4l.3-2h-1.7v-1c0-.3.3-.6.6-.6h1.1V8.6Z" />
    </svg>
  )
}

export function IconSinglePost({ className }) {
  return (
    <svg {...base} className={className}>
      <rect x="5" y="4" width="14" height="16" rx="2" />
      <path d="M8 9h8M8 12.5h8M8 16h5" />
    </svg>
  )
}

export function IconCarousel({ className }) {
  return (
    <svg {...base} className={className}>
      <rect x="3" y="6" width="11" height="12" rx="2" />
      <path d="M17 8v8" />
      <path d="M20 9.5v5" />
    </svg>
  )
}

export function IconPerson({ className }) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="8.5" r="3.25" />
      <path d="M5.5 19c1-3.5 4-5 6.5-5s5.5 1.5 6.5 5" />
    </svg>
  )
}

export function IconImage({ className }) {
  return (
    <svg {...base} className={className}>
      <rect x="3.5" y="4.5" width="17" height="15" rx="2" />
      <circle cx="8.5" cy="9.5" r="1.5" />
      <path d="M4 16.5 9 12l3 2.5 4-4 4 4" />
    </svg>
  )
}

export function IconPhone({ className }) {
  return (
    <svg {...base} className={className}>
      <path d="M5 4.5c0-.6.4-1 1-1h2.2c.5 0 .9.3 1 .8l.7 3a1 1 0 0 1-.3 1L8.2 9.6c.9 2 2.4 3.5 4.4 4.4l1.3-1.4a1 1 0 0 1 1-.3l3 .7c.5.1.8.5.8 1V16c0 .6-.4 1-1 1C11.4 17 5 10.6 5 4.5Z" />
    </svg>
  )
}

export function IconEmail({ className }) {
  return (
    <svg {...base} className={className}>
      <rect x="4" y="6" width="16" height="12" rx="1.5" />
      <path d="M4.5 7 12 13l7.5-6" />
    </svg>
  )
}

export function IconGlobe({ className }) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="7.5" />
      <path d="M4.5 12h15M12 4.5c2.2 2 3.4 4.8 3.4 7.5s-1.2 5.5-3.4 7.5c-2.2-2-3.4-4.8-3.4-7.5S9.8 6.5 12 4.5Z" />
    </svg>
  )
}

export function IconAsterisk({ className }) {
  return (
    <svg {...base} className={className}>
      <path d="M12 3v18M4.5 7.5l15 9M19.5 7.5l-15 9" />
    </svg>
  )
}

export function IconStar({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 3.5 14.47 9l6.03.6-4.5 3.98 1.3 5.92L12 16.6l-5.3 2.9 1.3-5.92L3.5 9.6 9.53 9 12 3.5Z" />
    </svg>
  )
}
