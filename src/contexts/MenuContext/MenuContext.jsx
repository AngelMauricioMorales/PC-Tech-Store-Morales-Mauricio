import {useState, createContext, useContext} from 'react';

const MenuContext = createContext([]);

export const useMenuContext = () => useContext(MenuContext);

function MenuContextProvider({children}) {
    const [switchMenu, setSwitchMenu] = useState();

    const switchNavbar = () => !switchMenu ? setSwitchMenu(true) : setSwitchMenu(false);

    return  <MenuContext.Provider value={
                {
                    switchMenu,
                    switchNavbar
                }
            }
            >  
                {children}
            </MenuContext.Provider>    
};

export default MenuContextProvider;
