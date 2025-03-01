const Account = () => {
  return (
    <section id="limitation" className="mb-16">
    <h2 className="text-2xl font-semibold mb-8 pb-2 border-b border-orange-800">Limitation of Liability</h2>
    <div className="space-y-8">
      <div>
        <p className="text-gray-400">
        To the fullest extent permitted by law, we shall not be liable for any direct, indirect, incidental, consequential, 
        special, or punitive damages that arise from the use or inability to use our services, even if we have been advised of the possibility of such damages. 
        </p>
        <p className="text-gray-400 mt-4">
        This includes, but is not limited to, loss of profits, data corruption, service interruptions, security breaches, 
        unauthorized access, or any other consequences resulting from the use of our platform. In cases where liability cannot 
        be fully excluded, our total liability shall not exceed the amount paid by the user, if any, for accessing our services. 
        By using our platform, users acknowledge and agree to these limitations.
        </p>
      </div>
    </div>
  </section>
  );
};

export default Account;