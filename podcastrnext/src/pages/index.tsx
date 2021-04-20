//Para criar um next.js:  npx create-next-app (NOME DO APP)
//Usando SSG
export default function Home(props) {
  return (
    <div>
    <h1>Index</h1>
    {/* <p>{JSON.stringify(props.episodes)}</p> */}
    </div>
  )
}

export async function getStaticProps(){
  const response = await fetch('http://localhost:3333/episodes') //yarn server pra rodar
  const data = await response.json()

  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8, //em 8 8 horas
  }
}