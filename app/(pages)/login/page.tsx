import Link from 'next/link'
import GoogleAuthButton from '@/app/components/ui/google-auth'
import { GiWeightLiftingUp } from 'react-icons/gi'
import ProtectRoute from '@/app/components/protect-route'
import LoginForm from './form'
import { getSession } from '@/app/helpers/get-session'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login to your account.',
}

export default async function Login() {
  const session = await getSession()

  if (session) {
    return (
      <ProtectRoute
        message="You must log out to switch accounts."
        logout
      />
    )
  }

  return (
    <>
      <section className="flex min-h-full flex-1 flex-col justify-center lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm text-center">
          <GiWeightLiftingUp className="text-blue-600 text-5xl inline-block" />
          <h2 className="mt-10 text-2xl font-bold leading-9 tracking-tight ">
            Log in to your account
          </h2>
          <h5 className="text-gray-400 text-sm">
            Demo login - email:{' '}
            <span className="text-gray-950">test@gmail.com</span> password:{' '}
            <span className="text-gray-950">test</span>
          </h5>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <LoginForm />
          <GoogleAuthButton signin />

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <Link
              href="/register"
              className="font-semibold leading-6 text-blue-600 hover:text-blue-500"
            >
              Sign up here.
            </Link>
          </p>
        </div>
      </section>
    </>
  )
}
