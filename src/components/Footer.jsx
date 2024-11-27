// import { useContext } from 'react'
import './Footer.css'
// import { FiltersContext } from '../context/filters'
// import { useCart } from '../hooks/useCart'

export default function Footer () {
  // const { filters } = useContext(FiltersContext)
  // const { cart } = useCart()
  return (
    <footer className='footer'>
      <h4>Prueba Técnica de React -
        <span> @Oscar Fuentes</span>
      </h4>
      <h5>Shopping Cart con useContext & useReducer</h5>
      {/* {
        JSON.stringify(filters, null, 2)
      } */}
      {/* {
        JSON.stringify(cart, null, 2)
      } */}
    </footer>
  )
}
