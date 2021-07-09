import { formatDateToEn } from './libs/date';
import './style.less'
// 模拟数据用于本地调试，build 需注释
import './mock'
import { createApp } from 'petite-vue'
import Api from './libs/api'
import BScroll from 'better-scroll'

const api = new Api()
let scrollList: BScroll = null

function setTheme(mode = '') {
  const html = document.querySelector('html')
  html.setAttribute('theme', mode)
}

function __init__() {
  createApp({
    searchValue: '',
    hideHead: false,
    loading: false,
    list: [],
    theme: 'moon',
    now: formatDateToEn(new Date()),
    tags: ['Business', 'Entertainment', 'Society', 'Science', 'Hotspots'],

    formatDate(v: string) {
      return formatDateToEn(v)
    },
    changeTheme() {
      if (this.theme === 'moon') {
        this.theme = 'sun'
        setTheme('dark-mode')
      }
      else {
        this.theme = 'moon'
        setTheme()
      }
    },

    onMounted() {
      this.initBScroll()
      this.fetchData()
    },

    initBScroll() {
      scrollList = new BScroll('.bscroll-wrapper', {
        scrollY: true,
        scrollX: false,
        click: true,
        eventPassthrough: 'horizontal',
        probeType: 2
      })

      scrollList.on('scroll', (ev) => {
        if (ev.y < -200) {
          this.hideHead = true
        }
        else {
          this.hideHead = false
        }
      })
    },

    async fetchData() {
      this.loading = true
      try {
        const _res = await api.query()
        this.list = _res || []

      } catch (error) {
      }
      setTimeout(() => {
        scrollList.refresh()
      }, 100)
      this.loading = false
    },

    search() {
      alert('Search:' + this.searchValue)
    }

  }).mount('#app')

  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    setTheme('dark-mode')
  }
}

window.onload = __init__
