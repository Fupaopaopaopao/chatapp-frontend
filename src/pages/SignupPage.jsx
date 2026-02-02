import LogoSignUp from '../components/LogoSignUp'
import { useState } from 'react'
import SignupForm from '../components/signup/SignupForm'
import { Link } from 'react-router-dom'
import AuthImagePattern from '../components/AuthImagePattern'
import { useAuthStore } from '../store/useAuthStore'

const SignupPage = () => {
  const { signup } = useAuthStore()

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  })

  const SignUpSubmit = (e) => {
    e.preventDefault()
    signup(formData)
  }

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* left side */}
      <div className="flex flex-col justify-center items-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-8">
          <LogoSignUp />

          {/* signup from */}
          <SignupForm
            formData={formData}
            setFormData={setFormData}
            handleSubmit={SignUpSubmit}
          />
        </div>
        <div className="text-center mt-4">
          <p className="text-base-content/60">
            Already have an account?{' '}
            <Link to="/login" className="link link-primary">
              Sign in
            </Link>
          </p>
        </div>
      </div>
      <AuthImagePattern
        title="Join our community"
        subtitle="Connect with friends, share moments, and stay in touch with your loved ones."
      />
    </div>
  )
}

export default SignupPage
