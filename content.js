function redirectPage() {
  const aliasLocation = document.querySelector(".c-tools-share__button.c-tools-share__button--copy-link")?.getAttribute("data-href");

  if (isValid(aliasLocation)) {
    showRedirectNotice();
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

function showRedirectNotice() {
  const banner = document.createElement("div");
  banner.textContent = "Redirecting...";
  Object.assign(banner.style, {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    padding: "10px 0",
    background: "rgba(15,82,35,0.75)",
    color: "white",
    textAlign: "center",
    fontFamily: "sans-serif",
    fontSize: "14px",
    letterSpacing: "0.5px",
    zIndex: "999999",
    opacity: "0",
    transition: "opacity 0.3s ease",
  });

  document.body.appendChild(banner);

  // allow DOM to paint, then fade in
  requestAnimationFrame(() => {
    banner.style.opacity = "1";
  });
}

const observer = new MutationObserver(redirectPage);
observer.observe(document, { childList: true, subtree: true });

redirectPage();
