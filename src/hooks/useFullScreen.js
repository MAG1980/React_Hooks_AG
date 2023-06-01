import {useRef} from "react";

export function useFullScreen(callback) {
    const element = useRef();

    const runCallback = (status) => {
        /*После выполнения проверок на существование и тип,
    выполняем callback, полученный из компонента*/
        if(callback && typeof callback === 'function'){
            /*Передаём в качестве параметра статус полноэкранного режима.
                Этот статус станет доступен в компоненте,
                т.к. callback объявлен в нём и получен в хуке по ссылке.*/
            callback(status)
        }
    }
    const triggerFullScreen = () => {
        if (element.current) {
            element.current.requestFullscreen()

        }
        runCallback(true)
    }

    const exitFullscreen = () => {
        //Проверка на активность полноэкранного режима для исключения ошибок
        if(document.fullscreenElement){
            //Выход из полноэкранного режима
            document.exitFullscreen()
            runCallback(false)
        }
    }

    return [element,triggerFullScreen,exitFullscreen,]
}