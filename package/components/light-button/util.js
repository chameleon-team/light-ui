export function transCls(base, ctx) {
  const { type, disabled, size, hover, hasWidth} = ctx;

  let classList = [base]

  if (hover) {
    classList.push(`${base}-active`)
  }

  if (!!~'default|primary'.indexOf(type)) {
    classList.push(`${base}-${type}`)

    if (hover) {
      classList.push(`${base}-${type}-active`)
    }

    if (disabled) {
      classList.push(`${base}-${type}-disable`)
    }
  }
  
  if (!!~'large|medium|small|mini'.indexOf(size) && !hasWidth) {
    classList.push(`${base}-${size}`)
  }

  if (disabled) {
    classList.push(`${base}-disable`)
  }

  return classList.join(' ')
}