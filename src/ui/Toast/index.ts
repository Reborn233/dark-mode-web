import Utils from '../../libs/utils'
import * as bootstrap from 'bootstrap'
const tmp = `
  <div class="toast" role="alert" aria-live="assertive" aria-atomic="true" data-bs-delay="<%=ms%>">
      <div class="toast-header">
      <svg class="bd-placeholder-img rounded me-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#007aff"></rect></svg>
        <strong class="me-auto">提示</strong>
        <small></small>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="toast-body">
        <%=content%>
      </div>
    </div>
`


function Toast(content: string = '提示内容', ms: number = 3000) {
  const $wrapper = document.querySelector('.toast-container')
  const toastEl = Utils.parseElement(Utils.render(tmp, {
    content,
    ms
  }))
  $wrapper.appendChild(toastEl)
  toastEl.addEventListener('hidden.bs.toast', function () {
    setTimeout(() => { $wrapper.removeChild(this) }, 1200)
  })
  return new bootstrap.Toast(toastEl, {})
}
export default Toast
