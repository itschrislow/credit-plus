import { useState } from "react";

import '../styles/globals.css'
import Layout from 'src/components/Layout'


function MyApp({ Component, pageProps }) {
  const [showChatbot, setShowChatbot] = useState(false);

  return (
    <Layout showChatbot={showChatbot} setShowChatbot={setShowChatbot}>
      <Component {...pageProps} showChatbot={showChatbot} setShowChatbot={setShowChatbot} />
    </Layout>
  )
}

export default MyApp
