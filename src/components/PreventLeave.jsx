import {usePreventLeave} from "../hooks/usePreventLeave";

export const PreventLeave = () => {
    const {enablePrevent: protect, disablePrevent: unprotect} = usePreventLeave()
    return (
        <div>
            <button onClick={protect}>Защитить</button>
            <button onClick={unprotect}>Не защищать</button>
        </div>
    )
}