import Image from "next/image"
import { list } from "./api/data"
import { useState } from "react"

export default function List() {
    let 상품 = ['Tomatoes', 'Pasta', 'Coconut']
    let [수량, 수량변경] = useState([0, 0, 0])

    return (
      <div>
        <h4 className="title">상품목록</h4>
        {
            list.map((a, i) => 
              <div className="food" key={ i }>
                <img src={`/food${ i }.png`} className="food-img"/>
                <h4>{ a } 40$</h4>
                <span>{ 수량[i] }</span>
                <button onClick={() => {
                  let copy = [...수량]
                  copy[i] = copy[i] + 1
                  수량변경(copy)
                }}>+</button>
                <button onClick={() => {
                   let copy = [...수량]
                   copy[i] = copy[i] - 1
                   수량변경(copy)
                }}>-</button>
              </div>
            )
        }
      </div>
    )
  }