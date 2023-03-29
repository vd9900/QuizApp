// ======= Quiz's Question and Answers =========
const TypeOfQuestions = [
  "Pipes and Cisterns",
  "Probability",
  "Problems on age",
  "Profit and loss",
]; //To get the index number which user selected
const QuizArray = [
  [
    // Question & Answser for Pipes and Cisterns
    {
      Question:
        "A tap can fill storage in 8 hours and another tap can discharge it in 16 hours. In the event that both the taps are open, the time taken to fill the tank will be:",
      A: " 8 hours",
      B: "10 hours",
      C: "16 hours",
      D: " 24 hours",
      anwser: 2,
    },
    {
      Question:
        " A channels can fill a tank in x hours and another funnel can exhaust it in y (y>x) hours. In the event that both the funnels are open, in how long will the tank be filled?",
      A: "(x-y) hours",
      B: "(y-x) hours",
      C: "xy/(x-y) hours",
      D: "xy/(y-x) hours",
      anwser: 3,
    },
    {
      Question:
        " Pipes A and B can fill a tank in 20 hours and 30 hours separately and channel C can purge the full tank in 40 hours. In the event that every one of the funnels is opened together, what amount of the reality of the situation will become obvious eventually expected to make the tank full?",
      A: "73/7 hours",
      B: "64/5 hours",
      C: "120/7 hours",
      D: "77/4 hours",
      anwser: 2,
    },
    {
      Question:
        "Two channels can fill a tank in 15 hours and 12 hours separately and a third pipe can purge it in 4 hours. In the event that the channels are opened all together at 8 am, 9 am and 11am separately, the tank will be exhausted at",
      A: "11.40 am",
      B: "12.40 pm",
      C: "1.40 pm",
      D: " 2.40 pm",
      anwser: 3,
    },
    {
      Question:
        "Two pipes A and B can fill a reservoir in 6 minutes and 7 minutes separately. Both the funnels are opened then again for 1 minute each. In what the reality of the situation will become obvious eventually fill the storage?",
      A: "5 min",
      B: "17/3 min",
      C: "45/7 min",
      D: "5/4 min",
      anwser: 2,
    },
    {
      Question:
        "A substantial tanker can be filled by two pipes A and B in an hour and 40 minutes separately. How long will it take to fill the tanker from unfilled state if B is utilized for a fraction of the time and A and B fill it together for the other half?",
      A: "15 min",
      B: "20 min.",
      C: "27.5 min.",
      D: "30 min",
      anwser: 3,
    },
    {
      Question:
        "A storage has a hole which would exhaust it in 8 hours. A tap is transformed on which concedes 6 liters a moment into the reservoir and it is currently purged in 12 hours. What number of liters does the reservoir hold?",
      A: "7580 ltr.",
      B: "7960 ltr.",
      C: "8290 ltr.",
      D: "8640 ltr.",
      anwser: 3,
    },
    {
      Question:
        "Two pipes A and B can ill a tank in 36 hours and 45 hours respectively. If both the pipes are opened simultaneously, how much time will be taken to fill the tank?",
      A: "10 hours",
      B: "15 hours",
      C: "18 hours",
      D: "20 hours",
      anwser: 3,
    },
    {
      Question:
        " A cistern has two pipes. One can fill it with water in 8 hours and the other can empty it in 5 hours. In how many hours will the cistern be emptied if the both the pipes are opened together when 3/4 of the cistern is already full of water.",
      A: "13.5 hours",
      B: "10 hours",
      C: "6 hours",
      D: "3.5 hours",
      anwser: 1,
    },
    {
      Question:
        "Taps A, B and C are connected to a water tank and the rate of flow of water is 42 ltr/hr, 56 ltr/hr and 48 ltr/hr respectively. A and ill fill the tank while tap C empties the tank. If the three taps are opened simultaneously, the tank gets filled up completely in 16 hours. What is the capacity of the tank?",
      A: "800 ltr",
      B: "960 ltr",
      C: "2346 ltr",
      D: "None of these",
      anwser: 0,
    },
  ],
  [
    // Question & Answser for Probability
    {
      Question:
        "How many outcomes are in the sample space for tossing one coin?",
      A: "1",
      B: "2",
      C: "3",
      D: "8",
      anwser: 1,
    },
    {
      Question:
        "Which of the following are possible samples spaces for tossing 2 coins?",
      A: "{TT,HH,TH,HT}",
      B: "{T, H}",
      C: "{H, T, H, T}",
      D: "{T, H}",
      anwser: 0,
    },
    {
      Question:
        "An unprepared student takes a 3-question true/false quiz in which he guesses the answers to all 3 questions. What is the probability he gets all 3 correct?",
      A: "1/2",
      B: "1/3",
      C: "1/6",
      D: "1/8",
      anwser: 3,
    },
    {
      Question:
        "Which of these cannot be considered a probability of an outcome?",
      A: "1/3",
      B: "-1/5",
      C: "0.80",
      D: "112% & -1/5",
      anwser: 3,
    },
    {
      Question: "Roll a die one time. Find P(rolling a 4).",
      A: "1/4",
      B: "2/3",
      C: "1/6",
      D: "1/2",
      anwser: 2,
    },
    {
      Question: "Roll a die one time. Find P(even number).",
      A: "1/2",
      B: "1/3",
      C: "3/6",
      D: "2/6",
      anwser: 0,
    },
    {
      Question: "Roll a die one time. Find P(a number less than 7).",
      A: "0",
      B: "1",
      C: "7/6",
      D: "3/5",
      anwser: 0,
    },
    {
      Question: "Roll a die one time. Find P(a number greater than 3 or odd).",
      A: "0",
      B: "1/2",
      C: "5/6",
      D: "1/6",
      anwser: 2,
    },
    {
      Question: "Rolling a pair of dice, find P(sum is 5).",
      A: "11%",
      B: "25%",
      C: "17%",
      D: "22%",
      anwser: 0,
    },
    {
      Question:
        "If you rolled a 6-sided dice, what is the probability of rolling a even number?",
      A: "4/6",
      B: "2/6",
      C: "3/6",
      D: "5/6",
      anwser: 2,
    },
  ],
  [
    {
      // Question & Answser for Problems of age
      Question:
        "The sum of the ages of Kidambi and Srikanth 14 years hence will be equal to 2 times their present age. If at present Kidambi is 8 years elder to Srikanth, then what are their present ages?",
      A: "22, 8",
      B: "29, 12",
      C: "18, 10",
      D: "13, 6",
      anwser: 2,
    },
    {
      Question:
        "6 years ago, the ratio of the ages of Arun and Prathap is 7: 6. Present age of Rajeev is 10 years more than one – sixth of Prathap’s present age. Find the ratio of present age of Prathap and Rajeev, if Arun’s age after 6 years is 40 years?",
      A: "3:2",
      B: "2:1",
      C: "4:5",
      D: "1:3",
      anwser: 1,
    },
    {
      Question:
        "The ratio of present ages of Sri and Gowtham is 3: 4. Mahesh is 6 years older than Sri and two years younger than Gowtham. Find the sum of the present ages of Sri and Mahesh?",
      A: "48 years",
      B: "50 years",
      C: "54 years",
      D: "52 years",
      anwser: 2,
    },
    {
      Question:
        "The product of the ages of Asha and Nithi is 540. If twice the age of Asha is more than Nithi’s age by 6 years, then find Asha’s age?",
      A: "18 years",
      B: "20 years",
      C: "16 years",
      D: "22 years",
      anwser: 0,
    },
    {
      Question:
        "Naveena’s present age is four times her son’s present age and two fifth of her father’s present age. The average present age of all of them is 40 years. Find the sum of Naveena’s son’s present age and Naveena’s father’s present age?",
      A: "92 years",
      B: "74 years",
      C: "88 years",
      D: "86 years",
      anwser: 2,
    },
    {
      Question:
        "The ratio of B’s age six years hence to C’s present age is 5: 3. B is eleven years younger than A. If A’s present age is twice the age of C, then find B’s age, 4 years ago?",
      A: "13 years",
      B: "15 years",
      C: "17 years",
      D: "16 years",
      anwser: 1,
    },
    {
      Question:
        "After 2 years, the age of Karthi is 2 times the present age of Silambu. Preethi is 8 years elder than Silambu. Find the present age of Karthi, if the present age of Preethi is 23 years?",
      A: "28 years",
      B: "26 years",
      C: "24 years",
      D: "30 years",
      anwser: 0,
    },
    {
      Question:
        "4 years ago, the age of A is 2 times the present age of B. C is 12 years elder than B and 10 years younger than A. Find the present age of D, if the present age of C is 6 times the present age of D?",
      A: "3 years",
      B: "6 years",
      C: "7 years",
      D: "5 years",
      anwser: 3,
    },
    {
      Question:
        "The ratio of present age of Ramesh and Karthi is 2: 3. Sheela is 3 years elder than Karthi. The average present ages of three of them is 25 years. Find the age of Janvi, 4 years ago, if the present age of Janvi is 2 times the present age of Ramesh?",
      A: "29 years",
      B: "35 years",
      C: "32 years",
      D: "27 years",
      anwser: 2,
    },
    {
      Question:
        "The ratio between Gautham and Manoj is 35: x. Manoj is 6 years younger than Nisha. Nisha’s age after 8 years will be 30 years. The Gautham’s present age is 3 years less than the sum of the present age of Manoj and Nisha. Find the value of x?",
      A: "22",
      B: "16",
      C: "17",
      D: "18",
      anwser: 1,
    },
  ],
  [
    {
      // Question & Answser for Profit and losses
      Question:
        "The cost price of 20 articles is the same as the selling price of x articles. If the profit is 25%, then the value of x is:",
      A: "15",
      B: "16",
      C: "18",
      D: "25",
      anwser: 1,
    },
    {
      Question:
        "In a certain store, the profit is 320% of the cost. If the cost increases by 25% but the selling price remains constant, approximately what percentage of the selling price is the profit?",
      A: "30%",
      B: "70%",
      C: "100%",
      D: "250%",
      anwser: 1,
    },
    {
      Question:
        "A vendor bought toffees at 6 for a rupee. How many for a rupee must he sell to gain 20%?",
      A: "3",
      B: "4",
      C: "5",
      D: "6",
      anwser: 2,
    },
    {
      Question:
        "A shopkeeper expects a gain of 22.5% on his cost price. If in a week, his sale was of Rs. 392, what was his profit?",
      A: "Rs. 18.20",
      B: "Rs. 70",
      C: "Rs. 72",
      D: "Rs. 85.25",
      anwser: 2,
    },
    {
      Question:
        "A man buys a cycle for Rs. 1400 and sells it at a loss of 15%. What is the selling price of the cycle?",
      A: "Rs. 1090",
      B: "Rs. 1160",
      C: "Rs. 1190",
      D: "Rs. 1202",
      anwser: 2,
    },
    {
      Question:
        "Sam purchased 20 dozens of toys at the rate of Rs. 375 per dozen. He sold each one of them at the rate of Rs. 33. What was his percentage profit?",
      A: "3.5",
      B: "4.5",
      C: "5.5",
      D: "6.5",
      anwser: 1,
    },
    {
      Question:
        "On selling 17 balls at Rs. 720, there is a loss equal to the cost price of 5 balls. The cost price of a ball is:",
      A: "Rs. 45",
      B: "Rs. 50",
      C: "Rs. 55",
      D: "Rs. 60",
      anwser: 3,
    },
    {
      Question:
        "When a plot is sold for Rs. 18,700, the owner loses 15%. At what price must that plot be sold in order to gain 15%?",
      A: "Rs. 21,000",
      B: "Rs. 22,500",
      C: "Rs. 25,300",
      D: "Rs. 25,800",
      anwser: 2,
    },
    {
      Question:
        "A trader mixes 26 kg of rice at Rs. 20 per kg with 30 kg of rice of other variety at Rs. 36 per kg and sells the mixture at Rs. 30 per kg. His profit percent is:",
      A: "No profit, no loss",
      B: "5%",
      C: "8%",
      D: "None of these",
      anwser: 1,
    },
    {
      Question:
        "A man buys an article for Rs. 27.50 and sells it for Rs 28.60. Find his gain percent",
      A: "1%",
      B: "2%",
      C: "3%",
      D: "4%",
      anwser: 3,
    },
  ],
];

