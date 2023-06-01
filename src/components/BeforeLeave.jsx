import {useBeforeLeave} from "../hooks/useBeforeLeave";
import {useState} from "react";

export const BeforeLeave = () => {
    const [handler, setHandler] = useState(null);

    const pleaseStop = () => {
        // console.log('Пожалуйста, не уходите со страницы!')
        alert('Please, dont leave!')
    }


    useBeforeLeave(handler)

    return (
        <>
            <h3>Before Leave</h3>
            <button onClick={() => setHandler(() => pleaseStop)}>Предупреждать о покидании страницы</button>
            <button onClick={() => setHandler(null)}>Убрать предупреждение</button>
        </>
    )
}
