import Router, { useRouter } from 'next/router'
import { useEffect } from "react"

const StaticPropsDetail = () => {
  const pathname2 = useRouter().asPath;

  useEffect(() => {
    const { pathname } = Router;
    if (pathname == '/product/[id]') {
      // Эту логику я просил в nginx реализовать
      Router.push(pathname2 + '/detail')
    }
  });

  // return 0 очень странно выглядит - компонент вполне null или undefined может возвращать, если это надо
  return 0
}

export default StaticPropsDetail
