import {useEffect} from "react";

/**
 * Предотвращает уход пользователя со страницы (при уводе курсора мыши со страницы)
 * @param onBefore function вызывается при уходе курсора мыши со страницы
 */
export function useBeforeLeave(onBefore) {
    // console.log("useBeforeLeave", onBefore)
    const mouseLeaveHandler = (event) => {
        if(typeof onBefore !== 'function'){
            console.log("Not a function!")
            return}
        if (event.clientY <= 0) {
            onBefore()
            console.log("Покидаем сайт")
        }

    }
    useEffect(() => {
        document.addEventListener('mouseleave', mouseLeaveHandler)
        return () => {
            document.removeEventListener('mouseleave', mouseLeaveHandler)
        };
    }, [mouseLeaveHandler]);

    return
}
