import React from "react";
import fee_img from "./assets/images/background/feedback-img.jpeg";
// import hero from "./assets/images/background/4.jpg";
import { useFormik } from "formik";
import * as Yup from "yup";
function Feedback() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      satisfaction: "",
      likedAspects: [],
      areasForImprovement: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      satisfaction: Yup.string().required("Please select a satisfaction level"),
      likedAspects: Yup.array().min(1, "Select at least one aspect"),
      areasForImprovement: Yup.string(),
    }),
    onSubmit: (values) => {
      Swal.fire({
      title: "Form Submitted!",
      text: "Thank you!",
      icon: "success"
    });
    },

  });
  
  return (
    <div>
      <div class="page-wrapper">
        {/*Page Title*/}
        <section className="page-title feed-back1">
          <div className="auto-container">
            <div className="inner-container clearfix">
              <div className="title-box">
                <h1>Feedback</h1>
                <span className="title">The Interior speak for themselves</span>
              </div>
              <ul className="bread-crumb clearfix">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>Feedback</li>
              </ul>
            </div>
          </div>
        </section>
        {/*End Page Title*/}
        {/* Feedback Section */}
        <div className="container mt-3"></div>

        <h1 className="mb-5">Design your Feedback!</h1>
        <div className="row">
          <div className="col-lg-6">
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-3">
                {/* Name */}
                <label className="form-label">Name</label>
                <div className="row mb-3">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First name"
                      aria-label="First name"
                      name="firstName"
                      onChange={formik.handleChange}
                      value={formik.values.firstName}
                    />
                    {formik.touched.firstName && formik.errors.firstName ? (
                      <div className="text-danger">
                        {formik.errors.firstName}
                      </div>
                    ) : null}
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last name"
                      aria-label="Last name"
                      name="lastName"
                      onChange={formik.handleChange}
                      value={formik.values.lastName}
                    />
                    {formik.touched.lastName && formik.errors.lastName ? (
                      <div className="text-danger">
                        {formik.errors.lastName}
                      </div>
                    ) : null}
                  </div>
                </div>

                {/* Email Address */}
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control mb-3"
                  id="exampleInputEmail1"
                  name="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-danger">{formik.errors.email}</div>
                ) : null}

                {/* Satisfaction Section */}
                <label className="form-label">
                  How satisfied are you with your interior design experience?
                </label>
                {["Satisfied", "Neutral", "Unsatisfied"].map((option) => (
                  <div className="form-check" key={option}>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="satisfaction"
                      value={option}
                      onChange={formik.handleChange}
                    />
                    <label className="form-check-label">{option}</label>
                  </div>
                ))}
                {formik.touched.satisfaction && formik.errors.satisfaction ? (
                  <div className="text-danger">
                    {formik.errors.satisfaction}
                  </div>
                ) : null}

                {/* Liked Aspects Section */}
                <label className="form-label">
                  What aspects of the design did you like the most?
                </label>
                {[
                  "Concept Development",
                  "Color Scheme",
                  "Furniture Selection",
                  "Space Utilization",
                  "Overall Aesthetic",
                ].map((aspect) => (
                  <div className="form-check" key={aspect}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value={aspect}
                      name="likedAspects"
                      onChange={formik.handleChange}
                    />
                    <label className="form-check-label">{aspect}</label>
                  </div>
                ))}
                {formik.touched.likedAspects && formik.errors.likedAspects ? (
                  <div className="text-danger">
                    {formik.errors.likedAspects}
                  </div>
                ) : null}

                {/* Areas for Improvement */}
                <label htmlFor="exampleDataList" className="form-label">
                  Were there any areas for improvement?
                </label>
                <input
                  className="form-control mb-3"
                  list="datalistOptions"
                  id="exampleDataList"
                  name="areasForImprovement"
                  onChange={formik.handleChange}
                  value={formik.values.areasForImprovement}
                />

                {/* Datalist Options */}
                <datalist id="datalistOptions">
                  <option value="Design concept clarity"></option>
                  <option value="Timeliness of project completion"></option>
                  <option value="Quality of materials used"></option>
                  <option value="Communication and updates during the project"></option>
                  <option value="Budget management"></option>
                </datalist>

                {/* Submit Button */}
                <button type="submit" className="btn mb-3 btn-style-one " >
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="col-lg-6">
            <img src={fee_img} alt className="img-fluid mb-3" />
            {/* section-4 */}
            <div className="col-lg-7 m-auto">
              <label className="form-label">
                Rate Your Experience with Us!
              </label>
              <span className="fa fa-star" />
              <span className="fa fa-star" />
              <span className="fa fa-star" />
              <span className="fa fa-star" />
              <span className="fa fa-star" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
