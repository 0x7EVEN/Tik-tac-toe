import {useState} from "react";
import {v4 as uuid} from "uuid";
export default function Tiktak ({value,handleMove,start,arr,handleStart}) {

     return (
          <>
               <h3>Next move : {value ? "X" : "O"}</h3>
               <button onClick={handleStart}>Reset</button>
          <div className="mainDiv">
          {arr.map((el,i) => {
               return (<>
                    {el.map((tile, j) => <div onClick={() => handleMove(i, j)} key={uuid()} id={[i, j]} className="tile"> {start ? "" :arr[i][j] } </div>)}
               </>)
          })}
          </div>

          </>
     )
}