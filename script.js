/* ----------------- balloons ----------------- */
function startBalloons() {
  for (let i = 0; i < 20; i++) {
    const b = document.createElement("div");

    b.className = "balloon";
    b.style.left = Math.random() * 100 + "vw";
    b.style.background = randomColor();
    b.style.animationDuration = 3 + Math.random() * 3 + "s";

    document.body.appendChild(b);
  }
}

/* ----------------- birthday text ----------------- */
function showBirthdayText() {
  document.getElementById("birthdayText").style.display = "block";
}

/* ----------------- random color ----------------- */
function randomColor() {
  const colors = ["red", "blue", "green", "purple", "orange", "pink"];
  return colors[Math.floor(Math.random() * colors.length)];
}

/* ----------------- friends data ----------------- */
/* ----------------- friend data ----------------- */
const friends = {
  pari:   { password: "BEST FRIEND", message: "i am blessed to have you in my life /n we are blessed that you are our classmate who loves to give other what he has for himself thank you for being this person /n but be the person who you really want to be it is not your responsibility to be the perfect imagination of others you are awesome the way you are the way you want to be. HappyBirthday shankooo❤️" },
  hayat: { password: "hayat", message: "Happy Birthday guruu \n Archyzz ty wasta khairan Allah ty naseeb a bknt, Shokain insan ya to bedarwar❤️ zindag batha sehat mand batha " },
  fajir:  { password: "fajj", message: "To /n our mentor /n we meet alot of people in life..people we meet once...people we work with...there is alot of interaction going on .. connections frnds ,fellows,relatives,teachers even more maybe ....actions that make us sad or happy...its all a part of life..../nits not real just  in my head .but i think there are these waves the one's with soothing lenght and frequency or the opposite...waves come in all forms sound,the waves in  water and light is also of dual nature ...so i just imagine waves coming from people so light and gentle sometimes the waves seem angry 😂but lets leave that part....these waves that i just make up in my mind are carrying bubbles  each person gets a color depending on there mood or maybe my mood ......nd the waves  coming from u to every person i see are just so light and  sparkly..transfering (knowledge ,care,support ) and helping them. u give the most wonderful thing u have to people around u. its not a physical thing but more valuable ,u teach what u know ,u help when u can and for me u are a wonderful teacher a helper .and i m happy that i m among those people who got those spakly bubbles from u nd i m happy to know  a person  like u.. may ur life be filled with love ,happiness and joy may u have a wonderful present and future,may u have a successful career nd may u never stop being the wonderful person u are i wish for u health ,wealth nd everything nice  nd i wish u r always treated with the same kindness u have.ameen sum ameen \n (perfect amount of sunlight,water and soil to a plant) \nwith lots of respect/n me ", 
            image: "assets/imagination.jpg" },
  sis:    { password: "sis", message: "“From the very beginning, I knew you were a blessing to our class. The way you led the class, sharing notes, clearing concepts, teaching better than teachers with zero level of attitude was unbelievable. The selflessness you showed was strange yet so beautiful. Our class has a name because you are a part of it and I am so lucky to have a brother like you that words won’t justify it. May you always stay blessed, happy and healthy. You matter more than you know. So, bro! You take of yourself…”" },
  zenab:  { password: "friend", message: "Life gave me a friend and it gave me you ... best gift ever. HappyBirthday... GK= inspiration" }
};

/* ----------------- check password ----------------- */
function checkPassword(name) {
  const input = prompt("Enter password:");

  if (!input) return;

  if (input === friends[name].password) {
    localStorage.setItem("msg", friends[name].message);
    localStorage.setItem("img", friends[name].image);


    // open the message page
    window.location.href = "friend.html"; // your message page
  } else {
    alert("Wrong password ❌");
  }
}
