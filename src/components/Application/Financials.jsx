export const FINANCIALS = [
  {
    balance: {
      2018: {
        tl: 162069983,
        nw: 102831873,
        mi: 0,
        yoy: -19.63,
        total: 264901856,
      },
      2019: {
        tl: 162069983,
        nw: 102831873,
        mi: 0,
        yoy: -19.63,
        total: 264901856,
      },
      2020: {
        tl: 162069983,
        nw: 102831873,
        mi: 0,
        yoy: -19.63,
        total: 264901856,
      },
    },
    income: {
      2018: {
        rev: 1004863,
        revYoy: -10.9,
        profitPre: 46226,
        profitPreYoy: 17.94,
        profitPost: 34890,
        profitPostYoy: 32.09
      },
      2019: {
        rev: 1004863,
        revYoy: -10.9,
        profitPre: 46226,
        profitPreYoy: 17.94,
        profitPost: 34890,
        profitPostYoy: 32.09
      },
      2020: {
        rev: 1004863,
        revYoy: -10.9,
        profitPre: 46226,
        profitPreYoy: 17.94,
        profitPost: 34890,
        profitPostYoy: 32.09
      },
    },
    profitability: {
      2018: {
        roa: 13.17,
        roe: 33.9,
      },
      2019: {
        roa: 13.17,
        roe: 33.9,
      },
      2020: {
        roa: 13.17,
        roe: 33.9,
      },
    },
    liquidity: {
      2018: {
        current: 1.44,
        working: 2.87,
      },
      2019: {
        current: 1.44,
        working: 2.87,
      },
      2020: {
        current: 1.44,
        working: 2.87,
      },
    },
    others: {
      2018: {
        turnover: 3.79,
        gearing: 1.58,
      },
      2019: {
        turnover: 3.79,
        gearing: 1.58,
      },
      2020: {
        turnover: 3.79,
        gearing: 1.58,
      },
    }
  }
]

const Financials = () => {
  return (
    <div className="sm:flex sm:px-6 sm:py-5">
      <div className="w-full mt-1 text-sm text-gray-900 sm:mt-0 sm:ml-6">
        {/* HEADING */}
        <div className="w-full grid grid-cols-4 gap-4 text-right font-medium">
          <p className="px-12 col-start-2">2018</p>
          <p className="px-12 leading-relaxed">2019</p>
          <p className="px-12 leading-relaxed">2020</p>
        </div>
        {/* BALANCE SHEET */}
        <div className="w-full grid grid-cols-4 gap-4 bg-gray-200">
          <p className="px-4 font-medium">Balance Sheet</p>
        </div>
        <div className="w-full grid grid-cols-4 gap-4">
          <div className="px-4">
            <p className="leading-relaxed">Total Liabilities</p>
            <p className="leading-relaxed">Net Worth</p>
            <p className="leading-relaxed">Minority Interest</p>
            <p className="leading-relaxed">YoY Growth</p>
            <p className="leading-relaxed font-medium">Total</p>
          </div>
          {Object.keys(FINANCIALS[0].balance).map(year => (
            <div className="px-12 text-right">
              {Object.entries(FINANCIALS[0].balance[year]).map((val) => (
                <p className={`leading-relaxed ${val[1] < 0 && "text-red-600"}`}>
                  {new Intl.NumberFormat().format(val[1])}{val[0].toLowerCase().includes("yoy") && "%"}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* INCOME STATEMENT */}
        <div className="w-full grid grid-cols-4 gap-4 bg-gray-200">
          <p className="px-4 font-medium">Income Statement</p>
        </div>
        <div className="w-full grid grid-cols-4 gap-4">
          <div className="px-4">
            <p className="leading-relaxed">Revenue</p>
            <p className="leading-relaxed">YoY Growth</p>
            <p className="leading-relaxed">P/L Before Tax</p>
            <p className="leading-relaxed">YoY Growth</p>
            <p className="leading-relaxed">P/L After Tax</p>
            <p className="leading-relaxed">YoY Growth</p>
          </div>
          {Object.keys(FINANCIALS[0].income).map(year => (
            <div className="px-12 text-right">
              {Object.entries(FINANCIALS[0].income[year]).map((val) => (
                <p className={`leading-relaxed ${val[1] < 0 && "text-red-600"}`}>
                  {new Intl.NumberFormat().format(val[1])}{val[0].toLowerCase().includes("yoy") && "%"}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* LIQUIDITY RATIOS */}
        <div className="w-full grid grid-cols-4 gap-4 bg-gray-200">
          <p className="px-4 font-medium">Liquidity Ratios</p>
        </div>
        <div className="w-full grid grid-cols-4 gap-4">
          <div className="px-4">
            <p className="leading-relaxed">Current Ratio</p>
            <p className="leading-relaxed">Working Capital Days</p>
          </div>
          {Object.keys(FINANCIALS[0].liquidity).map(year => (
            <div className="px-12 text-right">
              {Object.entries(FINANCIALS[0].liquidity[year]).map((val) => (
                <p className={`leading-relaxed ${val[1] < 0 && "text-red-600"}`}>
                  {new Intl.NumberFormat().format(val[1])}{val[0].toLowerCase().includes("yoy") && "%"}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* PROFITABILITY RATIOS */}
        <div className="w-full grid grid-cols-4 gap-4 bg-gray-200">
          <p className="px-4 font-medium">Profitability Ratios</p>
        </div>
        <div className="w-full grid grid-cols-4 gap-4">
          <div className="px-4">
            <p className="leading-relaxed">Return On Assets (ROA)</p>
            <p className="leading-relaxed">Return On Equity (ROE)</p>
          </div>
          {Object.keys(FINANCIALS[0].profitability).map(year => (
            <div className="px-12 text-right">
              {Object.entries(FINANCIALS[0].profitability[year]).map((val) => (
                <p className={`leading-relaxed ${val[1] < 0 && "text-red-600"}`}>
                  {new Intl.NumberFormat().format(val[1])}%
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* OTHER RATIOS */}
        <div className="w-full grid grid-cols-4 gap-4 bg-gray-200">
          <p className="px-4 font-medium">Other Ratios</p>
        </div>
        <div className="w-full grid grid-cols-4 gap-4">
          <div className="px-4">
            <p className="leading-relaxed">Asset Turnover Ratio</p>
            <p className="leading-relaxed">Gearing Ratio</p>
          </div>
          {Object.keys(FINANCIALS[0].others).map(year => (
            <div className="px-12 text-right">
              {Object.entries(FINANCIALS[0].others[year]).map((val) => (
                <p className={`leading-relaxed ${val[1] < 0 && "text-red-600"}`}>
                  {new Intl.NumberFormat().format(val[1])}{val[0].toLowerCase().includes("yoy") && "%"}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Financials;