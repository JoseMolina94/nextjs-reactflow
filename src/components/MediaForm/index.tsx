
import { useFlowStore } from '@/store/flowStore'
import { Box, TextField, MenuItem, Button } from '@mui/material'

export default function MediaForm() {
  const {
    mediaNode,
    updateMediaNode,
  } = useFlowStore()

  return (
    <Box mt={3} display="flex" flexDirection="column" gap={2}>
      <TextField
        select
        label="Tipo de medio"
        value={mediaNode.mediaType}
        onChange={(e) => {
          updateMediaNode({ mediaType: e.target.value as 'image' | 'video', mediaUrl: '' })
        }}
        fullWidth
      >
        <MenuItem value="image">Imagen</MenuItem>
        <MenuItem value="video">Video</MenuItem>
      </TextField>

      <Button
        variant="outlined"
        component="label"
      >
        Subir {mediaNode.mediaType === 'video' ? 'video' : 'imagen'}
        <input
          type="file"
          accept={mediaNode.mediaType === 'video' ? 'video/*' : 'image/*'}
          hidden
          onChange={(e) => {
            const file = e.target.files?.[0]
            if (file) {
              const mediaUrl = URL.createObjectURL(file)
              updateMediaNode({ mediaUrl })
            }
          }}
        />
      </Button>

      {mediaNode.mediaUrl && mediaNode.mediaType === 'image' && (
        <Box mt={1}>
          <img
            src={mediaNode.mediaUrl}
            alt="Imagen seleccionada"
            style={{ maxWidth: '100%', borderRadius: 8 }}
          />
        </Box>
      )}
      {mediaNode.mediaUrl && mediaNode.mediaType === 'video' && (
        <Box mt={1}>
          <video controls style={{ maxWidth: '100%', borderRadius: 8 }}>
            <source src={mediaNode.mediaUrl} type="video/mp4" />
            Tu navegador no soporta el tag de video.
          </video>
        </Box>
      )}

      <TextField
        label="Texto de descripción"
        value={mediaNode.caption}
        onChange={(e) => updateMediaNode({ caption: e.target.value })}
        fullWidth
        multiline
        rows={4}
      />
    </Box>

  )
}