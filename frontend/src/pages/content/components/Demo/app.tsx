import axios from "axios";
import bubble from "@assets/img/bubbles.png";

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

  // var port = chrome.runtime.connect();

  // window.addEventListener("message", (event) => {
  //   // We only accept messages from ourselves
  //   if (event.source != window) {
  //     return;
  //   }

  // chrome.tabs.onUpdated.addListener(() => {
  //   console.log("lololololololol");
  // });

  // function searchTweets() {
  //   const container = document.querySelector(
  //     "[aria-label='Timeline: Explore'] > div"
  //   );
  //   if (container) {
  //     clearInterval();
  //   }
  // }

  // let countTimer = 0;
  // counterInterval = window.setInterval(() => {
  //   if (countTimer >= 20) {
  //     console.error("ŚLEPA ULICZKA KONIEC GRY");
  //   } else {
  //     countTimer++;
  //     searchTweets();
  //   }
  // });

  function addLinkElement(el) {
    // console.log("AddLinkElement");
    const temp = el.querySelector(".r-1wtj0ep");

    // console.log(temp);

    const image = document.createElement("img");
    image.setAttribute("class", "expandButton");
    image.setAttribute("src", bubble);
    // image;
    if (!temp.querySelector(".expandButton")) {
      // console.log("DODAJE ELEMENT");
      image.innerHTML = "Check alternatives";
      const div = temp.children[temp.children.length - 1];
      console.log(div);
      div.style.display = "flex";
      div.style.flexDirection = "row";
      image.addEventListener("click", (e) => {
        e.preventDefault();
        const url = el.querySelector("a[dir='auto']").href;
        const divAlternatives = document.createElement("div");
        divAlternatives.classList.add("alternatives");
        el.parentElement.insertBefore(divAlternatives, el.nextSibling);
        // axios
        //   .get(`http://127.0.0.1:8090/twitt/twittCompare/?url=${url}`)
        //   // axios({
        //   //   method: "get",
        //   //   url: `http://127.0.0.1:8090/twitter/twittCompare/?url=${url}`,
        //   //   responseType: "json",
        //   //   mode: "no-cors",
        //   //   headers: {
        //   //     "Access-Control-Allow-Origin": "*",
        //   //     "Content-Type": "application/json",
        //   //   },
        //   // })
        //   .then((res) => {
        //     res.data.forEach((el) => {
        //       console.log(el);
        //       // axios.get(el).then((temp) => {
        //       //   const element = document.createElement("iframe");
        //       //   element.innerHTML = temp.data;
        //       //   iframes.push(element);
        //       //   div.insertBefore(element, div.firstChild);
        //       // });
        //     });
        //   })
        //   .catch((e) => console.error(`Coś nie działa: ${e.toString()}`));
        console.log(url);
        // alert("siema");
      });
      div.insertBefore(image, div.firstChild);
    }
  }

  window.setInterval(() => {
    const container = document.querySelectorAll(
      "[data-testid='primaryColumn'] > div [data-testid='tweet']"
    );

    container.forEach(addLinkElement);
  }, 1500);

  // function onContentChange() {}

  //   if (event.data.type && (event.data.type == "FROM_PAGE")) {
  //     console.log("Content script received: " + event.data.text);
  //     port.postMessage(event.data.text);
  //   }
  // }, false);

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
