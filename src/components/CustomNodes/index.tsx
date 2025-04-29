import { Box, Typography } from '@mui/material'
import { Position, Handle } from 'reactflow'

interface Props {
  data: {
    title?: string
    description?: string
    mediaUrl?: string
    mediaType?: string
    note?: string
    link?: string
  }
}

export default function CustomNode({ data }: Props) {
  return (
    <Box p={2} bgcolor="#f0f0f0" borderRadius={2} boxShadow={2} width={220}>
      <Handle type="target" position={Position.Left} />

      <Typography variant="subtitle1" fontWeight="bold" mb={1}>
        {data.title || data.mediaType?.toUpperCase() || 'Nota'}
      </Typography>

      {data.description && (
        <Typography variant="body2" mb={1}>
          {data.description}
        </Typography>
      )}

      {data.mediaUrl && data.mediaType === 'image' && (
        <Box
          component="img"
          src={data.mediaUrl}
          alt="media"
          sx={{ width: '100%', borderRadius: 1, mb: 1 }}
        />
      )}

      {data.mediaUrl && data.mediaType === 'video' && (
        <Box mb={1}>
          <video src={data.mediaUrl} controls style={{ width: '100%', borderRadius: 8 }} />
        </Box>
      )}

      {data.note && (
        <Typography variant="body2" mb={0.5}>
          <strong>Nota:</strong> {data.note}
        </Typography>
      )}
      {data.link && (
        <Typography variant="body2" color="primary">
          <a href={data.link} target="_blank" rel="noopener noreferrer">
            {data.link}
          </a>
        </Typography>
      )}

      <Handle type="source" position={Position.Right} />
    </Box>
  )
}
