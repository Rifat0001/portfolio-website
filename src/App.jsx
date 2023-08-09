import styled, { ThemeProvider } from "styled-components"
import { darkTheme } from "./Theme/Theme"

const Body = styled.div`
background-color: ${({ theme }) => theme.bg};
width: 100%;
height:100%;
overflow-x: hidden;
`
function App() {

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Body></Body>
      </ThemeProvider>
    </>
  )
}

export default App
