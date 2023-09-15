import { useState, useEffect, useCallback } from "react";

const Problem1 = () => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [showFilter, setShowFilter] = useState("all");

  const handleNameChange = useCallback((e) => {
    setName(e.target.value);
  }, []);

  const handleStatusChange = useCallback((e) => {
    setStatus(e.target.value);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "" || status.trim() === "") return;

    setTodos((prevTodos) => [...prevTodos, { name, status }]);
    setName("");
    setStatus("");
  };

  useEffect(() => {
    const filtered = todos.filter((item) => {
      if (showFilter === "all") return true;
      return item.status.toLowerCase() === showFilter;
    });
    setFilteredTodos(filtered);
  }, [todos, showFilter]);

  const tabs = ["All", "Active", "Completed"];

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-1</h4>
        <div className="col-6">
          <form
            onSubmit={handleSubmit}
            className="row gy-2 gx-3 align-items-center mb-4"
          >
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                value={name}
                onChange={handleNameChange}
              />
            </div>
            <div className="col-auto">
              <input
                type="text"
                className="form-control"
                placeholder="Status"
                value={status}
                onChange={handleStatusChange}
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col-8">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            {tabs.map((title, index) => (
              <li key={index} className="nav-item mx-2">
                <button
                  className={`nav-link ${
                    showFilter === title.toLowerCase() ? "active" : ""
                  }`}
                  type="button"
                  onClick={() => setShowFilter(title.toLowerCase())}
                >
                  {title}
                </button>
              </li>
            ))}
          </ul>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredTodos.map((todo, index) => (
                <tr key={index}>
                  <td>{todo.name}</td>
                  <td>{todo.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Problem1;
