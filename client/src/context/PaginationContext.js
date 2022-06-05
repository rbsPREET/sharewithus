import { Paper, Stack } from "@mui/material"
import { createContext, useEffect, useReducer, useState } from "react"
import useFetch from "../hooks/useFetch"
import PaginationUi from "../ui/Pagination"

const INITIAL_STATE = {
    paginateData: {},
    page: 1,
    count: 0,
    apiEndpoint: null,
    loading: false
}

export const PaginationContext = createContext(INITIAL_STATE)

const PaginationReducer = (state, action) => {
    switch (action.type) {
        case "START_FETCH":
            return {
                apiEndpoint: action.payload.apiEndpoint,
            }
        case "CLOSE":
            return INITIAL_STATE
        default:
            return state;
    }
}

export const PaginationProvider = ({ children }) => {
    const [state, dispatch] = useReducer(PaginationReducer, INITIAL_STATE)

    const { data, loading, error } = useFetch(state.apiEndpoint)

    return (
        <PaginationContext.Provider
            value={{
                paginateData: data.data,
                page: data.currentPage,
                count: data.numberOfPages,
                apiEndpoint: state.apiEndpoint,
                loading: loading,
                dispatch,
            }}
        >
            {children}
        </PaginationContext.Provider>
    )
}