'use client'

import { useCallback, useMemo, useState } from 'react'
import ReactFlow, { Background, Controls, MiniMap, Node, Edge, useNodesState, useEdgesState, addEdge } from 'reactflow'
import { useFlowStore } from '@/store/flowStore'

import 'reactflow/dist/style.css'
import CustomNode from '@/components/CustomNodes'
import { Box } from '@mui/material'
import EditNodeModal from '@/components/EditNodeModal'

export default function FlowVisualizer() {
  const { textsNode, mediaNode, noteNode } = useFlowStore()
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  const nodeTypes = useMemo(() => ({
    custom: CustomNode,
  }), [])

  const initialNodes: Node[] = useMemo(() => [
    {
      id: '1',
      type: 'custom',
      data: textsNode,
      position: { x: 100, y: 100 },
    },
    {
      id: '2',
      type: 'custom',
      data: mediaNode,
      position: { x: 350, y: 150 },
    },
    {
      id: '3',
      type: 'custom',
      data: noteNode,
      position: { x: 600, y: 200 },
    },
  ], [textsNode, mediaNode, noteNode])

  const initialEdges: Edge[] = useMemo(() => [
    { id: 'e1-2', source: '1', target: '2', animated: true },
    { id: 'e2-3', source: '2', target: '3', animated: true },
  ], []);

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback((params: any) => setEdges((eds) => addEdge(params, eds)), []);

  const handleNodeClick = useCallback((_: React.MouseEvent, node: Node) => {
    setSelectedNode(node.id);
    setIsEditing(true);
  }, []);

  return (
    <Box sx={{ width: '100%', height: '80vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        onNodeClick={handleNodeClick}
        fitView
      >
        <Background />
        <MiniMap />
        <Controls />
      </ReactFlow>

      <EditNodeModal
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        selectedNode={selectedNode || null}
        setNodes={setNodes}
      />
    </Box>
  )
}