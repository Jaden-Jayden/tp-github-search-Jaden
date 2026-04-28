async function sendRequest() {
  const request1 = new Request("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ username: "Jade-Jayden" }),
  });

  const response1 = await fetch(request1);

  const data = await response1.json(); // read the response body
  console.log(data);
}

sendRequest();

async function getUser() {
  const response = await fetch("https://api.github.com/users");
  const data = await response.json();
  console.log(data);
}

getUser();