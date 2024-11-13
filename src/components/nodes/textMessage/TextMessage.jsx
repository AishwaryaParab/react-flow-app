import React, { useContext, useState } from 'react'
import { BiMessageRoundedDetail } from "react-icons/bi";
import whatsappLogo from "../../../assets/whatsapp-logo.png";
import "./TextMessage.css";
import { Handle, Position, useReactFlow } from 'reactflow';
import { NodeContext } from '../../context/NodeContext';

const TextMessage = ({ id, data: {title, message} }) => {
  const { selected, setSelected, selectedId, setSelectedId } = useContext(NodeContext);
  const { setNodes } = useReactFlow();

  console.log(selectedId);

  return (
    <div className={`node ${selectedId == id && selected ? 'active-node' : ''}`} onClick={() => {setSelected(!selected), setSelectedId(id)}}>
        <div className="node-title">
            <div className="title">
                <BiMessageRoundedDetail/>
                <h3>{title}</h3>
            </div>

            <div className="logo">
                <img src={whatsappLogo} alt="whatsapp-logo" />
            </div>
        </div>
        <div className="node-value">
            <p>{message}</p>
        </div>

        <Handle type="target" position={Position.Left} />
        <Handle type="source" position={Position.Right} />
    </div>
  )
}

export default TextMessage