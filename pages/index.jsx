const Home = ({ setShowChatbot }) => {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-mainBg bg-no-repeat bg-cover bg-center">
      <div className="text-center">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline">Finance your business with RHB</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Enhance your working capital and boost your cash flow.
          Not sure which product is the most suitable for your business?
        </p>
        <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <div className="rounded-md shadow">
            <a
              onClick={() => setShowChatbot(true)}
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-darkBlue hover:bg-opacity-90 md:py-4 md:text-lg md:px-10 cursor-pointer"
            >
              Find out more
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;