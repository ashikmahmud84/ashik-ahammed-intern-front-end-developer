
import { useState } from 'react'
import { Copy, Check, QrCode, MousePointerClick, X } from 'lucide-react'

const popularLinks = [
  {
    shortUrl: 'https://thetiny.site/ARL5EN',
    originalUrl: 'https://app.example.com/dashboard?ref=campaign',
    clicks: 430,
  },
  {
    shortUrl: 'https://thetiny.site/BArxC1',
    originalUrl: 'https://example.com/short-link',
    clicks: 269,
  },
  {
    shortUrl: 'https://thetiny.site/kLrMkJ',
    originalUrl: 'https://superfast.example.com/blog/introducing-qr-code',
    clicks: 85,
  },
  {
    shortUrl: 'https://thetiny.site/QNtP9',
    originalUrl: 'https://docs.google.com/document/d/example',
    clicks: 64,
  },
  {
    shortUrl: 'https://thetiny.site/4dCt8p',
    originalUrl: 'https://example.com/',
    clicks: 33,
  },
]

function PopularLinks() {
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null)
  const [qrUrl, setQrUrl] = useState<string | null>(null)

  const handleCopy = async (url: string) => {
    try {
      await navigator.clipboard.writeText(url)
      setCopiedUrl(url)

      setTimeout(() => {
        setCopiedUrl(null)
      }, 2000)
    } catch {
      alert('Unable to copy the link. Please copy it manually.')
    }
  }

  return (
    <section className="w-full bg-surface px-4 py-10 sm:py-12">
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-extrabold tracking-tight text-heading sm:text-3xl">
            Most Popular Links
          </h2>

          <p className="mt-2 text-sm text-body sm:text-base">
            Check out the most clicked links on our platform
          </p>
        </div>

        {/* Popular Links List */}
        <div className="space-y-2">
          {popularLinks.map((link) => (
            <div
              key={link.shortUrl}
              className="flex min-w-0 flex-col gap-3 rounded-lg border border-gray-100 bg-background px-3 py-3 transition-shadow duration-200 hover:shadow-[0_4px_10px_rgba(0,0,0,0.10)] sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-4"
            >
              {/* Link Information */}
              <div className="min-w-0 flex-1 overflow-hidden">
                <p className="truncate text-sm font-medium text-primary">
                  {link.shortUrl}
                </p>

                <p className="mt-1 truncate text-xs text-body">
                  {link.originalUrl}
                </p>
              </div>

              {/* Actions */}
              <div className="flex shrink-0 items-center justify-end gap-1.5">
                <span className="flex items-center gap-1 rounded-md bg-surface px-2 py-1.5 text-xs text-body">
                  <MousePointerClick size={14} />
                  {link.clicks} clicks
                </span>

                <button
                  type="button"
                  onClick={() => handleCopy(link.shortUrl)}
                  className="flex items-center gap-1 rounded-md bg-primary px-2.5 py-1.5 text-xs font-medium text-white transition-colors hover:bg-primary/90"
                >
                  {copiedUrl === link.shortUrl ? (
                    <>
                      <Check size={14} />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      Copy
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => setQrUrl(link.shortUrl)}
                  className="flex items-center gap-1 rounded-md bg-secondary px-2.5 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-primary/15"
                >
                  <QrCode size={14} />
                  QR
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* QR Preview Modal */}
      {qrUrl && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
          onClick={() => setQrUrl(null)}
        >
          <div
            className="relative w-full max-w-xs rounded-xl bg-surface p-6 text-center shadow-xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setQrUrl(null)}
              aria-label="Close QR preview"
              className="absolute right-3 top-3 rounded-md p-1 text-body hover:bg-background"
            >
              <X size={18} />
            </button>

            <h3 className="text-xl font-bold text-heading">
              QR Code
            </h3>

            <p className="mt-1 break-all text-xs text-body">
              {qrUrl}
            </p>

            <img
              src={`https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(qrUrl)}`}
              alt="QR code for shortened link"
              className="mx-auto mt-5 h-44 w-44"
            />

            <button
              type="button"
              onClick={() => handleCopy(qrUrl)}
              className="mt-4 rounded-md bg-primary px-5 py-2 text-sm font-medium text-white transition hover:bg-primary/90"
            >
              Copy Link
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

export default PopularLinks
