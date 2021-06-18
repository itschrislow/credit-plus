const Credit = () => {
  return (
    <div className="sm:flex sm:px-6 sm:py-5">
      <div className="w-full mt-1 grid grid-cols-1 gap-5 text-sm text-gray-900 sm:mt-0">
        {/* CTOS SCORE */}
        <div className="sm:flex">
          <p className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48">
            CTOS SME Score
          </p>
          <p>
            358
          </p>
        </div>
        {/* OUTSTANDING */}
        <div className="sm:flex">
          <p className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48">
            Outstanding Amount
          </p>
          <p>
            MYR {new Intl.NumberFormat().format(358000)}
          </p>
        </div>
        {/* DISHONORED CHEQUES */}
        <div className="sm:flex">
          <p className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48">
            Dishonoured Cheques
          </p>
          <div>
            <p>Malayan Banking Berhad</p>
            <p>102938478097</p>
            <p>Insufficient funds</p>
          </div>
        </div>
        {/* LEGAL CASES */}
        <div className="sm:flex">
          <p className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48">
            Legal Cases
          </p>
          <p>-</p>
        </div>
        {/* PAYMENT BEHAVIOUR */}
        <div className="sm:flex">
          <p className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48">
            Conduct of Payment
          </p>
          <p>TBD</p>
        </div>
      </div>
    </div>
  )
}

export default Credit;