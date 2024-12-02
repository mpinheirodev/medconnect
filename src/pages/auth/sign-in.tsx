import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { loginUsuario } from '@/service/agendamento'

const signInForm = z.object({
  email: z.string().email(),
  senha: z.string(),
})

type signInForm = z.infer<typeof signInForm>

export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<signInForm>()

  async function handleSignIn(data: signInForm) {
    try {
      const response = await loginUsuario({ payload: data });
      
      if(response.status === 200) window.location.href = "/"
      await new Promise((resolve) => setTimeout(resolve, 2000))

      toast.success('Enviamos um link de autenticação para seu e-mail.', {
        action: {
          label: 'Reenviar',
          onClick: () => handleSignIn(data),
        },
      })
    } catch (error: any) {
      toast.error('Credênciais inválidas.')
    }
  }

  return (
    <>
      <Helmet title="Login" />
      <div className="p-8">
        <Button variant="outline" asChild className="absolute right-8 top-8 bg-emerald-500 hover:bg-emerald-600 text-accent hover:text-accent font-bold shadow">
          <Link to="/sign-up">Cadastrar-se</Link>
        </Button>
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Bem-vindo ao MedConnect!
            </h1>
            <p className="text-sm text-muted-foreground">
              Acesse sua conta para fazer agendamentos.
            </p>
          </div>

          <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input id="email" type="email" {...register('email')} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="senha">Senha</Label>
              <Input id="senha" type="password" {...register('senha')} />
            </div>

            <Button disabled={isSubmitting} type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600 font-bold hover:text-accent shadow">
              Acessar
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
