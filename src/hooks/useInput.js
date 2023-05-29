import {useState} from "react";

export function useInput(initialValue){
    const [value, setValue] = useState(initialValue);
    const onChange = (event) => {
        console.log(event.target.value)
        setValue(event.target.value)
    }
    return {value, onChange}
}
