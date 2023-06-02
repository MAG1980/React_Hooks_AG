export function useNotifications(title, options) {
    //Проверка наличия свойства Notification в объекте window для проверки поддержки отправки уведомлений браузером
    if (!('Notification' in window)) {
        return;
    }

    const triggerNotif = () => {
        //Проверяем наличие разрешения от пользователя на показ уведомлений в браузере
        if (Notification.permission !== 'granted') {
            Notification.requestPermission()
                .then(permission => {
                    if (permission == 'granted') {
                        new Notification(title, options)
                    } else {
                        return
                    }
                })
        } else {
            //Создаём уведомление
            new Notification(title, options)
        }
    }
    return triggerNotif
}