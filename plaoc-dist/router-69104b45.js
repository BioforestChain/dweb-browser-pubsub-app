class BaseRouter {}
class Router extends BaseRouter {
  constructor() {
    super()
    Object.defineProperty(this, 'handlers', {
      enumerable: true,
      configurable: true,
      writable: true,
      value: [],
    })
  }
  use(...handlers) {
    this.handlers.push(...handlers)
  }
}
export { Router as R }
