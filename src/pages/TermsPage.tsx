import { useState } from "react";
import { useNavigate } from "react-router";
import { PAGE_NAMES } from "../package/routes/constants";

export function TermsPage() {
  const navigate = useNavigate()

  const [acceptTerms, setAcceptTerms] = useState(false)

  const handleClick = () => {
    setAcceptTerms(prev => !prev)
  }

  const handleSubmit = () => {
    if ( acceptTerms ){
      navigate(PAGE_NAMES.HOME)
    }
  }

  return (
    <div className="flex flex-col width-m-md p-12">
      <h1 className="font-semibold mb-6 text-2xl">Terms</h1>

      <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porta aliquet leo eu faucibus. Pellentesque in nisl posuere, pharetra nulla in, rutrum enim. Aenean porttitor nec neque ut bibendum. Nam eu libero volutpat, pulvinar ante nec, tincidunt nisl. Cras a vulputate eros. Morbi vel commodo sapien. Cras vestibulum varius justo a rhoncus. Suspendisse hendrerit enim eget arcu vestibulum, sit amet consequat lorem tincidunt. Fusce sed placerat velit, id sagittis ipsum. Morbi dapibus nisl in dui laoreet elementum.</p>
      <p className="mb-4">Nunc eleifend mattis euismod. In in hendrerit elit. Pellentesque gravida pharetra elit et euismod. Curabitur ante tellus, tincidunt et lectus ut, blandit eleifend ante. Phasellus dui purus, tincidunt ut convallis vel, tristique in ligula. Fusce condimentum hendrerit quam et dignissim. Nullam dapibus erat aliquet ligula fringilla auctor. Nullam mattis augue quis consectetur bibendum. Suspendisse potenti. Phasellus a lectus eget est mattis malesuada sed et mauris. Nulla sit amet lacus fringilla, posuere tortor a, sollicitudin urna. Donec vel neque congue, venenatis lorem nec, consectetur risus. Proin consequat ac tellus a rutrum.</p>

      <div className="flex flex-row font-bold mb-4">
        <input 
          className="mr-2"
          type="checkbox" 
          checked={acceptTerms} 
          onClick={handleClick} /> 
        Accept Terms
      </div>

      <button className="btn-primary" onClick={handleSubmit} disabled={!acceptTerms}>Submit</button>
    </div>
  );
}
