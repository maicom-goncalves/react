import { createStore, combineReducers } from 'redux'

import numerosReducer from './reducers/numerosReducer'

const reducers = combineReducers({
    numeros: numerosReducer,
    nomes: function (state, action) {
        console.log('Reducer Nomes...')
        console.log(state, '', action)
        return [
            'Ana', 'Bia', 'Carlitos'
        ]
    }
})

function storeConfig() {
    return createStore(reducers)
}
export default storeConfig