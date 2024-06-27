const Spinner = () => {
  return (
    <div data-testid='spinner-component' className="flex items-center justify-center h-screen w-full">
      <div className="relative">
        <div className="w-12 h-12 rounded-full border-8 border-solid border-gray-200"></div>
        <div
          className="w-12 h-12 rounded-full animate-spin border-8 border-solid border-green-500 border-t-transparent shadow-md absolute top-0 left-0">
        </div>
      </div>
    </div>
  );
};

export default Spinner;