const NAV_ITEMS = [
  { id: 'dashboard', label: 'Dashboard' },
  { id: 'wizard', label: 'Create Content' },
  { id: 'profile', label: 'Profile' },
]

export default function Sidebar({ activeView, onNavigate }) {
  return (
    <aside className="flex h-screen w-60 shrink-0 flex-col gap-8 bg-aspire-navy-deep px-5 py-7">
      <div className="font-serif text-2xl text-white">Aspire</div>
      <nav className="flex flex-col gap-1">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => onNavigate(item.id)}
            className={`rounded px-3 py-2 text-left font-sans text-sm transition-colors ${
              activeView === item.id
                ? 'bg-aspire-navy-secondary text-white'
                : 'text-white/70 hover:bg-aspire-navy-secondary hover:text-white'
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  )
}
