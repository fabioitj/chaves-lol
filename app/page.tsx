import Image from 'next/image'
import chavesLol from "./assets/chaves.png";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-slate-900">
      
      <h2 className="text-white font-bold text-4xl">CHAVES ATUALIZADAS</h2>
      <Image
        src={chavesLol}
        alt='chaves'
        width={1400}
        height={200}
        className='rounded-3xl shadow-2xl'
      />

    </main>
  )
}
