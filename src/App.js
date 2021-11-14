import {useState} from 'react';
import './App.css';
import Tiktak from './components/Tik-tak';
function App () {
  function handleStart () {
    setArr([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""]
    ]);
    setStart(true);
  }
  function checker (arr) {
    var flag = false;
    for (let i = 0; i < 3; i++) {
      const row = [];
      const col = [];
      const digonal = [];
      const digonalrev = [];
      for (let j = 0; j < 3; j++) {
        if (arr[i][j] == "") {
          flag = true;
        }
        row.push(arr[i][j]);
        col.push(arr[j][i]);
        digonal.push(arr[j][j]);
        digonalrev.push(arr[2 - j][j]);
      }
      if (row.every(el => el != "")) {
        if (row.every(el => el == row[0])) {
          return row[0];
        }
      }

      if (col.every(el => el != "")) {
        if (col.every(el => el == col[0])) {
          return col[0];
        }
      }
      if (digonal.every(el => el != "")) {
        if (digonal.every(el => el == digonal[0])) {
          return digonal[0];
        }
      }
      if (digonalrev.every(el => el != "")) {
        if (digonalrev.every(el => el == digonalrev[0])) {
          return digonalrev[0];
        }
      }

    } if (!flag) {
      return "None";
    } return false;
  }
  const [value, setValue] = useState(true);
  const [start, setStart] = useState(true);
  const [arr, setArr] = useState(
    [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""]
    ]);
  function handleMove (i, j) {
    let str = value ? "X" : "O";
    console.log('str:', i, j);
    if (arr[i][j] != "") {
      return;
    }
    arr[i][j] = `${str}`;
    console.log('arr:', arr);
    const winner = checker(arr);
    if (winner == "None") {
      alert("Draw !");
      handleStart();
    } else if (winner) {
      alert(`Winner is ${winner}`);
      handleStart();
    } else {
      setArr(arr);
      setStart(false);
    }
    setValue(!value);
  }
  return (
    <div className="App">
      <Tiktak arr={arr} value={value} handleStart={handleStart} handleMove={handleMove} start={start} />
    </div>
  );
}

export default App;