import {useEffect, useState} from "react";

export function useTitle(initialTitle) {
    const [title, setTitle] = useState(initialTitle);

    /**
     * Обновление текста заголовка страницы
     */
    const updateTitle = () => {
        const htmlTitle = document.querySelector('title');
        htmlTitle.innerText = title;
    }
    useEffect(() => {
        updateTitle()
    }, [title]);

    return setTitle
}
