import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { atualizarUsuario, buscarUsuarioPorId } from '@/service/agendamento';
import { Pencil } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Profile() {
  const [usuario, setUsuario] = useState<any>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<any>();
  const [selectSexo, setSelectSexo] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const listarUsuarios = async () => {
      const usuarioId = localStorage.getItem("idUsuario");
      if (usuarioId) {
        await buscarUsuarioPorId(usuarioId)
          .then(response => {
            setFormData(response.data);
            setUsuario(response.data);
            setSelectSexo(response.data.sexo)
            setNome(response.data.nome)
            setEmail(response.data.email)
            setTelefone(response.data.telefone)
            localStorage.setItem("nome", response.data.nome)
          })
          .catch(error => {
            console.error('Erro ao buscar dados do usuário', error);
          });
      }
    }
    listarUsuarios()
  }, []);

  const handleSave = async (e: any) => {
    e.preventDefault()
    setIsSubmitting(true)
    const usuarioId = localStorage.getItem("idUsuario");
    if (!usuarioId) return console.log("Id do Usuario não encontrado")

    const payload = {
      nome,
      telefone,
      email,
      senha: formData.senha,
      sexo: selectSexo
    }

    try {
      const response = await atualizarUsuario(usuarioId, { payload })
      setUsuario(response.data);
      setIsEditing(false);
    } catch (error) {
      console.error('Erro ao salvar os dados do usuário', error);
      setIsEditing(false)
    } finally {
      setIsSubmitting(false)
    }
  };

  useEffect(() => {
    const userId = localStorage.getItem("idUsuario");
    if (!userId) {
      navigate('/sign-in');
    }
  }, [navigate]);

  const handleValueChangeSexo = (value: string) => {
    setSelectSexo(value);
  };

  const handleValueChangeNome = (value: string) => {
    setNome(value);
  };

  const handleValueChangeEmail = (value: string) => {
    setEmail(value);
  };

  const handleValueChangeTelefone = (value: string) => {
    setTelefone(value);
  };

  if (!usuario) {
    return <div>Carregando...</div>;
  }

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/sign-in';
  };

  return (
    <div className="flex-1 p-8">
      <main>
        <section className="mb-8">
          <h2 className="text-lg font-title mb-4 text-green-950">Perfil</h2>
          <div className="bg-green-50 border border-green-300 p-6 flex justify-between rounded-md">
            <div>
              <p className="text-green-950">
                <strong>Nome completo:</strong> {nome}
              </p>
              <p className="text-green-950">
                <strong>Endereço de Email:</strong> {email}
              </p>
            </div>
            <div>
              <p className="text-green-950">
                <strong>Número de telefone:</strong> {telefone}
              </p>
              <p className="text-green-950">
                <strong>Gênero:</strong> {usuario.sexo === "M" ? "Masculino" : "Feminino"}
              </p>
            </div>
            <button className="text-green-700" onClick={() => setIsEditing(true)}>
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
        <div className="mt-8">
          <Button className="bg-red-500 text-white hover:bg-red-600" onClick={handleLogout}>
            Deslogar
          </Button>
        </div>
      </main>
      {isEditing && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-8 rounded-md w-[400px]">
            <h3 className="text-lg font-bold mb-6 text-center">Cadastro</h3>

            <form onSubmit={(e) => handleSave(e)} className="space-y-4">
              <div className='gap-4'>
                <div className="space-y-2">
                  <Label htmlFor="nome">Nome completo</Label>
                  <Input
                    id="nome"
                    type="text"
                    defaultValue={formData.nome || ''}
                    placeholder='Digite seu nome...'
                    onChange={(e: any) => handleValueChangeNome(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Seu e-mail</Label>
                  <Input
                    id="email"
                    type="email"
                    defaultValue={formData.email || ''}
                    placeholder='email@exemplo.com'
                    onChange={(e: any) => handleValueChangeEmail(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="telefone">Digite número de contato</Label>
                  <Input
                    id="telefone"
                    type="tel"
                    minLength={11}
                    maxLength={11}
                    defaultValue={formData.telefone || ''}
                    placeholder='(99) 99999-9999'
                    onChange={(e: any) => handleValueChangeTelefone(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="sexo">Sexo</Label>
                  <Select onValueChange={handleValueChangeSexo} defaultValue={formData.sexo}>
                    <SelectTrigger>
                      <SelectValue placeholder="Sexo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="M">Masculino</SelectItem>
                      <SelectItem value="F">Feminino</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex justify-end mt-4">
                <Button variant="destructive"
                  onClick={() => setIsEditing(false)}
                >
                  Fechar
                </Button>
                <Button disabled={isSubmitting} type="submit" className="w-[130px] ml-5 bg-emerald-500 hover:bg-emerald-600 font-bold hover:text-accent shadow">
                  Atualizar
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>

  )
}