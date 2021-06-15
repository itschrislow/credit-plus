import { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import {
  CashIcon,
  TrashIcon,
  ScaleIcon,
  CalculatorIcon,
} from '@heroicons/react/outline'

const cards = [
  { name: 'Amount financed', href: '#', icon: ScaleIcon, amount: '$30,659.45' },
  { name: 'Average interest rate', href: '#', icon: CalculatorIcon, amount: '4.5%' },
  { name: 'Active loans', href: '#', icon: CashIcon, amount: '2,367' },
  { name: 'Defaulted loans', href: '#', icon: TrashIcon, amount: '184' },
]

const Products = {
  All: 'All products',
  SMEBusiness: 'BizPower SME Business Loan',
  SMEProperty: 'BizPower SME Property Loan',
  Relief: 'BizPower SME Relief Financing',
  Plus: 'BizPlus/-i',
}

const Dashboard = () => {
  const [currProduct, setCurrProduct] = useState(Products.All);

  return (
    <div className="mt-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between">
          <h2 className="text-lg leading-6 font-medium text-gray-900">
            Overview
          </h2>
          <Dropdown currProduct={currProduct} setCurrProduct={setCurrProduct} />
        </div>
        <div className="mt-2 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {/* Card */}
          {cards.map((card) => (
            <div key={card.name} className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <card.icon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">{card.name}</dt>
                      <dd>
                        <div className="text-lg font-medium text-gray-900">{card.amount}</div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
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