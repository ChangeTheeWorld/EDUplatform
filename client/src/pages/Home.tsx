function Home() {
  return (
    <div className="w-full min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center relative">
      <div className="w-full max-w-6xl flex flex-row items-center justify-between px-8">
        <div className="flex flex-col">
          <h1 className="text-7xl font-bold tracking-wide mb-2">EDU Platform</h1>
          <h2 className="text-2xl">The best free way to learn anything</h2>
          <button className="border-4 border-blue-500 bg-transparrent hover:bg-blue-500 text-white font-bold py-3 px-5 rounded mt-4 w-fit transition-all duration-300">
            Get Started
          </button>
        </div>
        <div>
          <img className="w-auto h-[34rem]" src="/logo.svg" alt="EDU logo" />
        </div>
      </div>
      <div className="absolute bottom-8 animate-bounce">
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  );
}

export default Home