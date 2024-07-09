import type { SmartAccount, UserOp } from '@particle-network/aa';
import type { AccountInfo } from '../types/accountInfo';
export declare const pubKeyToEVMAddress: (pubKey: string) => string;
export declare const convertSignature: (signature: string) => string;
export declare function caculateNativeFee(userOp: UserOp): bigint;
export declare const getBTCAAAddress: (smartAccount: SmartAccount, btcAddress: string, name: string, version: string) => Promise<string>;
export declare const getBTCAccountInfo: (smartAccount: SmartAccount, btcAddress: string, name: string, version: string) => Promise<AccountInfo>;
