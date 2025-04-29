import { useFlowStore } from '@/store/flowStore'
import { Box, TextField } from '@mui/material'

export default function TextsForm () {
    const {
      section1,
      updateSection1,
    } = useFlowStore()

  return (
    <Box mt={3} display="flex" flexDirection="column" gap={2}>
      <TextField
        label="Título"
        value={section1.title}
        onChange={(e) => updateSection1({ title: e.target.value })}
        fullWidth
      />
      <TextField
        label="Descripción"
        value={section1.description}
        onChange={(e) => updateSection1({ description: e.target.value })}
        fullWidth
        multiline
      />
    </Box>
  )
}