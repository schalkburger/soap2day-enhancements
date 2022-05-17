// ==UserScript==
// @name           Soap2Day Enhanced Scripts
// @version        1.0.0
// @description    Soap2Day - Autoplay shows and movies in fullscreen mode when page loads.
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
    );
    newScript.appendChild(inlineScript);
    const target = document.body;
    target.appendChild(newScript);
  });
})();

window.addEventListener("load", (event) => {
  console.log("SOAP2DAY Scripts Loaded");
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
});
