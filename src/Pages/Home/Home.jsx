import Banner from "../../Components/Banner";

const Home = () => {
  return (
    <div className="w-[90%] mx-auto">
      <Banner></Banner>
      <section>
        <h2 className="text-3xl">Premium member profile cards</h2>
      </section>
      <section>
        <h2 className="font-bold text-3xl">How it works:</h2>
      </section>
      <section>
        <h2 className="font-bold text-3xl">Success Counter Section</h2>
      </section>
      <section>
        <h2 className="font-bold text-3xl">Success Story Section : Reviews</h2>
      </section>
    </div>
  );
};

export default Home;
