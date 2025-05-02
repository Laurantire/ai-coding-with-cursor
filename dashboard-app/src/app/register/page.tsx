'use client'

import { useState } from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const registerSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters' }),
  confirm: z.string(),
}).refine((data) => data.password === data.confirm, {
  message: 'Passwords do not match',
  path: ['confirm'],
})

type RegisterForm = z.infer<typeof registerSchema>

export default function RegisterPage() {
  const [error, setError] = useState('')
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
  })

  const onSubmit = async (data: RegisterForm) => {
    setError('')
    // Demo: Store user in localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]')
    if (users.find((u: any) => u.email === data.email)) {
      setError('Email already registered')
      return
    }
    users.push({ email: data.email, password: data.password })
    localStorage.setItem('users', JSON.stringify(users))
    window.location.href = '/login'
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-card p-8 rounded-lg shadow-md w-full max-w-md space-y-6">
        <h1 className="text-2xl font-bold mb-4 text-center">Register</h1>
        <div>
          <Input type="email" placeholder="Email" {...register('email')} aria-label="Email" />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>
        <div>
          <Input type="password" placeholder="Password" {...register('password')} aria-label="Password" />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
        </div>
        <div>
          <Input type="password" placeholder="Confirm Password" {...register('confirm')} aria-label="Confirm Password" />
          {errors.confirm && <p className="text-red-500 text-sm mt-1">{errors.confirm.message}</p>}
        </div>
        {error && <div className="text-red-600 text-center text-sm">{error}</div>}
        <Button type="submit" className="w-full" disabled={isSubmitting}>Register</Button>
        <div className="text-center text-muted-foreground text-sm">
          Already have an account? <a href="/login" className="underline">Login</a>
        </div>
      </form>
    </div>
  )
} 