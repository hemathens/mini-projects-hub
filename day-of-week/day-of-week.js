const quotes = [
  "Don’t expect more if you’ve not shown enough gratitude for what you’ve already got.",
  "Becoming the best at all you do will not cost you your self-worth; it will rather bring out the gem in you.",
  "Don’t curse yourself when things do not go your way because not everything is meant to go your way.",
  "Your ability to love and appreciate yourself has a part to play in how effective you become in your chosen field.",
  "Sometimes all that a hurting soul desires is a sincere smile; put on a sincere smile and lighten up a dying soul.",
  "Your greatest strength does not lie in what someone succeeded at but in what you do effortlessly.",
  "The hope for a better tomorrow is what you need to live above the challenge of today.",
  "Failure is a part of success; rise up from where you have fallen and try one more time.",
  "Admire all the great people and learn from them, but don’t forget to contribute your quota to this world.",
  "You only have a lifetime to contribute what can be remembered forever; think generational and contribute your best.",
  "Believing in possibilities is one way to make the seemingly impossible possible.",
  "If you spend your time scheming for others to fail, you may not have enough time to plan for your success.",
  "No matter how gifted you are, if you exercise your gift in pride the world will resent you.",
  "Don’t make conclusions about people upon hearsay, give them enough time around you to prove who they are.",
  "Don’t be in a hurry to be recognized; be in a hurry to develop yourself and the world will recognize you.",
  "Don’t entertain evil schemes because you need a good heart for your light to continue shining.",
  "Hard work and commitment to purpose has the power to bring you from obscurity into the limelight.",
  "Ideas for positive impact and wealth creation will never be exhausted; keep thinking and work harder.",
  "What you think you can’t do is what you have not decided to be committed to.",
  "Hope is as important as effort because your energy is mostly unleashed in the direction of what you hope for.",
  "The best way your pain can be felt is to feel the pains of others.",
  "Every stage in life buys you a new ticket for the next level; give your spirit, soul, and body to your assignment.",
  "Live and allow others to also live by being a positive inspiration not a thorn in others' flesh.",
  "The world is full of myriad problems not because the devil is powerful, but because of man’s greed and selfishness.",
  "You cannot reign in any field if you're not ready to train.",
  "You are not a failure because you tried and did not succeed; you are a failure because you’ve tried nothing.",
  "Don’t downplay your source of motivation because you need it to keep achieving.",
  "Leadership is selfless service, not self service.",
  "Big dreams mostly start small; respect humble beginnings and nurture your dreams.",
  "Never look down on your ability to contribute to society; you are as good as you think you can be.",
  "Stay true to yourself by staying original.",
  "The beauty of hard work is the reward of labour.",
  "Admire great people but don’t forget to contribute your quota to inspire the next generation.",
  "Sometimes all you need to succeed is to sacrifice a little more and push a little harder.",
  "You may not have enough strength in 20 years to do what you can do today.",
  "Success is never achieved with a single act—live one day at a time.",
  "Justifying all your actions with your feelings is the best way to kill your conscience.",
  "When all is said and done, more will be said than done, so do more while you still have life.",
  "Compete with yourself and become better.",
  "What makes us great leaders is not pursuing personal ambition, but willingness to sacrifice so others can live.",
  "Don’t feel pressured to dance when everyone is dancing—especially when you wear torn sandals.",
  "You are as strong as you think you are; believe in yourself because every great achiever did.",
  "Be mindful of what you always allow to engage your thoughts—they manifest physically.",
  "Use money to your advantage; refuse to be enslaved by it and help others.",
  "Dream dreams because dreams are good, but dreams without works are dead.",
  "Don't expect the world to believe in you before you take the first step—believe in yourself.",
  "Until you live in the reality that you’re on earth for a short time, strategic planning won’t matter.",
  "Celebrate the success of others and you will succeed too.",
  "Your seemingly little contributions are needed in achieving the ultimate goal.",
  "We are stronger together and in staying together we work together and achieve together."
];

// Get today's weekday
const date = new Date();
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const dayis = dayNames[date.getDay()];
document.getElementById("weekday").textContent = dayis;

// Show IST date & time
const istOptions = {
  timeZone: 'Asia/Kolkata',
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: true
};
const istDateTime = new Intl.DateTimeFormat('en-IN', istOptions).format(new Date());
document.getElementById("datetime").textContent = `Date & Time (IST): ${istDateTime}`;

// Pick 3 unique random quotes
function getRandomQuotes(arr, count) {
  const selected = new Set();
  while (selected.size < count) {
    const index = Math.floor(Math.random() * arr.length);
    selected.add(arr[index]);
  }
  return Array.from(selected);
}

const quotesContainer = document.getElementById("quotes-container");
const dailyQuotes = getRandomQuotes(quotes, 3);
dailyQuotes.forEach(quote => {
  const p = document.createElement("p");
  p.textContent = `“${quote}”`;
  quotesContainer.appendChild(p);
});
