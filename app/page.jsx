import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="md:hidden" />
        <span className="orange_gradient text-center">AI-Powered Prompts</span>
      </h1>

      <p className="desc text-center">
        Promptpeller.ai, a place to explore, Creative prompts, and so much
        more, Innovative tools that you'll adore, Share your ideas and let your
        creativity soar.
      </p>
    <Feed/>
    </section>
  );
};

export default Home;
