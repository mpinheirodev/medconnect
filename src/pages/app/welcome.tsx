import { CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { ptBR } from 'date-fns/locale';

import { Helmet } from 'react-helmet-async'
import MedicaImage from '@/assets/Imagem-medica.png'
import { Button } from '@/components/ui/button'
import { SelectFilter } from '@/components/select-filter'
import { TimePicker } from '@/components/time-picker'
import { CardDoctor } from '@/components/card-doctor'
import { Filter } from 'lucide-react'
import { useRef, useState } from 'react'
import { doutores } from '@/doutores.json'


export function Welcome() {

  const targetRef = useRef<HTMLDivElement>(null);

  const scrollToElement = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  const weekday = ["Domingo","Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sabado"]
  const [date, setDate] = useState<any>();
  const [selectedTime, setselectedTime] = useState<string>('');
  const [selectedSpecialty, setselectedSpecialty] = useState<string>('');
  const [selectedDoctor, setselectedDoctor] = useState<string>('');
  const [filteredDoctors, setFilteredDoctors] = useState(doutores);

  const handleTimeChange = (value: string) => {
    setselectedTime(value);
  }

  const handleSpecialtyChange = (value: string) => {
    setselectedSpecialty(value);
  }

  const handleDoctorChange = (value: string) => {
    setselectedDoctor(value);
  }
  
  function handleFilter(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const results = doutores.filter((doutor) => {
      if (!date || !selectedTime) {
        return false
      } else if (!selectedSpecialty && !selectedDoctor) {
        return (
          doutor.disponibilidade.some(d => d.dia.includes(weekday[date.getDay()])) &&
          doutor.disponibilidade.some(d => d.horarios.includes(selectedTime))
        )
      }
      return (
        doutor.specialty === selectedSpecialty &&
        doutor.disponibilidade.some(d => d.dia.includes(weekday[date.getDay()])) &&
        doutor.disponibilidade.some(d => d.horarios.includes(selectedTime)) ||
        doutor.name === selectedDoctor
      )
    })    
    setFilteredDoctors(results);
  }

  return (
    <div>
      <Helmet title="Bem-vindo" />
      <div className='flex-1 flex items-center justify-evenly h-svh'>
        <div className='flex flex-col gap-16'>
          <h1 className='text-6xl font-semibold w-[600px]'>
            Cuidamos de você com empatia e inovação, trazendo soluções avançadas para cuidar da sua saúde.
          </h1>
          <Button onClick={scrollToElement} className='bg-emerald-500 text-xl font-bold w-fit p-8 hover:bg-emerald-700 shadow'>
            Busque aqui sua consulta
          </Button>
        </div>
        <img className='h-[600px]' src={MedicaImage} alt="ImagemMedica" />
      </div>
      <div ref={targetRef} className='flex flex-col gap-4 items-center bg-emerald-700 p-4 py-6 shadow'>
        <h1 className='text-4xl text-slate-50'>Filtre sua consulta:</h1>
        <form onSubmit={handleFilter} className='flex flex-col gap-2 justify-center bg-slate-100 p-10 px-16 rounded-md'>
          <div className="flex items-center justify-center gap-4 ">
            <SelectFilter onValueChange={handleSpecialtyChange} type='especialidade' placeholder='Especialidade' />
            <SelectFilter onValueChange={handleDoctorChange} type='medico' placeholder='Médico' />
            <Popover>
              <PopoverTrigger className="w-[180]" asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[180px] justify-start text-left font-normal bg-transparent shadow",
                    !date && "w-[180px] text-muted-foreground"
                  )}
                >
                  {date ? date.toLocaleDateString("pt-br") : <span>Escolha uma data*</span>}
                  <CalendarIcon />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  locale={ptBR}
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  disabled={[
                    { before: new Date() },
                    { dayOfWeek: [0, 6] }
                  ]}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            <TimePicker onValueChange={handleTimeChange} placeholder='Horário*' />
            <Button type='submit' className='bg-emerald-500 font-bold hover:bg-emerald-600 shadow'>
              Filtrar
              <Filter className='w-6 h-6' />
            </Button>
          </div>
          <div className="text-sm text-muted-foreground">
            <span>É obrigatório selecionar um dia e horário</span>
          </div>
        </form>
      </div>
      <div className='w-full flex-1 flex gap-6 flex-wrap justify-center items-center py-6 xl:px-30'>
        {filteredDoctors.length > 0 ? 
        filteredDoctors.map((doutor) => (
          <CardDoctor key={doutor.id} doutor={doutor} />
        ))
        :
        <div className="flex flex-col gap-1">
          <h1 className='text-2xl text-center font-semibold text-accent-foreground'>Nenhum médico encontrado</h1>
        </div>
        }
      </div> 
    </div>
  )
}
