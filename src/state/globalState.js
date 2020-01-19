import React, { useContext, useReducer } from "react";

const GlobalState = React.createContext();

export function withGlobalContext(WrappedComponent, initialStateFunc = () => {}, reducer) {
    return (props) => {
        const [state, dispatch] = useReducer(reducer);
        return (
            <GlobalState.Provider value={[state, dispatch]}>
                <WrappedComponent {...props} />
            </GlobalState.Provider>
        )
    }
}

export default function useGlobalState() {
    return useContext(GlobalState);
}
