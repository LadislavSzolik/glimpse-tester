import Container from '../components/common/container'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Container>
      <Component {...pageProps} />
    </Container>
  )
}

export default MyApp
