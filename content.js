function redirectPage() {
  const aliasLocation = document.querySelector(".c-tools-share__button.c-tools-share__button--copy-link")?.getAttribute("data-href");

  if (isValid(aliasLocation)) {
    console.log(`Location is ${aliasLocation}, redirecting to paywall remover...`);
    observer.disconnect();
    window.location.href = `https://isideload.com/?q=${aliasLocation}`;
  }
}

function isValid(url) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

const observer = new MutationObserver(redirectPage);
observer.observe(document, { childList: true, subtree: true });

redirectPage();
