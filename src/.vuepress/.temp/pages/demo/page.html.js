import comp from "/Users/zhuyq0719/my-docs/src/.vuepress/.temp/pages/demo/page.html.vue"
const data = JSON.parse("{\"path\":\"/demo/page.html\",\"title\":\"Page Config\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Page Config\",\"icon\":\"file\",\"order\":3,\"author\":\"Ms.Hope\",\"date\":\"2020-01-01T00:00:00.000Z\",\"category\":[\"Guide\"],\"tag\":[\"Page config\",\"Guide\"],\"sticky\":true,\"star\":true,\"footer\":\"Footer content for test\",\"copyright\":\"No Copyright\",\"description\":\"Content before more comment is regarded as page excerpt.\",\"head\":[[\"script\",{\"type\":\"application/ld+json\"},\"{\\\"@context\\\":\\\"https://schema.org\\\",\\\"@type\\\":\\\"Article\\\",\\\"headline\\\":\\\"Page Config\\\",\\\"image\\\":[\\\"\\\"],\\\"datePublished\\\":\\\"2020-01-01T00:00:00.000Z\\\",\\\"dateModified\\\":null,\\\"author\\\":[{\\\"@type\\\":\\\"Person\\\",\\\"name\\\":\\\"Ms.Hope\\\"}]}\"],[\"meta\",{\"property\":\"og:url\",\"content\":\"https://mister-hope.github.io/demo/page.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Blog Demo\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"Page Config\"}],[\"meta\",{\"property\":\"og:description\",\"content\":\"Content before more comment is regarded as page excerpt.\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"en-US\"}],[\"meta\",{\"property\":\"og:locale:alternate\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:author\",\"content\":\"Ms.Hope\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Guide\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"Page config\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2020-01-01T00:00:00.000Z\"}],[\"link\",{\"rel\":\"alternate\",\"hreflang\":\"zh-cn\",\"href\":\"https://mister-hope.github.io/zh/demo/page.html\"}]]},\"readingTime\":{\"minutes\":1.14,\"words\":341},\"filePathRelative\":\"demo/page.md\",\"excerpt\":\"<p>Content before <code>more</code> comment is regarded as page excerpt.</p>\\n\",\"autoDesc\":true}")
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
