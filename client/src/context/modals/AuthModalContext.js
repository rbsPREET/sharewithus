import { createContext, useEffect, useReducer, useState } from "react"
import AuthModal from "../../components/Modals/AuthModal";

const INITIAL_STATE = {
    view: "",
    open: false
}

export const ModalView = "login" || "register" || "resetPassword";

export const AuthModalContext = createContext(INITIAL_STATE)

const AuthModalReducer = (state, action) => {
    switch (action.type) {
        case "OPEN":
            return action.payload
        case "CLOSE":
            return INITIAL_STATE
        default:
            return state;
    }
}

export const AuthModalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthModalReducer, INITIAL_STATE)
    const [viewState, setViewState] = useState(state.view)

    useEffect(() => {
        setViewState(state.view)
    }, [dispatch, state.view])

    return (
        <AuthModalContext.Provider
            value={{
                view: state.view,
                open: state.open,
                setViewState,
                viewState,
                dispatch,
            }}
        >
            <AuthModal />
            {children}
        </AuthModalContext.Provider>
    )
}