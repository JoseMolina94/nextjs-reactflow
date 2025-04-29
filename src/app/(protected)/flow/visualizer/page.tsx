'use client'

import { useMemo } from 'react'
import ReactFlow, { Background, Controls, MiniMap, Node, Edge } from 'reactflow'
import { useFlowStore } from '@/store/flowStore'

import 'reactflow/dist/style.css'

export default function FlowVisualizer() {
  const { section1, section2, section3 } = useFlowStore()

  const nodes: Node[] = useMemo(() => [
    {
      id: '1',
      type: 'default',
      position: { x: 100, y: 100 },
      data: { label: `Título: ${section1.title}` },
    },
    {
      id: '2',
      type: 'default',
      position: { x: 300, y: 300 },
      data: { label: `Media: ${section2.mediaType}` },
    },
    {
      id: '3',
      type: 'default',
      position: { x: 500, y: 500 },
      data: { label: `Nota: ${section3.note}` },
    },
  ], [section1, section2, section3])

  const edges: Edge[] = [
    { id: 'e1-2', source: '1', target: '2', animated: true },
    { id: 'e2-3', source: '2', target: '3', animated: true },
  ]

  return (
    <div style={{ width: '100%', height: '80vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        fitView
      >
        <Background />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  )
}