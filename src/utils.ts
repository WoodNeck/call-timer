import { AnyFunction } from './types';

export function getFuncName(func: (...args: any[]) => any) {
  const result = /^function\s+([\w\$]+)\s*\(/.exec( func.toString() );

  return  result  ?  result[ 1 ]  :  'Anonymous Function';
}

export function isFunction(arg: any): arg is AnyFunction {
  return typeof arg === 'function';
}
