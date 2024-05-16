import { useEffect, useState } from "react";
import Navbar from "../../components/navbar";
import Taskcard from "../../components/taskcard";
import axios from "axios";

type newData = {
  newdata: {
    name: String;
  };
};

function Task({ newdata }: newData) {
  const [data, setData] = useState<[]>([]);

  const handleData = async () => {
    const data = await axios.get("/api/getall");
    console.log("data", data.data);
  };

  useEffect(() => {
    handleData();
  }, []);
  return (
    <>
      <Navbar />
      <main className="mx-5 px-5 p-4 d-flex justify-content-center flex-column">
        <h4 className="border-bottom border-dark w-100">
          <span className="my-2 d-block">welcome {newdata.name}</span>
        </h4>
        <div className="bg-white rounded p-3 m-5 w-50">
          <div>
            <h3 className="text-center py-2">Your tasks(3)</h3>
            <Taskcard />
          </div>
        </div>
      </main>
    </>
  );
}

export default Task;
