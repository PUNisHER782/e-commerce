
import React from 'react'
import { Gutter } from '../../Gutter'

import { Header } from '../../../../payload/payload-types'

const HeaderComponent = ({ header }: { header:Header}) => {
  return (
    <nav>
        <Gutter>
            <link>
            <img src='/logo-black.svg' alt='logo'/>
            </link>
        </Gutter>
    </nav>
  )
}

export default HeaderComponent