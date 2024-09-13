let fa_bars = document.getElementById("fa-bars");
let fa_x = document.getElementById("fa-x");
let ul = document.getElementById("ul");

let left_btn = document.getElementById("left-btn");
let right_btn = document.getElementById("right-btn");
let yearNum1 = document.getElementById("yearNum1");
let yearNum2 = document.getElementById("yearNum2");
let yearNum3 = document.getElementById("yearNum3");
let yearNum4 = document.getElementById("yearNum4");
let jor1 = document.getElementById("jor1");
let jor2 = document.getElementById("jor2");
let title = document.getElementById("title")
let discription = document.getElementById("discription")
let dot1 = document.getElementById("dot1")
let dot2 = document.getElementById("dot2")


fa_bars.addEventListener("click", () => {
  fa_x.style.display = "block";
  ul.style.display = "flex";
  fa_bars.style.display = "none";
});

fa_x.addEventListener("click", () => {
  fa_x.style.display = "none";
  ul.style.display = "none";
  fa_bars.style.display = "block";
});


let tochange = 1000;
let setTime = tochange*2;
let forword = [
  {
    state: () => {
      yearNum3.style.marginTop = "var(--y8)";
      yearNum4.style.marginTop = "var(--y5)";
      jor1.classList.add("shoe-rotate1");
      jor2.classList.add("shoe-rotate2");
      setTimeout(() => {
        jor1.setAttribute('src', "./jordan img/j1.png");
        jor2.setAttribute('src', "./jordan img/j1.png");
      }, tochange);
      setTimeout(function () {
        jor1.classList.remove("shoe-rotate1");
        jor2.classList.remove("shoe-rotate2");
        title.classList.remove("tracking-in-expand");
        discription.classList.remove("swing-in-top-fwd");
      }, setTime);
      title.innerText = info[0].name;
      discription.innerText = info[0].disp;
      title.classList.add("tracking-in-expand");
      discription.classList.add("swing-in-top-fwd");
    },
  },
  {
    state: () => {
      yearNum3.style.marginTop = "var(--y9)";
      yearNum4.style.marginTop = "var(--y5)";
      jor1.classList.add("shoe-rotate1");
      jor2.classList.add("shoe-rotate2");
      setTimeout(() => {
        jor1.setAttribute('src', "./jordan img/j10.png");
        jor2.setAttribute('src', "./jordan img/j10.png");
      }, tochange);
      setTimeout(function () {
        jor1.classList.remove("shoe-rotate1");
        jor2.classList.remove("shoe-rotate2");
      }, setTime);
      title.innerText = info[1].name;
      discription.innerText = info[1].disp;
      title.classList.add("tracking-in-expand");
      discription.classList.add("swing-in-top-fwd");
      setTimeout(() => {
        title.classList.remove("tracking-in-expand");
        discription.classList.remove("swing-in-top-fwd");
      }, 1000);
    },
  },
  {
    state: () => {
      yearNum3.style.marginTop = "var(--y8)";
      yearNum4.style.marginTop = "var(--y8)";
      jor1.classList.add("shoe-rotate1");
      jor2.classList.add("shoe-rotate2");
      setTimeout(() => {
        jor1.setAttribute('src', "./jordan img/j3.png");
        jor2.setAttribute('src', "./jordan img/j3.png");
      }, tochange);
      setTimeout(function () {
        jor1.classList.remove("shoe-rotate1");
        jor2.classList.remove("shoe-rotate2");
      }, setTime);
      title.innerText = info[2].name;
      discription.innerText = info[2].disp;
      title.classList.add("tracking-in-expand");
      discription.classList.add("swing-in-top-fwd")
      setTimeout(() => {
        title.classList.remove("tracking-in-expand");
        discription.classList.remove("swing-in-top-fwd");
      }, 1000);
    },
  },
  {
    state: () => {
      yearNum3.style.marginTop = "var(--y8)";
      yearNum4.style.marginTop = "var(--y9)";
      jor1.classList.add("shoe-rotate1");
      jor2.classList.add("shoe-rotate2");
      setTimeout(() => {
        jor1.setAttribute('src', "./jordan img/j4.png");
        jor2.setAttribute('src', "./jordan img/j4.png");
      }, tochange);
      setTimeout(function () {
        jor1.classList.remove("shoe-rotate1");
        jor2.classList.remove("shoe-rotate2");
      }, setTime);
      title.innerText = info[3].name;
      discription.innerText = info[3].disp;
      title.classList.add("tracking-in-expand");
      discription.classList.add("swing-in-top-fwd")
      setTimeout(() => {
        title.classList.remove("tracking-in-expand");
        discription.classList.remove("swing-in-top-fwd");
      }, 1000);
    },
  },
  {
    state: () => {
      yearNum3.style.marginTop = "var(--y8)";
      yearNum4.style.marginTop = "var(--y6)";
      jor1.classList.add("shoe-rotate1");
      jor2.classList.add("shoe-rotate2");
      setTimeout(() => {
        jor1.setAttribute('src', "./jordan img/j2.png");
        jor2.setAttribute('src', "./jordan img/j2.png");
      }, tochange);
      setTimeout(function () {
        jor1.classList.remove("shoe-rotate1");
        jor2.classList.remove("shoe-rotate2");
      }, setTime);
      title.innerText = info[4].name;
      discription.innerText = info[4].disp;
      title.classList.add("tracking-in-expand");
      discription.classList.add("swing-in-top-fwd")
      setTimeout(() => {
        title.classList.remove("tracking-in-expand");
        discription.classList.remove("swing-in-top-fwd");
      }, 1000);
    },
  },
  {
    state: () => {
      yearNum3.style.marginTop = "var(--y9)";
      yearNum4.style.marginTop = "var(--y6)";
      jor1.classList.add("shoe-rotate1");
      jor2.classList.add("shoe-rotate2");
      setTimeout(() => {
        jor1.setAttribute('src', "./jordan img/j11.png");
        jor2.setAttribute('src', "./jordan img/j11.png");
      }, tochange);
      setTimeout(function () {
        jor1.classList.remove("shoe-rotate1");
        jor2.classList.remove("shoe-rotate2");
      }, setTime);
      title.innerText = info[5].name;
      discription.innerText = info[5].disp;
      title.classList.add("tracking-in-expand");
      discription.classList.add("swing-in-top-fwd")
      setTimeout(() => {
        title.classList.remove("tracking-in-expand");
        discription.classList.remove("swing-in-top-fwd");
      }, 1000);
    },
  }
];
let info = [
  {
    name: "AIR JORDAN I",
    disp: "MJ had a successful rookie campaign being named an All Star, Rookie of the Year and bringing the Bulls back to the Playoffs after a four-year absence. Michael wore the Air Jordan I Red/white/black as he scored a playoff high of 63 points against the Boston Celtics in the 1986 Playoffs."
  },
  {
    name: "AIR JORDAN X",
    disp: "Worn by Michael when he returned to the NBA, the Air Jordan X was on MJ's feet when he dropped 55 points on the Knicks at Madison Square Garden. A popular city series of the X came out in 1995 representing five different NBA cities."
  },
  {
    name: "AIR JORDAN III",
    disp: "Introducing the Jumpman logo, elephant print and visible Air to the Jordan line would prove successful with this instant classic. Designer Tinker Hatfield made a shoe so innovative and creative it would keep MJ from leaving Nike. Michael wore the AJ III at All Star weekend in 1988 where he won the Slam Dunk Title."
  },
  {
    name: "AIR JORDAN IV",
    disp: "The AJ IV introduced nubuck to the Air Jordan line and was on the feet of MJ as he hit 'The Shot' over Craig Ehlo in the 1989 Playoffs. The IV could also be seen in the classic Spike Lee Mars Blackmon commercials as well as in the movie 'Do the Right Thing.'"
  },
  {
    name: "AIR JORDAN II",
    disp: "Designed by legendary Nike designer Bruce Kilgore, the Air Jordan II defined basketball luxury in the 1980s. Made in Italy, the Air Jordan II featured faux lizard print, a Swoosh-less upper and quality craftsmanship built for high-performance athletes."
  },
  {
    name: "AIR JORDAN XI",
    disp: "Voted the greatest sneaker of all time by Sole Collector Magazine, the AJ XI featured a mesh upper, translucent outsole and revolutionary patent leather toe rand. Michael wore the XI in the movie Space Jam and during the Bull's 72-win NBA Championship season."
  }
]