//  ======= To the home page varibales ========
const Section1 = document.querySelector(".section-1");
const greet = document.querySelector(".greeting"); // To target the div greeting
const greetText = document.querySelector("#greetforname");
const UserInput = document.querySelector("#User");
const CategoryArray = document.querySelectorAll(".select"); // To select the cateagory of the quiz questions
const btn1 = document.querySelector(".btn1"); //done button of username
const btn2 = document.querySelector(".btn2"); //get started button

//  ======= To the notification page varibales ========
const Section2 = document.querySelector(".section-2");
const btn3 = document.querySelector(".btn3"); // to target the I agree button and small timer for reading
const btn4 = document.querySelector(".btn4"); // to target cancel button it will turn back to home page
const catselected = document.querySelector("#usercheck"); // it means categorey selected it will show the selected categorey

//  ======= To the quiz quetions page varibales ========
const Section3 = document.querySelector(".section-3");
const Showtimer = document.querySelector(".timer"); // It used to show remainig seconds to anwser the question
const quetions = document.querySelector(".quetions"); //This will show the questions
const option = document.querySelectorAll(".option"); // This all options
const options = document.querySelector(".options"); //This is parent element of the options,It used target the option btn
const ChangeQue = document.querySelector(".nextbtn"); //To go next Question and Save the anwser
const NextBtn = document.querySelector(".btn6"); //This used to close the next btn or open next btn
const DoneBtn = document.querySelector(".Iamdone"); //This btn will go to result page

