import { useState } from 'react';


export const useLocalStorage = (key, initialValue) => {
/*to retrieve an item from localStorage, call localStorage getItem('itemName')
if that item doesn't exist it will return undefined
*/     
    const [storedValue, setStoredValue] = useState(() => {
//get from localStorage by key the key can be called whatever you want but it must be the same name or key used to check and retrieve the information from localStorage        
        const item = window.localStorage.getItem(key);
/*parse and return stored json or if undefined return initial value this is written in a ternary operator but could also be done in a loop and information that is an object or array must use JSON.stringify and JSON.parse to store and retrieve the data from localStorage
*/
        return item ? JSON.parse(item) : initialValue;
    });
//this is the setter function that sets state and stores it to localStorage the funtion must be put in the array as well
    const setValue = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    }
    return [storedValue, setValue];
};