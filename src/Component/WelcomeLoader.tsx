const WelcomeLoader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-zinc-900 text-white flex-col space-y-4 animate-fade-in">
      <h1 className="md:text-2xl text-xl text-center font-semibold tracking-wide animate-bounce">
        Preparing your personalized tour...
      </h1>
    </div>
  );
};

export default WelcomeLoader;
