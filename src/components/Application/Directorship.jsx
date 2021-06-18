import { LinkIcon } from "@heroicons/react/solid";

export const DIRECTORS = [
  {
    title: 'Chief Executive Officer',
    name: 'Emily Ang Mei Li',
    numShares: 5000000,
    sharesPercentage: 50,
    ctos: 355,
  },
  {
    title: 'Chief Marketing Officer',
    name: 'Jason Wang Wei Wei',
    numShares: 2000000,
    sharesPercentage: 20,
    ctos: 386,
  },
  {
    title: 'Chief Technology Officer',
    name: 'Chen Yen Yen',
    numShares: 3000000,
    sharesPercentage: 30,
    ctos: 401,
  },
];

const Directorship = () => {
  return (
    <div className="sm:flex sm:px-6 sm:py-5">
      <div className="w-full mt-1 text-sm text-gray-900 sm:mt-0">
        <div className="grid gap-4 w-full">
          {DIRECTORS.map(director => (
            <div className="w-full grid grid-cols-4 gap-4">
              <div className="col-span-1">
                <p className="font-medium">
                  {director.title}
                </p>
                <p>{director.name}</p>
                <p className="inline-flex col-span-1 items-center text-blue-600 font-light underline cursor-pointer">
                  <LinkIcon className="h-4 w-4" />
                  credit-report.pdf
                </p>
              </div>
              <div className="col-span-1">
                <p className="font-medium">
                  CTOS Score
                </p>
                <p>{director.ctos}</p>
              </div>
              <div className="col-span-1">
                <p className="font-medium">
                  Shareholding (%)
                </p>
                <p>{director.sharesPercentage}%</p>
              </div>
              <div className="col-span-1">
                <p className="font-medium">
                  Number of Shares
                </p>
                <p>{new Intl.NumberFormat().format(director.numShares)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Directorship;