import Nav from "components/nav";

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <Nav />
      </header>
      <body>
        {children}
      </body>
    </>
  )
}

export default Layout;