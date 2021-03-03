import React, {useState} from "react";


const Contact = () =>{
  const [data, setData] = useState({
    fullname: '',
    phone: '',
    email: '',
    msg: '',
  });

  const InputEvent = (event) =>{
    const {name, value } = event.target;

    setData((preVal) =>{
      return{
        ...preVal,
        [name] : value,
      }
    })
  }

  const formSubmit = (e) =>{
    e.preventDefault();
    alert(`My name is ${data.fullname}. My Mobile number is ${data.phone} and my email is ${data.email}. Here is what I wanna to say ${data.msg}`);
  };
  return(
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div classNamne="container contact_div">
        <div className="row">
        <div className="col-md-6 col-10 mx-auto">
          <form onSubmit={formSubmit}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                <input type="text" class="form-control" id="exampleFormControlInput1"
                name="fullname"
                value={data.fullname}
                onChange={InputEvent}
                placeholder="Enter YourFull Name" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Mobile No.</label>
                <input type="number" class="form-control" id="exampleFormControlInput1"
                name="phone"
                value={data.phone}
                onChange={InputEvent}
                placeholder="Enter your mobile number" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1"
                name="email"
                value={data.email}
                onChange={InputEvent}
                placeholder="Enter your email" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                <textarea class="form-control" id="exampleFormControlTextarea1"
                name="msg"
                value={data.msg}
                onChange={InputEvent}
                rows="3">Type your messages.................</textarea>
              </div>

              <div class="col-12">
                <button class="btn btn-outline-primary" type="submit">
                  Submit
                </button>
              </div> <br /><br />
            </form>
        </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
