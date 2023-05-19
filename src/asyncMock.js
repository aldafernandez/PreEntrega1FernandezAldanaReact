import Image from './componentes/assets/images/cama-flotante.jpg'
import Image2 from './componentes/assets/images/cama-redonda.png'
import Image3 from './componentes/assets/images/combo11.webp'

const products = [
    {
        id: "1",
        nombre: "Cama flotante",
        precio: 10000,
        categoria:"accesorios",
        img: <img src={Image} alt="cama flotante"/>,
        stock: 25
    },
    {
        id: "2",
        nombre: "Cama redonda",
        precio: 9500,
        category:"accesorios",
        img: <img src={Image2} alt="cama redonda"/>,
        stock: 25
    },
    {
        id: "3",
        nombre: "Combo para perro",
        precio: 1000,
        categoria:"accesorios",
        img: <img src={Image3} alt="cama redonda"/>,
        stock: 25
    }
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout (()=> {
            resolve(products)
        },500)
    })
}

export const getProductById = (productId) => {
    return new Promise ((resolve)=> {
        setTimeout (()=>{
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}