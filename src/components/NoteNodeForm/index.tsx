import { useFlowStore } from '@/store/flowStore'
import { Box, TextField } from '@mui/material'

export default function NoteNodeForm () {
  const {
    section3,
    updateSection3,
  } = useFlowStore()

  return (
    <Box mt={3} display="flex" flexDirection="column" gap={2}>
      <TextField
        label="Nota"
        value={section3.note}
        onChange={(e) => updateSection3({ note: e.target.value })}
        fullWidth
      />
      <TextField
        label="Enlace"
        value={section3.link}
        onChange={(e) => updateSection3({ link: e.target.value })}
        fullWidth
      />
    </Box>
  )
}