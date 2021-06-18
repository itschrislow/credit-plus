import Link from "next/link";

const Nav = () => {
  return (
    <nav className="z-10 sticky top-0 h-10 sm:h-16 py-2 sm:py-0 w-full px-4 flex items-center bg-white">
      <Link href="/">
        <img src="/static/images/rhb-logo.png" className="h-8 mt-2 cursor-pointer" />
      </Link>
    </nav>
  )
}

export default Nav;