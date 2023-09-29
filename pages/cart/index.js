import { age } from "./data"
import { list } from "../api/data"

export default function Cart(){
  console.log(list)

  return (
    <div>
      <h4 className="title">Cart</h4>
      {
        list.map((a, i) =>
          <CartItem name={ a } />
        )
      }
    </div>
  )
} 

function CartItem(props){
  return (
    <div className="cart-item">
      <p>{ props.name }</p>
      <p>$40</p>
      <p>1개</p>
      <p>{ age }</p>
    </div>
  )
}