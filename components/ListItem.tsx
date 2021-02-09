import React from 'react'
import Link from 'next/link'

import { Product } from '../interfaces'

type Props = {
  data: Product
}

const ListItem = ({ data }: Props) => (
  <Link href="/product/[id]/detail" as={`/product/${data.id}/detail`}>
    <a>
      {data.id}: {data.name}
    </a>
  </Link>
)

export default ListItem
