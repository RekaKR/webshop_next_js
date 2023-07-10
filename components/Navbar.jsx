import Link from 'next/link'
import Image from 'next/image'
import Cart from './Cart'

const Navbar = () => {
  const isLoggedIn = true

  return (
    <nav>
      <Link href='/' className='logo'>
        <Image src='/assets/img/logo.png' width={200} height={30} alt='logo' />
      </Link>

      <div className='container'>
        <div>
          {isLoggedIn
            ? <div>:)</div>
            : <div>:(</div>}
        </div>

        <Link href='/termekek'>
          Termékek
        </Link>

        <Cart />
      </div>
    </nav>
  )
}

export default Navbar
