import { Helmet } from "react-helmet-async";
import pic1 from "@/assets/pic1.png"
import pic2 from "@/assets/pic2.png"

export function AboutUS() {

  return (
    <div className="flex-1 text-slate-50">
      <Helmet title="Sobre nós" />
      <div className="flex-1 bg-emerald-700 flex flex-col gap-2 items-center p-8">
        <h1 className="text-4xl text-emerald-200 font-bold">Conectando você ao cuidado que merece</h1>
        <h1 className="text-2xl">Sobre nós</h1>
      </div>
      <div className="flex justify-center items-center text-accent-foreground p-8 gap-40">
        <div className="flex flex-col gap-3">
          <h2 className="font-bold text-xl">Quem somos</h2>
          <p className="font-medium w-80">Somos uma plataforma inovadora especializada em agendamentos de consultas médicas online. Reunimos uma rede confiável de médicos, clínicas e especialistas de diversas áreas da saúde, permitindo que os pacientes encontrem o profissional ideal com apenas alguns cliques.</p>
        </div>
        <div>
          <img src={pic1} alt="" />
        </div>
      </div>
      <div className="flex justify-center items-center text-accent-foreground p-8 gap-40">
        <div>
          <img src={pic2} alt="" />
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="font-bold text-xl text-right">Nossa missão</h2>
          <p className="font-medium w-80 text-right">Temos o compromisso de conectar pacientes e profissionais de saúde de forma simples, eficiente e segura. Trabalhamos para tornar o acesso aos cuidados médicos mais prático, eliminando barreiras e promovendo uma experiência de saúde mais acolhedora e humanizada.</p>
        </div>
      </div>
    </div>
  )
}