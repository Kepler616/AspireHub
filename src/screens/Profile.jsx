import TextField from '../components/TextField.jsx'
import HeadshotUpload from '../components/HeadshotUpload.jsx'

export default function Profile({ profile, onChange }) {
  const update = (field) => (value) => onChange({ ...profile, [field]: value })

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="font-serif text-4xl text-aspire-navy">Profile</h1>
        <p className="mt-1 font-sans text-sm text-aspire-muted">
          This information automatically replaces the placeholder loan officer details in your content templates.
        </p>
      </div>

      <div className="flex max-w-xl flex-col gap-6 rounded border border-aspire-border bg-white p-6">
        <TextField label="Name" value={profile.name} onChange={update('name')} placeholder="Jane Smith" />
        <TextField
          label="Individual NMLS Number"
          value={profile.nmls}
          onChange={update('nmls')}
          placeholder="123456"
        />
        <TextField
          label="Phone"
          type="tel"
          value={profile.phone}
          onChange={update('phone')}
          placeholder="(555) 555-5555"
        />
        <TextField
          label="Email"
          type="email"
          value={profile.email}
          onChange={update('email')}
          placeholder="jane@aspirelending.com"
        />

        <div className="flex flex-col gap-2">
          <span className="font-sans text-sm font-medium text-aspire-navy">Headshot (optional)</span>
          <HeadshotUpload value={profile.headshotUrl} onChange={(url) => onChange({ ...profile, headshotUrl: url })} />
        </div>

        <span className="border-t border-aspire-border pt-4 font-sans text-xs text-aspire-muted">
          Saved for this session only — nothing is stored in a database yet.
        </span>
      </div>
    </div>
  )
}
