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
import Login from "./components/login/Login";
import Register from "./components/register/Register";

function App() {
  const theme = {
    light: {
      primary: "#0d6efd", //"#39A7FF",
      text: "rgba(0,0,0,0.7)",
      smallText: "rgba(0,0,0,0.4)",
    },
    size: {
      small: "13px",
      medium: "17px",
      large: "22px",
      extraLarge: "32px",
    },
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route index element={<Login />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />
        <Route path="/*" element={<Login />} />
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
