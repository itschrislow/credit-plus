import Link from "next/Link";

const Nav = () => {
  return (
    <nav className="z-10 h-20 w-full px-10 flex items-center">
      <img src="/static/images/rhb-logo.png" />
      <div className="w-full flex justify-evenly font-light">
        <Link href="/">
          <h1 className="cursor-pointer hover:underline">
            BizPower SME Business Loan
          </h1>
        </Link>
        <Link href="/">
          <h1 className="cursor-pointer hover:underline">
            BizPlus/-i
          </h1>
        </Link>
        <Link href="/">
          <h1 className="cursor-pointer hover:underline">
            BizPower SME Property Loan
          </h1>
        </Link>
        <Link href="/">
          <h1 className="cursor-pointer hover:underline">
            BizPower Relief Financing
          </h1>
        </Link>
      </div>
    </nav>
  )
}

export default Nav;