import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function TimePicker( { placeholder, onValueChange, doutor }:any ) {

  
  const horarios = doutor?.disponibilidade.flatMap((d:any) => d.horarios)
  const horariosPadrao = ['07:00', '08:00', '09:00', '10:00', '11:00', '13:00', '14:00', '15:00', '16:00', '17:00']

  return (
    <div className="shadow">
      <Select onValueChange={onValueChange} >
        <SelectTrigger className='w-[180px] text-muted-foreground  hover:text-primary bg-accent'>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {!doutor ? horariosPadrao.map((value:any, i:any) => (
            <SelectItem key={i} value={value}>{value}</SelectItem>
          ))
        :
          horarios.map((value:any, i:any) => (
            <SelectItem key={i} value={value}>{value}</SelectItem>
          ))
        }
        </SelectContent>
      </Select>
    </div>
  )
}
