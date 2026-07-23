import { useState, useMemo, useRef } from 'react'
import Button from '../components/Button.jsx'
import * as htmlToImage from 'html-to-image'

// Import raw HTML templates (Vite supports ?raw)
import clientReviewHtml from '../templates/SinglePost/ClientReview.html?raw'
import carouselCoverHtml from '../templates/Carousel/Carousel_Cover.html?raw'
import carouselContentHtml from '../templates/Carousel/Carousel_Content.html?raw'
import carouselOutroHtml from '../templates/Carousel/Carousel_Outro.html?raw'

const CATEGORIES = [
  {
    id: 'single-post',
    name: 'Single Post',
    templates: [
      {
        id: 'client-review',
        name: 'Client Review',
        html: clientReviewHtml,
        fields: [
          { id: 'main_title', label: 'Main Title', default: 'Client Review' },
          { id: 'client_name', label: 'Client Name', default: 'Justin Eisele' },
          { id: 'client_avatar_url', label: 'Client Avatar URL', default: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80' },
          { id: 'review_text_1', label: 'Review Text 1', default: 'No one does customer service like Aspire in the web hosting world.' },
          { id: 'review_text_2', label: 'Review Text 2', default: 'I HIGHLY recommend them.' },
          { id: 'brand_handle', label: 'Brand Handle', default: 'aspireloans' },
          { id: 'url_background_img', label: 'Background Image URL', default: 'https://images.unsplash.com/photo-1582063289852-62e3ba2747f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTY5OTZ8MHwxfHNlYXJjaHw0Nnx8aG91c2V8ZW58MHx8fHwxNzYwMjI2NzgwfDA&ixlib=rb-4.1.0&q=80&w=1080' }
        ]
      }
    ]
  },
  {
    id: 'carousel',
    name: 'Carousel',
    templates: [
      {
        id: 'carousel-cover',
        name: 'Cover',
        html: carouselCoverHtml,
        fields: [
          { id: 'cover_title_1', label: 'Title Line 1', default: 'Mortgage' },
          { id: 'cover_title_italic', label: 'Title Italic', default: 'Tips ' },
          { id: 'cover_title_for', label: 'Title For', default: 'for' },
          { id: 'cover_title_2', label: 'Title Line 2', default: 'Home Buyers' },
          { id: 'cover_subtitle', label: 'Subtitle', default: 'Proven at delivery, not discovery.' },
          { id: 'cover_button_text', label: 'Button Text', default: 'Explore the ROI' },
          { id: 'url_background_img', label: 'Background Image URL', default: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
          { id: 'contact_phone', label: 'Phone', default: '(800) 555-0199' },
          { id: 'contact_email', label: 'Email', default: 'hello@aspireloans.com' },
          { id: 'contact_website', label: 'Website', default: 'aspireloans.com' }
        ]
      },
      {
        id: 'carousel-content',
        name: 'Content Slide',
        html: carouselContentHtml,
        fields: [
          { id: 'step_number', label: 'Step Number', default: '1' },
          { id: 'step_title_1', label: 'Title Line 1', default: 'A smarter ' },
          { id: 'step_title_2', label: 'Title Line 2', default: 'way' },
          { id: 'step_title_3', label: 'Title Line 3', default: 'to manage costs' },
          { id: 'step_description', label: 'Description', default: "We're introducing a limited-time offer designed for enterprise-level financial operations" },
          { id: 'button_text', label: 'Button Text', default: 'UNLOCK YOUR OFFER' },
          { id: 'contact_phone', label: 'Phone', default: '(800) 555-0199' },
          { id: 'contact_email', label: 'Email', default: 'hello@aspireloans.com' },
          { id: 'contact_website', label: 'Website', default: 'aspireloans.com' }
        ]
      },
      {
        id: 'carousel-outro',
        name: 'Outro',
        html: carouselOutroHtml,
        fields: [
          { id: 'outro_title_1', label: 'Title Line 1', default: 'Ready for the future' },
          { id: 'outro_title_2', label: 'Title Line 2', default: 'of work?' },
          { id: 'outro_description', label: 'Description', default: 'Explore digital skills, continuous learning, and career growth strategies with Insight Lab' },
          { id: 'outro_button_text', label: 'Button Text', default: 'UNLOCK YOUR OFFER' },
          { id: 'contact_phone', label: 'Phone', default: '(800) 555-0199' },
          { id: 'contact_email', label: 'Email', default: 'hello@aspireloans.com' },
          { id: 'contact_website', label: 'Website', default: 'aspireloans.com' }
        ]
      }
    ]
  }
]

export default function CreateContent({ onExitToDashboard, profile, projectName }) {
  const [selectedCategoryId, setSelectedCategoryId] = useState(CATEGORIES[0].id)
  const category = CATEGORIES.find(c => c.id === selectedCategoryId)
  
  const [selectedTemplateId, setSelectedTemplateId] = useState(category.templates[0].id)
  const template = category.templates.find(t => t.id === selectedTemplateId)
  
  // Initialize form state with default values
  const [formData, setFormData] = useState(() => {
    const initial = {}
    template.fields.forEach(f => {
      initial[f.id] = f.default
    })
    return initial
  })

  const handleCategoryChange = (e) => {
    const newCatId = e.target.value
    setSelectedCategoryId(newCatId)
    
    const newCat = CATEGORIES.find(c => c.id === newCatId)
    const newTemplate = newCat.templates[0]
    setSelectedTemplateId(newTemplate.id)
    
    // Merge new defaults but keep existing data to avoid re-typing emails/phones
    setFormData(prev => {
      const merged = { ...prev }
      newTemplate.fields.forEach(f => {
        if (!merged[f.id]) merged[f.id] = f.default
      })
      return merged
    })
  }

  const handleTemplateChange = (newId) => {
    setSelectedTemplateId(newId)
    const newTemplate = category.templates.find(t => t.id === newId)
    
    // Merge new defaults but keep existing data for shared fields
    setFormData(prev => {
      const merged = { ...prev }
      newTemplate.fields.forEach(f => {
        if (!merged[f.id]) merged[f.id] = f.default
      })
      return merged
    })
  }

  const handleFieldChange = (id, value) => {
    setFormData(prev => ({ ...prev, [id]: value }))
  }

  const renderedHtml = useMemo(() => {
    let html = template.html
    // Replace all variables in the HTML
    template.fields.forEach(f => {
      const regex = new RegExp(`{{${f.id}}}`, 'g')
      html = html.replace(regex, formData[f.id] || '')
    })
    
    // Remove old script tags
    html = html.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
    
    // Remove hardcoded /src/index.css as it breaks in production builds
    html = html.replace(/<link[^>]*href="\/src\/index\.css"[^>]*>/gi, "")
    
    // Dynamically grab all styles from the parent React app (works for both Vite Dev and Prod)
    const parentStyles = Array.from(document.head.querySelectorAll('style, link[rel="stylesheet"]'))
      .map(el => el.outerHTML)
      .join('\n')
    
    // Inject strict 1080x1080 sizing to override any flex/padding from the template's body tag.
    // This ensures all templates render identically inside the iframe regardless of their body classes.
    const fontLinks = `
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet">
    `
    const styleReset = `
      <style>
        html, body {
          width: 1080px !important;
          height: 1080px !important;
          margin: 0 !important;
          padding: 0 !important;
          display: block !important;
          overflow: hidden !important;
          background: transparent !important;
        }
        .template-canvas {
          width: 1080px !important;
          height: 1080px !important;
          flex-shrink: 0 !important;
          margin: 0 !important;
        }
      </style>
    `
    html = html.replace('</head>', `${parentStyles}\n${fontLinks}\n${styleReset}</head>`)
    
    return html
  }, [template, formData])

  const iframeRef = useRef(null)

  const handleExportPNG = async () => {
    if (!iframeRef.current) return
    
    try {
      const iframeDoc = iframeRef.current.contentDocument || iframeRef.current.contentWindow.document
      const targetNode = iframeDoc.querySelector('.template-canvas')
      
      if (!targetNode) {
        alert("Could not find the template canvas.")
        return
      }

      // html-to-image perfectly captures CSS filters like backdrop-blur and border-radius
      const dataUrl = await htmlToImage.toPng(targetNode, {
        pixelRatio: 1,
        quality: 1
      })
      
      const a = document.createElement('a')
      a.href = dataUrl
      
      const fileNameSafe = projectName ? projectName.replace(/[^a-z0-9]/gi, '_').toLowerCase() : template.id
      a.download = `${fileNameSafe}.png`
      a.click()
    } catch (error) {
      console.error("Error generating PNG:", error)
      alert("Failed to export PNG. See console for details.")
    }
  }

  return (
    <div className="flex h-full flex-col gap-6">
      
      {/* Header */}
      <div className="flex items-center justify-between border-b border-aspire-border pb-4">
        <div>
          <h1 className="font-serif text-3xl text-aspire-navy">{projectName || 'Create Content'}</h1>
          <p className="font-sans text-sm text-aspire-muted mt-1">Fill the fields and generate your post instantly.</p>
        </div>
        <Button variant="ghost" onClick={onExitToDashboard}>Back to Dashboard</Button>
      </div>

      <div className="flex flex-1 gap-8 items-start">
        
        {/* Left Column: Form */}
        <div className="flex w-1/3 flex-col gap-6 pr-4">
          
          <div className="flex flex-col gap-2">
            <label className="font-sans text-sm font-semibold text-aspire-navy">Content Type</label>
            <select 
              value={selectedCategoryId} 
              onChange={handleCategoryChange}
              className="w-full rounded border border-aspire-border bg-white px-3 py-2 font-sans text-sm outline-none focus:border-aspire-navy"
            >
              {CATEGORIES.map(c => (
                <option key={c.id} value={c.id}>{c.name}</option>
              ))}
            </select>
          </div>

          {category.templates.length > 1 && (
            <div className="flex flex-col gap-2">
              <label className="font-sans text-sm font-semibold text-aspire-navy">Select Slide</label>
              <div className="flex bg-aspire-bg rounded border border-aspire-border overflow-hidden p-1 gap-1">
                {category.templates.map(t => (
                  <button
                    key={t.id}
                    onClick={() => handleTemplateChange(t.id)}
                    className={`flex-1 py-1.5 px-2 text-xs font-sans font-medium text-center rounded transition-colors ${
                      selectedTemplateId === t.id 
                        ? 'bg-aspire-navy text-white shadow-sm' 
                        : 'text-aspire-navy hover:bg-aspire-hover'
                    }`}
                  >
                    {t.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="h-px w-full bg-aspire-border" />

          <div className="flex flex-col gap-4 pb-12">
            {template.fields.map(field => (
              <div key={field.id} className="flex flex-col gap-1.5">
                <label className="font-sans text-sm font-semibold text-aspire-navy">{field.label}</label>
                <input
                  type="text"
                  value={formData[field.id] || ''}
                  onChange={(e) => handleFieldChange(field.id, e.target.value)}
                  className="w-full rounded border border-aspire-border bg-white px-3 py-2 font-sans text-sm outline-none focus:border-aspire-navy"
                />
              </div>
            ))}
          </div>

        </div>

        {/* Right Column: Preview */}
        <div className="flex flex-1 flex-col gap-4 sticky top-6">
          <div className="flex items-center justify-between">
            <h2 className="font-sans text-sm font-semibold text-aspire-navy">Live Preview</h2>
            <Button onClick={handleExportPNG}>Download PNG</Button>
          </div>
          
          {/* Iframe wrapper to scale 1080x1080 to fit the container. */}
          <div className="relative w-full overflow-hidden rounded-xl border border-aspire-border bg-gray-100 flex items-center justify-center p-8">
            <div 
              style={{ 
                width: 540, 
                height: 540, 
                position: 'relative', 
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' 
              }}
            >
              <iframe
                ref={iframeRef}
                title="Preview"
                srcDoc={renderedHtml}
                style={{
                  width: 1080,
                  height: 1080,
                  border: 'none',
                  transform: 'scale(0.5)',
                  transformOrigin: 'top left',
                  background: 'white'
                }}
              />
            </div>
          </div>
          
        </div>
      </div>

    </div>
  )
}
