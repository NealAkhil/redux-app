import { createStore }  from 'redux'
import reducer from '../reducers/index'

const initialState={i_am: "Akhil Chhetri", i_have:3000 , amt:""}

export const store= createStore(reducer, initialState);
