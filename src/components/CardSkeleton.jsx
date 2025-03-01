const Skeleton = () => {
  return (
    <section className="w-full h-[250px] bg-white rounded-md px-4 py-8 flex flex-col justify-start items-start gap-3">
      <div className="w-full h-5 bg-gray-200 rounded-lg animate-pulse" />
      <div className="w-full h-4 bg-gray-200 rounded-lg animate-pulse mt-2" />
      <div className="w-full h-4 bg-gray-200 rounded-lg animate-pulse" />
      <div className="w-full h-4 bg-gray-200 rounded-lg animate-pulse" />
      <div className="w-full h-4 bg-gray-200 rounded-lg animate-pulse" />
      <div className="w-full h-5 bg-gray-200 rounded-lg animate-pulse" />
    </section>
  );
};

export default Skeleton;
