import {useEffect, useRef} from "react";

export function useHover(onHover){
/*    if(typeof(onHover)!=='function'){
        return;
    }*/
    const elementRef = useRef();

    useEffect(() => {
        if(elementRef.current){
            elementRef.current.addEventListener('mouseenter', onHover);
        }
        return () => {
           if(elementRef.current){
               elementRef.current.removeEventListener('mouseenter', onHover);
           }
        };
    }, [onHover]);

    return elementRef;
}