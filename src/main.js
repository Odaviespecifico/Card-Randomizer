import './style.css'

const names = [
  "James",
  "Mary",
  "John",
  "Patricia",
  "Robert",
  "Jennifer",
  "Michael",
  "Linda",
  "William",
  "Elizabeth",
  "David",
  "Barbara",
  "Richard",
  "Susan",
  "Joseph",
  "Jessica",
  "Thomas",
  "Sarah",
  "Charles",
  "Karen"
];

const countries = [
  "United States",
  "Brazil",
  "United Kingdom",
  "Canada",
  "France",
  "Germany",
  "Italy",
  "Spain",
  "Portugal",
  "Mexico",
  "Argentina",
  "Japan",
  "China",
  "South Korea",
  "India",
  "Egypt",
  "South Africa",
  "Sweden",
  "Norway",
  "Australia"
];


function getRandom() {
  document.querySelector('.name').textContent = names[Math.floor(Math.random() * names.length)];
  document.querySelector('.nationality').textContent = countries[Math.floor(Math.random() * countries.length)];
}

document.querySelector('button').addEventListener('click', getRandom);
getRandom()