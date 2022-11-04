import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    const urlRegexp = new RegExp("^https\\:\\/\\/twitter\\.com.*");
    if (window.location.href.match(urlRegexp)) {
      let tweets = document.querySelectorAll("[data-testid='tweet']");
      console.log(tweets);
    }
    console.log("content view loaded");
  }, []);

  return <div>Hello world</div>;
}
