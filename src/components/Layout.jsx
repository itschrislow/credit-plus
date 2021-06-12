import Nav from "components/nav";
import Chatbot from "components/Chatbot";

const Layout = ({ children, showChatbot, setShowChatbot }) => {
  return (
    <div className="h-screen">
      <Nav />
      <main>
        {children}
      </main>
      <Chatbot showChatbot={showChatbot} setShowChatbot={setShowChatbot} />
    </div>
  )
}

export default Layout;