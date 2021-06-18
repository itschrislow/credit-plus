export const CREDIT_REPORT = {
  score: 358,
  oustanding: 358000,
  cheques: [
    {
      bank: "Malayan Banking Berhad",
      acc: 102938478097,
      remarks: "Insufficient funds",
    }
  ],
  conduct: [
    {
      late: 0,
      missed: 0,
    },
    {
      late: 5,
      missed: 3,
    },
  ]
}

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
            {CREDIT_REPORT.score}
          </p>
        </div>
        {/* OUTSTANDING */}
        <div className="sm:flex">
          <p className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48">
            Outstanding Amount
          </p>
          <p>
            MYR {new Intl.NumberFormat().format(CREDIT_REPORT.oustanding)}
          </p>
        </div>
        {/* DISHONORED CHEQUES */}
        <div className="sm:flex">
          <p className="text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0 lg:w-48">
            Dishonoured Cheques
          </p>
          <div>
            {CREDIT_REPORT.cheques.map((item, index) => (
              <>
                <div>
                  <p className="font-medium">{item.bank}</p>
                  <p>{item.acc}</p>
                  <p>{item.remarks}</p>
                </div>
                {index < CREDIT_REPORT.cheques.length - 1 && <br />}
              </>
            ))}
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
          <div>
            {CREDIT_REPORT.conduct.map((item, index) => (
              <>
                <div>
                  <p className="font-medium">Outstanding Credit #{index + 1}</p>
                  <p>{item.late} Late Payments</p>
                  <p>{item.missed} Missed Payments</p>
                </div>
                {index < CREDIT_REPORT.conduct.length - 1 && <br />}
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Credit;