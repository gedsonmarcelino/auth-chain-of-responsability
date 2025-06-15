import { useState } from "react";
import { mfaFlow } from "../package/auth/flows/MFAFlow";
import { useNavigate } from "react-router";
import { PAGE_NAMES } from "../package/routes/constants";
import { FlowExceptionAbstract } from "../package/auth/exceptions/FlowExceptionAbstract";

export function MFAPage() {
  const navigate = useNavigate()

  const [code, setCode] = useState('');

  const handleConfirm = async () => {
    try {
      await mfaFlow.handle({
        code,
      })
      navigate(PAGE_NAMES.HOME)
    } catch (error) {
      if ( error instanceof FlowExceptionAbstract ){
        error.handle({navigate})
      }
    }
  }

  const isConfirmDisabled = code.length < 3

  return (
    <div className="flex flex-col width-m-md p-12">
      <h1 className="font-semibold mb-6 text-2xl">MFA</h1>

      <label className="font-bold mb-4">Typing the code:</label>
      <input
        className="input-text mb-4"
        type="text" 
        onChange={e=> setCode(e.target.value)} />
      <button className="btn-primary" onClick={handleConfirm} disabled={isConfirmDisabled} >Confirm</button>
    </div>
  );
}
