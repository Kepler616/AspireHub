import Button from './Button.jsx'

export default function LoanOfficerInfoPanel({ profile, showHeadshot, onToggleHeadshot, onEditProfile }) {
  const hasHeadshot = Boolean(profile?.headshotUrl)
  const rows = [
    { label: 'Name', value: profile?.name || '—' },
    { label: 'NMLS Number', value: profile?.nmls || '—' },
    { label: 'Phone', value: profile?.phone || '—' },
    { label: 'Email', value: profile?.email || '—' },
    { label: 'Headshot', value: hasHeadshot ? 'On file' : 'Not added' },
  ]

  return (
    <div className="flex flex-col gap-4 rounded border border-aspire-border bg-white p-5">
      <div className="flex items-center justify-between">
        <span className="font-sans text-sm font-semibold text-aspire-navy">Loan Officer Information</span>
        <Button variant="ghost" onClick={onEditProfile}>
          Edit Profile
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-x-4 gap-y-3">
        {rows.map((row) => (
          <div key={row.label} className="flex flex-col">
            <span className="font-sans text-xs text-aspire-muted">{row.label}</span>
            <span className="truncate font-sans text-sm text-aspire-navy">{row.value}</span>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between border-t border-aspire-border pt-4">
        <span className="font-sans text-sm text-aspire-navy">Headshot on this post</span>
        <div className="flex gap-2">
          <Button
            variant={showHeadshot ? 'primary' : 'secondary'}
            onClick={() => onToggleHeadshot(true)}
            disabled={!hasHeadshot}
          >
            Show
          </Button>
          <Button variant={!showHeadshot ? 'primary' : 'secondary'} onClick={() => onToggleHeadshot(false)}>
            Hide
          </Button>
        </div>
      </div>
      {!hasHeadshot && (
        <span className="font-sans text-xs text-aspire-muted">
          No headshot saved yet — add one in your Profile.
        </span>
      )}
    </div>
  )
}
