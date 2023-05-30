import {useBeforeLeave} from "../hooks/useBeforeLeave";

export const BeforeLeave = () => {
    const pleaseStop = () => {
        // console.log('Пожалуйста, не уходите со страницы!')
            alert('Please, dont leave!')
    }
    useBeforeLeave(pleaseStop)
    return (
        <></>
    )
}