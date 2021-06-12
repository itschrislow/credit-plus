import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  BusinessPersona,
  PropertyPersona,
  ReliefPersona,
} from "src/persona";

const Estimation = () => {
  const router = useRouter();
  let params = router.query.persona;

  const [breakdown, setBreakdown] = useState(null);

  useEffect(() => {
    if (params === "business") setBreakdown(BusinessPersona);
    if (params === "property") setBreakdown(PropertyPersona);
    if (params === "relief") setBreakdown(ReliefPersona);
  }, [params])

  return (
    <div>
      <div className="bg-lightBlue pt-12 sm:pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-100 sm:text-4xl">
              Your loan is {breakdown?.approval_rate}% likely to be approved.
            </h2>
            <p className="mt-3 text-xl font-medium text-gray-100 sm:mt-4 cursor-pointer">
              {breakdown?.approval_rate >= 75 ?
                <>
                  <a
                    href="https://smebanking.rhbgroup.com/ip/?_ga=2.133234762.594465340.1623386931-1965805813.1623386931#_frmHome"
                    target="_blank"
                  >
                    <span className="underline">
                      Apply now
                    </span>
                  </a>
                  {" "}for {breakdown?.product_name} !
                </>
                :
                <>
                  Learn how to improve your success rate before applying or speak to us{" "}
                  <a href="mailto:customer.service@rhbgroup.com">
                    <span className="underline">
                      here
                    </span>
                  </a>
                  .
                </>
              }
            </p>
          </div>
        </div>

        {/* SCORES */}
        <div className="mt-10 pb-12 bg-white sm:pb-4">
          <div className="relative">
            <div className="absolute inset-0 h-1/2 bg-lightBlue" />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <Scores scores={breakdown?.scores} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SCORE BREAKDOWN */}
      <div className="relative">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Breakdown factors={breakdown?.factors} />
          </div>
        </div>
      </div>
    </div>
  )
}

const Scores = ({ scores }) => {
  return (
    <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
      <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
        <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
          Financial Standing
         </dt>
        <dd className="order-1 text-5xl font-extrabold text-darkBlue">
          {scores?.financials}%
        </dd>
      </div>
      <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
        <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
          Credit Score
        </dt>
        <dd className="order-1 text-5xl font-extrabold text-darkBlue">
          {scores?.credit}%
        </dd>
      </div>
      <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
        <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
          Business Viability
        </dt>
        <dd className="order-1 text-5xl font-extrabold text-darkBlue">
          {scores?.viability}%
        </dd>
      </div>
    </dl>
  )
}

const Breakdown = ({ factors }) => {
  return (
    <dl className="sm:grid sm:grid-cols-3">
      {/* FINANCIALS */}
      <div className="pt-6 pb-8 px-6">
        <ul className="mt-6 space-y-4">
          {/* INCOME */}
          <li className="flex space-x-3">
            {factors?.financials.income ?
              <svg className="flex-shrink-0 h-5 w-5 text-green-500" x-description="Heroicon name: solid/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
              </svg>
              :
              <svg className="flex-shrink-0 h-5 w-5 text-red-500" x-description="Heroicon name: solid/x" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            }
            <span className="text-sm text-gray-500">
              Income Statment
            </span>
          </li>

          {/* BALANCE */}
          <li className="flex space-x-3">
            {factors?.financials.balance ?
              <svg className="flex-shrink-0 h-5 w-5 text-green-500" x-description="Heroicon name: solid/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
              </svg>
              :
              <svg className="flex-shrink-0 h-5 w-5 text-red-500" x-description="Heroicon name: solid/x" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            }
            <span className="text-sm text-gray-500">
              Balance Sheet
            </span>
          </li>

          {/* CASH FLOW */}
          <li className="flex space-x-3">
            {factors?.financials.cash_flow ?
              <svg className="flex-shrink-0 h-5 w-5 text-green-500" x-description="Heroicon name: solid/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
              </svg>
              :
              <svg className="flex-shrink-0 h-5 w-5 text-red-500" x-description="Heroicon name: solid/x" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            }
            <span className="text-sm text-gray-500">
              Cash Flow
            </span>
          </li>
        </ul>
      </div>

      {/* CREDIT */}
      <div className="pt-6 pb-8 px-6">
        <ul className="mt-6 space-y-4">
          {/* PAYMENT BEHAVIOUR */}
          <li className="flex space-x-3">
            {factors?.credit.payment_behavior ?
              <svg className="flex-shrink-0 h-5 w-5 text-green-500" x-description="Heroicon name: solid/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
              </svg>
              :
              <svg className="flex-shrink-0 h-5 w-5 text-red-500" x-description="Heroicon name: solid/x" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            }
            <span className="text-sm text-gray-500">
              Payment Behaviour
            </span>
          </li>

          {/* OUTSTANDING PAYMENTS */}
          <li className="flex space-x-3">
            {factors?.credit.outstanding_payments ?
              <svg className="flex-shrink-0 h-5 w-5 text-green-500" x-description="Heroicon name: solid/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
              </svg>
              :
              <svg className="flex-shrink-0 h-5 w-5 text-red-500" x-description="Heroicon name: solid/x" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            }
            <span className="text-sm text-gray-500">
              Outstanding Payments
            </span>
          </li>

          {/* CREDIT LENGTH */}
          <li className="flex space-x-3">
            {factors?.credit.credit_length ?
              <svg className="flex-shrink-0 h-5 w-5 text-green-500" x-description="Heroicon name: solid/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
              </svg>
              :
              <svg className="flex-shrink-0 h-5 w-5 text-red-500" x-description="Heroicon name: solid/x" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            }
            <span className="text-sm text-gray-500">
              Credit Length
            </span>
          </li>
        </ul>
      </div>

      {/* VIABILITY */}
      <div className="pt-6 pb-8 px-6">
        <ul className="mt-6 space-y-4">
          {/* SOLVECNY */}
          <li className="flex space-x-3">
            {factors?.viability.solvency ?
              <svg className="flex-shrink-0 h-5 w-5 text-green-500" x-description="Heroicon name: solid/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
              </svg>
              :
              <svg className="flex-shrink-0 h-5 w-5 text-red-500" x-description="Heroicon name: solid/x" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            }
            <span className="text-sm text-gray-500">
              Solvency
            </span>
          </li>

          {/* SOLVENCY */}
          <li className="flex space-x-3">
            {factors?.viability.liquidity ?
              <svg className="flex-shrink-0 h-5 w-5 text-green-500" x-description="Heroicon name: solid/check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
              </svg>
              :
              <svg className="flex-shrink-0 h-5 w-5 text-red-500" x-description="Heroicon name: solid/x" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            }
            <span className="text-sm text-gray-500">
              Liquidity
            </span>
          </li>
        </ul>
      </div>
    </dl>
  )
}

export default Estimation;