import comp from "/Users/zhuyq0719/my-docs/src/.vuepress/.temp/pages/zh/posts/index.html.vue"
const data = JSON.parse("{\"path\":\"/zh/posts/\",\"title\":\"Posts\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Posts\",\"article\":false,\"feed\":false,\"sitemap\":false,\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"Posts\\\"}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/zh/posts/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Blog Demo\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Posts\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}]]},\"readingTime\":{\"minutes\":0,\"words\":1},\"filePathRelative\":null,\"excerpt\":\"\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
