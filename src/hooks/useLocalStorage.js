import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
    // * retreive item from localStorage by keyname, or return undefined
    const [storedValue, setStoredValue] = useState(() => {
        
        // * get from local storage by key
        const item = window.localStorage.getItem(key);
        
        // * parse and return stored json, or if undefined, return the intial value
        return item ? JSON.parse(item) : initialValue;
    })

    
    const setValue = (value) => {
        // * saves to state
        setStoredValue(value)
        
        // * saves to local storage
        window.localStorage.setItem(key, JSON.stringify(value))
    }

    return [storedValue, setValue];
}

