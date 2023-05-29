import {useEffect, useRef} from "react";

/**
 * Назначает функцию, которая будет выполняться при клике по заданному элементу
 * @param onClick function
 * @returns {React.MutableRefObject<undefined>}
 */
export function useClick(onClick) {

/*    if(typeof onClick !=='function'){
        return;
    }*/

    const elementRef = useRef();

    useEffect(() => {
        if (elementRef.current) {
            elementRef.current.addEventListener('click', onClick)
        }

        return () => {
            if(elementRef.current){
                elementRef.current.removeEventListener('click', onClick)
            }
        };
    }, [onClick]);

    return elementRef;
}
