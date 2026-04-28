const toggle = document.getElementById("themeToggle");
const body = document.body;
const icon = document.getElementById("themeIcon");
const input = document.getElementById("searchInput");
const button = document.getElementById("searchBtn");

toggle.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    toggle.firstChild.textContent = "DARK ";
    icon.src = "/assets/icon-moon.svg";
  } else {
    toggle.firstChild.textContent = "LIGHT ";
    icon.src = "/assets/icon-sun.svg";
  }
});

async function fetchUser(username) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);

    if (!response.ok) {
      throw new Error();
    }

    const user = await response.json();

    document.getElementById("avatar").src = user.avatar_url;
    document.getElementById("name").textContent = user.name || user.login;
    document.getElementById("username").textContent = "@" + user.login;
    document.getElementById("bio").textContent = user.bio || "Ce profil n'a pas de bio";
    document.getElementById("repos").textContent = user.public_repos;
    document.getElementById("followers").textContent = user.followers;
    document.getElementById("following").textContent = user.following;

    const date = new Date(user.created_at);
    document.getElementById("joinDate").textContent =
      "Joined " + date.toLocaleDateString();

    document.getElementById("location").textContent =
      "📍 " + (user.location || "Non disponible");

    document.getElementById("twitter").textContent =
      user.twitter_username
        ? "🐦 @" + user.twitter_username
        : "🐦 Non disponible";

    document.getElementById("website").textContent =
      user.blog || "🔗 Non disponible";

    document.getElementById("company").textContent =
      user.company || "🏢 Non disponible";

  } catch {
    alert("User not found");
  }
}

button.addEventListener("click", () => {
  fetchUser(input.value);
});

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    fetchUser(input.value);
  }
});

fetchUser("octocat");