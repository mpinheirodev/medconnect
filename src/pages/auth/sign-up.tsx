import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const signUpForm = z.object({
  pacientName: z.string(),
  password: z.string(),
  email: z.string().email(),
  phone: z.string().min(11),
  birthDate: z.string(),
})

type signUpForm = z.infer<typeof signUpForm>

export function SignUp() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<signUpForm>()

  async function handleSignUp(data: signUpForm) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))

      toast.success('Paciente cadastrado com sucesso.', {
        action: {
          label: 'Login',
          onClick: () => navigate('/sign-in'),
        },
      })
    } catch {
      toast.error('Erro ao cadastrar paciente.')
    }
  }

  return (
    <>
      <Helmet title="Cadastro" />
      <div className="p-8">
        <Button variant="outline" asChild className="absolute right-8 top-8 bg-emerald-500 hover:bg-emerald-600 text-accent hover:text-accent">
          <Link to="/sign-in">Fazer login</Link>
        </Button>
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Criar conta grátis
            </h1>
            <p className="text-sm text-muted-foreground">
              Crie uma conta para poder agendar suas consultas.
            </p>
          </div>

          <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="pacientName">Nome completo</Label>
              <Input
                id="pacientName"
                type="text"
                {...register('pacientName')}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input 
              id="email" 
              type="email" 
              {...register('email')} 
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Sua senha</Label>
              <Input
                id="password"
                type="password"
                {...register('password')}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Digite novamente sua senha</Label>
              <Input 
              id="password" 
              type="password" 
              {...register('password')} 
              />
            </div>

            <Button disabled={isSubmitting} type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600 font-bold hover:text-accent">
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
