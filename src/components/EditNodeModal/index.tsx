import { Dispatch, SetStateAction, useEffect } from 'react'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button
} from '@mui/material'
import { Node } from 'reactflow'

import TextsForm from '@/components/TextsForm'
import MediaForm from '@/components/MediaForm'
import NoteNodeForm from '@/components/NoteNodeForm'
import { useFlowStore } from '@/store/flowStore'

type EditNodeModalProps = {
  isEditing: boolean
  setIsEditing: Dispatch<SetStateAction<boolean>>
  selectedNode: string | null
  setNodes: Dispatch<SetStateAction<Node<any, string | undefined>[]>>
}

export default function EditNodeModal({
  isEditing,
  setIsEditing,
  selectedNode,
  setNodes
}: EditNodeModalProps) {
  const { textsNode, mediaNode, noteNode } = useFlowStore()

  const renderForm = () => {
    if (selectedNode === '1') return <TextsForm />
    if (selectedNode === '2') return <MediaForm />
    if (selectedNode === '3') return <NoteNodeForm />
    return null
  }

  const handleClose = () => {
    setIsEditing(false)

    setNodes(prev =>
      prev.map(node => {
        if (node.id === selectedNode) {
          if (selectedNode === '1') return { ...node, data: textsNode }
          if (selectedNode === '2') return { ...node, data: mediaNode }
          if (selectedNode === '3') return { ...node, data: noteNode }
        }
        return node
      })
    )
  }

  return (
    <Dialog open={isEditing} onClose={handleClose} maxWidth="sm" fullWidth>
      <DialogTitle>Editar Nodo</DialogTitle>
      <DialogContent sx={{ mt: 1 }}>
        {renderForm()}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cerrar</Button>
      </DialogActions>
    </Dialog>
  )
}
