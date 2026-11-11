
const statistics = [
  { value: '100K+', label: 'Links Created' },
  { value: '1M+', label: 'Total Clicks' },
  { value: '180+', label: 'Countries' },
  { value: '99.9%', label: 'Uptime' },
]

function Statistics() {
  return (
    <section className="w-full bg-[#5925F5] px-4 py-6 sm:py-8">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-7 md:grid-cols-4 md:gap-y-0">

        {statistics.map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-center text-center"
          >
            <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
              {item.value}
            </h2>

            <p className="mt-1 text-xs font-medium text-violet-100">
              {item.label}
            </p>
          </div>
        ))}

      </div>
    </section>
  )
}

export default Statistics
