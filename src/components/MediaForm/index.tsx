
import { useFlowStore } from '@/store/flowStore'
import { Box, TextField, MenuItem, Button } from '@mui/material'

export default function MediaForm() {
  const {
    section2,
    updateSection2,
  } = useFlowStore()

  return (
    <Box mt={3} display="flex" flexDirection="column" gap={2}>
      <Button
        variant="outlined"
        component="label"
      >
        Subir {section2.mediaType === 'video' ? 'video' : 'imagen'}
        <input
          type="file"
          accept={section2.mediaType === 'video' ? 'video/*' : 'image/*'}
          hidden
          onChange={(e) => {
            const file = e.target.files?.[0]
            if (file) {
              const mediaUrl = URL.createObjectURL(file)
              updateSection2({ mediaUrl })
            }
          }}
        />
      </Button>

      {section2.mediaUrl && section2.mediaType === 'image' && (
        <Box mt={1}>
          <img
            src={section2.mediaUrl}
            alt="Imagen seleccionada"
            style={{ maxWidth: '100%', borderRadius: 8 }}
          />
        </Box>
      )}
      {section2.mediaUrl && section2.mediaType === 'video' && (
        <Box mt={1}>
          <video controls style={{ maxWidth: '100%', borderRadius: 8 }}>
            <source src={section2.mediaUrl} type="video/mp4" />
            Tu navegador no soporta el tag de video.
          </video>
        </Box>
      )}

      <TextField
        select
        label="Tipo de medio"
        value={section2.mediaType}
        onChange={(e) => {
          updateSection2({ mediaType: e.target.value as 'image' | 'video', mediaUrl: '' })
        }}
        fullWidth
      >
        <MenuItem value="image">Imagen</MenuItem>
        <MenuItem value="video">Video</MenuItem>
      </TextField>
    </Box>

  )
}