//  ======== To the result page varibales ========
const Section4 = document.querySelector(".section-4");
const playerName = document.querySelector(".pla"); //To write player name
const totaltimetaken = document.querySelector(".tot"); // total user time taken to complete the quiz
const totalque = document.querySelector(".toqu"); //Total questions
const attempt = document.querySelector(".att"); //User Attempted
const correct = document.querySelector(".cor"); //User correct anwser
const worng = document.querySelector(".wro"); // User Wron Anwser
const percentage = document.querySelector(".per"); //Total in Percentage
const btn7 = document.querySelector(".btn7"); // This btn will refresh the page
const btn8 = document.querySelector(".btn8");

//  ======== other varibales========
let SeletedOption; //User selected Categorey Name
let UserSelectedArray; //User selected Categorey Array which will check in typeofquestions variable.
let NumberQuestion; //User selected Array's each object(questions&options&anwser)
let UserAnwseredIndex; /*here anwser targeted by index of the user anwser and objects index
    So, This will target the useroptins index*/
let QuestionNumber = 0; //It is index of the Userselected array when next button clicked index will increase by 1
let totalattempt = 0; //Total user Attempted
let UserAnwser; //It will convert  object(option is nodelist) to array to geext the ind number of the option
let correctAnwesers = 0; //IT will check the how many anwser is correct
let wornganwser = 0; //It will check how many worng Anwesr
let userAnwserIndex; //This user selected option's index
let timerEachsecond; //This will work as setinterval to get the seconds
let sec = 0; //This will work seconds in timerEachsecond which print each second
let timeroftaken; //This will work as setinterval to get total user time taken in seconds
let timetaken = 0; //This will show the total time taken in seconds
let timegreeting = 0; //this for timer greeting to check how many second later div will vanish

