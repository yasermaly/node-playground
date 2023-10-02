async function getUser() {
  const response = await fetch('https://api.github.com/users/yasermaly');
  const data = await response.json();
  console.log(data);
}

getUser();
