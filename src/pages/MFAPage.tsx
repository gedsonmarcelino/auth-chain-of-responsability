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
        acceptedTerms: true,
      })
      navigate(PAGE_NAMES.HOME)
    } catch (error:Error) {
      if ( error.message === 'invalid_code'){
        window.alert("Invalid Code")
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
