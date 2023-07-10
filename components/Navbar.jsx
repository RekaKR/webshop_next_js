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
        <Link href='/termekek' className='link'>
          Termékek
        </Link>

        <div>
          {isLoggedIn
            ? <div>:)</div>
            : <div>:(</div>}
        </div>

        <Cart />
      </div>
    </nav>
  )
}

export default Navbar
