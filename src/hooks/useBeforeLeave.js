import {useEffect} from "react";

/**
 * Предотвращает уход пользователя со страницы (при уводе курсора мыши со страницы)
 * @param onBefore function вызывается при уходе курсора мыши со страницы
 */
export function useBeforeLeave(onBefore) {
    if (typeof onBefore !== 'function') {
        return;
    }
    const mouseLeaveHandler = (event) => {
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