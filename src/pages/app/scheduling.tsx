import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { ptBR } from 'date-fns/locale';
import { TimePicker } from "@/components/time-picker";
import { ProfileCard } from "@/components/profile-card";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { toast, Toaster } from "sonner";


export function Scheduling() {

  const [date, setDate] = useState<Date | undefined>(new Date())
  const [time, setTime] = useState('')

  async function handleSchedule() {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))

      toast.success('Agendamento concluído.',{
        description: 'Sua consulta foi agendada com sucesso para o dia: ' + date?.toLocaleDateString() + ' às ' + time,
      })
    } catch {
      toast.error('Erro ao cadastrar agendamento.')
    }
  }

  return (
    <div className="flex flex-col gap-12">
      <Helmet title="Agendamento" />
      <div className="bg-emerald-700 text-slate-50 flex flex-col gap-2 items-center justify-center p-12">
        <h1 className="text-4xl font-bold">Agende sua consulta:</h1>
        <span className="">Escolha a data e horário para sua consulta</span>
      </div>
      <div className="flex-1 grid grid-cols-2 gap-10 items-start justify-center p-8">
        <div className="px-16 py-6 text-2xl font-semibold text-center rounded-md border border-slate-400 bg-slate-100 grid grid-cols-2 justify-evenly shadow" >
          <div className='flex flex-col justify-center items-center'>
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
          <div className="flex flex-col gap-4">
            <div className="flex flex-col items-center gap-3">
              <h1>Horário</h1>
              <TimePicker placeholder="Escolha um horário" />
            </div>
            <div>
              <Toaster
              duration={8000}
              richColors
              closeButton
              />
              <Button 
              className="bg-emerald-500 hover:bg-emerald-600"
              onClick={handleSchedule}
              >
                Confirmar agendamento
              </Button>
            </div>
            <div className="h-full text-md flex flex-col gap-2">
              Confirme data e hora selecionadas
              {date && time ? 
              <div className='flex flex-col gap-2'>
                <span>
                  {date?.toLocaleDateString()}
                </span>
                <span>
                  {time}
                </span>
              </div>
              :
              <span></span>
              }
            </div>
          </div>
        </div>
        <div className="h-full shadow">
          <ProfileCard />
        </div>
      </div>
    </div>
  )
}