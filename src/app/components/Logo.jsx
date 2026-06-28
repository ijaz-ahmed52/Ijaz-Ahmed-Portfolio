import Link from "next/link"

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <div className="flex h-8 w-8 md:h-9 md:w-9 items-center justify-center rounded-full bg-[#0F172A] border-2 border-[#38BDF8]
                      text-white font-bold text-xs md:text-sm 
                      shadow-md group-hover:scale-105 transition-transform">
        IA
      </div>

     <span className="font-black tracking-tight text-[#38BDF8]  text-xl sm:text-2xl md:text-3xl leading-none">
        IJAZ AHMED
      </span>
    </Link>
  )
}