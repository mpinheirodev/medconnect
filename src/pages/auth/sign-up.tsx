import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast, Toaster } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { criarUsuario } from '@/service/agendamento'
import { useState } from 'react'

const signUpForm = z.object({
  nome: z.string(),
  senha: z.string(),
  email: z.string().email(),
  telefone: z.string().min(11),
  sexo: z.string().min(11),
})

type signUpForm = z.infer<typeof signUpForm>

export function SignUp() {
  const navigate = useNavigate()
  const [selectSexo, setSelectSexo] = useState("")

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<signUpForm>()

  async function handleSignUp(data: signUpForm) {

    try {
      const payload = {
        nome: data.nome,
        telefone: data.telefone,
        email: data.email,
        senha: data.senha,
        sexo: selectSexo
      }

      const response = await criarUsuario({ payload });

      localStorage.setItem("idUsuario", response.data.idUsuario);
      await new Promise((resolve) => setTimeout(window.location.href = "/", 2000))
      toast.success('Paciente cadastrado com sucesso.', {
        action: {
          label: 'Login',
          onClick: () => navigate('/'),
        },
      })
    } catch (error: any) {
      toast.error('Erro ao cadastrar paciente. Por favor, tente novamente')
    }
  }

  const handleValueChange = (value: string) => {
    setSelectSexo(value);
  };

  return (
    <>
      <Helmet title="Cadastro" />
      <div className="p-8">
        <Toaster richColors />
        <Button variant="outline" asChild className="absolute right-8 top-8 bg-emerald-500 hover:bg-emerald-600 text-accent hover:text-accent shadow">
          <Link to="/sign-in">Fazer login</Link>
        </Button>
        <div className="flex w-[450px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Criar conta grátis
            </h1>
            <p className="text-sm text-muted-foreground">
              Crie uma conta para poder agendar suas consultas.
            </p>
          </div>

          <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4">
            <div className='grid grid-cols-2 gap-4'>
              <div className="space-y-2">
                <Label htmlFor="nome">Nome completo</Label>
                <Input
                  id="nome"
                  type="text"
                  placeholder='Digite seu nome...'
                  {...register('nome')}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Seu e-mail</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder='email@exemplo.com'
                  {...register('email')}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="telefone">Digite número de contato</Label>
                <Input
                  id="telefone"
                  type="tel"
                  minLength={11}
                  maxLength={11}
                  placeholder='(99) 99999-9999'
                  {...register('telefone')}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="sexo">Sexo</Label>
                <Select onValueChange={handleValueChange} >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sexo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="M">Masculino</SelectItem>
                    <SelectItem value="F">Feminino</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="senha">Sua senha</Label>
                <Input
                  id="senha"
                  type="password"
                  placeholder='********'
                  {...register('senha')}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="senha">Digite a senha novamente</Label>
                <Input
                  id="senha"
                  type="password"
                  placeholder='********'
                  {...register('senha')}
                />
              </div>
            </div>

            <Button disabled={isSubmitting} type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600 font-bold hover:text-accent shadow">
              Finalizar cadastro
            </Button>

            <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
              Ao continuar, você concorda com nossos{' '}
              <a className="underline underline-offset-4" href="">
                {' '}
                Termos de Serviço{' '}
              </a>{' '}
              e{' '}
              <a className="underline underline-offset-4" href="">
                {' '}
                Políticas de Privacidade
              </a>
              .
            </p>
          </form>
        </div>
      </div>
    </>
  )
}
