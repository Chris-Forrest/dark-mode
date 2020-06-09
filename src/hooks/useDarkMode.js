import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';


export const useDarkMode = ( key, initialValue ) => {
//call localStorage by the key and information and set the information like it was saved with a value and a setValue
    const [value, setValue ] = useLocalStorage(key, initialValue)
//call the body so it can be manipulated
    const body = document.querySelector('body')
//manipulate the dom so if the user wants to use dark mode it will say true and will add classList dark-mode to the body or it will be false and will remove classList dark-mode from the body
    useEffect(() => {
        if(value === true ) {
            body.classList.add('dark-mode')
        }else{
            body.classList.remove('dark-mode')
        }
// add a dependency array so this hook is only used at the appropriate time         
    },[value, body.classList])
 // return value and setter function    
    return[value, setValue]
}