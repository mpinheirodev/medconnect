import { Pencil, X } from "lucide-react";
import { useState } from "react";

export function MinhaConsulta() {
  const [consultas, setConsultas] = useState(true)
  return (
    <div className="mx-auto my-10 w-9/12">
      <h1 className="text-neutral-950 font-title text-lg mb-4">Painel de consultas</h1>
      {consultas ? <div className="border border-neutral-950 bg-white rounded-md p-4 flex items-start justify-between">
        <div>
          <h2 className="text-neutral-950 font-semibold mb-2">Consulta #1</h2>
          <p className="text-neutral-950 mb-2">
            <span className="font-semibold">Doutora:</span> Amanda Sales - Dentista
          </p>
          <p className="text-neutral-950">
            <span className="font-semibold">Horário:</span> 12 de Novembro de 2024 - 09:30
          </p>
        </div>
        <div className="flex gap-2">
          <button className="w-[36px] h-[36px] flex items-center justify-center rounded-full text-neutral-950 hover:bg-neutral-200">
            <span><Pencil /></span>
          </button>
          <button className="w-[36px] h-[36px] flex items-center justify-center rounded-full text-neutral-950 hover:bg-neutral-200">
            <span><X /></span>
          </button>
        </div>
      </div> : <>

        <h1 className="flex"><X />Nenhuma Consulta disponivel</h1>
      </>}
    </div>
  )
}
