import React, { useCallback } from 'react'
import "./Workflow.css"
import ReactFlow, { useNodesState, useEdgesState, addEdge, Background, Controls } from 'reactflow';
import 'reactflow/dist/style.css';
import { initialNodes } from '../../utils/initialConstants';
import TextMessage from '../nodes/textMessage/TextMessage';
import { useDrop } from 'react-dnd';

// const initialNodes = [
//     { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
//     { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
//     { id: '3', position: { x: 100, y: 150 }, data: { label: '3' } },
// ];

// const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

const nodeTypes = {
    "textMessage": TextMessage
}

const Workflow = ({ nodes, setNodes, onNodesChange, edges, setEdges, onEdgesChange }) => {
  // const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  // const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  // helps to connect edges with other nodes
  // sets edges with the right source and destination
  const onConnect = useCallback( // params -> new edge, eds -> prev edges
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  const [{isOver}, drop] = useDrop(() => ({
    accept: "node",
    drop: (item) => addNode(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
  })
  }));

  const addNode = (id) => {
    setNodes((prevNodes) => {
      return [...prevNodes, {id: `${prevNodes.length + 1}`, position: { x: 300, y: 200 }, data: { title: 'Send Message', message: `text message ${prevNodes.length + 1}`}, type: id }]
    });
  }

  console.log(nodes);
  console.log(edges);

  return (
      <div className='workflow-panel' ref={drop}>
            <ReactFlow
              nodes={nodes}
              edges={edges}
              onNodesChange={onNodesChange} // can move the nodes and edges around (changes xy position)
              onEdgesChange={onEdgesChange}
              onConnect={onConnect}
              nodeTypes={nodeTypes}
              fitView
            >
              <Background />
              <Controls />
            </ReactFlow>
      </div>
  )
}

export default Workflow