import { createContext } from 'react'
const BasketContext = createContext({})
const BasketProvider = BasketContext.Provider
const BasketConsumer = BasketContext.Consumer

export { BasketProvider, BasketConsumer}
