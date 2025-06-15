import { useNavigate } from "react-router";
import { useAuthStore } from "../package/store/auth";
import {PAGE_NAMES} from "../package/routes/constants"

export function HomePage() {

  const navigate = useNavigate()

  const store = useAuthStore(state => state)
  const {user} = store
  
  const handleExit = () => {
    store.clear()
    navigate(PAGE_NAMES.LOGIN)
  }

  return (
    <>
      <h1>Home...</h1>

      <hr />

      <ul>
        <li>Name: {user.firstname} {user.lastname}</li>
        <li>Email: {user.email}</li>
        <li>Phone: {user.phone}</li>
      </ul>

      <br />

      <button onClick={handleExit}>Exit</button>
    </>
  );
}
