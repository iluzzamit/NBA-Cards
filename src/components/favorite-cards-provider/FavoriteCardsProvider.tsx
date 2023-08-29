import React from "react";

export const FavoriteCardsContext = React.createContext<
    {
        ids?: Set<number>
        setIds?: React.Dispatch<React.SetStateAction<Set<number>>>
    }
>({});

export function FavoriteCardsProvider({ children }: { children: React.ReactElement }) {
    const [ids, setIds] = React.useState<Set<number>>(new Set())
    
    return (
        <FavoriteCardsContext.Provider value={{ ids, setIds }}>
            {children}
        </FavoriteCardsContext.Provider>
    );
}