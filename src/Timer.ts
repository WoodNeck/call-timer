import { getFuncName, isFunction } from './utils';
import { AnyFunction } from './types';

class CallTimer {
  public static VERSION: string = '#__VERSION__#';

  public static call(func: AnyFunction, ...args: any[]): void {
    const funcName = getFuncName(func);

    const t0 = performance.now();
    func(...args);
    const t1 = performance.now();

    const track = CallTimer.tracks[funcName];
    if (track) {
      track.push(t1 - t0);
    } else {
      CallTimer.tracks[funcName] = [t1 - t0];
    }
  }

  public static reset(): void {
    CallTimer.tracks = {};
  }

  public static printAll(): void {
    Object.keys(CallTimer.tracks).forEach(track => CallTimer.print(track));
  }

  public static print(func: AnyFunction | string) {
    const name = isFunction(func)
      ? getFuncName(func)
      : func;
    console.log(`===⏲️ ${name}===
MEAN: ${CallTimer.mean(func)}ms
MIN: ${CallTimer.min(func)}ms
MAX: ${CallTimer.max(func)}ms
MEDIAN: ${CallTimer.median(func)}ms
COUNT: ${CallTimer.count(func)}`);
  }

  public static min(func: AnyFunction | string): number {
    const track = CallTimer.getTrack(func);
    return track.reduce((prev, current) => {
      return current < prev ? current : prev;
    }, Infinity);
  }

  public static max(func: AnyFunction | string): number {
    const track = CallTimer.getTrack(func);
    return track.reduce((prev, current) => {
      return current > prev ? current : prev;
    }, 0);
  }

  public static mean(func: AnyFunction | string): number {
    const track = CallTimer.getTrack(func);
    const sum = track.reduce((prev, current) => {
      return prev + current;
    }, 0);
    return sum / track.length;
  }

  public static median(func: AnyFunction | string): number {
    const track = CallTimer.getTrack(func);
    track.sort();
    return track[Math.floor(track.length / 2)];
  }

  public static count(func: AnyFunction | string): number {
    const track = CallTimer.getTrack(func);
    return track.length;
  }

  private static tracks: {[name: string]: number[]} = {};

  private static getTrack(func: AnyFunction | string): number[] {
    const track = isFunction(func)
      ? CallTimer.tracks[getFuncName(func)]
      : CallTimer.tracks[func];
    return track
      ? track
      : [];
  }
}

export default CallTimer;
