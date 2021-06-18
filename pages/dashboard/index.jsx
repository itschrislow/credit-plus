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

import Sales from 'src/components/Charts/Sales'
import Sector from 'src/components/Charts/Sector'
import Turnover from 'src/components/Charts/Turnover'

const Cards = {
  Sector: { name: 'Sector', icon: ChartPieIcon, best: 'Technology', worst: 'Retail' },
  Sales: { name: 'Product Sales', icon: CreditCardIcon, best: '367', worst: '231' },
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
  const [currCard, setCurrCard] = useState(Cards.Sector)
  const [currProduct, setCurrProduct] = useState(Products.All);

  return (
    <div className="mt-8">
      <div className="h-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between">
          <h2 className="text-lg leading-6 font-medium text-gray-900">
            Overview
          </h2>
          <Dropdown currProduct={currProduct} setCurrProduct={setCurrProduct} />
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
        {currCard === Cards.Sector && <Sector />}
        {currCard === Cards.Sales && <Sales />}
        {currCard === Cards.Turnover && <Turnover />}
      </div>
    </div>
  )
}

const Dropdown = ({ currProduct, setCurrProduct }) => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      {({ open }) => (
        <>
          <div>
            <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-0">
              {currProduct}
              <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
            </Menu.Button>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              static
              className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <div className="py-1">
                {Object.keys(Products).map(key => (
                  <Menu.Item
                    key={key}
                    onClick={() => setCurrProduct(Products[key])}
                  >
                    {({ active }) => (
                      <p
                        className={`
                        block px-4 py-2 text-sm 
                        ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}
                      `}
                      >
                        {Products[key]}
                      </p>
                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  )
}


export default Dashboard;