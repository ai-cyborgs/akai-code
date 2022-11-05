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
  setTimeout(() => {
   debugger;
    
  } ,2000);
  
  

  document.addEventListener("resize", () => {
    console.log("hihihaha");
    // document.querySelector("[aria-label='Timeline: Explore'] > div");
    // console.log(container.children) //container.children.length
  })

  useEffect(() => {
    console.log("xdDUP");
  }, []);

  return <div>Hello world</div>;
}
