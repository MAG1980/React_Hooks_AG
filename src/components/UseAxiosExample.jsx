import {useAxios} from "../hooks/useAxios";
import {useRef} from "react";

const CORRECT_URL = "https://jsonplaceholder.typicode.com/users";
export const UseAxiosExample = () => {
    const urlRef = useRef(CORRECT_URL);
    const {loading, error, data, refetch} = useAxios({
        url: urlRef.current
    })
    console.log(`loading:${loading}
    error:${error}
`)
    const setUrlRef = (url) => urlRef.current = (url)

    return (
        <div>
            <h3>Use Axios</h3>
            <h2>{loading ? 'Идёт згрузка' : error ? 'Загрузка завершилась с ошибкой!' : 'Загрузка завершена'}</h2>
            <h2>{!data && error}</h2>
            <button onClick={refetch}>Обновить данные API</button>
            <button onClick={() => setUrlRef(CORRECT_URL + 'adc')}>Установить ошибочный API URL</button>
            <button onClick={() => setUrlRef(CORRECT_URL)}>Установить правильный API URL</button>
        </div>
    )
}
