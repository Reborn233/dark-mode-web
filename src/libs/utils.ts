const Utils = () => { }
Utils.noop = () => { }
Utils.getUrlParams = () => {
  let url = location.search //获取url中"?"符后的字串
  let theRequest = new Object() as any
  if (url.indexOf('?') !== -1) {
    let str = url.substr(1)
    let strs = str.split('&')
    for (let i = 0; i < strs.length; i++) {
      let index = strs[i].indexOf('=') + 1
      let len = strs[i].length
      theRequest[strs[i].split('=')[0]] = unescape(
        strs[i].substring(index, len),
      )
    }
  } else {
    return null
  }
  return theRequest
}
Utils.sum = function (a: string, b: string) {
  const aa = Number(a)
  const bb = Number(b)
  return '' + (aa + bb).toFixed(2)
}
Utils.parseElement = (htmlString: string) => {
  return new DOMParser().parseFromString(htmlString, 'text/html').body
    .childNodes[0]
}
Utils.render = (tpl: string, data: Object) => {
  const code =
    "var p=[];with(this){p.push('" +
    tpl
      .replace(/[\r\t\n]/g, ' ')
      .split('<%')
      .join('\t')
      .replace(/((^|%>)[^\t]*)'/g, '$1\r')
      .replace(/\t=(.*?)%>/g, "',$1,'")
      .split('\t')
      .join("');")
      .split('%>')
      .join("p.push('")
      .split('\r')
      .join("\\'") +
    "');}return p.join('');"
  return new Function(code).apply(data)
}
Utils.extend = (defaultOpts: Object, opts: Object) => {
  return Object.assign({}, defaultOpts, opts)
}
Utils.sleep = (timeout: number) => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve()
    }, timeout)
  })
}
Utils.throttle = (fn: any, delay: number = 1000) => {
  return function (...args) {
    let nowTime = +new Date();
    if (!fn.lastTime || nowTime - fn.lastTime > delay) {
      fn.apply(this, args);
      fn.lastTime = nowTime;
    }
  };
}
export default Utils
