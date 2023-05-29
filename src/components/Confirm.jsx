import {useConfirm} from "../hooks/useConfirm";

export const Confirm = () => {
    const deleteAll = () => {
        console.log('Deleting...')
    }

    const abortDeleting = ()=>{
        console.log("Abort deleting")
    }

    const confirmDelete = useConfirm('Вы уверены?', deleteAll, abortDeleting)

    return  <button onClick={confirmDelete}>Удалить</button>

}