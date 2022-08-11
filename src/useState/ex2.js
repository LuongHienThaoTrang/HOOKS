
import { useState } from 'react';

const orders = [100, 200, 300]

function UseState() {
    const [counter, setCounter] = useState(() => {
        const total = orders.reduce((total, acc) => total + acc, 0)
        console.log(total);
        return total
    })

    const handleIncrease = () => {
        setCounter(counter + 1)
    }

    console.log('re-render');

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={handleIncrease}>Increase</button>
        </div>
    )
}

export default UseState