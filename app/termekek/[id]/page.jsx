import Link from 'next/link'

/*
A termék képe, megnevezése, ára, leírása, valamint az értékelése jelenjen meg
egy gomb, amivel az adott terméket a kosárba tudod rakni.
*/

const ProductPage = () => {

  return (
    <div>
      <h1>ProductPage</h1>

      <button>Kosárba adás</button>

      <Link href="/termekek">
        <button>Vissza</button>
      </Link>
    </div>
  )
}

export default ProductPage
