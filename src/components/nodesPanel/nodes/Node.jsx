import React from 'react'
import { useDrag } from 'react-dnd'

const Node = ({ nodes, setNodes, id, type, icon }) => {
  const [{isDragging}, drag] = useDrag(() => ({
    type: "node",
    item: {id},
    collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
    })
  }))

  return (
    <div
        ref={drag}
        key={id}
        className="panel-node"
    >
        {<icon size={'32px'}/>}
        <p>{type}</p>
  </div>
  )
}

export default Node