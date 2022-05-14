import { createContext, useReducer } from "react"

const INITIAL_STATE = {
    category: null,
    loading: false,
    error: null
}

export const CategoryContext = createContext(INITIAL_STATE)

const CategoryReducer = (state, action) => {
    switch (action.type) {
        case "CREATE_CATEGORY":
            return {
                category: null,
                loading: true,
                error: null
            }
        case "CREATE_CATEGORY_SUCCESS":
            return {
                category: action.payload,
                loading: false,
                error: null
            }
        case "CREATE_CATEGORY_FAILURE":
            return {
                category: null,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export const CategoryProvider = ({ children }) => {
    const [state, dispatch] = useReducer(CategoryReducer, INITIAL_STATE)

    return (
        <CategoryContext.Provider
            value={{
                category: state.category,
                loading: state.loading,
                error: state.error,
                dispatch
            }}
        >
            {children}
        </CategoryContext.Provider>
    )
}