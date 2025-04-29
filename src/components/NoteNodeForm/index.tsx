'use client'

import { useFlowStore } from '@/store/flowStore'
import { Box, TextField, Button, Typography } from '@mui/material'
import { useState } from 'react'

export default function NoteNodeForm() {
  const {
    noteNode,
    updateNoteNode,
  } = useFlowStore()

  const [fileName, setFileName] = useState<string | null>(null)

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file && file.type === 'text/plain') {
      setFileName(file.name)

      const tempUrl = URL.createObjectURL(file)
      updateNoteNode({ link: tempUrl })

      const reader = new FileReader()
      reader.onload = () => {
        const text = reader.result as string
        updateNoteNode({ note: text })
      }
      reader.readAsText(file)
    } else {
      alert('Por favor selecciona un archivo .txt')
    }
  }

  return (
    <Box mt={3} display="flex" flexDirection="column" gap={2}>
      <Typography variant="h6" gutterBottom textAlign='center' >
        {"Sube tu archivo de texto (.txt) para llenar el resto de campos."}
      </Typography>

      <Button variant="outlined" component="label">
        Subir archivo .txt
        <input
          type="file"
          accept=".txt"
          hidden
          onChange={handleFileUpload}
        />
      </Button>

      {fileName && (
        <Typography variant="body2" color="textSecondary">
          Archivo subido: {fileName}
        </Typography>
      )}

      <TextField
        label="Nota"
        value={noteNode.note}
        onChange={(e) => updateNoteNode({ note: e.target.value })}
        fullWidth
        multiline
        rows={4}
        disabled
      />

      <TextField
        label="Enlace"
        value={noteNode.link}
        onChange={(e) => updateNoteNode({ link: e.target.value })}
        fullWidth
        disabled
      />
    </Box>
  )
}