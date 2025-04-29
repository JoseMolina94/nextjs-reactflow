import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const body = await req.json()

  console.log('Datos recibidos:', body)

  // Esto simula un retardo y éxito... con propositos de prueba
  await new Promise((res) => setTimeout(res, 500))

  return NextResponse.json({ success: true })
}