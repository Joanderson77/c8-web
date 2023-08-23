import { createContext, useCallback, useContext, useState } from "react";



 
interface IDrawerContextData {
    isDrawerOpen: boolean;
    toggleDrawerOpen: () => void;
}

const DrawerContext = createContext({} as IDrawerContextData);

interface IAppDrawerProviderProps {
    children: React.ReactNode
}

export const useDrawerContext = () => {
    return useContext(DrawerContext);
}

export const AppDrawerProvider: React.FC<IAppDrawerProviderProps> = ({ children}) =>{
    const [isDrawerOpen, setIsDrawerOpen] = useState (false);

    const toggleDrawerOpen = useCallback(() =>{
        setIsDrawerOpen(oldDrawerOpen => !oldDrawerOpen)
    }, []);



    return (
        <DrawerContext.Provider value={{ isDrawerOpen, toggleDrawerOpen }}>
            {children}
        </DrawerContext.Provider>
    )
}