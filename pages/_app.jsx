import { useState } from "react";

import Layout from 'components/Layout'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [showChatbot, setShowChatbot] = useState(false);

  return (
    <Layout showChatbot={showChatbot} setShowChatbot={setShowChatbot}>
      <Component {...pageProps} showChatbot={showChatbot} setShowChatbot={setShowChatbot} />
    </Layout>
  )
}

export default MyApp
