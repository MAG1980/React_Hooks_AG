import {useNotifications} from "../hooks/useNotifications";

export const Notification = () => {
    const triggerNotification = useNotifications(
        'Разрешить получение уведомлений от данного сайта?',
        {body: 'Как ты относишься к спаму?'})
    return (
        <div>
            <button onClick={triggerNotification}>Отправить уведомление</button>
        </div>
    )
}