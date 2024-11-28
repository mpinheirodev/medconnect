import { Pencil } from 'lucide-react';
export function Profile() {
  return (
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

  )
}