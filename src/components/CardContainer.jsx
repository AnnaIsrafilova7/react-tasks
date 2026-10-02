
import Card from "./Card"
const CardContainer = ({products}) => {
  return (
    <div className='grid grid-cols-2 gap-10 bg-gray-400 p-4'>
     { products.map((product)=>(
      <Card key={product.id} product={product}/>
     )
    )}
    </div>
  )
}

export default CardContainer