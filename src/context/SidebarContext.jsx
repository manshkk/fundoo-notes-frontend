import { createContext, useState } from "react";

export const SidebarContext = createContext(null);

export function SidebarProvider({ children }) {

    const [open, setOpen] = useState(false);

    const toggleSidebar = () => {
        setOpen((prev) => !prev);
    };

    return (
        <SidebarContext.Provider
            value={{
                open,
                toggleSidebar,
                setOpen
            }}
        >
            {children}
        </SidebarContext.Provider>
    );

}