import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { chooseName, chooseAddress, choosePhoneNo, chooseEmail } from "../../store/user";
import Button from "../common/Button";

const User = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const name = useSelector((state) => state.userReducer.name);
  const address = useSelector((state) => state.userReducer.address);
  const phoneNo = useSelector((state) => state.userReducer.phoneNo);
  const email = useSelector((state) => state.userReducer.email);

  const [myName, setMyName] = useState(name);
  const [myAddress, setMyAddress] = useState(address);
  const [myPhone, setMyPhone] = useState(phoneNo);
  const [myEmail, setMyEmail] = useState(email);

  const onSubmit = () => {
    dispatch(chooseName(myName));
    dispatch(chooseAddress(myAddress));
    dispatch(choosePhoneNo(myPhone));
    dispatch(chooseEmail(myEmail));
    history.push("./result");
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="mb-3 col">
        <label htmlFor="userName" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="myName"
          placeholder="Enter your name"
          onChange={(e) => setMyName(e.target.value)}
          value={myName}
        />
      </div>

      <div className="mb-3 col">
        <label htmlFor="userAddress" className="form-labe1">
          Address
        </label>
        <input
          type="text"
          className="form-control"
          id="myAddress"
          placeholder="Enter your address"
          onChange={(e) => setMyAddress(e.target.value)}
          value={myAddress}
        />
      </div>

      <div className="mb-3 col">
        <label htmlFor="userPhoneNo" className="form-label">
          Phone No
        </label>
        <input
          type="tel"
          className="form-control"
          id="myPhoneNo"
          maxLength={10}
          minLength={10}
          placeholder="Enter your phone no."
          onChange={(e) => setMyPhone(e.target.value)}
          value={myPhone}
        />
      </div>

      <div className="mb-3 col">
        <label htmlFor="myEmail" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="myEmail"
          placeholder="Enter your email"
          onChange={(e) => setMyEmail(e.target.value)}
          value={myEmail}
        />
      </div>
<br></br>
      <Button onSubmit={onSubmit}>Next</Button>
    </form>
  );
};

export default User;
