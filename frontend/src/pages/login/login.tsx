import axios from "axios";

function Login() {
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formdata: FormData = new FormData(e.target);
    const email: string | null = formdata.get("email") as string | null;
    const password: string | null = formdata.get("password") as string | null;

    const data = await axios.post(
      "/api/login",
      {
        email,
        password,
      },
      {
        withCredentials: true, // Include this to send cookies
      }
    );
    console.log("data", data.data);
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 w-100">
      <section className="w-25 shadow bg-white rounded p-5">
        <h1 className="text-center pb-4">Please Login</h1>
        <form onSubmit={handleSubmit} className="d-flex flex-column gap-4">
          <div>
            <label htmlFor="email" className="d-block">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="eamil"
              className="rounded border"
            />
          </div>
          <div>
            <label htmlFor="password" className="d-block">
              Password
            </label>
            <input
              type="password"
              className="rounded border"
              name="password"
              id="password"
            />
          </div>
          <button
            type="submit"
            className="border bg-transparent p-1 border-info rounded"
          >
            Login
          </button>
        </form>
      </section>
    </div>
  );
}

export default Login;
