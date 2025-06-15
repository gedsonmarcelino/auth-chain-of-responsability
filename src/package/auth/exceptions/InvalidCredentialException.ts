
import { FlowExceptionAbstract } from "./FlowExceptionAbstract";


export class InvalidCredentialException extends FlowExceptionAbstract {
    handle(){
        window.alert("Invalid Credentials")
    }
}