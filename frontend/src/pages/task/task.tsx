import Navbar from "../../components/navbar";
import Taskcard from "../../components/taskcard";

function Task() {
  return (
    <>
      <Navbar />
      <main className="mx-5 px-5 p-4">
        <h4 className="border-bottom border-dark w-100">
          <span className="my-2 d-block">welcome (username)</span>
        </h4>
        <div className="bg-white rounded p-3 m-5">
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
