import './SignIn.css';

import { Section } from '../../components/Section';
import { Card } from '../../components/base/Card';

export const SignIn = () => {
	return (
		<Section>
			<Card className='sign-in'>
				<h4 className='text-align-center'>Cadastro</h4>
				<form>
					<div data-bs-theme='blue' className='mb-3'>
						<label className='form-label mb-0'>Username</label>
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
						<label className='form-label mb-0'>E-mail</label>
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
						<label className='form-label mb-0'>Senha</label>
						<input
							type='password'
							className='form-control'
							id='exampleInputPassword1'
						/>
					</div>
					<div className='mb-3'>
						<label className='form-label mb-0'>Repita a senha</label>
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
					<div className='text-align-center'>
						<button type='submit' className='btn btn-primary'>
							Cadastar
						</button>
					</div>
				</form>
			</Card>
		</Section>
	);
};
