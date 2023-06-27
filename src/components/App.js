import React, { useState, useEffect } from "react";
import "./../styles/App.css";

const App = () => {
const [numbers, setNumbers] = useState([]);
const [sum, setSum] = useState(0);

function calculateSum(e) {
const inputValue = +e.target.value;

setNumbers((prevNumbers) => [...prevNumbers, inputValue]);
}

useEffect(() => {
const calculateSumAsync = async () => {
const newSum = numbers.reduce((acc, curr) => acc + curr, 0);
setSum(newSum);
};

calculateSumAsync();
}, [numbers]);

return (
<div>
<h1>Sum Calculator</h1>
<input type="number" onChange={calculateSum} />
<p>Sum: {sum}</p>
</div>
);
};

export default App;