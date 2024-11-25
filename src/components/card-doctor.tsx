import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import userDeault from "../assets/user-default.png"

// type CardDoctorProps = {
//   name: string
//   specialty: string
//   image: string
// }

export function CardDoctor() {
  return (
    <div className="w-fit flex flex-col gap-2 border rounded-lg py-6 px-12 items-center justify-center bg-slate-100">
      <img src={userDeault} alt="user profile" className="w-40" />
      <div className="flex flex-col items-center justify-center">
        <h2>Dr. José</h2>
        <p>Clínico geral</p>
      </div>
      <Link to="/scheduling">
        <Button className="bg-emerald-500 hover:bg-emerald-600 text-md">
          Agendar
        </Button>
      </Link>
    </div>
  )
}