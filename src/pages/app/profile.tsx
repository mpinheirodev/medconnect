import { House, User, ScrollText, List, Pencil, X } from 'lucide-react';
export function Profile() {
  return (
    <div>
      <div className="h-[calc(100vh-101px)] w-screen bg-green-100 flex">
        <aside className="w-[300px] bg-green-700 text-neutral-50 flex flex-col p-6 gap-8">
          <h1 className="text-xl font-title">MedConnect</h1>
          <nav className="flex flex-col gap-4">
            <a href="#" className="flex items-center gap-4 text-neutral-50">
              <span><House /></span> Home
            </a>
            <a href="#" className="flex items-center gap-4 font-semibold text-neutral-50">
              <span><User /></span> Perfil
            </a>
            <a href="#" className="flex items-center gap-4">
              <span><ScrollText /></span> Minhas Consultas
            </a>
            <a href="#" className="flex items-center gap-4">
              <span><List /></span> Histórico
            </a>
          </nav>
          <a href="#" className="mt-auto flex items-center gap-4 text-neutral-50">
            <span><X /></span> Sair da Conta
          </a>
        </aside>
        <div className="flex-1 p-8">
          <main>
            <section className="mb-8">
              <h2 className="text-lg font-title mb-4 text-green-950">Perfil</h2>
              <div className="bg-green-50 border border-green-300 p-6 flex justify-between rounded-md">
                <div>
                  <p className="text-green-950">
                    <strong>Nome completo:</strong> Abraão Araujo dos Santos
                  </p>
                  <p className="text-green-950">
                    <strong>Endereço de Email:</strong> abraaolindo@gmail.com
                  </p>
                </div>
                <div>
                  <p className="text-green-950">
                    <strong>Número de telefone:</strong> 82 99999-9999
                  </p>
                  <p className="text-green-950">
                    <strong>Data de nascimento:</strong> 28/08/1930
                  </p>
                </div>
                <button className="text-green-700">
                  <span><Pencil /></span>
                </button>
              </div>
            </section>
            <section>
              <h2 className="text-lg font-title mb-4 text-green-950">Notificações</h2>
              <div className="bg-green-50 border border-green-300 p-6 rounded-md">
                <p className="text-green-950">
                  <strong>Preferência de comunicação:</strong>
                </p>
                <p className="text-green-950 mb-4">
                  Atualizações e novidades especiais: Queremos compartilhar com você as
                  novidades sobre nossos serviços e produtos, para que esteja sempre por dentro do que temos a oferecer.
                </p>
                <div className="flex items-center gap-4">
                  <input type="checkbox" className="w-6 h-6" />
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  )
}