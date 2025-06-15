import { createServer } from "miragejs"
import { AuthRoutes } from "./auth"

createServer({
  routes() {
    this.namespace = "api"

    this.post(AuthRoutes.LOGIN.path, AuthRoutes.LOGIN.handle)
  },
})