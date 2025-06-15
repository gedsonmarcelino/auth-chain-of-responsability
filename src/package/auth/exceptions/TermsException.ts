

import { PAGE_NAMES } from "../../routes/constants";
import { FlowExceptionAbstract, type THandleParams } from "./FlowExceptionAbstract";


export class TermException extends FlowExceptionAbstract {
    handle({navigate}:THandleParams){
        navigate(PAGE_NAMES.TERMS)
    }
}