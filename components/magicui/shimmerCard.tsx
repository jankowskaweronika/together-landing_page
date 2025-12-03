const ShimmerCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative inline-flex overflow-hidden rounded-3xl p-[1px]">
      {/* Animated border gradient */}
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

      {/* Card content */}
      <div className='relative bg-black p-6 rounded-3xl text-white w-full backdrop-blur-3xl'>
        {children}
      </div>
    </div>
  )
}

export default ShimmerCard
