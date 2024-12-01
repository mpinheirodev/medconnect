import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import userDeault from "../assets/user-default.png"

type CardDoctorProps = {
  doutor: {
    name: string
    specialty: string
    id: string
  }
}

export function CardDoctor({ doutor }: CardDoctorProps) {
  return (
    <div className="w-fit flex flex-col gap-2 border rounded-lg py-6 px-12 items-center justify-center bg-slate-100 shadow">
      <img src={userDeault} alt="user profile" className="w-40" />
      <div className="flex flex-col items-center justify-center">
        <h2>{doutor.name}</h2>
        <p>{doutor.specialty}</p>
      </div>
      <Link to={`/scheduling/${doutor.id}`}>
        <Button className="bg-emerald-500 hover:bg-emerald-600 text-md">
          Agendar
        </Button>
      </Link>
    </div>
  )
}