'use client'

import { useState } from 'react'
import { Tabs, Tab, Box, Button, TextField, MenuItem } from '@mui/material'
import { useRouter } from 'next/navigation'
import { useFlowStore } from '@/store/flowStore'

export default function FlowForm() {
  const [step, setStep] = useState(0)
  const router = useRouter()

  const {
    section1, section2, section3,
    updateSection1, updateSection2, updateSection3
  } = useFlowStore()

  const isSectionValid = () => {
    if (step === 0) return section1.title && section1.description
    if (step === 1) return section2.mediaUrl && section2.mediaType
    if (step === 2) return section3.note && section3.link
    return false
  }

  const handleNext = () => {
    if (isSectionValid() && step < 2) setStep((prev) => prev + 1)
  }

  const handleBack = () => {
    if (step > 0) setStep((prev) => prev - 1)
  }

  const handleCreate = () => {
    console.log('Creando flujo con:', { section1, section2, section3 })
    
    // TODO: simular un POST
    // await fetch('/api/flows', { method: 'POST', body: JSON.stringify(...) })

    router.push('/flow/visualizer') 
  }

  return (
    <Box sx={{ width: '100%', mt: 4 }}>
      <Tabs value={step} onChange={(_, newStep) => setStep(newStep)} centered>
        <Tab label="Sección 1" />
        <Tab label="Sección 2" />
        <Tab label="Sección 3" />
      </Tabs>

      {step === 0 && (
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
      )}

      {step === 1 && (
        <Box mt={3} display="flex" flexDirection="column" gap={2}>
          <TextField
            label="URL de imagen o video"
            value={section2.mediaUrl}
            onChange={(e) => updateSection2({ mediaUrl: e.target.value })}
            fullWidth
          />
          <TextField
            select
            label="Tipo de medio"
            value={section2.mediaType}
            onChange={(e) => updateSection2({ mediaType: e.target.value as 'image' | 'video' })}
            fullWidth
          >
            <MenuItem value="image">Imagen</MenuItem>
            <MenuItem value="video">Video</MenuItem>
          </TextField>
        </Box>
      )}

      {step === 2 && (
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
      )}

      <Box mt={4} display="flex" justifyContent="space-between">
        <Button variant="outlined" disabled={step === 0} onClick={handleBack}>
          Atrás
        </Button>
        {step < 2 ? (
          <Button variant="contained" disabled={!isSectionValid()} onClick={handleNext}>
            Siguiente
          </Button>
        ) : (
          <Button variant="contained" disabled={!isSectionValid()} onClick={handleCreate}>
            Crear
          </Button>
        )}
      </Box>
    </Box>
  )
}
