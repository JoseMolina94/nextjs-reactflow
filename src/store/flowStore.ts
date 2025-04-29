import { create } from 'zustand'

type Section1 = { 
  title: string 
  description: string 
}
type Section2 = { 
  mediaUrl: string 
  mediaType: 'image' | 'video' 
}
type Section3 = { 
  note: string 
  link: string 
}

type FlowState = {
  section1: Section1
  section2: Section2
  section3: Section3
  updateSection1: (data: Partial<Section1>) => void
  updateSection2: (data: Partial<Section2>) => void
  updateSection3: (data: Partial<Section3>) => void
}

export const useFlowStore = create<FlowState>((set) => ({
  section1: { title: '', description: '' },
  section2: { mediaUrl: '', mediaType: 'image' },
  section3: { note: '', link: '' },
  updateSection1: (data) => set((state) => ({ section1: { ...state.section1, ...data } })),
  updateSection2: (data) => set((state) => ({ section2: { ...state.section2, ...data } })),
  updateSection3: (data) => set((state) => ({ section3: { ...state.section3, ...data } })),
}))
