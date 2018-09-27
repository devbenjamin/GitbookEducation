import React from 'react'

const ListItem = ({item, deleteItem, checkItem}) => {
  return(
    <li>
      <span>{item.item}</span>
      <input type="checkbox" checked={item.checked} onChange={e => checkItem(e, item)}/>
      <button onClick={e=> deleteItem(e, item)}>Delete</button>
    </li>
  )
}

export default ListItem

