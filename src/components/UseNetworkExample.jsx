import {useNetwork} from "../hooks/useNetwork";

export const UseNetworkExample = () => {
    const handleOnlinechange = (status) => {
        console.log(`Произошло ${status ? 'подключение к' : 'отключение от'} сети`)
    }
    const status = useNetwork(handleOnlinechange)

    return (<h3>Network Status: {status ? 'Online' : 'Offline'}</h3>)
}
