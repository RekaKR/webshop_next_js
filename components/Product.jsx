import Image from 'next/image'
import Link from 'next/link'

const Product = ({ product, isShow }) => {
  return (
    <div className="product-list" >
      {product &&
        <>
          {isShow
            ? <>
              <p id="title">{product.title}</p>

              <p>érétkelés: {product.rating?.rate}</p>
              <p>alapján: {product.rating?.count}</p>
              {/*<p>{product.category}</p>*/}
              <p>{product.description}</p>

              <Image src={product.image} width={200} height={200} alt={product.title} />
            </>

            : <>
              <Link href={`/termekek/${product.id}`}>
                <p id="title">{product.title}</p>
              </Link>

              <Link href={`/termekek/${product.id}`}>
                <Image src={product.image} width={200} height={200} alt={product.title} />
              </Link>

              <Link href={`/termekek/${product.id}`}>
                <p>Tovább a termékhez..</p>
              </Link>
            </>
          }

          <p>€{product.price}</p>
        </>
      }
    </div >
  )
}

export default Product
