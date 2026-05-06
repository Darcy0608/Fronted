import React from 'react'
import { useForm } from 'react-hook-form' /* Importamos el hook para formulario */
import { useNavigate } from 'react-router-dom' /* Importamos el hook de navegacion */
import './Section3.css'

const Section3 = () => {
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = (data) => {
        console. log(data); /* Mostramos los datos en consola */ 

        localStorage.setItem("usuarioRegistrado", JSON.stringify(data));
        alert("Registro enviado!..");
        reset(); // Limpiamos el formulario
        navigate("/"); // Se redirige al inicio después del envío
    };
    
  return (
    <div className='form'>
        <h2>Formulario de registro</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
        
        <div className="campo_basico"> {/* Campo Nombre */}
          <input 
          type="text" 
          placeholder="Nombre" 
          {...register("nombre", { required: true })}
          />
          {errors.nombre && <span>El nombre es obligatorio</span>}
        </div>

        <div className='campo_basico'> {/* Campo para el correo */}
            <input 
            type="email"
            placeholder='Correo'
            {...register("correo", {
              required: true,
              pattern: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
            })}
            />
            {errors.correo && <span>Correo invalido</span>}
        </div>

        <div className='campo_basico'> {/* Campo para la contraseña */}
            <input 
            type="password"
            placeholder='Contraseña'
            {...register("password", {
              required: true,
              minLength: 6,
            })}
            />
            {errors.password?.type === "required" && <span>La contraseña es obligatoria</span>}
            {errors.password?.type === "minLength" && <span>Minimo 6 caracteres</span>}
        </div>

        <button type='submit'>Enviar</button>
        </form>
    </div>
  )
}

export default Section3