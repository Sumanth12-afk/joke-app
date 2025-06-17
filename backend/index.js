const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());

const jokes = {
  general: [
    "Why don’t scientists trust atoms? Because they make up everything!",
    "Parallel lines have so much in common… it’s a shame they’ll never meet.",
    "What do you call cheese that isn’t yours? Nacho cheese!",
    "The rotation of the Earth really makes my day.",
    "Did you hear about the restaurant on the moon? Great food, no atmosphere.",
    "Why don’t skeletons fight each other? They don’t have the guts.",
    "Why did the coffee file a police report? It got mugged.",
    "I’m on a seafood diet. I see food and I eat it.",
    "Why was the math book sad? It had too many problems.",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "I used to play piano by ear, but now I use my hands.",
    "I asked the librarian if the library had any books on paranoia. She whispered, 'They're right behind you.'",
    "My friend wants to become an archaeologist, but I’m trying to put him off. His life will be in ruins!",
    "I went to buy some camouflage pants but couldn’t find any.",
    "Don’t trust stairs—they’re always up to something.",
    "Why did the tomato turn red? It saw the salad dressing!",
    "Why can’t your nose be 12 inches long? Because then it would be a foot.",
    "I accidentally swallowed some food coloring. The doctor says I’m OK, but I feel like I’ve dyed a little inside.",
    "I told my suitcase there will be no vacation this year. Now I’m dealing with emotional baggage.",
    "I'm afraid for the calendar. Its days are numbered.",
    "Never trust math teachers with graph paper. They're plotting something.",
    "I bought a boat because it was for sail.",
    "You want to hear a roof joke? Never mind—it’s over your head.",
    "What did the ocean say to the beach? Nothing, it just waved.",
    "Why did the chicken join a band? Because it had the drumsticks!",
    "Two antennas met on a roof, fell in love, and got married. The reception was excellent.",
    "Why don’t some couples go to the gym? Because some relationships don’t work out.",
    "I would tell you a joke about time travel, but you didn’t like it.",
    "The shovel was a groundbreaking invention.",
    "Why was the stadium so cold? It was filled with fans."
  ],
  dad: [
    "I’m reading a book about anti-gravity. It’s impossible to put down!",
    "I used to hate facial hair—but then it grew on me.",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "What’s brown and sticky? A stick.",
    "Want to hear a joke about construction? I’m still working on it.",
    "I ordered a chicken and an egg from Amazon. I’ll let you know.",
    "I only know 25 letters of the alphabet. I don’t know y.",
    "Why do bees have sticky hair? Because they use honeycombs!",
    "How do cows stay up to date? They read the moos-paper.",
    "Did you hear the rumor about butter? Well, I'm not going to spread it!",
    "Why can’t a nose be 12 inches long? Because then it would be a foot!",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
    "Did you hear about the kidnapping at school? It’s fine, he woke up.",
    "I would avoid sushi if I were you—it’s a little fishy.",
    "Why are elevator jokes so good? They work on many levels.",
    "What do you call fake spaghetti? An impasta!",
    "Why did the dad joke cross the road? To get to the pun side.",
    "I made a pencil with two erasers. It was pointless.",
    "I used to be a baker, but I couldn't make enough dough.",
    "How do you organize a space party? You planet.",
    "Why don’t eggs tell jokes? They’d crack each other up.",
    "I got hit in the head with a can of soda. Luckily, it was a soft drink.",
    "Why was the broom late? It swept in.",
    "Why do cows wear bells? Because their horns don’t work.",
    "Did you hear about the guy who invented Lifesavers? He made a mint!",
    "Time flies like an arrow. Fruit flies like a banana.",
    "I'm friends with all electricians. We have good current connections.",
    "What do you call an elephant that doesn’t matter? An irrelephant.",
    "Claustrophobic people are more productive thinking outside the box.",
    "I was wondering why the ball was getting bigger. Then it hit me."
  ],
  programming: [
    "Why do programmers prefer dark mode? Because light attracts bugs.",
    "There are 10 types of people in the world: those who understand binary, and those who don’t.",
    "Why do Java developers wear glasses? Because they don’t C#.",
    "I told my computer I needed a break, and now it won’t stop sending me KitKats.",
    "Debugging: Removing the needles from the haystack.",
    "I would love to change the world, but they won’t give me the source code.",
    "A SQL query walks into a bar, walks up to two tables and asks: ‘Can I join you?’",
    "Why did the developer go broke? Because he used up all his cache.",
    "Why do Python programmers wear glasses? Because they can’t C.",
    "What’s a programmer’s favorite hangout place? The Foo Bar.",
    "I changed my password to 'incorrect' so whenever I forget, the computer says, 'Your password is incorrect.'",
    "How many programmers does it take to change a light bulb? None—it’s a hardware problem.",
    "In a world without fences and walls, who needs Gates and Windows?",
    "Why don’t programmers like nature? Too many bugs.",
    "I asked my computer for a joke, but it said '404: Joke Not Found.'",
    "My code doesn't work, I have no idea why. My code works, I have no idea why.",
    "Why do developers hate working late? Because they don’t want to commit after hours.",
    "There’s no place like 127.0.0.1",
    "Why did the functions stop calling each other? Because they had constant arguments.",
    "What did the Java code say to the C code? You've got no class.",
    "Why do software engineers mix up Halloween and Christmas? Because Oct 31 === Dec 25.",
    "How do you comfort a JavaScript bug? You console it.",
    "What's the object-oriented way to become wealthy? Inheritance.",
    "Programmers don’t byte—they nibble a bit.",
    "I told a joke in assembly once… but nobody got it.",
    "Why did the coder get kicked out of school? Because he kept classless behavior.",
    "Why was the developer unhappy at their job? They wanted arrays.",
    "Why was the function so clingy? It had closure issues.",
    "What do you call a programmer from Finland? Nerdic.",
    "Knock knock. Who’s there? Recursion. Knock knock..."
  ]
};

app.get('/api/joke', (req, res) => {
  const category = req.query.category || 'general';
  if (!jokes.hasOwnProperty(category)) {
    return res.status(400).json({ error: 'Invalid category' });
  }
  const selectedCategory = jokes[category];
  const randomIndex = Math.floor(Math.random() * selectedCategory.length);
  res.json({ joke: selectedCategory[randomIndex] });
});

app.listen(PORT, () => {
  console.log(`✅ Joke API running at http://localhost:${PORT}`);
});