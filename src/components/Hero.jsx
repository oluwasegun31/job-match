import jobImg from "../assets/job.webp";
const Hero = () => {
  return (
    <section className="w-full py-12 px-8 bg-gray-200 flex justify-center items-center">
      <p className="md:text-6xl sm:text-5xl text-3xl font-bold">
        Find your dream job here.
      </p>
      <img
        src={jobImg}
        alt="job"
        className="md:h-[300px] sm:h-[250px] h-[200px] object-contain"
      />
    </section>
  );
};

export default Hero;
