import comp from "/Users/zhuyq0719/my-docs/src/.vuepress/.temp/pages/zh/star/index.html.vue"
const data = JSON.parse("{\"path\":\"/zh/star/\",\"title\":\"星标\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"星标\",\"dir\":{\"index\":false},\"index\":false,\"feed\":false,\"sitemap\":false,\"blog\":{\"type\":\"type\",\"key\":\"star\"},\"layout\":\"BlogType\",\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"WebPage\\\",\\\"name\\\":\\\"星标\\\"}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/zh/star/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Blog Demo\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"星标\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}]]},\"readingTime\":{\"minutes\":0,\"words\":0},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
