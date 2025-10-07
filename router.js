async function loadRoute() {
  const hash = location.hash.slice(2);      // remove "#/" from the start
  const page = hash || "home";              // default to "home" if empty

  try {
    const res = await fetch(`pages/${page}.html`, { cache: "no-store" });
    const html = await res.text();
    document.getElementById("app").innerHTML = html;
  } catch (e) {
    document.getElementById("app").textContent = "Couldn't load this page.";
  }
}

// Load the right page on first load and whenever the hash changes
window.addEventListener("hashchange", loadRoute);
window.addEventListener("DOMContentLoaded", loadRoute);
