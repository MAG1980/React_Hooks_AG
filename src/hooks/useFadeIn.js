import {useEffect, useRef} from "react";

export function useFadeIn(duration = 3, delay = 0) {
    if (typeof duration !== 'number') {
        return
    }
    const element = useRef()
    console.log(element)

    //Эффекты начанают работать после монтирования компонента
    //Эффект без массива звивисимостей страбатывает при каждом рендере
    useEffect(() => {
        if (element.current) {
            //element.current получит ссылку на DOM-элемент только после монтирования компонента
            console.log(element.current)
            element.current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`
            element.current.style.opacity = 1
        }
    });

    /*При монтировании компонента хук вернёт данный объект,
        и только потом сработет эффект, описанный выше.*/
    return {ref: element, style: {opacity: 0}}
}
