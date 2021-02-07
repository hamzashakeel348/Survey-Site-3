$(function() {

  var data = {
    "customers": [{
        "img": "../master/img/1e6d83832acbb01290e1bfa1a8e8fb92.png",
        "name": "Frank Taylor",
        "description": "I usually don't do doing surveys, but I thought I'd give this one a shot. I have to say, it was really quick and easy! I mean, within a few minutes and just a few simple questions, you're giving me the option to choose between four unbeatable gifts. I don't know how you do it, but I'm all in! Thanks for the teeth whitener, my teeth look fantastic!",
      },
      {
        "img": "../master/img/dfc8d9b89c6dddb687ed0ba468ef093d.jpg",
        "name": "Emily Philips",
        "description": "The survey was quick and easy. I wouldn't mind doing another one :)",
      },
      {
        "img": "../master/img/275a3c6d7250fc618c5f32e5bd565b9a.png",
        "name": "Katie Webb",
        "description": "I had no use for the weight-loss product, and decided to give it to my friend. And believe it or not- she lost like 14 pounds in less than 2 weeks! Now I want the same one for myself!",
      },
      {
        "img": "../master/img/9687746dd2c717af90e79afa47b8c92b.png",
        "name": "Julia Stafford",
        "description": "I was bored so I did the survey, but I really liked the skin care cream, it worked really well!",
      },
      {
        "img": "../master/img/52480de1a60ed5f717a3f73abef62e13.png",
        "name": "Thomas Harber",
        "description": "When your five question survey popped up I thought there was no way the rewards were actually valued over $100. That's just being honest. But then I got to the end and got to select it and I thought, 'This is the greatest survey in the history of surveys!' Seriously though, I don't know how the data you collect helps you, or how you can afford to offer such great products, but I'm happy to take them off your hands. Let me know if you need another one done!",
      },
      {
        "img": "../master/img/13863e1661e2893d8bb6c5d912b2f59f.png",
        "name": "Roger Wright",
        "description": "Alright, so like the other people here, I'm pretty shocked at the choices given when you reach the end of that really short survey. I guess I expected some half-eaten sandwich or used dental floss, haha. Boy, was I wrong. You only asked me like a handful of questions and then you let me choose an e-Cigs kit? Looks like I got the far better end of this deal. Thanks for making it so quick and easy!",
      },
      {
        "img": "../master/img/c8734e402669d30dc61702ea6c74bed3.png",
        "name": "Liz Brown",
        "description": "I haven't taken a multiple choice test since college, so when I saw the survey I had some flashbacks to my school days. Thankfully it was only five easy questions. I was genuinely impressed with the offers as well. When I've seen other surveys on ecommerce sites they usually offer trinkets. These are real products.",
      },
      {
        "img": "../master/img/0b3bc245a0c981a9acdd428fab1d725d.png",
        "name": "Barbara Meier",
        "description": "All of the products looked great, but none of them really applied to my current needs. What is a girl to do? Well, I decided to order the eCigs to try and help a friend break her smoking habit. So far, so good.",
      }
    ]
  };

  console.log(data);

  function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

shuffleCustomer = shuffle(data.customers)
  var b = 1;

  var markup =
    shuffleCustomer.map(customer => `
    <div class="comment">
      <img alt="profileImage" class="comment-img" src="${customer.img}">
      <div class="desc">
        <span><b>${customer.name}</b></span><img src="../master/img/vicon.png" class="vicon" alt=""><span class="vtext">Verified</span>
		<span class="comment-rating"><img src="../master/img/stars.png" class="comment-rating-img" alt=""><span class="comment-time f${b++}-date"></span></span>
		
        <p>${customer.description}</p>
      </div>
    </div>
    `).slice(0,4).join('')


  var a = document.getElementById("comment-page");
  a.innerHTML = markup

  var
    months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    time = ["12:24 am", "2:24 pm", "11:55 am", "8:47 am", "6:16 pm", "4:16 pm", "6:48 pm"],
    d = new Date(),
    d = months[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();

  for (var comments = document.querySelectorAll(".comment"), i = 1; i <= comments.length; i++) mydate = new Date, i >= 3 && i <= 4 ? 3 == i ? mydate.setDate(mydate.getDate() - i) : mydate.setDate(mydate.getDate() - (i - 1)) : i > 4 ? mydate
    .setDate(mydate.getDate() - i) : mydate.setDate(mydate.getDate() - (i - 1)), year = mydate.getYear(), year < 1e3 && (year += 1900), day = mydate.getDay(), month = mydate.getMonth(), daym = mydate.getDate(), daym < 10 && (daym = daym), document
    .getElementsByClassName("f" + i + "-date")[0].innerHTML = months[month] + " " + (daym) + ", " + year;
});
