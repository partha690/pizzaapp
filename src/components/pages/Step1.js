import React, { useState , useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { chooseBase } from "../../store/pizza"
import Button from '../common/Button'

const Step1 = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const base = useSelector(state => state.pizzaReducer.base)
  const [input, changeInput] = useState(base)

  const onSubmit = () => {
    dispatch(chooseBase(input))
    history.push("./step2")
  }
  
 useEffect(()=>{
    // if (window.location.hash.indexOf('#n') === -1) {
    //   window.location.hash += '#n';
    //   window.location.reload();
    // }
    // dispatch(resetPizza())
 },[])

  return (
    <form>
    
      <div className="mb-3 col">
        <label htmlFor="base">Pick base:</label>
        <select className="form-select" id="base" name="base" onChange={(e) => changeInput(e.target.value)}>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </div>
      <Button onSubmit={onSubmit}>Next</Button>
    </form>
  )
}

export default Step1