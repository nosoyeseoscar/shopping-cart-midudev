import { useContext } from 'react'
import { CartContext } from '../context/cart.jsx'

export function useCart () {
  const context = useContext(CartContext)

  // buena práctica
  if (context === undefined) {
    throw new Error('useCart mus be used within a CartProvider')
  }

  return context
}
