// * Hooks
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useEffect } from 'react';


export const useDarkMode = () => {
    
    const [ darkModeSetting, setDarkmodeSetting ] = useLocalStorage("darkmode");

    useEffect(() => {

        if (darkModeSetting === true) {
            document.body.classList.add("dark-mode")
        } else {
            document.body.classList.remove('dark-mode')
        }

    },[setDarkmodeSetting])
    
    return [darkModeSetting, setDarkmodeSetting];
}
