import { Toaster } from "react-hot-toast";
import { Feedback } from "../Feedback";
import { Footer } from "../Footer";
import { GlobalStyle } from "./GlobalStyle.styled";

export const App = () => {
  return (
    <>
      <Feedback />
      <Footer />
      <GlobalStyle />
      <Toaster />
    </>
  );
};
