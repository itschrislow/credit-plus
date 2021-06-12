import Nav from "src/components/nav";
import Chatbot from "src/components/Chatbot";

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