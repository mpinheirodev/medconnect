import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { doutores } from "@/doutores.json"

type SelectFilterProps = {
  placeholder: string,
  type: string,
  onValueChange?: any
}

export function SelectFilter( { placeholder, type, onValueChange }: SelectFilterProps ) {

  const especialidades = doutores.map((doutor) => doutor.specialty).filter((value, index, self) => self.indexOf(value) === index)
  const medicos = doutores.map((doutor) => doutor.name)

  return (
    <div className="shadow">
      <Select onValueChange={onValueChange} >
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