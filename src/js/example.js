// export const example =
//   () => `Sensible webpack 5 boilerplate using Babel and PostCSS with a hot dev server
//   and an optimized production build.`

// 获取当前url路径，根据 pathname 引入不同的js文件
const pathname = window.location.pathname
const path = pathname.split('/')[1]
const js = path === 'icewhale-casaos-blog' ? 'index' : path
const jsPath = `./${js}.js`
// 插入到 html 中
const script = document.createElement('script')
script.src = jsPath
// 设置为 mcj 的 script
script.setAttribute('type', 'module')
document.head.appendChild(script)
