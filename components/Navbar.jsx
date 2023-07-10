'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const Navbar = () => {
  const isLoggedIn = true

  return (
    <nav>
      <Link href='/' className='logo'>
        <Image src='/assets/img/logo.png' width={200} height={30} alt='logo' />
      </Link>

      <div>
        {isLoggedIn
          ? <div>hey</div>
          : <div>:(</div>}
      </div>

      <Link href='/'>
        <Image src='/assets/icons/copy.svg' width={30} height={30} alt='cart' />
      </Link>
    </nav>
  )
}

export default Navbar
