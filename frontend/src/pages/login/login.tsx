import { useState, FormEvent } from "react";

type props = {
  handleSubmit: (e: FormEvent<HTMLFormElement>, hideLogin: Boolean) => void;
};

function LoginAndRegister({ handleSubmit }: props) {
  const [hideLogin, setHideLogin] = useState<Boolean>(false);

  const showRegister = () => {
    if (hideLogin)
      return (
        <div>
          <label htmlFor="name" className="d-block">
            Name
          </label>
          <input type="text" name="name" id="name" className="rounded border" />
        </div>
      );
    return null;
  };

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission behavior
    handleSubmit(e, hideLogin); // Call the handleSubmit function passed as prop
  };

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 w-100">
      <section className="w-25 shadow bg-white rounded p-5">
        <h1 className="text-center pb-4">Please Login</h1>
        <form onSubmit={handleFormSubmit} className="d-flex flex-column gap-4">
          {showRegister()}
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
            {hideLogin ? "Register" : "Login"}
          </button>
          <div className={`${hideLogin ? "d-none" : "d-block"}`}>
            <button
              onClick={(e) => {
                e.preventDefault();
                setHideLogin(!hideLogin);
              }}
              className="border-0 bg-transparent mx-2 text-primary"
            >
              Register
            </button>
            <span>If not registered already!</span>
          </div>
        </form>
      </section>
    </div>
  );
}

export default LoginAndRegister;