// Greetingtouser(btn1);
selecting(CategoryArray);
openClose(Section2, Section1, btn2);
openClose(Section1, Section2, btn4);

//  =========function for greeting========

// function Greetingtouser(button) {
//   button.addEventListener("click", () => {
//     if (!UserInput.value) {
//       alert`Enter your name!!!`;
//     } else {
//       btn1.classList.add("clsg");
//       const timerforgreeting = setInterval(() => {
//         timegreeting++;
//         greet.classList.remove("clsg");
//         greetText.innerHTML = `Hello ${UserInput.value}, welcom to <b style="color:#FFB450;">Power Quiz</b> `;
//         if (timegreeting == 3) {
//           greet.classList.add("clsg");
//           clearInterval(timerforgreeting);
//         }
//       }, 1000);
//     }
//   });
// }

//  ======= Function for closeing and Opening page=======

function openClose(open, close, button) {
  button.addEventListener("click", function () {
    if (!SeletedOption) return alert("Please select Categroy");
    if (close == Section1) {
      //When the section1 container will close then 3s timer will set in I agrre btn
      SetTimer(3, btn3);
    }
    if (close == Section2) {
      if (button != btn4) {
        MainQuiz();
        QuizAnswerSelect(options);
        nextGo(ChangeQue); //calling next Questions
      }
    }
    open.classList.remove("clsg");
    close.classList.add("clsg");
    catselected.innerHTML = `1.You selected <b style="color:red;">${SeletedOption}</b>`;
  });
}

