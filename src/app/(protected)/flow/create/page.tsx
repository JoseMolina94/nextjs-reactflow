'use client'

import { useState } from 'react'
import { Tabs, Tab, Box, Button } from '@mui/material'
import { useRouter } from 'next/navigation'
import { useFlowStore } from '@/store/flowStore'
import TextsForm from '@/components/TextsForm'
import MediaForm from '@/components/MediaForm'
import NoteNodeForm from '@/components/NoteNodeForm'

export default function FlowForm() {
  const [step, setStep] = useState(0)
  const router = useRouter()

  const {
    textsNode,
    mediaNode,
    noteNode
  } = useFlowStore()

  const isSectionValid = () => {
    if (step === 0) return textsNode.title && textsNode.description
    if (step === 1) return mediaNode.mediaUrl && mediaNode.mediaType && mediaNode.caption
    if (step === 2) return noteNode.note && noteNode.link
    return false
  }

  const handleNext = () => {
    if (isSectionValid() && step < 2) setStep((prev) => prev + 1)
  }

  const handleBack = () => {
    if (step > 0) setStep((prev) => prev - 1)
  }

  const handleCreate = async () => {
    const payload = { textsNode, mediaNode, noteNode }
  
    try {
      const res = await fetch('/api/flow/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })
  
      const data = await res.json()
      console.log('Respuesta del backend:', data)
  
      if (data.success) {
        router.push('/flow/visualizer')
      } else {
        alert('Algo salió mal creando el flujo.')
      }
    } catch (error) {
      console.error('Error al crear flujo:', error)
      alert('Error de red o del servidor.')
    }
  }

  return (
    <Box sx={{ width: '100%', mt: 4 }}>
      <Tabs value={step} onChange={(_, newStep) => setStep(newStep)} centered>
        <Tab label="Sección 1" />
        <Tab label="Sección 2" />
        <Tab label="Sección 3" />
      </Tabs>
      
      {step === 0 && (
        <TextsForm />
      )}

      {step === 1 && (
        <MediaForm />
      )}

      {step === 2 && (
        <NoteNodeForm />
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
