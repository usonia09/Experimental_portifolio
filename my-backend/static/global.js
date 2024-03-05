function $$(selector, context = document) {
  return Array.from(context.querySelectorAll(selector));
}

const navLinks = $$("nav a");
let currentLink = navLinks.find(
  (a) => a.host === location.host && a.pathname === location.pathname
);
currentLink?.classList.add("current");

let pages = [
  { url: ".", title: "Home" },
  {
    url: "projects",
    title: "Projects",
  },
  {
    url: "Assignments",
    title: "Assignments",
  },
  {
    url: "contact",
    title: "Contact Me",
  },
  {
    url: "resume",
    title: "My Resume",
  },
];

// const ARE_WE_HOME = document.documentElement.classList.contains("home");

let nav = document.createElement("nav");
document.body.prepend(nav);

for (let p of pages) {
  let url = p.url;
  let title = p.title;
  // url = !ARE_WE_HOME && !url.startsWith("http") ? "../" + url : url;
  let a = document.createElement("a");
  a.href = url;
  a.textContent = title;
  a.classList.toggle(
    "current",
    a.host === location.host && a.pathname === location.pathname
  );
  if (a.host !== location.host) {
    a.target = "_blank";
  }
  nav.append(a);
}

document.body.insertAdjacentHTML(
  "afterbegin",
  `
	<label class="color-scheme">
		Theme:
		<select>
            <option value="light">light</option>
            <option value="light dark">light dark</option>
            <option value="dark">dark</option>
		</select>
	</label>`
);

const select = document.querySelector("select");
if ("colorScheme" in localStorage) {
  document.documentElement.style.setProperty(
    "color-scheme",
    localStorage.colorScheme
  );
  select.value = localStorage.colorScheme;
}

select.addEventListener("input", function (event) {
  document.documentElement.style.setProperty(
    "color-scheme",
    event.target.value
  );
  localStorage.colorScheme = event.target.value;
});
