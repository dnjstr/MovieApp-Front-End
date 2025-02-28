const Social = () => {
    return (
        
        <section id="social" className="mb-16">
        <h2 className="text-2xl font-semibold mb-8 pb-2 border-b border-orange-800">Connect With Us</h2>
        
        <div className="space-y-8">
          <div>
            <p className="text-gray-400">
              Follow us on social media to stay updated with our latest content and discussions! Our social 
              channels are not just announcement platforms—they're extensions of our community where we share 
              exclusive content, host live discussions with filmmakers, and highlight exceptional contributions 
              from community members.
            </p>
            <p className="text-gray-400 mt-4">
              Each of our social platforms offers a slightly different focus: Twitter features quick film insights 
              and industry news; Instagram showcases visually striking moments in cinema with thoughtful analysis; 
              Facebook hosts our most in-depth discussions and event announcements; and YouTube offers video essays, 
              interviews, and collaborative content with filmmakers and critics.
            </p>
            <ul className="list-disc pl-6 mt-4 text-gray-400">
              <li>
                <strong>Twitter:</strong> <a href="https://twitter.com" className="text-blue-400">twitter.com/moviehaven</a> 
                — Daily updates, quick polls, and conversation starters about current cinema trends
              </li>
              <li>
                <strong>Instagram:</strong> <a href="https://instagram.com" className="text-pink-400">instagram.com/moviehaven</a> 
                — Visual explorations of cinematography, iconic scenes, and behind-the-scenes moments
              </li>
              <li>
                <strong>Facebook:</strong> <a href="https://facebook.com" className="text-blue-500">facebook.com/moviehaven</a> 
                — In-depth articles, community discussions, and event announcements
              </li>
              <li>
                <strong>YouTube:</strong> <a href="https://youtube.com" className="text-red-500">youtube.com/moviehaven</a> 
                — Video essays, filmmaker interviews, and analysis of significant works and movements
              </li>
            </ul>
            <p className="text-gray-400 mt-4">
              We also host monthly live events across our social platforms, including director Q&As, 
              watch parties for classic films, and panel discussions on cinema trends. Follow us to 
              receive notifications about upcoming events and opportunities to participate.
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default Social;