// =========Function for selecting the Categorey==========

function selecting(array) {
  array.forEach((element) => {
    //Targeting the all element of options to run event click
    element.addEventListener("click", function () {
      if (element.classList.contains("selected")) {
        element.classList.remove("selected");
      } else {
        array.forEach((e) => e.classList.remove("selected")); //Removing other elements border when user click one option
        element.classList.add("selected");
        SeletedOption = `${element.textContent}`;
      }
    });
  });
}

// ======== function for notification timer for 3s

function SetTimer(time, place) {
  sec = time;
  const Timer = setInterval(() => {
    place.children[1].innerHTML = sec;
    --sec;
    if (sec == 0) {
      clearInterval(Timer);
      place.children[1].classList.add("clsg");
      place.classList.remove("Freeze");
      sec = 0; // After the misson done again sec value 0 cause to next function which is timerforquestions()
    }
  }, 1000);
}
//  =======

openClose(Section3, Section2, btn3);

//  ===== Function for option selecting ======

function QuizAnswerSelect(options) {
  // This function for usertaken total time calculating

  timeroftaken = setInterval(checktimeing, 1000);
  function checktimeing() {
    console.log(timetaken);
    timetaken++;
  }
  //

  // Targeting the parent to target the all child options
  options.addEventListener("click", function (e) {
    if (e.target.tagName == "SPAN") {
      //e.target is shows that where user clicked
      if (e.target.classList.contains("selected")) {
        e.target.classList.remove("selected");
      } else {
        option.forEach((element) => element.classList.remove("selected"));
        e.target.classList.add("selected");
        UserAnwser =
          Array.from(
            option
          ); /*option is collection of all option it's type is nodelist so,
                converting into array then easy can access the indexof the each option */
        UserAnwseredIndex = UserAnwser.indexOf(e.target);
      }
      e.target.classList.contains("selected")
        ? (userAnwserIndex = UserAnwseredIndex)
        : (userAnwserIndex = undefined);
      // here checking user option selected or not and storing index in userAnwserIndex.
    }
  });
}
//  =======

// ======== function for next btn to change the question  ======

function nextGo(parent) {
  timerforquestion(); //Calling for first question timer for 10s

  timerEachsecond = setInterval(timerforquestion, 1000); //calling timerforquestion each 1 second

  // ===== timer for quetions 10s======
  function timerforquestion() {
    const showTimerNumber = sec > 29 ? `0${39 - sec}` : `${39 - sec}`;
    Showtimer.innerHTML = showTimerNumber;
    if (sec == 39) {
      clearInterval(timerEachsecond);
      // This is for if user not selected any option then automatic it will go next questions
      if (QuestionNumber < 39) {
        QuestionNumber++;
        MainQuiz(); //calling the questions and options after on is skipped
        sec = 0; //sec value 0 cause to run timerEachsecond again from value 0;
        timerEachsecond = setInterval(timerforquestion, 1000);
      } else {
        Section4.classList.remove("clsg");
        Section3.classList.add("clsg");
        ReslutPage(); //directly going result page
      }
    }
    sec++;
  }
  // ========end of the timer for questions

  parent.addEventListener("click", function (e) {
    //Targeting the parent to target the chlid element
    if (e.target.tagName == "SPAN" || e.target.tagName == "I") {
      // event delegation
      if (
        e.target.id == "next" ||
        e.target.classList.contains("fa-arrow-right")
      ) {
        option.forEach((element) => element.classList.remove("selected")); //when next btn clicked all of the options selected will remove
        QuestionNumber++; //increasing question number
        CheckTheAnswser(userAnwserIndex); //Checking user anwser with useroptions index number
        userAnwserIndex = undefined; //If user click without clicking the option btn then the index will undefined;
        //It means user skipped the question
        MainQuiz();
        clearInterval(timerEachsecond); //If user click next btn then timerEachsecond will clear and again start new one.
        Showtimer.innerHTML = `0:00`; //After clicking next btn the timer will reset
        sec = 0; //again timer will start with 0;
        timerEachsecond = setInterval(timerforquestion, 1000); //timer will start again
      }
    }
  });
}
//  =======

