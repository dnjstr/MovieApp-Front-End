const Account = () => {
  return (
    <section id="agreement" className="mb-16">
    <h2 className="text-2xl font-semibold mb-8 pb-2 border-b border-orange-800">User Agreement</h2>
    <div className="space-y-8">
      <div>
        <p className="text-gray-400 mb-4">By using Movie Haven, you agree to the following terms:</p>
        <ul className="space-y-4 text-gray-400">
          <li>You must be at least 13 years old to use this platform. If you are under 18, you must have parental or guardian consent to use this service.</li>
          <li>You agree not to engage in any illegal activities or violate any laws while using this platform.</li>
          <li>You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.</li>
          <li>You agree to provide accurate and complete information when creating an account on Movie Haven.</li>
        </ul>
      </div>
    </div>
  </section>
  );
};

export default Account;