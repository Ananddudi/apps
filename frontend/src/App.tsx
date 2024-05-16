import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import LoginAndRegister from "./pages/login/login";
import Task from "./pages/task/task";
import PrivateRoute from "./components/privateRoute";
import { toast } from "react-toastify";
import axios from "axios";
import { useState, FormEvent, useLayoutEffect } from "react";

type userdata = {
  status: String;
  user: { name: String };
};

function App() {
  const [auth, setAuth] = useState<Boolean>(true);
  const [newdata, setNewData] = useState<{ name: String }>({ name: "user" });

  const navigate = useNavigate();

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>,
    hideLogin: Boolean
  ) => {
    e.preventDefault();
    const formdata: FormData = new FormData(e.target as HTMLFormElement);
    const email: string | null = formdata.get("email") as string | null;
    const password: string | null = formdata.get("password") as string | null;
    const name: string | null = formdata.get("name") as string | null;

    const data = await axios.post(
      hideLogin ? "/api/register" : "/api/login",
      {
        name,
        email,
        password,
      },
      {
        withCredentials: true, // Include this to send cookies
      }
    );

    if (data.data.includes("E11000 duplicate key error collection")) {
      toast.error("Already registered!");
    } else {
      setAuth(false);
      navigate("/task");
    }
  };

  useLayoutEffect(() => {
    const handleAuth = async () => {
      const newdata: { data: userdata } = await axios.get("/api/auth");
      if (newdata?.data?.status == "success") {
        console.log(newdata);
        setAuth(false);
        setNewData({ name: newdata.data.user.name });
        navigate("/task");
      }
    };
    handleAuth();
  }, []);
  return (
    <Routes>
      <Route
        path="/"
        element={<LoginAndRegister handleSubmit={handleSubmit} />}
      />
      <Route
        path="/task"
        element={
          <PrivateRoute auth={auth}>
            <Task newdata={newdata} />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;
