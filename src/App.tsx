import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  const [count, setCount] = useState(0);
  let [text, setText] = useState("");
  let [list, setList] = useState<any>([]);

  let edit = (i: any, x: any) => {
    let alert1 = prompt("Edit the Task here", x);
    list[i] = alert1;
    setList([...list]);
  };

  let del = (i: any) => {
    list.splice(i, 1);
    setList([...list]);
  };

  let delAll = () => {
    list.splice(0);
    setList([...list]);
  };

  return (
    <>
      <div className="bg-black">
        <div className="container py-5 ">
          <div className="row justify-content-center">
            <div className="col-12 col-sm-12 col-md-12 col-lg-8">
              <div>
                <div
                  id="heading"
                  className="text-center text-white border border-2 border-white rounded d-flex justify-content-center align-items-center gap-5"
                >
                  <div className="py-5">
                    <div className="fw-bold h2">ToDo Done</div>
                    <div className="h6">Keep it Up</div>
                  </div>
                  <div
                    id="headingCircle"
                    className="d-flex align-items-center justify-content-center fw-bolder"
                  >
                    <span className="text-wrap px-2">Total Tasks {list.length}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center pt-5">
            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
              <div className="d-flex justify-content-between align-items-center gap-3">
                <input
                  required
                  type="text"
                  className="form-control"
                  placeholder="Write Your Task Here"
                  onChange={(b) => {
                    // a.target.value="";
                    if (b.target.value) {
                      setText(b.target.value);
                    } else {
                      alert({ text });
                    } //sir  yeh validationnai chal raha
                  }}
                />

                <div
                  className="btn  text-white text-center"
                  id="add"
                  onClick={() => {
                    list.push(text);
                    console.log(list);
                    setList([...list]);
                  }}
                >
                  +
                </div>
                <div>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => {
                      delAll();
                    }}
                  >
                    Delete ALL
                  </button>
                </div>
              </div>

              {list.map((x: any, i: any) => (
                <div className="rounded text-white border border-2 border-white text-center mt-5">
                  <div className="d-flex justify-content-between px-5 mt-2">
                    <p className="h3 fw-bold">Task {i + 1}</p>
                    <div>
                      {" "}
                      <button
                        className="btn btn-outline-success"
                        onClick={() => {
                          edit(i, x);
                        }}
                      >
                        Edit
                      </button>{" "}
                      <button
                        className="btn btn-outline-danger"
                        onClick={() => {
                          del(i);
                        }}
                      >
                        Del
                      </button>
                    </div>
                  </div>
                  <p className="p-2 mt-2 overflow-auto">{x}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
