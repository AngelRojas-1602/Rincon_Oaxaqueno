import React, {useEffect, useState} from 'react';
import TarjetaProductos from './TarjetaProductos'

const HooksProductos = () => {
  // Tener un estado donde guardar los personajes
  const [ data, setData ] = useState([])
  // Tener un estado donde guardar si esta leyendo o no
  const [isLoading, setIsLoading] = useState(false)
  // Tener un estado donde guardar si hay error o no
  const [hasError, setHasError] = useState(false)


  // ComponentDidMount para cargar el api
  useEffect(() => {
    setIsLoading(true)
    fetch(`
    ${process.env.REACT_APP_API}/products
    `)
      .then(response => response.json())
      .then(json => {
          setData(json.results)
          setIsLoading(false)
          setHasError(false)
        })
      .catch(() => {
        setIsLoading(false)
        setHasError(true)
      })
  }, [])
  // ComponentWillUnmount para despedir al usuario
  useEffect(() => {
    return () => {
      alert('Vas Bien')
    }
  }, [])

  // ComponentWillUpdate para mostrar el estado de:
  useEffect(() => {
    console.log('IsLoading', isLoading)
    console.log('Data', data)
    console.log('Has error', hasError)
    console.log('----------------------')
  }, [isLoading])

  return <div className="productos">
    <h1>Productos Oaxaqueños Prueba 01</h1>
      {isLoading && <p>Leyendo datos</p>}
      {
        !isLoading
        && !hasError
        && data.length > 0
        && data.map(product => (
          <TarjetaProductos
            name={product.name}
            picture={product.picture}
            price={product.price}
            description={product.description}
            stock={product.stock}
          />
        ))
      }

      {hasError && <p>Perdón, te hemos fallado</p>}
  </div>
}

export default HooksProductos