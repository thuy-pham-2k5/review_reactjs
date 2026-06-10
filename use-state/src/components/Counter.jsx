import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <p>{count}</p>
            <button onClick={handleClick}>Increase</button>
        </div>
    )
}

export default Counter;