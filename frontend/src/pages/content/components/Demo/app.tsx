import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    console.log(window.location.href);
    console.log("content view loaded");
  }, []);

  return <div>Hello world</div>;
}
