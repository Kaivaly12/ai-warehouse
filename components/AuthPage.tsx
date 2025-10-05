
import React, { useState } from 'react';

interface AuthPageProps {
  onLogin: () => void;
}

const AuthPage: React.FC<AuthPageProps> = ({ onLogin }) => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(https://picsum.photos/seed/warehouse/1920/1080)' }}>
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      <div className="relative z-10 w-full max-w-md p-8 space-y-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-lg">
        <div>
          <h2 className="text-3xl font-extrabold text-center text-white flex items-center justify-center">
            <span className="text-4xl mr-3">🤖</span> AI Warehouse Bot Manager
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
          <div className="rounded-md shadow-sm -space-y-px">
            {isSignUp && (
              <div>
                <label htmlFor="warehouse-name" className="sr-only">Warehouse Name</label>
                <input id="warehouse-name" name="warehouse-name" type="text" required
                  className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 bg-gray-700/50 text-white placeholder-gray-400 focus:outline-none focus:ring-electric-blue-500 focus:border-electric-blue-500 focus:z-10 sm:text-sm rounded-t-md"
                  placeholder="Warehouse Name"
                />
              </div>
            )}
            <div>
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input id="email-address" name="email" type="email" autoComplete="email" required
                className={`appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 bg-gray-700/50 text-white placeholder-gray-400 focus:outline-none focus:ring-electric-blue-500 focus:border-electric-blue-500 focus:z-10 sm:text-sm ${isSignUp ? '' : 'rounded-t-md'}`}
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input id="password" name="password" type="password" autoComplete="current-password" required
                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 bg-gray-700/50 text-white placeholder-gray-400 focus:outline-none focus:ring-electric-blue-500 focus:border-electric-blue-500 focus:z-10 sm:text-sm rounded-b-md"
                placeholder="Password"
              />
            </div>
          </div>

          <div>
            <button type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-electric-blue-600 hover:bg-electric-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-electric-blue-500"
            >
              {isSignUp ? 'Sign Up' : 'Sign In'}
            </button>
          </div>
        </form>
        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-500"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-dark-secondary text-gray-400">Or continue with</span>
          </div>
        </div>
        <div>
          <button
            onClick={onLogin}
            className="group relative w-full flex justify-center py-3 px-4 border border-gray-400 text-sm font-medium rounded-md text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-secondary focus:ring-white">
            <img className="w-5 h-5 mr-2" src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google logo"/>
            Sign In with Google
          </button>
        </div>
        <p className="mt-2 text-center text-sm text-gray-400">
          {isSignUp ? 'Already have an account?' : 'Don’t have an account?'}
          <a href="#" onClick={(e) => { e.preventDefault(); setIsSignUp(!isSignUp); }} className="font-medium text-electric-blue-400 hover:text-electric-blue-300">
            {isSignUp ? ' Sign In' : ' Sign Up'}
          </a>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
