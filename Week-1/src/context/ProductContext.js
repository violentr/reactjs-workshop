import { createContext } from 'react'
const ProductContext = createContext({})
const ProductProvider = ProductContext.Provider
const ProductConsumer = ProductContext.Consumer

export { ProductProvider, ProductConsumer}
