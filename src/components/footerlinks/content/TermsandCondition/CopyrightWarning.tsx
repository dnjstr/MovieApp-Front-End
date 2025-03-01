const Account = () => {
  return (
    <section id="copyright-warning" className="mb-16">
    <h2 className="text-2xl font-semibold mb-8 pb-2 border-b border-orange-800">Copyright Warning</h2>
    <div className="space-y-8">
      <div className="bg-red-900/20 border border-red-500/50 rounded-lg p-6">
        <p className="text-gray-400">
          <strong className="text-red-400">IMPORTANT NOTICE:</strong> The images and content used in this project 
          are for educational and non-commercial purposes only. As students developing a movie-related application 
          for academic purposes, we may use copyrighted materials as placeholders. These materials belong to their 
          respective copyright owners, and we do not claim any ownership or rights over them.
        </p>
        <p className="text-gray-400 mt-4">
          This project is not intended for public distribution or commercial use. If you are a copyright owner and have 
          concerns about any content used, please contact us at <strong>[codercyril143@gmail.com]</strong>, and we will address the issue.
        </p>
        <p className="text-gray-400 mt-4">
          Thank you for your understanding and support as we work on this educational project. We appreciate the creativity 
          and effort of original content creators and respect their rights. 
        </p>
      </div>
    </div>
  </section>
  );
};

export default Account;