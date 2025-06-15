import { useState } from 'react';
import { signInflow } from '../package/auth/flows/SignInFlow';
import { useNavigate } from "react-router";
import { PAGE_NAMES } from '../package/routes/constants';
import { FlowExceptionAbstract } from '../package/auth/exceptions/FlowExceptionAbstract';

export function LoginPage() {

  const navigate = useNavigate()

  const [username, setUsername] = useState('test');
  const [password, setPassword] = useState('');

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await signInflow.handle({
        username,
        password,
      });

      navigate(PAGE_NAMES.HOME)
    } catch (error) {
      if (error instanceof FlowExceptionAbstract) {
        error.handle({ navigate })
      }
    }
  };

  return (
    <div className='flex justify-center mt-20'>
      <div className='flex-1 flex-col max-w-96'>
        <form onSubmit={handleSignIn}>
          <div className='flex flex-col'>
            <label className='mb-2'>Username:</label>
            <input 
              className='input-text' 
              type="text" 
              onChange={(e) => setUsername(e.target.value)} 
              value={username} />
          </div>
          <div className='flex flex-col'>
            <label className='mb-2'>Password:</label>
            <input
              type="password"
              className='input-password'
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div className='mt-2'>
            <button className='btn-primary' type="submit">Sign In</button>
          </div>
        </form>
      </div>
    </div>
  );
}
