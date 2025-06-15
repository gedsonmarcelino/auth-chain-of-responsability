import { useNavigate } from "react-router";
import { useAuthStore } from "../package/store/auth";
import { PAGE_NAMES } from "../package/routes/constants"

export function HomePage() {

  const navigate = useNavigate()

  const store = useAuthStore(state => state)
  const { user } = store

  const handleExit = () => {
    store.clear()
    navigate(PAGE_NAMES.LOGIN)
  }

  return (
    <div className="flex flex-col width-m-md p-12">
      <h1 className="font-semibold mb-6 text-2xl">Home</h1>

      <ul className="mb-6">
        <li>
          <span className="font-bold">Name:</span> {user.firstname} {user.lastname}
        </li>
        <li><span className="font-bold">Email:</span> {user.email}</li>
        <li><span className="font-bold">Phone:</span> {user.phone}</li>
      </ul>

      <button className="btn-primary" onClick={handleExit}>Exit</button>
    </div>
  );
}
