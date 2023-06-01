import {useEffect, useState} from "react";

/**
 * Выполняет функцию-обработчик при именении статуса подключения к сети
 * @param onChange {function} функция-обработчик события
 * @returns {string}
 */
export function useNetwork(onChange) {
    //Свойство navigator.onLine:boolean хранит информацию о наличии подключения к сети
    const [status, setStatus] = useState(navigator.onLine);

    const handleOnline = () => {
        setStatus(navigator.onLine)
        if (typeof onChange === 'function') {
            onChange(navigator.onLine)
        }
    }

    useEffect(() => {
        window.addEventListener('online', handleOnline)
        window.addEventListener('offline', handleOnline)
        return () => {
            window.removeEventListener('online', handleOnline)
            window.removeEventListener('offline', handleOnline)
        };
    }, [onChange]);

    return status
}
