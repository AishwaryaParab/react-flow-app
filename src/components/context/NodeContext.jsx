import { createContext, useState } from "react";

export const NodeContext = createContext();

export const NodeContextProvider = ({ children }) => {
    const [selected, setSelected] = useState(false);
    const [selectedId, setSelectedId] = useState(null);
    const [settingValue, setSettingValue] = useState('');
    // const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    // const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    return <NodeContext.Provider value={{ selected, setSelected, selectedId, setSelectedId, settingValue, setSettingValue }}>
        {children}
    </NodeContext.Provider>
}