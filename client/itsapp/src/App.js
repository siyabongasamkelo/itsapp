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
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import { ChatContextProvider } from "./context/ChatContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { user } = useContext(AuthContext);
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
        <Route index element={user ? <Chat /> : <Login />} />
        <Route path="/chat" element={user ? <Chat /> : <Login />} />
        <Route path="/register" element={user ? <Register /> : <Login />} />
        <Route path="/" element={<Login />} />
        <Route path="/*" element={<Login />} />
      </Route>
    )
  );
  return (
    <>
      <ChatContextProvider user={user}>
        <ThemeProvider theme={theme}>
          <Container>
            <Wrapper>
              <InnerWrapper>
                <Header />
                <ToastContainer />
                <RouterProvider router={router} />
              </InnerWrapper>
            </Wrapper>
          </Container>
        </ThemeProvider>
      </ChatContextProvider>
    </>
  );
}

export default App;
