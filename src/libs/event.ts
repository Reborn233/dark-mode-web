
// 事件绑定装饰器
export function bindEvent(select: string, eventName: string = 'click') {
  return function (target: any, name: any) {
    const func = target[name]
    const El = document.querySelectorAll(select);
    El.forEach(e => {
      e.addEventListener(eventName, func.bind(target))
    })
  }
}

export function logable(target, key, descriptor) {
  return Object.assign({}, descriptor, {
    value: function (...params) {
      console.log(this)
      console.log(`this is ${descriptor.value.name || '[unknown]'}`)
      descriptor.value.apply(this, params)
    }
  })
}
