export default function Navbar() {
  return (
    <nav className="w-100 bg-white d-flex justify-content-between p-3 px-4">
      <div className="fw-bold h5">Task manager</div>
      <div className="d-flex gap-4">
        <button className="border border-primary bg-primary text-white px-2 rounded-1 fw-bold">
          + Add Task
        </button>
        <button className="border border-white px-3 fw-bold">LOGOUT</button>
      </div>
    </nav>
  );
}
