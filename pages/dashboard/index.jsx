import { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import {
  ChevronDownIcon,
  ArrowCircleUpIcon,
  ArrowCircleDownIcon,
} from '@heroicons/react/solid'
import {
  ScaleIcon,
  ChartPieIcon,
  CreditCardIcon,
} from '@heroicons/react/outline'

import ProductStats from 'src/components/Charts/ProductStats'
import Sector from 'src/components/Charts/Sector'
import Turnover from 'src/components/Charts/Turnover'

const Cards = {
  ProductStats: { name: 'Product Statistics', icon: CreditCardIcon, best: 'BizPower SME Business Loan', worst: 'BizPlus/-i' },
  Sector: { name: 'Sector', icon: ChartPieIcon, best: 'Technology', worst: 'Utility' },
  Turnover: { name: 'Finance Amount vs Turnover', icon: ScaleIcon, best: '4', worst: '2' },
}

const Products = {
  All: 'All products',
  SMEBusiness: 'BizPower SME Business Loan',
  SMEProperty: 'BizPower SME Property Loan',
  Relief: 'BizPower SME Relief Financing',
  Plus: 'BizPlus/-i',
}

const Dashboard = () => {
  const [currCard, setCurrCard] = useState(Cards.ProductStats)
  const [currProduct, setCurrProduct] = useState(Products.All);

  return (
    <div className="mt-8">
      <div className="h-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between">
          <h2 className="text-lg leading-6 font-medium text-gray-900">
            Overview
          </h2>
          {/* <Dropdown currProduct={currProduct} setCurrProduct={setCurrProduct} /> */}
        </div>
        <div className="mt-2 mb-5 grid grid-cols-1 sm:grid-cols-3 gap-5">
          {/* Card */}
          {Object.keys(Cards).map((key) => {
            const { name, icon, best, worst } = Cards[key];
            return (
              <div
                key={name}
                className={`bg-white overflow-hidden rounded-lg border-2
                ${currCard === Cards[key] ? "border-darkBlue" : "border-transparent"}
                `}
                onClick={() => setCurrCard(Cards[key])}
              >
                <div className="p-5">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <icon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">{name}</dt>
                        <dd>
                          <div className="flex items-center text-lg font-medium text-gray-900">
                            <ArrowCircleUpIcon
                              className="mr-2 h-5 w-5 text-green-500"
                              aria-hidden="true"
                            />
                            {best}
                          </div>
                          <div className="flex items-center text-lg font-medium text-gray-900">
                            <ArrowCircleDownIcon
                              className="mr-2 h-5 w-5 text-red-500"
                              aria-hidden="true"
                            />
                            {worst}
                          </div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        {currCard === Cards.ProductStats && <ProductStats />}
        {currCard === Cards.Sector && <Sector />}
        {currCard === Cards.Turnover && <Turnover />}
      </div>
    </div>
  )
}



export default Dashboard;