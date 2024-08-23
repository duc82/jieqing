import About from "../components/About";
import Album from "../components/Album";
import Calendar from "../components/Calendar";
import Detail from "../components/Detail";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";
import Message from "../components/Message";
import { TimeProvider } from "../providers/TimeProvider";

export default function App() {
  const time = new Date("2024-11-14T08:00:00").getTime();

  return (
    <TimeProvider time={time}>
      <Hero />
      <About />
      <Album />
      <Calendar />
      <Detail />
      <Gallery />
      <Message />
      <Footer />
    </TimeProvider>
  );
}
