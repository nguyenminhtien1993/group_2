import { React, useEffect,useState } from "react";
import "../Form_Feedback/Form_Feedback.css";
import AOS from "aos";
import "aos/dist/aos.css";

function Form_Feedback() {
  // animate css

  // animation
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  // end animation
  var select1_hide_label = () => {
    document.getElementById("exampleFormControlSelect2").disabled= "disabled";
    const select1=document.getElementById("exampleFormControlSelect1");
    select1.disabled= "";
    
    
  };
  var select2_hide_label = () => {
    const select2=document.getElementById("exampleFormControlSelect2");
    select2.disabled= "";
    document.getElementById("exampleFormControlSelect1").disabled= "disabled";
    
  };
  var selectbook_hide_label = () => {
    const select2=document.getElementById("exampleFormControlSelect2");
    select2.disabled= "disabled";
    document.getElementById("exampleFormControlSelect1").disabled= "disabled";
   
  };


  var [datafeedback, setDatafeedback] = useState({
    firstname: "",
    lastname: "",
    email: "",
    exampleFormControlTextarea1:"",
  });
  var [error_feedback,setError_feedback]=useState({
    firstname: "",
    lastname: "",
    email: "",
    exampleFormControlTextarea1:"",
  });
  var handleChange_feedback = (event) => {
    var { name, value } = event.target;
    setDatafeedback({ ...datafeedback, [name]: value });
  };
  var handleSubmitfeedback =(event)=>{
    event.preventDefault();
    var isvalid = true;
    var form_error_feedback={...error_feedback};
    var email = document.getElementById("email").value;
    if (datafeedback.firstname.trim()===""){
      alert("Firstname is required");
      isvalid=false;
      return isvalid;
    }
    else{
      form_error_feedback.firstname="";
    }
    if (datafeedback.lastname.trim()===""){
      alert("Lastname is required");
      isvalid=false;
      return isvalid;
    }
    else{
      form_error_feedback.lastname="";
    }
    var ckemail = /^[a-zA-Z_0-9]{4}@[a-z0-9]{5}\.[a-z]{3}$/;
    if (!ckemail.test(email)) {
      alert("Email have formated: xxxx@xxxx.com");
      form_error_feedback.email="invalid Email address format";
      isvalid=false;
      return isvalid;
    }
    else{
      form_error_feedback.email="";
    }
    if(datafeedback.exampleFormControlTextarea1.trim()===""){
      alert("Meassage is required");
      isvalid=false;
      return isvalid;
    }
    else{
      form_error_feedback.exampleFormControlTextarea1="";
    }
    
    if (  document.getElementById("kids").checked===false)
    {
      if ( document.getElementById("adult").checked===false ){
        if ( document.getElementById("guide-book").checked===false){
          alert("Type title feeback");
          isvalid=false;
          return isvalid;
        }
      }
    }
     
   
    
    if(isvalid){
      alert("success !");
    }
    setError_feedback(form_error_feedback);
    return isvalid;
  }
  return (
    <div>
      <div className="fb-container" data-aos="flip-up">
        <div className="row">
          <div className="col-12 col-md-12">
            <h1>The Origami Feedback Form</h1>
          </div>
          <div className="col-12 col-md-12">
            <form action="" onSubmit={handleSubmitfeedback}>
              <h3 className="fb-label">Fullname</h3>
              <div className="fb-fullname">
                <input
                  type="text"
                  name="firstname"
                  id="firstname"
                  placeholder="First name"
                  onChange={handleChange_feedback}
                />
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  placeholder="Lastname"
                  onChange={handleChange_feedback}
                />
              </div>
              <h3 className="fb-label">Email address</h3>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email address"
                onChange={handleChange_feedback}
              />
              <h3 className="fb-label">
                <b>Type title feeback</b>
              </h3>
              <div className="fb-type-origami">
                <div>
                  <input
                    type="radio"
                    name="kids_adult"
                    id="kids"
                    onClick={select1_hide_label}
                    value={0}
                  />
                  For Kids
                </div>
                <div>
                  <input type="radio" name="kids_adult" id="adult" value={0} onClick={select2_hide_label}/> For Adult
                </div>
                <div>
                  <input type="radio" name="kids_adult" id="guide-book" value={0} onClick={selectbook_hide_label}/> guide
                  origami book
                </div>
                <select className="form-control" id="exampleFormControlSelect1">
                  <option>Please choose.... </option>
                  <option>Decorative OC2</option>
                  <option>Dollar Bill RB</option>
                  <option>Dollar Bill Shirt</option>
                  <option>Flying Origami</option>
                  <option>Instant Party PL</option>
                  <option>open cube modular </option>
                  <option>origami bracelet</option>
                  <option>Origami Diamond</option>
                  <option>Origami Dog</option>
                  <option>origami for beginner</option>
                  <option>origami paper boewtie</option>
                  <option>Origami Post-it Box</option>
                  <option>Origami Sycee</option>
                  <option>Origami Tall SH</option>
                </select>
                <select className="form-control" id="exampleFormControlSelect2">
                  <option value="">Please choose...</option>
                  <option>Guy Fawkes Mask </option>
                  <option> Fold a Paper Flower</option>
                  <option> Fold an OD</option>
                  <option>Modular Origami Earrings</option>
                  <option>Origami Ball - Kusudame</option>
                  <option>Origami Dollar Flower</option>
                  <option>Origami Egg</option>
                  <option>Origami Rabbit</option>
                  <option>Origami Rose</option>
                  <option>Paper Ball Ornaments </option>
                  <option>Post-It Origami ICH</option>
                  <option>origami rubbit</option>
                  <option>Unit Origami</option>
                </select>

                <div></div>
              </div>

              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Criteria</th>
                    <th scope="col">Very good</th>
                    <th scope="col">Good</th>
                    <th scope="col">Fair</th>
                    <th scope="col">Poor</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Video</th>
                    <td>
                      <input type="radio" name="video" id="video" />
                    </td>
                    <td>
                      <input type="radio" name="video" id="video" />
                    </td>
                    <td>
                      <input type="radio" name="video" id="video" />
                    </td>
                    <td>
                      <input type="radio" name="video" id="video" />
                    </td>
                  </tr>

                  <tr>
                    <th scope="row">Content</th>
                    <td>
                      <input type="radio" name="content" id="content" />
                    </td>
                    <td>
                      <input type="radio" name="content" id="content" />
                    </td>
                    <td>
                      <input type="radio" name="content" id="content" />
                    </td>
                    <td>
                      <input type="radio" name="content" id="content" />
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Image</th>
                    <td>
                      <input type="radio" name="img" id="img" />
                    </td>
                    <td>
                      <input type="radio" name="img" id="img" />
                    </td>
                    <td>
                      <input type="radio" name="img" id="img" />
                    </td>
                    <td>
                      <input type="radio" name="img" id="img" />
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="form-group">
                <label for="exampleFormControlTextarea1">
                  <b>Suggestion or Comment</b>
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  name="exampleFormControlTextarea1"
                  rows="5"
                  placeholder="content"
                  cols="auto"
                  onChange={handleChange_feedback}
                ></textarea>
              </div>
              <div class="d-grid gap-2 d-md-block">
                <button type="submit" className="btn btn-primary button">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form_Feedback;
