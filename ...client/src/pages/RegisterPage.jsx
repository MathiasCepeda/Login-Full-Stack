import React from 'react'
import { useForm } from 'react-hook-form'
import { registerRequest } from '../api/auth';

const RegisterPage = () => {
    
    const { register, handleSubmit} = useForm();


  return (
    <div>
        <form onSubmit={handleSubmit( async values => {
            console.log(values)
            const res = await registerRequest(values)
            console.log(res)
        })}>
           <input type="text" 
           {...register("username", { required: true})}/>
           <input type="email" 
           {...register("email", { required: true})}
           />
           <input type="password"
           {...register("password", { required: true})}
           />
           <button type='submit'>Register</button>
        </form>
    </div>
  )
}

export default RegisterPage