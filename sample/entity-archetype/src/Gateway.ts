// rpc 接口声明，把实现委托给 ActiveRecord 和 Command
export class Gateway {
}

export type GatewayClass = Function & { new (): Gateway }; 
