import {useEffect, useRef} from "react";
import {useClick} from "../hooks/useClick";

export const ClickedTitle = () => {
    const inputRef = useRef();
    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const sayHello = () => {
        console.log('Hello, world!')
    }

    const clickedTitle = useClick(sayHello)

    return (
        <>
            <h3 ref={clickedTitle}>Cliked Title</h3>
            <input
                ref={inputRef}
                type="text"
                placeholder="Введите текст"
            />
        </>
    )
}
