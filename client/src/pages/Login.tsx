import { Link } from 'react-router-dom';

const Register: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="w-full max-w-md p-8 space-y-6 shadow-xl rounded-2xl bg-white">
        <h1 className="text-3xl font-bold text-center text-primary">Login</h1>
        <form className="space-y-4">

          <input
            type="text"
            placeholder="Username"
            className="input input-bordered w-full"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full"
            required
          />
 


          <button type="submit" className="btn btn-primary w-full">
           Register
          </button>

          <div className="text-center">
            <p className="text-sm">
              Already have an account?{' '}
              <Link to="/register" className="text-blue-500 hover:underline">
                register
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
