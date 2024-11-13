import React, { useContext, useEffect, useState } from 'react'
import "./NodesPanel.css"
import { initialNodes, nodeTypes } from '../../utils/initialConstants'
import { NodeContext } from '../context/NodeContext';
import { useNodesState, useReactFlow } from 'reactflow';
import { Draggable } from 'react-beautiful-dnd';
import Node from './nodes/Node';

const NodesPanel = ({ nodes, setNodes }) => {
  const { selected, setSelected, selectedId, setSelectedId, settingValue, setSettingValue } = useContext(NodeContext);

  const handleChange = (e) => {
    setSettingValue(e.target.value);
  }

  console.log(settingValue);

  return (
    <div className='nodes-panel' style={selected ? {padding: "0"} : {}}>
      {!selected && <div className='panel'>
        {nodeTypes.map(node => (
          <Node nodes={nodes} setNodes={setNodes} id={node.id} type={node.type} icon={node.icon} />
        ))}
      </div>}

      {selected && <div>
        <div className='settings-title'>
          <p>Message</p>
        </div>

        <div className='edit-node'>
          <p>Text</p>
          {nodes.map(node => (
            node.id == selectedId &&
              <textarea
                key={node.id}
                onChange={handleChange}
                rows={5}
                value={settingValue ? settingValue : node.data.message}
                style={{fontFamily: "inherit", padding: "10px", fontSize: "14px"}}
              />
          ))}
        </div>
      </div>}
    </div>
  )
}

export default NodesPanel