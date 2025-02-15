/*TEMPORARY */
/*TEMPORARY */
/*TEMPORARY */
/*TEMPORARY */
/*TEMPORARY */
/*TEMPORARY */
/*TEMPORARY */

const AboutUs = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="w-full min-h-screen p-[50px] md:p-[2%] font-sans box-border bg-black text-white">
      
      {/* Back Button */}
      <button
        className="bg-orange-500 text-white py-3 px-7 mt-6 text-base rounded-md cursor-pointer transition-all duration-300 hover:bg-orange-600 active:scale-95 mb-5"
        onClick={() => window.history.back()}
      >
        ← 
      </button>

      {/* Page Title */}
      <h1 className="text-center text-4xl font-bold text-orange-500 mb-4">About Us</h1>
      <p className="text-center text-base text-gray-400 mb-8">Learn more about our journey, values, and vision.</p>

      {/* Our Story */}
      <section className="mb-8 p-6 rounded-lg w-full">
        <h2 className="text-2xl text-orange-500 border-b-2 border-orange-500 pb-2 mb-4">Our Story</h2>
        <p>
          <strong>Movie Haven</strong> started as a college project with a simple goal: to create a **platform where movie lovers can explore and appreciate cinema**. What began as an academic assignment quickly evolved into a **passion-driven initiative** by a group of film enthusiasts who wanted to share their love for storytelling, filmmaking, and cinematic history.
        </p>
        <p>
          Over time, we realized that many people, from students to casual viewers, wanted a **dedicated space to discuss, analyze, and learn about movies**. Thus, Movie Haven was born—a **non-commercial, educational platform** designed to make learning about films both fun and insightful.
        </p>
      </section>

      {/* Our Mission */}
      <section className="mb-8 p-6 rounded-lg w-full">
        <h2 className="text-2xl text-orange-500 border-b-2 border-orange-500 pb-2 mb-4">Our Mission</h2>
        <p>
          At **Movie Haven**, our mission is simple: **to celebrate cinema by making film education accessible and engaging**. We believe that movies are more than just entertainment—they are a reflection of society, history, and culture. Our goal is to provide an **informative and interactive platform** for film lovers, students, and educators.
        </p>
      </section>

      {/* Our Values */}
      <section className="mb-8 p-6 rounded-lg w-full">
        <h2 className="text-2xl text-orange-500 border-b-2 border-orange-500 pb-2 mb-4">Our Values</h2>
        <ul className="list-disc pl-6 leading-relaxed">
          <li><strong>Passion for Cinema:</strong> We love movies, and we want to share that passion with the world.</li>
          <li><strong>Education & Learning:</strong> We believe in the power of storytelling and the importance of understanding film history, techniques, and cultural impact.</li>
          <li><strong>Community & Collaboration:</strong> We encourage open discussions, debates, and shared experiences among movie lovers.</li>
          <li><strong>Creativity & Innovation:</strong> We aim to create a dynamic platform that continues to evolve with new ideas and insights.</li>
        </ul>
      </section>

      {/* What We Offer */}
      <section className="mb-8 p-6 rounded-lg w-full">
        <h2 className="text-2xl text-orange-500 border-b-2 border-orange-500 pb-2 mb-4">What We Offer</h2>
        <p>Our platform provides a range of resources for film enthusiasts, including:</p>
        <ul className="list-disc pl-6 leading-relaxed">
          <li><strong>Movie Reviews & Insights:</strong> Thoughtful analyses of classic and contemporary films.</li>
          <li><strong>Film History & Techniques:</strong> Educational content covering different film movements, directors, and cinematography styles.</li>
          <li><strong>Community Discussions:</strong> A space for movie lovers to share opinions, recommendations, and critiques.</li>
          <li><strong>Exclusive Features:</strong> Behind-the-scenes information, interviews, and breakdowns of famous movie scenes.</li>
        </ul>
      </section>

      {/* Our Vision */}
      <section className="mb-8 p-6 rounded-lg w-full">
        <h2 className="text-2xl text-orange-500 border-b-2 border-orange-500 pb-2 mb-4">Our Vision</h2>
        <p>
          We envision **Movie Haven** as a **global hub for film education and discussion**, accessible to anyone who wants to explore the world of cinema. We aim to **inspire the next generation of filmmakers, critics, and enthusiasts** by providing a platform that fosters curiosity, creativity, and knowledge-sharing.
        </p>
      </section>

      {/* Meet the Team */}
      <section className="mb-8 p-6 rounded-lg w-full">
        <h2 className="text-2xl text-orange-500 border-b-2 border-orange-500 pb-2 mb-4">Meet the Team</h2>
        <p>
          Our team consists of passionate students and film lovers who dedicate their time to curating content, researching film history, and engaging with the community. While we come from different backgrounds, we all share a **common love for storytelling and cinema**.
        </p>
      </section>

      {/* Future Goals */}
      <section className="mb-8 p-6 rounded-lg w-full">
        <h2 className="text-2xl text-orange-500 border-b-2 border-orange-500 pb-2 mb-4">Future Goals</h2>
        <p>
          While **Movie Haven** started as a college project, we have big dreams for its future. Our goals include:
        </p>
        <ul className="list-disc pl-6 leading-relaxed">
          <li>Expanding our **content library** with more film reviews, essays, and analyses.</li>
          <li>Introducing **guest contributions** from film scholars, critics, and filmmakers.</li>
          <li>Creating **interactive events and discussions** to bring movie lovers together.</li>
          <li>Developing **multimedia content** such as podcasts, video essays, and online courses.</li>
        </ul>
      </section>

      {/* Contact Information */}
      <section className="mb-8 p-6 rounded-lg w-full">
        <h2 className="text-2xl text-orange-500 border-b-2 border-orange-500 pb-2 mb-4">Contact Us</h2>
        <p>If you have any questions, suggestions, or just want to talk about movies, feel free to reach out!</p>
        <p>Email: <strong>support@moviehaven.com</strong></p>
        <p>Address: [Your College/University Address]</p>
      </section>


      <button
        className="bg-orange-500 text-white py-3 px-5 text-base rounded-full cursor-pointer transition-all duration-300 hover:bg-orange-600 active:scale-95 fixed right-6 bottom-6"
        onClick={scrollToTop}
      >
        ↑ 
      </button>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 mt-10">
        <p>Last Updated: [02/15/2025]</p>
      </footer>

    </div>
  );
};

export default AboutUs;
