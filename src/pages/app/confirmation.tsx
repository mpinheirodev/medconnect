import { Button } from "@/components/ui/button"
import { CircleCheck } from "lucide-react"

export function Confimation() {
  return (
    <div className="bg-emerald-700 text-accent flex-1 -m-10 -mb-20 p-10 flex gap-4 flex-col items-center justify-center">
      <CircleCheck className="h-40 w-40" />
      <h1 className="text-3xl">Seu agendamento foi confirmado!</h1>
      <div className="flex flex-col gap-2 items-center">
        <span>Dra. Amanda Sales</span>
        <span>{new Date().toLocaleDateString()}</span>
        <span>{new Date().toLocaleTimeString()}</span>
      </div>

      <div className="flex flex-col gap-2">
        <Button className="bg-emerald-500 hover:bg-emerald-600">
          Ver seu agendamento
        </Button>
        <Button variant={"secondary"} className="text-accent-foreground">
          Ir para tela inicial
        </Button>
      </div>
    </div>
  )
}