import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type SelectFilterProps = {
  placeholder: string,
  type: string
}

export function SelectFilter( { placeholder, type }: SelectFilterProps ) {

  const especialidades = ['Dentista', 'Clínico geral', 'Oftalmologista']
  const medicos = ['Dr. João', 'Dr. Maria', 'Dr. José']

  return (
    <div>
      <Select>
        <SelectTrigger className='w-[180px] text-muted-foreground hover:text-primary'>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {type == 'especialidade' ? especialidades.map((value, i) => (
            <SelectItem key={i} value={value}>{value}</SelectItem>
          )) 
          : 
          medicos.map((value, i) => (
            <SelectItem key={i} value={value}>{value}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}