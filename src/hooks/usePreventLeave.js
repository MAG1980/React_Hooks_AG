/**
 * Функции для управления защитой окна браузера от его закрытия
 * @return {{enablePrevent: enablePrevent, disablePrevent: disablePrevent}}
 */
export function usePreventLeave(){
    const listener = (event) => {
        event.preventDefault()
        //Для обработки события beforeunload нужно обязательно указывать event.returnValue
        event.returnValue = ""
    }

    const enablePrevent = () => {
        window.addEventListener('beforeunload',listener)
    }
    const disablePrevent = () => {
        window.removeEventListener('beforeunload',listener)
    }

    return {enablePrevent, disablePrevent}
}