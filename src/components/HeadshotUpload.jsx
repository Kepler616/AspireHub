import { useRef } from 'react'
import Button from './Button.jsx'
import { IconPerson } from './icons.jsx'

export default function HeadshotUpload({ value, onChange }) {
  const inputRef = useRef(null)

  const handleFileChange = (event) => {
    const file = event.target.files?.[0]
    if (!file) return
    onChange(URL.createObjectURL(file))
  }

  return (
    <div className="flex items-center gap-4">
      {value ? (
        <img src={value} alt="Your headshot" className="h-16 w-16 shrink-0 rounded-full object-cover" />
      ) : (
        <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-aspire-hover text-aspire-muted">
          <IconPerson className="h-7 w-7" />
        </span>
      )}
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          <Button variant="secondary" type="button" onClick={() => inputRef.current?.click()}>
            {value ? 'Replace photo' : 'Upload photo'}
          </Button>
          {value && (
            <Button variant="ghost" type="button" onClick={() => onChange(null)}>
              Remove
            </Button>
          )}
        </div>
        <span className="font-sans text-xs text-aspire-muted">Optional. Stored for this session only.</span>
      </div>
      <input ref={inputRef} type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
    </div>
  )
}
