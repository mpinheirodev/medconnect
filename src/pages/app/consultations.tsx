import { CardAppointment } from "@/components/card-appointments"
import { Calendar } from "@/components/ui/calendar"
import { Helmet } from "react-helmet-async"
import { ptBR } from 'date-fns/locale'
import { useEffect, useState } from "react";

export function Consultations() {

  const [date, setDate] = useState<any>()

  const [usuarioNome, setUsuarioNome] = useState<string | null>(null);

  useEffect(() => {
    const nomeUsuario = localStorage.getItem("nome");

    if (nomeUsuario) {
      setUsuarioNome(nomeUsuario);
    }
  }, []);

  return (
    <div>
      <Helmet title="Consultas" />
      <div className="p-8">
        <h1 className="text-3xl font-bold">Consultas</h1>
        <div className=" bg-slate-100 p-6 mt-6 shadow rounded">
          <h2 className="text-xl font-semibold">Olá, Dr. {usuarioNome}! Aqui estão suas consultas agendadas.</h2>
          <div className="flex-1 flex gap-12 justify-center py-6">
            <div className="flex flex-wrap gap-3 max-w-[1050px]">
              {Array.from({  length: 10 }).map((_, i) => (
                <CardAppointment key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}