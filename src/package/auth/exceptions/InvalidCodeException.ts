import { FlowExceptionAbstract } from "./FlowExceptionAbstract";

export class InvalidCodeException extends FlowExceptionAbstract {
    handle(){
        window.alert("Invalid Code")
    }
}