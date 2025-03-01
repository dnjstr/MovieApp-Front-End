const Recommendations = () => {
  return (
    <section id="recommendations" className="mb-16">
      <h2 className="text-2xl font-semibold mb-8 pb-2 border-b border-orange-800">Movie Recommendations</h2>
      
      <div className="space-y-8">
        <div>
          <h3 className="text-xl mb-3">How are recommendations generated?</h3>
          <p className="text-gray-400">Our recommendation system uses a combination of collaborative 
            filtering, content-based analysis, and machine learning algorithms. We analyze factors such as genre 
            preferences, viewing history, ratings, and similar users' behaviors to suggest movies you're likely to enjoy.</p>
        </div>

        <div>
          <h3 className="text-xl mb-3">Personalized Recommendations</h3>
          <p className="text-gray-400">The more you interact with Movie Haven, the better our 
            recommendations become. Rate movies, add them to your watchlist, and participate in discussions to 
            help us understand your preferences better.</p>
        </div>
      </div>
    </section>
  );
};

export default Recommendations;