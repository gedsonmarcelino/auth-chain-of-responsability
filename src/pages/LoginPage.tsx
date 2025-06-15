import { useState } from 'react';
import { signInflow } from '../package/auth/flows/SignInFlow';
import { useNavigate } from "react-router";
import { PAGE_NAMES } from '../package/routes/constants';
import { FlowExceptionAbstract } from '../package/auth/exceptions/FlowExceptionAbstract';

export function LoginPage() {

  const navigate = useNavigate()

  const [username, setUsername] = useState('');
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
      if ( error instanceof FlowExceptionAbstract ){
        error.handle({navigate})
      }
    }

    return false;
  };

  return (
    <>
      <form onSubmit={handleSignIn}>
        <div>
          <label>Username:</label>
          <input type="text" onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Sign In</button>
        </div>
      </form>
    </>
  );
}
