import { GetStaticProps, GetStaticPaths } from 'next'
import { useEffect } from "react"
import Router, { useRouter } from 'next/router'
import { Product } from '../../../../interfaces'
import { sampleUserData } from '../../../../utils/sample-data'
import Layout from '../../../../components/Layout'
import ListDetail from '../../../../components/ListDetail'

type Props = {
  item?: Product
  errors?: string
}

const StaticPropsDetail = ({ item, errors }: Props) => {
  const pathname2 = useRouter().asPath;
  useEffect(() => {
    const arr = pathname2.split('/');
    // useRouter().query.id - так правильно, а не самому парсить адрес
    if (isNaN(+arr[2])) {
      Router.push('/')
    }
  });

  if (errors) {
    return (
      <Layout title="Error | Next.js + TypeScript Example">
        <p>
          <span style={{ color: 'red' }}>Error:</span> {errors}
        </p>
      </Layout>
    )
  }

  return (
    <Layout
      title={`${item ? item.name : 'User Detail'
        } | Next.js + TypeScript Example`}
    >
      {item && <ListDetail item={item} />}
    </Layout>
  )
}

export default StaticPropsDetail

// А какой смысл этого? Не очень понимаю
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = sampleUserData.map((user) => ({
    params: { id: user.id.toString() },
  }))
  return { paths, fallback: false }
}
export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const id = params?.id
    // Ненене, то, что на js ты данные получил - вроде то как хорошо, но у тебя же здесь должен быть зарпос на сервер -
    // в 90% случаев сервер будет отдельный проект и нельзя просто переменную импортировать
    const item = sampleUserData.find((data) => data.id === Number(id))
    return { props: { item } }
  } catch (err) {
    return { props: { errors: err.message } }
  }
}

