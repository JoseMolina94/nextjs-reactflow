'use client'

import { useCallback, useMemo } from 'react'
import ReactFlow, { Background, Controls, MiniMap, Node, Edge, useNodesState, useEdgesState, addEdge } from 'reactflow'
import { useFlowStore } from '@/store/flowStore'

import 'reactflow/dist/style.css'
import CustomNode from '@/components/CustomNodes'
import { Box } from '@mui/material'

export default function FlowVisualizer() {
  const { section1, section2, section3 } = useFlowStore()

  const initialNodes: Node[] = useMemo(() => [
    {
      id: '1',
      type: 'custom',
      data: section1,
      position: { x: 100, y: 100 },
    },
    {
      id: '2',
      type: 'custom',
      data: section2,
      position: { x: 350, y: 100 },
    },
    {
      id: '3',
      type: 'custom',
      data: section3,
      position: { x: 600, y: 100 },
    },
  ], [section1, section2, section3])

  const initialEdges: Edge[] = useMemo(() => [
    { id: 'e1-2', source: '1', target: '2', animated: true },
    { id: 'e2-3', source: '2', target: '3', animated: true },
  ], []);

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const onConnect = useCallback((params: any) => setEdges((eds) => addEdge(params, eds)), []);

  return (
    <Box sx={{ width: '100%', height: '80vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={{ custom: CustomNode }}
        fitView
      >
        <Background />
        <MiniMap />
        <Controls />
      </ReactFlow>
    </Box>
  )
}