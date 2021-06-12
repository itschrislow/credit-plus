import Link from "next/Link";

const Nav = () => {
  return (
    <nav className="z-10 h-10 sm:h-20 py-2 sm:py-0 w-full px-10 flex items-center">
      <Link href="/">
        <img src="/static/images/rhb-logo.png" className="cursor-pointer" />
      </Link>
    </nav>
  )
}

export default Nav;