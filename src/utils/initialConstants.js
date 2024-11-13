import { BiMessageRoundedDetail } from "react-icons/bi";

export const initialNodes = [
    { id: '1', position: { x: 100, y: 100 }, data: { title: 'Send Message', message: 'text message 1' }, type: "textMessage" },
    { id: '2', position: { x: 200, y: 50 }, data: { title: 'Send Message', message: 'text message 2' }, type: "textMessage" }
]

export const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

export const nodeTypes = [
    { id: "textMessage", type: "Message", icon: BiMessageRoundedDetail },
    { id: "textMessage2", type: "Another", icon: BiMessageRoundedDetail },
    { id: "textMessage3", type: "Another", icon: BiMessageRoundedDetail },
    { id: "textMessage4", type: "Another", icon: BiMessageRoundedDetail }
]