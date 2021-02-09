import Router, { useRouter } from 'next/router'
import { useEffect } from "react"

const StaticPropsDetail = () => {
  const pathname2 = useRouter().asPath;

  useEffect(() => {
    const { pathname } = Router;
    if (pathname == '/product/[id]') {
      Router.push(pathname2 + '/detail')
    }
  });

  return 0
}

export default StaticPropsDetail
