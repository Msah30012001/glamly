import React, { useState, useEffect } from "react";
import { fetchSingleUser } from "../../redux/async/user.async";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../redux/async/user.async";

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [Profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    dob: "",
  });

  const inputProfile = (e) => {
    const { name, value } = e.target;
    setProfile((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };
  useEffect(() => {
    dispatch(fetchSingleUser());
  }, []);

  useEffect(() => {
    if (user.data.length) {
      const dob = new Date(Date.parse(user.data[0].dob));
      const year = dob.getFullYear();
      const month = dob.getMonth() + 1; // Adding 1 to the zero-based index to get the actual month
      const day = dob.getDate();
  
      const formattedDate = `${year}-${month.toString().padStart(2, "0")}-${day
        .toString()
        .padStart(2, "0")}`;
      setProfile({
        name: user.data[0].name,
        email: user.data[0].email,
        phone: user.data[0].phone,
        gender: user.data[0].gender,
        dob: formattedDate,
      });
    }
  }, [user]);
console.log(Profile)
  return (
    <>
      <div id="profile" className="modal fade" tabIndex="-1">
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Profile
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body register-form-content">
              <form className="register-form">
                <div className="row justify-content-center">
                  <div className="col-sm-6">
                    <fieldset>
                      <legend>Profile</legend>
                      <div className="form-group row">
                        <label className="col-md-3">Name</label>
                        <div className="col-md-6">
                          <input
                            className="form-control"
                            type="text"
                            name="name"
                            value={Profile.name}
                            onChange={inputProfile}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-md-3">Email</label>
                        <div className="col-md-6">
                          <input
                            className="form-control"
                            type="text"
                            name="email"
                            value={Profile.email}
                            onChange={inputProfile}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-md-3">Phone</label>
                        <div className="col-md-6">
                          <input
                            className="form-control"
                            type="text"
                            name="phone"
                            value={Profile.phone}
                            onChange={inputProfile}
                          />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-md-3">Gender</label>
                        <div className="col-md-6">
                          <select
                            className="form-control"
                            name="gender"
                            value={Profile.gender}
                            onChange={inputProfile}
                          >
                            <option value="M">Male</option>
                            <option value="F">Female</option>
                            <option value="O">Other</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-md-3">Date of Birth</label>
                        <div className="col-md-6">
                          <input
                            className="form-control"
                            type="date"
                            name="dob"
                            value={Profile.dob}
                            onChange={inputProfile}
                          />
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={(e) => {
                          e.preventDefault();
                          dispatch(updateUser("", Profile));
                        }}
                      >
                        Save
                      </button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