// ======= Main function for Changing Questions =======

function MainQuiz() {
  //It will change the questions
  UserSelectedArray = QuizArray[TypeOfQuestions.indexOf(SeletedOption)]; // Array of selected quiz Categorey
  NumberQuestion =
    UserSelectedArray[
      QuestionNumber
    ]; /* QuestionNumber start with 0 and when function NextGo or timerforquestion is called
     then questionsNumber will increase. so, the Questons index will also increase  */
  const Question = NumberQuestion.Question;
  const OptionA = NumberQuestion.A;
  const OptionB = NumberQuestion.B;
  const OptionC = NumberQuestion.C;
  const OptionD = NumberQuestion.D;
  quetions.textContent = `${QuestionNumber + 1}. ${Question}`; //+1 cause question value is 9. index 0-9;
  options.children[0].textContent = `A. ${OptionA}`;
  options.children[1].textContent = `B. ${OptionB}`;
  options.children[2].textContent = `C. ${OptionC}`;
  options.children[3].textContent = `D. ${OptionD}`;
  if (QuestionNumber >= 9) {
    NextBtn.classList.add("clsg");
    DoneBtn.classList.remove("clsg");
    DoneBtn.addEventListener("click", () => {
      CheckTheAnswser(timerEachsecond);
      Section4.classList.remove("clsg");
      Section3.classList.add("clsg");
      clearInterval(timeroftaken); //stop calculating total time taken by user
      ReslutPage();
    });
  } else {
    DoneBtn.classList.add("clsg");
    NextBtn.classList.remove("clsg");
  }
}
// ======= function for Show the result on last page =========
function ReslutPage() {
  const newTimeTaken =
    timetaken > 59 ? `${(timetaken / 60).toFixed(2)}min` : `${timetaken}s`;
  totaltimetaken.innerHTML = `
  <span>Time Taken</span>
  <span>${newTimeTaken}</span>
  `;
  totalque.innerHTML = `
  <span>Total Questions </span>
  <span>${QuestionNumber + 1}</span>
  `;
  attempt.innerHTML = `
  <span>Attempted</span>
  <span>${totalattempt}</span>
   `;
  correct.innerHTML = `
  <span>Correct</span>
  <span> ${correctAnwesers}</span>
  `;
  worng.innerHTML = `
  <span>Worng</span>
  <span>${wornganwser}</span>
  `;
  percentage.innerHTML = `
  <span>Percentage</span>
<span>${(correctAnwesers * 100) / 10}%</span>
 `;
  btn7.addEventListener("click", () => {
    location.reload();
  });
  btn8.addEventListener("click", () => {
    location.replace("https://github.com/vd9900/QuizApp.git");
  });
}

//======== function for Checking user anwser correct or worng

function CheckTheAnswser() {
  if (userAnwserIndex == NumberQuestion.anwser) {
    //checking user anwser if it's correct Anwesers
    // console.log(Adbuth)
    totalattempt++;
    correctAnwesers++;
  } else if (userAnwserIndex == undefined) {
    // console.log(`skiped`)
  } else {
    // console.log(worng)
    totalattempt++;
    wornganwser++;
  }
}
//  =======
