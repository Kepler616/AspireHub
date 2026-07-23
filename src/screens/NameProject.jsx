import { useState } from 'react'
import Button from '../components/Button.jsx'

export default function NameProject({ onNext, onCancel }) {
  const [name, setName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name.trim()) onNext(name)
  }

  return (
    <div className="flex h-[80vh] flex-col items-center justify-center p-6">
      <div className="w-full max-w-md rounded-xl border border-aspire-border bg-white p-8 shadow-sm">
        <h2 className="font-serif text-3xl text-aspire-navy">Name Your Post</h2>
        <p className="mt-2 font-sans text-sm text-aspire-muted">
          Give your new post a recognizable name to easily find it later.
        </p>
        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="e.g. Q3 Mortgage Tips Carousel"
            className="w-full rounded border border-aspire-border px-4 py-3 font-sans text-sm outline-none focus:border-aspire-navy"
            autoFocus
          />
          <div className="flex justify-end gap-3 mt-4">
            <Button type="button" variant="ghost" onClick={onCancel}>Cancel</Button>
            <Button type="submit" disabled={!name.trim()}>Continue</Button>
          </div>
        </form>
      </div>
    </div>
  )
}
