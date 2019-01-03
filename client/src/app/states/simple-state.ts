export class SimpleState<T> {
  private _state: T;

  constructor(public defaultState: T) {
    this._state = defaultState;
  }

  get CurrentState(): T {
    const tmp = {};
    Object.assign(tmp, this._state);
    return <T>tmp;
  }

  setState(key: keyof T, newValue: T[keyof T]) {
    this._state[key] = newValue;
  }
}
