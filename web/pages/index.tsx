import { GetServerSideProps } from "next";

interface HomeProps {
  count: number
}

export default function Home(props: HomeProps) {
  return (
    <div>
      <h1>Contagem: {props.count}</h1>
      <p>Receba, meu pai!</p>
    </div>
  )
}

export const getServerSideProps = async () => {
  const response = await fetch('http://localhost:3333/pools/count')
  const data = await response.json()

  console.log(data)
  return {
    props: {
      count: data.count,
    }
  }
}