import type { NavigateFunction } from "react-router"
import type { TAuthContext } from "../types"

type TParams = {
    context: TAuthContext,
}

export type THandleParams = {
    navigate: NavigateFunction
}

export abstract class FlowExceptionAbstract extends Error {

    protected context:TAuthContext

    constructor({context}:TParams){
        super()
        this.context = context
    }

    abstract handle(params:THandleParams): void
    
}