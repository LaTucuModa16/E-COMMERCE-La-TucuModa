import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import NavBar from '../NavBar/Navbar.jsx';
import { registerUser } from '../../actions/index.js';
import { useForm } from 'react-hook-form';


export default function Register() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { register, formState: { errors }, handleSubmit } = useForm();

	const onSubmit = (data, e) => {
		dispatch(registerUser(data));
		alert('Usuario creado exitosamente');
		e.target.reset();
		navigate('/home');
	};


	return (
		<div>
			<NavBar />
			<form onSubmit={handleSubmit(onSubmit)}>
				<div>
					<label>NOMBRE DE USUARIO</label>
					<input type='text' {...register('username', {
						required: true
					})} />
					{errors.username?.type === 'required' && <p>Username is required</p>}
				</div>
				<div>
					<label>NOMBRE</label>
					<input type='text' {...register('name', {
						required: true
					})} />
					{errors.name?.type === 'required' && <p>Name is required</p>}
				</div>
				<div>
					<label>APELLIDO</label>
					<input type='text' {...register('last_name', {
						required: true
					})} />
					{errors.last_name?.type === 'required' && <p>Lastname is required</p>}
				</div>
				<div>
					<label>EMAIL</label>
					<input type='email' placeholder='username@example.com' {...register('email', {
						required: true,
						pattern: /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
					})} />
					{errors.email?.type === 'required' && <p>Email is required</p>}
					{errors.email?.type === 'pattern' && <p>The format is incorrect</p>}
				</div>
				<div>
					<label>CONTRASEÑA</label>
					<input type='password' placeholder='******' {...register('password', {
						required: true
					})} />
					{errors.password?.type === 'required' && <p>Password is required</p>}
				</div>
				<button type='submit'>REGISTRARSE</button>
			</form>
			<div>
				<p>¿Ya tienes una cuenta?</p>
				<Link to='/login'>
					<a>Inicia Sesión</a>
				</Link>
			</div>
		</div>
	)
};