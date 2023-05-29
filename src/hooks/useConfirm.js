/**
 * Выводит уведомление с запросом подтверждения действия
 */
export function useConfirm(message = '', onConfirm, onCancel) {
    if (!onConfirm || typeof onConfirm !== 'function' || !onCancel || typeof onCancel !== 'function') {
        return;
    }

    const confirmAction = () => {
        //Если пользователь соглашается, то вызывается callback
        if (confirm(message)) {
            onConfirm()
        } else {
            onCancel()
        }
    }
    return confirmAction
}