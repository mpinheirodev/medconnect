import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type SelectTimeProps = {
  placeholder: string,
  value?: string
}

export function TimePicker( { placeholder }: SelectTimeProps ) {

  const horarios = ['08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30']

  return (
    <div>
      <Select>
        <SelectTrigger className='w-[180px] text-muted-foreground  hover:text-primary bg-accent'>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {horarios.map((value, i) => (
            <SelectItem key={i} value={value}>{value}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