let i = 0;
if(i == 0){
  left_btn.disabled = true;
}

function NextChange() {
  if(i != forword.length-1){
    i++;
    forword[i].state();
    right_btn.disabled = true;
    left_btn.disabled = false;
    if( i != forword.length-1){
      setTimeout(() => {
        right_btn.disabled = false;
      }, 2000);
    }
  }
}

function BackChange() {
  if(i != 0){
    i--;
    forword[i].state();
    right_btn.disabled = false;
    left_btn.disabled = true;
    if (i != 0) {
      setTimeout(() => {
        left_btn.disabled = false;
      }, 2000);
    }
  } 
}

setTimeout(() => {
  yearNum1.style.marginTop = "var(--y1)";
  yearNum2.style.marginTop = "var(--y9)";
  yearNum3.style.marginTop = "var(--y8)";
  yearNum4.style.marginTop = "var(--y5)";
  title.classList.add("tracking-in-expand");
  discription.classList.add("swing-in-top-fwd");
  jor1.classList.add("text-focus-in")
  jor2.classList.add("text-focus-in")
  dot1.classList.add("text-focus-in")
  dot2.classList.add("text-focus-in")
}, 500);

setTimeout(() => {
  title.classList.remove("tracking-in-expand");
  discription.classList.remove("swing-in-top-fwd");
  jor1.classList.remove("text-focus-in")
  jor2.classList.remove("text-focus-in")
  dot1.classList.remove("text-focus-in")
  dot2.classList.remove("text-focus-in")
  title.style.opacity = '1';
  discription.style.opacity = '1';
  jor1.style.opacity = '1';
  jor2.style.opacity = '1';
  dot1.style.opacity = '1';
  dot2.style.opacity = '1';
}, 1500);