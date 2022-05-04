import React,{useState,useEffect,useContext} from "react";
import "../css/Navbar.css";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
    const[color,setColor] = useState(false);
    const{theme,changeTheme} = useContext(ThemeContext);

    useEffect(()=>{
       function trigger_func(){
           if(window.scrollY > 70){
               setColor(true);
           }else{
               setColor(false);
           }
       }
       window.addEventListener('scroll',trigger_func);

       return(()=>{
           window.removeEventListener('scroll',trigger_func);
       });

    },[]);

    const toggle = ()=>{
       if(theme.theme === 'light'){
           changeTheme("dark");
       }else{
           changeTheme("light");
       }
    }

    return (
        <>
            <div className={`navbar ${color ? "addcolor" : ""}`}>
                <h3 className="navbar_head">E-commerce</h3>
                <div className="toggle">
                    <h4>Light</h4>
                    <input type="checkbox" id="switch" onChange={toggle}/><label htmlFor="switch">Toggle</label>
                    <h4>Dark</h4>
                </div>
            </div>
        </>
    );
}

export default Navbar;