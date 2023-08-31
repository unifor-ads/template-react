import { Section } from '../../components/Section';

export const SignIn = () => {
	return (
		<section className='container'>
			<div className='card'>
				<form>
					<div className='mb-3'>
						<label className='form-label'>Username</label>
						<div className='input-group mb-3'>
							<span className='input-group-text' id='basic-addon1'>
								@
							</span>
							<input
								type='text'
								className='form-control'
								aria-describedby='basic-addon1'
							/>
						</div>
					</div>
					<div className='mb-3'>
						<label className='form-label'>E-mail</label>
						<input
							type='email'
							className='form-control'
							id='exampleInputEmail1'
							aria-describedby='emailHelp'
						/>
						<div id='emailHelp' className='form-text'>
							Não compartilharemos seu e-mail com mais ninguém.
						</div>
					</div>
					<div className='mb-3'>
						<label className='form-label'>Senha</label>
						<input
							type='password'
							className='form-control'
							id='exampleInputPassword1'
						/>
					</div>
					<div className='mb-3'>
						<label className='form-label'>Repita a senha</label>
						<input
							type='password'
							className='form-control'
							id='exampleInputPassword1'
						/>
					</div>
					<div className='mb-3 form-check'>
						<input type='checkbox' className='form-check-input' id='exampleCheck1' />
						<label className='form-check-label'>
							Quero receber novidades por e-mail
						</label>
					</div>
					<button type='submit' className='btn btn-primary'>
						Cadastar
					</button>
				</form>
			</div>
		</section>
	);
};
