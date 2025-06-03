import programmer from  '../assets/programmer.gif'

const WelcomeLoader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-zinc-900 text-white flex-col space-y-4 animate-fade-in">
      {/* Replace src with your animated logo (GIF, SVG, or Lottie preview) */}
      <img
        src={programmer}
        alt="Logo"
        className="w-24 h-24 animate-pulse"
      />
      <h1 className="md:text-2xl text-xl text-center font-semibold tracking-wide animate-bounce">
        Preparing your personalized tour...
      </h1>
    </div>
  );
};

export default WelcomeLoader;
