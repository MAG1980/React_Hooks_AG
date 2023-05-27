import {useState} from "react";

export const CounterFunc = () => {
    const [item, setItem] = useState(1);
    const incrementItem = () => setItem(item +1)

    const decreaseItem = () => setItem(item-1)
    return (
        <>
            <div>Item: {item}</div>
            <button onClick={incrementItem}>Увеличить</button>
            <button onClick={decreaseItem}>Уменьшить</button>
        </>
    )
}
