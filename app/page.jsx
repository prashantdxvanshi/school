

export default function Home() {
  return (
  <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a]">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
          School Management Dashboard
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
          <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl transition duration-300 flex flex-col items-center">
            <div className="w-16 h-16 bg-gradient-to-r  from-pink-500 to-purple-500 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" 
                   fill="none" 
                   viewBox="0 0 24 24" 
                   strokeWidth={2} 
                   stroke="currentColor" 
                   className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-3">
              Add Your School
            </h2>
            <p className="text-gray-500 text-center mb-6">
              Easily add your school to our database with essential details.
            </p>
            <a href="/addSchool"
              className="px-6 py-3 bg-gradient-to-r  from-pink-500 to-purple-500 text-white font-semibold shadow-lg hover:shadow-2xl transform hover:scale-[1.03] transition-all duration-500 rounded-lg">
              Add Now
            </a>
          </div>

         
          <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-2xl transition duration-300 flex flex-col items-center">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" 
                   fill="none" 
                   viewBox="0 0 24 24" 
                   strokeWidth={2} 
                   stroke="currentColor" 
                   className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h18M3 12h18M3 17h18" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-3">
              Show All Schools
            </h2>
            <p className="text-gray-500 text-center mb-6">
              Browse all registered schools with detailed information.
            </p>
            <a href="/showSchool"
              className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300">
              View Schools
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
