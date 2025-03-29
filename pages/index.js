import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <section className="text-center py-16 bg-white">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-4">Welcome to LexisIntel</h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          Monitor lawsuits. Score your legal exposure. Stay protected.
        </p>
        <a
          href="/signup"
          className="mt-6 inline-block bg-blue-700 text-white px-6 py-3 rounded hover:bg-blue-800"
        >
          Get Started
        </a>
      </section>

      <section className="py-12 bg-gray-50 text-center">
        <p className="text-gray-500 uppercase tracking-wide text-sm mb-6">
          Trusted by forward-thinking companies
        </p>
        <div className="flex justify-center space-x-8">
          <span className="text-lg font-semibold text-gray-600">Company A</span>
          <span className="text-lg font-semibold text-gray-600">Company B</span>
          <span className="text-lg font-semibold text-gray-600">Company C</span>
        </div>
      </section>

      <section className="py-16 bg-white text-center">
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Example Alerts</h2>
        <p className="text-gray-600 mb-6">Visual preview of real-time litigation alerts</p>
        <div className="bg-gray-100 p-6 rounded shadow inline-block text-left">
          <p className="font-bold">[CASE] California vs Privacy Co.</p>
          <p className="text-sm text-gray-600">Filed March 2025 • ADA Compliance Violation</p>
        </div>
      </section>

      <section className="py-20 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-6">Why LexisIntel?</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-left">
          <div>
            <h3 className="font-semibold text-lg mb-2">Litigation Trend Insights</h3>
            <p className="text-gray-600">
              Stay ahead of changes in your industry’s legal landscape.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Exposure Score</h3>
            <p className="text-gray-600">
              Know your legal risk level in real time, so you can take action.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">AI Monitoring</h3>
            <p className="text-gray-600">
              Let smart algorithms track lawsuits and generate alerts for you.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white text-center">
        <h2 className="text-2xl font-bold text-blue-800 mb-2">
          75% of websites are non-compliant
        </h2>
        <p className="text-gray-600 mb-6">
          And legal costs average <strong>$91,000</strong> per case.
        </p>
        <a
          href="/exposure"
          className="bg-blue-700 text-white px-6 py-3 rounded hover:bg-blue-800"
        >
          See Your Risk
        </a>
      </section>
    </Layout>
  );
}