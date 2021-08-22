import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Contact = () => {
  const history = useHistory();
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: ""
  });
  let name, value;
  const InputEvent = (event) => {
    name = event.target.name;
    value = event.target.value;

    setData({ ...data, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();
    const { fullname, phone, email, msg } = data;

    if (fullname && phone && email && msg) {
      const res = await fetch(
        "https://shashi-1de57-default-rtdb.firebaseio.com/contactform.json",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ fullname, phone, email, msg })
        }
      );
      if (res) {
        setData({
          fullname: "",
          phone: "",
          email: "",
          msg: ""
        });
        alert("Data Stored Successfully");
        history.push("/");
      }
    } else {
      alert("Please Fill all Fields");
    }
  };

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-10-md-6 col-10 max-auto">
            <form method="POST">
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  FullName{" "}
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                  placeholder="Enter Name"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Mobile Number{" "}
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                  placeholder="mobile number"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Email Address{" "}
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="name@exmple.com"
                  required
                  autocomplete="off"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  name="msg"
                  value={data.msg}
                  onChange={InputEvent}
                  rows="3"
                />
              </div>

              <div className="col-12">
                <button
                  className="btn btn-outline-primary"
                  type="sumbit"
                  onClick={postData}
                >
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
