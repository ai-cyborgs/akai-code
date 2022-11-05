import { debug } from "console";
import { useEffect } from "react";

export default function App() {
  // window.addEventListener('load', () => {
  //   const urlRegexp = new RegExp("^https\\:\\/\\/twitter\\.com.*");
  //   console.log("XDDDD")
  //   if (window.location.href.match(urlRegexp)) {
  //     let tweets = document.querySelectorAll("[data-testid='tweet']");
  //     console.log(tweets);
  //   }
  // })
  // setTimeout(() => {
  //  debugger;

  // } ,2000);

  // window.addEventListener("load", () => {
  //   debugger
  // });

  var port = chrome.runtime.connect();

  window.addEventListener("message", (event) => {
    // We only accept messages from ourselves
    if (event.source != window) {
      return;
    }
  
    if (event.data.type && (event.data.type == "FROM_PAGE")) {
      console.log("Content script received: " + event.data.text);
      port.postMessage(event.data.text);
    }
  }, false);

  // document.addEventListener("resize", () => {
  //   console.log("hihihaha");
  //   // document.querySelector("[aria-label='Timeline: Explore'] > div");
  //   // console.log(container.children) //container.children.length
  // })

  // useEffect(() => {
  //   console.log("xdDUP");
  // }, []);

  return <div>Hello world</div>;
}
