import "./index.css"
import Navbar from "./components/navbar/Navbar"
import Workflow from "./components/workflow/Workflow"
import NodesPanel from "./components/nodesPanel/NodesPanel"
import { useState } from "react";
import { NodeContextProvider } from "./components/context/NodeContext";
import { useEdgesState, useNodesState } from "reactflow";
import { initialEdges, initialNodes } from "./utils/initialConstants";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";


function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [uncoveredTargets, setUncoveredTargets] = useState(0);
  const [error, setError] = useState(false);

  const handleSubmit = (id, value) => {
    const updatedNodes = nodes.map(node => (
      node.id == id ? {...node, data: {...node.data, message: value}} : node
    ))

    setNodes(updatedNodes);
    const targets = edges.map(edge => (
      edge.target
    ))

    nodes.map(node => (
      !targets.includes(node.id) && setUncoveredTargets((prev) => prev+1)
    ))

    uncoveredTargets > 1 ? setError(true) : setError(false)
    setUncoveredTargets(0);
  }

  return (
    <>
      <NodeContextProvider>
        <DndProvider backend={HTML5Backend}>
          <Navbar handleSubmit={handleSubmit} error={error} />
          <div className="panels">
            <Workflow
              nodes={nodes}
              setNodes={setNodes}
              onNodesChange={onNodesChange}
              edges={edges}
              setEdges={setEdges}
              onEdgesChange={onEdgesChange}
            />
            <NodesPanel nodes={nodes} setNodes={setNodes}  handleSubmit={handleSubmit} />
          </div>
        </DndProvider>
      </NodeContextProvider>
    </>
  )
}

export default App
