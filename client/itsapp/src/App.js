import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Container } from "react-bootstrap";
import Chat from "./pages/Chat";
import Header from "./components/header/Header";
import { InnerWrapper, Wrapper } from "./components/Wrapper.styled";
import { ThemeProvider } from "styled-components";

function App() {
  const theme = {
    light: {
      primary: "#0d6efd", //"#39A7FF",
      text: "rgba(0,0,0,0.7)",
      smallText: "rgba(0,0,0,0.4)",
    },
    size: {
      small: "12px",
      medium: "17px",
      large: "22px",
    },
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route index element={<Chat />} />
        <Route path="/" element={<Chat />} />
      </Route>
    )
  );
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container>
          <Wrapper>
            <InnerWrapper>
              <Header />
              <RouterProvider router={router} />
            </InnerWrapper>
          </Wrapper>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
