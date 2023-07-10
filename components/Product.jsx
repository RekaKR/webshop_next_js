import Image from 'next/image'
import Link from 'next/link'

const Product = ({ product }) => {
  return (
    <div className="product-list" >
      <Link href={`/termekek/${product.id}`} className='logo'>
        <p id="title">{product.title}</p>
        {/*<p>{product.category}</p>*/}
        {/*<p>{product.description}</p>*/}
        <Image src={product.image} width={200} height={200} alt={product.title} />
      </Link>
      <p>€{product.price}</p>
    </div >
  )
}

export default Product
