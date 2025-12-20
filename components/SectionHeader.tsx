
const SectionHeader = ( { className, children } : { className?: string; children: React.ReactNode } ) => {
  return (
    <h2 className={`text-4xl md:text-5xl font-bold text-center ${className}`}>{children}</h2>
  )
}

export default SectionHeader