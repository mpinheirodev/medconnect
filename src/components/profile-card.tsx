import userDefault from '@/assets/user-default.png';

type ProfileCardProps = {
  doutor: {
    nome: string;
    especialidade: string;
    telefone: string;
  }
}

export function ProfileCard() {
  return (
    <div className="flex-1 h-full bg-slate-100 grid grid-cols-2 border border-slate-400 rounded-md shadow">
      <div className='border-r place-content-center place-items-center'>
        <img src={userDefault} alt="" className='w-[250px]' />

      </div>
      <div className='flex flex-col justify-center items-center' >
        <div className='flex flex-col items-center justify-center gap-1'>
          <h1 className='text-2xl font-bold '>Abraão Araujo</h1>
          <span>Psiquiatra</span>
          <span>(82) 99999-9999</span>
        </div>
      </div>
    </div>
  )
}