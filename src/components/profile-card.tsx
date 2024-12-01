import userDefault from '@/assets/user-default.png';

type ProfileCardProps = {
  doutor: {
    name: string;
    specialty: string;
    phone: string;
  }
}

export function ProfileCard({ doutor }: ProfileCardProps) {
  return (
    <div className="flex-1 h-full bg-slate-100 grid grid-cols-2 border border-slate-400 rounded-md shadow">
      <div className='border-r place-content-center place-items-center'>
        <img src={userDefault} alt="" className='w-[250px]' />

      </div>
      <div className='flex flex-col justify-center items-center' >
        <div className='flex flex-col items-center justify-center gap-1'>
          <h1 className='text-2xl font-bold '>{doutor.name}</h1>
          <span>{doutor.specialty}</span>
          <span>{doutor.phone}</span>
        </div>
      </div>
    </div>
  )
}