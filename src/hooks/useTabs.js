import {useState} from "react";

export function useTabs(initialTabNumber, content){
    const [tabNumber, setTabNumber] = useState(initialTabNumber);
    if(!content || !Array.isArray(content)){
        return
    }
    const buttonClickHandler = (sectionIndex) => {
        console.log(sectionIndex)
        setTabNumber(() => sectionIndex)
    }

    return {currentTab: content[tabNumber], buttonClickHandler}
}