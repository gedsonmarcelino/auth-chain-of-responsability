import { useState } from "react";
import { mfaFlow } from "../package/auth/flows/MFAFlow";
import { useNavigate } from "react-router";
import { PAGE_NAMES } from "../package/routes/constants";

export function MFAPage() {
  const navigate = useNavigate()

  const [code, setCode] = useState('');

  const handleConfirm = async () => {
    try {
      await mfaFlow.handle({
        code,
      })
      navigate(PAGE_NAMES.HOME)
    } catch (error:Error) {
      if ( error.message === 'invalid_code'){
        window.alert("Invalid Code")
      }

      if ( error.message === 'move_accepted_terms'){
        navigate(PAGE_NAMES.TERMS)
      }
    }
  }

  return (
    <>
      <h1>MFA</h1>

      <label>Typing the code:</label>
      <input type="text" onChange={e=> setCode(e.target.value)} />
      <button onClick={handleConfirm}>Confirm</button>
    </>
  );
}
