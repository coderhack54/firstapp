import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({initCart,children}) => {
    const [cart, setCart] = useState(initCart);



    const addToCart = (item) => { 
        setCart([...cart,item]);   // ... is spread operator
        sessionStorage.setItem("cart",JSON.stringify([...cart,item]));
     }
    // value prop is for providing values through context
    return <UserContext.Provider value={{cart , setCart, addToCart}}>
        {children}
    </UserContext.Provider>
}


// only export will export multiple components while export default export only one component
// things imported in {react} is export while import react is default