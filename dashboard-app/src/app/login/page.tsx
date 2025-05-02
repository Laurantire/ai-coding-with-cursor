'use client'

import { useState } from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const loginSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
})

type LoginForm = z.infer<typeof loginSchema>

export default function LoginPage() {
  const [error, setError] = useState('')
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = async (data: LoginForm) => {
    setError('')
    const users = JSON.parse(localStorage.getItem('users') || '[]')
    const user = users.find((u: any) => u.email === data.email)
    if (!user) {
      setError('No account found with this email address.')
      return
    }
    if (user.password !== data.password) {
      setError('Incorrect password. Please try again or reset your password.')
      return
    }
    localStorage.setItem('auth', 'true')
    window.location.href = '/dashboard'
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-card p-8 rounded-lg shadow-md w-full max-w-md space-y-6">
        <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
        <div>
          <Input type="email" placeholder="Email" {...register('email')} aria-label="Email" />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <Input type="password" placeholder="Password" {...register('password')} aria-label="Password" />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
        </div>
        {error && <div className="text-red-600 text-center text-sm">{error}</div>}
        <Button type="submit" className="w-full" disabled={isSubmitting}>Login</Button>
        <div className="text-center text-muted-foreground text-sm">
          Don&apos;t have an account? <a href="/register" className="underline">Register</a>
        </div>
      </form>
    </div>
  )
} 