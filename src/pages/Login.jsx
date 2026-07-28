import Navbar from "../components/Navbar";

function Login() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#0b0b0f] flex justify-center items-center px-6">
        <div className="bg-[#16161d] p-8 rounded-3xl w-full max-w-md border border-yellow-500/20">

          <h1 className="text-4xl font-bold text-yellow-400 text-center mb-6">
            Welcome 
          </h1>

          <p className="text-gray-400 text-center mb-8">
            Login to manage your bookings and events
          </p>

          <form className="space-y-5">

            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-[#0b0b0f] border border-gray-700 p-3 rounded-xl text-white outline-none"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full bg-[#0b0b0f] border border-gray-700 p-3 rounded-xl text-white outline-none"
            />

            <button
              type="submit"
              className="w-full bg-yellow-500 text-black py-3 rounded-full font-bold hover:bg-yellow-400"
            >
              Login
            </button>

          </form>

          <p className="text-center text-gray-400 mt-6">
            Don't have an account?{" "}
            <span className="text-yellow-400 cursor-pointer">
              Register
            </span>
          </p>

        </div>
      </div>
    </>
  );
}

export default Login;