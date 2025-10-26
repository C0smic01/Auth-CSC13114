import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to User Registration
        </h1>
        <p className="text-gray-600 mb-8">
          Create an account or sign in to get started
        </p>
        <div className="space-y-4">
          <Link
            to="/signup"
            className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200"
          >
            Sign Up
          </Link>
          <Link
            to="/login"
            className="block w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 rounded-lg transition duration-200"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
