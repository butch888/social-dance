import Header from "./components/Header";
import Main from "./components/Main";

export default function Home() {
  return (
    <div className="max-w-[1440px] mx-auto h-[600px]">
      <Header />
      <Main/>
    </div>
  );
}
