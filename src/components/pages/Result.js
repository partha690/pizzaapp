import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { resetPizza } from "../../store/pizza";
import { resetUser } from "../../store/user";
// import { useEffect } from "react";
// import { History } from "history";

const Result = () => {
  const pizzaState = useSelector((state) => state.pizzaReducer);
  const userState = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  // const history = useHistory()
  // useEffect(()=>{
  //   return () => {
  //     history.go(0);
  //   }
  // },[])

  const onReset = (e) => {
    dispatch(resetPizza())
    dispatch(resetUser())
  };

  return (
    <>
      <div className="row">
      <div className="col">
      <h3>User Details: </h3>
      <pre>{JSON.stringify(userState, null, 20)}</pre>
      </div> 
      <div className="col">
      <h5>Pizza Preference: </h5>
      <pre>{JSON.stringify(pizzaState, null, 2)}</pre></div>
      </div>

      <Link to="/" className="btn btn-link row text-end" onClick={(e)=>onReset(e)}>
       ORDER AGAIN
      </Link>
    </>
  );
};

export default Result;
