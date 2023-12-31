import Link from 'next/link'
import Image from 'next/image'

const Product = ({ product, isShow }) => {
  return (
    <div className='product-list' >
      {product && <>
        {isShow
          ? <>
            <p id='title'>{product.title}</p>
            <p>érétkelés: {product.rating?.rate}</p>
            <p>{product.rating?.count} értékelés alapján</p>
            <p>{product.description}</p>

            <Image src={product.image} width={200} height={200} alt={product.title} className='image' />
          </>

          : <>
            <Link href={`/termekek/${product.id}`} >
              <p className='link' id='title'>{product.title}</p>
            </Link>

            <Link href={`/termekek/${product.id}`}>
              <Image src={product.image} width={200} height={200} alt={product.title} className='image' />
            </Link>

            <Link href={`/termekek/${product.id}`}>
              <p className='link'>Tovább a termékhez..</p>
            </Link>
          </>
        }

        <p id='price'>ára: €{product.price}</p>
      </>}
    </div>
  )
}

export default Product
