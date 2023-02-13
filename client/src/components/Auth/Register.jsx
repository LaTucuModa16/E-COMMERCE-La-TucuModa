import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import NavBar from '../NavBar/Navbar.jsx';
import { registerUser } from '../../actions/index.js';
import { useForm } from 'react-hook-form';
import './Register.css';
 

export default function Register() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const {register, formState: { errors }, handleSubmit} = useForm();

	const onSubmit = (data, e) => {
		dispatch(registerUser(data));
		alert('Usuario creado exitosamente');
		e.target.reset();
		navigate('/home');
	};


	return(
		<div>
			<NavBar />
			<div className="formCont">
				<h1 className="title">Registro de Usuario</h1>
				<form onSubmit={handleSubmit(onSubmit)}>
				<div className="formUsername">
					<label className="username">NOMBRE DE USUARIO</label>
					<input type='text' {...register('username', {
						required: true
					})} />
					{errors.username?.type === 'required' && <p className="p1">Username is required</p>}
				</div>
				<div className="formName">
					<label className="name">NOMBRE</label>
					<input type='text' {...register('name', {
						required: true
					})} />
					{errors.name?.type === 'required' && <p className="p2">Name is required</p>}
				</div>
				<div className="formLastname">
					<label className="lastname">APELLIDO</label>
					<input type='text' {...register('last_name', {
						required: true
					})} />
					{errors.last_name?.type === 'required' && <p className="p3">Lastname is required</p>}
				</div>
				<div className="formEmail">
					<label className="email">EMAIL</label>
					<input type='email' placeholder='username@example.com' {...register('email', {
						required: true,
						pattern: /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i
					})} />
					{errors.email?.type === 'required' && <p className="p4">Email is required</p>}
					{errors.email?.type === 'pattern' && <p className="p5">Format incorrect</p>}
				</div>
				<div className="formPassword">
					<label className="password">CONTRASEÑA</label>
					<input type='password' placeholder='******' {...register('password', {
						required: true
					})} />
					{errors.password?.type === 'required' && <p className="p6">Password is required</p>}
				</div>
				<button type='submit' className="but11">REGISTRARSE</button>
				</form>
				<div className="p7">
				<p>¿Ya tienes una cuenta?</p>
				<Link to='/login'>
					<a className="p8">Inicia Sesión</a>
				</Link>
				</div>
			</div>
		</div>
		)
};