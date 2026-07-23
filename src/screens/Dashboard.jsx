import Button from '../components/Button.jsx'

export default function Dashboard({ onCreateContent }) {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="font-serif text-4xl text-aspire-navy">Dashboard</h1>
          <p className="mt-1 font-sans text-sm text-aspire-muted">
            A quick look at your social content activity.
          </p>
        </div>
        <Button onClick={onCreateContent}>+ Create New Post</Button>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <h2 className="font-sans text-sm font-semibold text-aspire-navy">Overview</h2>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded border border-aspire-border bg-white p-5">
            <div className="font-serif text-3xl text-aspire-navy">0</div>
            <div className="mt-1 font-sans text-sm font-medium text-aspire-navy">Posts Created</div>
          </div>
          <div className="rounded border border-aspire-border bg-white p-5">
            <div className="font-serif text-3xl text-aspire-navy">0</div>
            <div className="mt-1 font-sans text-sm font-medium text-aspire-navy">Downloads</div>
          </div>
          <div className="rounded border border-aspire-border bg-white p-5">
            <div className="font-serif text-3xl text-aspire-navy">0</div>
            <div className="mt-1 font-sans text-sm font-medium text-aspire-navy">Pending</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <h2 className="font-sans text-sm font-semibold text-aspire-navy">Recent Posts</h2>
        </div>
        <div className="flex flex-col items-center justify-center rounded border border-dashed border-aspire-border bg-white py-16">
          <p className="font-sans text-sm text-aspire-muted">You haven't created any posts yet.</p>
          <Button onClick={onCreateContent} className="mt-4">+ Create New Post</Button>
        </div>
      </div>
    </div>
  )
}
