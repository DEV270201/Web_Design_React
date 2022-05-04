import React,{createContext,useState} from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = (props)=>{
    const light = {
        backgroundColor : "#D1E8E2",
        color : "#000",
        theme : "light",
    }

    const dark = {
        backgroundColor : "#161B22",
        color : "#58A6FF",
        theme : "dark",
    }

    const[theme,setTheme] = useState(light);

    const changeTheme = (passedTheme)=>{
       if(passedTheme === "light"){
           setTheme(light);
       }else{
        setTheme(dark);
       }
    }

    return(
        <>
        <ThemeContext.Provider value={{theme,changeTheme}}>
             {
                 props.children
             }
        </ThemeContext.Provider>
        </>
    );
}