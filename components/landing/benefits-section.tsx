const BenefitsSection = () => {
  return (
    <section
      className="text-center mx-auto max-w-[80rem] px-6 md:px-8"
    >
      <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

        <div className="flex flex-col items-center">
          <h3 className="text-6xl font-bold">100%</h3>
          <p className="text-lg text-gray-600 mt-2">gotowy do użycia</p>
        </div>

        <div className="flex flex-col items-center">
          <h3 className="text-6xl font-bold">5 min</h3>
          <p className="text-lg text-gray-600 mt-2">do stworzenia kursu</p>
        </div>

        <div className="flex flex-col items-center">
          <h3 className="text-6xl font-bold">24/7</h3>
          <p className="text-lg text-gray-600 mt-2">dostęp do platformy</p>
        </div>

      </div>
    </section >
  );
}

export default BenefitsSection