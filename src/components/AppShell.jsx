import Sidebar from './Sidebar.jsx'

export default function AppShell({ activeView, onNavigate, children }) {
  return (
    <div className="flex min-h-screen bg-aspire-bg">
      <Sidebar activeView={activeView} onNavigate={onNavigate} />
      <main className="flex-1 overflow-y-auto px-10 py-10">
        <div className="mx-auto max-w-4xl">{children}</div>
      </main>
    </div>
  )
}
