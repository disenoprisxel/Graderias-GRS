import { FaFacebook, FaInstagram, FaYoutube, FaPhone } from 'react-icons/fa'

export default function TopBar() {
  return (
    <div className="bg-primary text-white text-sm py-2 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        {/* Phones */}
        <div className="flex flex-wrap items-center gap-4">
          <span className="flex items-center gap-1">
            <FaPhone className="text-xs" />
            313 281 6757 &mdash; 320 687 3798 &mdash; 320 699 3020
          </span>
          <span className="flex items-center gap-1">
            <FaPhone className="text-xs" />
            +57 &minus; 467 5813
          </span>
        </div>

        {/* Social icons */}
        <div className="flex items-center gap-4">
          <a
            href="https://www.facebook.com/graderiasgrs"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-dark transition-colors"
          >
            <FaFacebook size={16} />
          </a>
          <a
            href="https://www.instagram.com/graderiasgrs"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-dark transition-colors"
          >
            <FaInstagram size={16} />
          </a>
          <a
            href="https://www.youtube.com/@graderiasgrs"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="hover:text-dark transition-colors"
          >
            <FaYoutube size={16} />
          </a>
        </div>
      </div>
    </div>
  )
}
