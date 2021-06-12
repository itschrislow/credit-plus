import Nav from "components/nav";
import Chatbot from "components/Chatbot";

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <Nav />
      </header>
      <div className="w-full">
        {children}
        <Chatbot />
      </div>
    </>
  )
}

export default Layout;