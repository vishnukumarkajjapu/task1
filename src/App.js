import { useState } from "react";
import "./App.css";

function App() {
  const [Count, setCount] = useState(0);

  const wordCount = (e) => {
    let arr = e.target.value.split(" ");
    console.log(arr);
    if (arr[0].length === 0) {
      setCount(0);
      return;
    }
    setCount(arr.length);
  };

  return (
    <div className="grid place-items-center h-screen">
      <div>
        <h1 className="">Responsive Paragraph Word Counter</h1>
        <textarea
          className="w-full my-2 border-2"
          rows={5}
          onChange={wordCount}
        ></textarea>
        <p>Word Count:{Count}</p>
      </div>
    </div>
  );
}

export default App;
