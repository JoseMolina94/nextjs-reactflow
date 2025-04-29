import { create } from 'zustand'

type TextsNode = { 
  title: string 
  description: string 
}
type MediaNode = { 
  mediaUrl: string 
  mediaType: 'image' | 'video' 
  caption: string
}
type NoteNode = { 
  note: string 
  link: string 
}

type FlowState = {
  textsNode: TextsNode
  mediaNode: MediaNode
  noteNode: NoteNode
  updateTextsNode: (data: Partial<TextsNode>) => void
  updateMediaNode: (data: Partial<MediaNode>) => void
  updateNoteNode: (data: Partial<NoteNode>) => void
}

export const useFlowStore = create<FlowState>((set) => ({
  textsNode: { title: '', description: '' },
  mediaNode: { mediaUrl: '', caption: '', mediaType: 'image'},
  noteNode: { note: '', link: '' },
  updateTextsNode: (data) => set((state) => ({ textsNode: { ...state.textsNode, ...data } })),
  updateMediaNode: (data) => set((state) => ({ mediaNode: { ...state.mediaNode, ...data } })),
  updateNoteNode: (data) => set((state) => ({ noteNode: { ...state.noteNode, ...data } })),
}))
