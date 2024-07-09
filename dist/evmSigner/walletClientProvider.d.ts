import type { IEthereumProvider, JsonRpcRequest } from '@particle-network/aa';
export declare class WalletClientProvider implements IEthereumProvider {
    private provider;
    constructor(provider: IEthereumProvider);
    on(event: string, listener: any): this;
    once(event: string, listener: any): this;
    off(event: string, listener: any): this;
    removeListener(event: string, listener: any): this;
    request(arg: Partial<JsonRpcRequest>): Promise<any>;
}
