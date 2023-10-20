import { URL } from "../components/Person"
import axios from 'axios'

export const GET_PERSON = "GET_PERSON"
export const GET_PERSON_SUCCESS = "GET_PERSON_SUCCESS"
export const GET_PERSON_FAILED = "GET_PERSON_FAILED"
export const SET_IS_FETCHING = "SET_IS_FETCHING"

const zero = '0'

export const getPerson = () => disptach => {
    disptach(setIsFetching(true))
    axios.get(URL)
        .then(res => {
            const person = (res.data.results[0])
            disptach(getPersonSuccess(person))
        })
        .catch(err => {
            disptach(getPersonError(err.message))
        })
    return { type: GET_PERSON, payload: 'Hello' }
}

const setIsFetching = (isFetching) => {
    return {
        type: SET_IS_FETCHING,
        payload: isFetching,
    }
}

const getPersonSuccess = (person) => {
    return {
        type: GET_PERSON_SUCCESS,
        payload: person
    }
}

const getPersonError = (error) => {
    return {
        type: GET_PERSON_FAILED,
        payload: error
    }
}