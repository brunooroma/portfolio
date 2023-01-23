import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Contacto = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const onSubmit = data => {
    console.log(data);
    setFormSubmitted(true);
    //Aquí puedes enviar el formulario a tu servidor o servicio de correo electrónico
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Nombre:
        <input 
          type="text" 
          name="name" 
          {...register("name",{ required: true, maxLength: 80 })} 
        />
        {errors.name && "Nombre es requerido"}
      </label>

      <label>
        Correo electrónico:
        <input 
          type="email" 
          name="email" 
        {...register("email",{ required: true, pattern: /^\S+@\S+$/i })} 
        />
        {errors.email && "Correo electrónico es requerido"}
      </label>

      <label>
        Mensaje:
        <textarea 
          name="message" 
          {...register("message",{ required: true, minLength: 20 })}
        />
        {errors.message && "Mensaje es requerido, mínimo 20 caracteres"}
      </label>

      <input type="submit" value="Enviar" />
      {formSubmitted && <div> Tu mensaje se ha enviado correctamente</div>}
    </form>
  );
};

export default Contacto;