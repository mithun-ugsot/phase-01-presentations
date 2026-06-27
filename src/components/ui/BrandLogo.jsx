const LOGOS = {
  light: '/logos/u-light-logo.png',
  dark: '/logos/u-dark-logo.png',
}

const SIZES = {
  sm: 'h-6',
  header: 'h-7 md:h-8',
  hero: 'h-11 md:h-14',
  wide: 'h-10 md:h-12',
}

/** dark = for light backgrounds · light = for dark backgrounds */
export default function BrandLogo({ variant = 'dark', size = 'header', className = '' }) {
  return (
    <img
      src={LOGOS[variant]}
      alt="UpGrad School of Technology"
      className={`w-auto max-w-full object-contain object-left ${SIZES[size]} ${className}`}
      draggable={false}
    />
  )
}
