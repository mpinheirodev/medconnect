import { Helmet } from 'react-helmet-async'
import MedicaImage from '@/assets/Imagem-medica.png'
import { Button } from '@/components/ui/button'
import { SelectFilter } from '@/components/select-filter'
import { DatePicker } from '@/components/date-picker'
import { TimePicker } from '@/components/time-picker'
import { CardDoctor } from '@/components/card-doctor'
import { Filter } from 'lucide-react'


export function Welcome() {
  return (
    <div>
      <Helmet title="Bem-vindo" />
      <div className='flex-1 flex items-center justify-evenly mb-80 pt-10'>
        <div className='flex flex-col gap-16'>
          <h1 className='text-6xl font-semibold w-[600px]'>
            Cuidamos de você com empatia e inovação, trazendo soluções avançadas para cuidar da sua saúde.
          </h1>
          <Button className='bg-emerald-500 text-xl font-bold w-fit p-8 hover:bg-emerald-700 shadow'>
            Marque aqui sua consulta
          </Button>
        </div>
        <img className='h-[600px]' src={MedicaImage} alt="ImagemMedica" />
      </div>
      <div className='flex flex-col gap-4 items-center bg-emerald-700 p-4 py-6'>
        <h1 className='text-4xl text-slate-50'>Filtre sua consulta:</h1>
        <form className='flex items-center justify-center gap-4 bg-slate-100 p-8 rounded-md'>
          <SelectFilter type='especialidade' placeholder='Especialidade' />
          <SelectFilter type='medico' placeholder='Médico' />
          <DatePicker />
          <TimePicker placeholder='Horário' />
          <Button type='submit' className='bg-emerald-500 font-bold hover:bg-emerald-600 shadow'>
            Filtrar
            <Filter className='w-6 h-6' />
          </Button>
        </form>
      </div>
      <div className='w-full flex-1 flex gap-6 flex-wrap justify-center items-center pt-6'>
        {Array.from({ length: 20 }).map((_, i) => {
          return <CardDoctor key={i} />
        })}
      </div> 
    </div>
  )
}
