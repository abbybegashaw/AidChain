// app/page.tsx
export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      {/* Navigation */}
      <nav className="border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between h-16 items-center">
            <div className="text-2xl font-bold text-black">AidChain</div>
            <div className="flex space-x-8">
              <a href="/login" className="text-black hover:text-blue-700">Login</a>
              <a href="/register" className="text-black hover:text-blue-700">Signup</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="py-24 text-center">
        <h1 className="text-6xl font-bold mb-6 text-black">Smart Contract Management</h1>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Create, manage, and execute contracts securely and efficiently
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700">
            Start Now
          </button>
          <button className="border border-gray-300 text-black px-8 py-3 rounded-lg font-medium hover:border-gray-400">
            Learn More
          </button>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2 text-black">Easy Contract Creation</h3>
            <p className="text-gray-600">Create and customize contracts using our intuitive templates and tools.</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2 text-black">Secure Signatures</h3>
            <p className="text-gray-600">Sign and verify contracts with advanced digital signature technology.</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2 text-black">Track & Manage</h3>
            <p className="text-gray-600">Monitor contract status, deadlines, and compliance in real-time.</p>
          </div>
        </div>
      </div>

      {/* Trust Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-black">Why Choose AidChain</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-2 text-blue-600">100%</div>
              <div className="text-gray-600">Secure</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2 text-blue-600">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2 text-blue-600">10K+</div>
              <div className="text-gray-600">Contracts Created</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2 text-blue-600">99.9%</div>
              <div className="text-gray-600">Uptime</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-4 text-black">Ready to Get Started?</h2>
        <p className="text-gray-600 mb-8">Join thousands of businesses managing their contracts with AidChain</p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700">
          Create Your First Contract
        </button>
      </div>
    </div>
  )
}