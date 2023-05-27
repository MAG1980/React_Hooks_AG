import {useState} from "react";

export function useTabs(initialTabNumber){
    const [tabNumber, setTabNumber] = useState(initialTabNumber);
    const buttonClickHandler = (sectionIndex) => {
        console.log(sectionIndex)
        setTabNumber(() => sectionIndex)
    }
    return {tabNumber, buttonClickHandler}
}