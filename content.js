console.log("Script running on:", location.href);

function redirectPage() {
  const aliasLocation = document.querySelector(".c-tools-share__button.c-tools-share__button--copy-link")?.getAttribute("data-href");

  if (aliasLocation) {
    console.log(`Location is ${aliasLocation}`);
  } else {
    console.log("No");
  }
}

const observer = new MutationObserver(redirectPage);
observer.observe(document, { childList: true, subtree: true });

redirectPage();
