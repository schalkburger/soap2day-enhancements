// ==UserScript==
// @name           Soap2Day Enhancements Scripts
// @version        1.1.0
// @description    Soap2Day - Various functions to enhance Soap2Day like autoplay, fullscreen mode and semantic titles.
// @author         Schalk Burger
// @include        https://soap2day.to/*
// @include        https://soap2day.im/*
// @include        https://soap2day.ac/*
// @include        https://soap2day.se/*
// @include        https://s2dfree.to/*
// @include        https://s2dfree.cc/*
// @include        https://s2dfree.de/*
// @include        https://s2dfree.is/*
// @include        https://s2dfree.in/*
// @include        https://s2dfree.nl/*
// @run-at         document-idle
// @namespace https://greasyfork.org/users/776541
// ==/UserScript==

(function () {
  "use strict";
  function rafAsync() {
    return new Promise((resolve) => requestAnimationFrame(resolve));
  }
  async function checkElement(selector) {
    let querySelector = null;
    while (querySelector === null) {
      await rafAsync();
      querySelector = document.querySelector(selector);
    }
    return querySelector;
  }
  checkElement("video").then((element) => {
    const newScript = document.createElement("script");
    const inlineScript = document.createTextNode(
      "jwplayer().play();jwplayer().setFullscreen(true);"
      // "jwplayer().play();jwplayer().on('play', function(e) { document.querySelector('video).requestPictureInPicture(); })"
      // "jwplayer().play();jwplayer().pause()"
    );
    newScript.appendChild(inlineScript);
    const target = document.body;
    target.appendChild(newScript);

    // player.on("play", function (e) {
    //   console.log("Video playing");
    //   let videoElement = document.querySelector("video");
    //   videoElement.requestPictureInPicture();

    //   // videoElement.addEventListener("loadedmetadata", async () => {
    //   //   await videoElement.requestPictureInPicture();
    //   // });
    // });
  });
  // checkElement(".jwplayer").then((element) => {
  //   console.log(".jwplayer exists");
  //   const player = document.getElementById("player");
  //   if (typeof player != "undefined" && player != null) {
  //     // Exists.
  //     console.log("Player exists");
  //     player.classList.add("focus");
  //     setTimeout(() => {
  //       console.log("Player setTimeout");
  //       document.dispatchEvent(new Event("click"));
  //       document.querySelector("#player").dispatchEvent(new Event("click"));
  //       let videoElement = document.querySelector("video");
  //       videoElement.onloadedmetadata = function () {
  //         enterPictureInPicture(document.querySelector("video"));
  //         videoElement.requestPictureInPicture();
  //       };
  //     }, "1000");
  //   }
  // });
})();

window.addEventListener("load", (event) => {
  console.log("SOAP2DAY Scripts Loaded");
  // Auto click Home button
  const homeButton = document.getElementById("btnhome");
  if (typeof homeButton != "undefined" && homeButton != null) {
    // Exists.
    console.log("Home button exists");
    homeButton.classList.add("focus");
    setTimeout(() => {
      document.dispatchEvent(new Event("click"));
      document.querySelector("#btnhome").dispatchEvent(new Event("click"));
    }, "2000");
  }
  // Set episode title
  const episodeTitleSelector = document.querySelector(".col-sm-12.col-lg-12 > .alert.alert-info");
  const episodeTitleSelectorContent = episodeTitleSelector.textContent;
  if (typeof episodeTitleSelector != "undefined" && episodeTitleSelector != null) {
    // Exists.
    // console.log("Episode title exists");
    const episodeArray = episodeTitleSelectorContent.split(">>");
    let showName = episodeArray[2];
    let episodeTitle = episodeArray[episodeArray.length - 1];
    // console.log("Episode title:", episodeTitle);

    setTimeout(() => {
      document.title = showName + ":" + episodeTitle;
    }, "500");
  }
});
