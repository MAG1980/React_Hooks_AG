import {useEffect, useRef} from "react";

export function useFadeIn() {
    const element = useRef()
    console.log(element)

    //Эффекты начанают работать после монтирования компонента
    //Эффект без массива звивисимостей страбатывает при каждом рендере
    useEffect(() => {
        if (element.current) {
            //element.current получит ссылку на DOM-элемент только после монтирования компонента
            console.log(element.current)
            element.current.style.transition = 'opacity 3s'
            element.current.style.opacity = 1
        }
    });

    /*При монтировании компонента хук вернёт данный объект,
        и только потом сработет эффект, описанный выше.*/
    return {ref: element, style: {opacity: 0}}
}
