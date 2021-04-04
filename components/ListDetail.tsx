import * as React from 'react'

import { Product } from '../interfaces'

type ListDetailProps = {
  item: Product
}

// Не, не так объявляется типизация пропсов - React.FC<YourType> - вот такая типизация актуальна и в react и в next
const ListDetail = ({ item: user }: ListDetailProps) => (
  <div>
    <h1>Detail for {user.name}</h1>
    <p>ID: {user.id}</p>
  </div>
)

export default ListDetail
