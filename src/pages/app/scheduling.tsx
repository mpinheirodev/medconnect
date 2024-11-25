import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { ptBR } from 'date-fns/locale';
import { TimePicker } from "@/components/time-picker";



export function Scheduling() {

  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <div className="-mt-10 flex flex-col gap-12">
      <div className="bg-emerald-700 text-slate-50 flex flex-col gap-2 items-center justify-center p-12">
        <h1 className="text-4xl font-bold">Agende sua consulta:</h1>
        <span className="">Escolha a data e horário para sua consulta</span>
      </div>
      <div className="flex-1 flex flex-col items-start justify-center">
        <div className="px-16 py-6 text-2xl font-semibold text-center rounded-md border border-slate-900 bg-slate-100 gap-4 flex justify-center" >
          <div>
            <h1>Data</h1>
            <Calendar
            locale={ptBR}
            mode="single"
            selected={date}
            onSelect={setDate}
            disabled={[
              { before: new Date() },
              { dayOfWeek: [0, 6] }
            ]}
            />
          </div>
          <div className="flex flex-col gap-3">
            <h1>Horário</h1>
            <TimePicker placeholder="Escolha um horário" />
          </div>
        </div>
      </div>
    </div>
  )
}