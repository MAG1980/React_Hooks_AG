import defaultAxios from "axios";
import {useEffect, useState} from "react";

export function useAxios(options, axiosInstance = defaultAxios) {
    const [state, setState] = useState({
        loading: true,
        error: null,
        data: null,
    });
    //Если в настрйках не передано свойство url, то выходим из функции
    if (!options.url) {
        return
    }

    const [trigger, setTrigger] = useState(0);

    /**
     * Вызывает повторную отправку запроса к API
     */
    const refetch = () => {
        setState({
            ...state,
            loading: true,
        })
        setTrigger(Date.now())
    }

    useEffect(() => {
        axiosInstance.get(options.url).then(response => setState(
            {
                ...state,
                data: JSON.stringify(response),
                loading: false,
                error: null
            }))
            .catch(error => setState({
                loading: false,
                error: JSON.stringify(error.message),
                data: null
            }))
        return () => {

        };
    }, [trigger]);

    return {
        ...state,
        refetch
    }
}
