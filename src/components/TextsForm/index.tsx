import { useFlowStore } from '@/store/flowStore'
import { Box, TextField } from '@mui/material'

export default function TextsForm () {
    const {
      textsNode,
      updateTextsNode,
    } = useFlowStore()

  return (
    <Box mt={3} display="flex" flexDirection="column" gap={2}>
      <TextField
        label="Título"
        value={textsNode.title}
        onChange={(e) => updateTextsNode({ title: e.target.value })}
        fullWidth
      />
      <TextField
        label="Descripción"
        value={textsNode.description}
        onChange={(e) => updateTextsNode({ description: e.target.value })}
        fullWidth
        multiline
      />
    </Box>
  )
}