export function warn(msg) {
  console.error(`[Scroll warn]: ${msg}`)
}

export function assert(condition, msg) {
  if (!condition) {
    throw new Error(('[Scroll] ' + msg))
  }
}