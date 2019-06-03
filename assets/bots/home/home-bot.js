
var botui = BotUI('home-index');
var guestname = 'Guest';
var feelingmode = 'Nice';

botui.message.bot('Hello! 👋 Welcome!')
  .then(function () {
    return botui.message.add({
      loading: true,
      delay: 500,
      content: 'I\'m Chatbot, a bot by Apexvalue!'
    });
  })
  .then(function () {
    return botui.message.add({
      loading: true,
      delay: 500,
      content: 'I\'m feeling good today. How about you ?'
    });
  })
  .then( function() {
      return botui.action.button({ // 
        loading: true,
        delay: 500,
        action: [{
            text: 'Good',
            value: 'good'
          },{
            text: 'Really Good',
            value: 'really_good'
          },{
            text: 'Really, really Good',
            value: 'awfully_good'
        }]
      });
  })
  .then( function(res) {
    ga_record('btn_click', res.value); //google analitics lock execution
    feelingmode = res.text.toLowerCase();
      return botui.message.bot({
        loading: true, // pretend like we are doing something
        delay: 500,
        content: 'You are feeling ' + feelingmode + '!'

      });
  })
  .then( function() {
    botui.message
    .bot({
          delay: 1200,
        loading: true,
          content: 'By the way, what\'s your name?'
      })
  })
  .then(function () {
          return botui.action.text({
            delay: 500,
            action: {
                //size: 38,
                //icon: 'user-circle-o',
                placeholder: 'Your Name'
            }
          });
      })
      .then(function(res) {
          ga_record('btn_click', res.value); //google analitics lock execution
          guestname = res.value; // save new value
          botui.message
          .bot({
              delay: 1000,
              //loading: true,
              content: 'Awesome! Nice to meet you <b>' + guestname + '</b>! ![hello image](/assets/img/hello.gif)'
          });
  })
  .then(function () {
    return botui.message.add({
      delay: 1500,
      content: 'Looking for help? How can we help you today?'
    });
  })
  .then(function () {
    return botui.message.add({
      delay: 500,
      content: 'Just pick an option:'
    });
  })
  .then(function () {
    return botui.action.button({
      delay: 500,
      action: [{
        text: 'Products',
        value: 'products1'
      }, {
        text: 'No, Give me other options',
        value: 'moreoptions1'
      }]
    });
  })
  .then(function (res) {
    ga_record('btn_click', res.value); //google analitics lock execution
    if(res.value == 'products') {
      products();
    }
    if(res.value == 'moreoptions1') {
      moreoptions();
    }
  });

var products = function () {
  botui.message.add({
    delay: 1000,
    content: "Awesome! Please select the products you want :"
  })
  .then(function () {
    return botui.action.button({
      delay: 500,
      action: [{
        text: 'Automotive',
        value: 'automotive1'
      }, {
        text: 'Weather',
        value: 'weather1'
      }, {
        text: 'GPS',
        value: 'gps1'
      }, {
        text: 'Miscellaneous',
        value: 'miscellaneous1'
      }]
    });
  })
  .then(function (res) {
    ga_record('btn_click', res.value); //google analitics lock execution
    if(res.value == 'automotive1') {
      automotive();
    }
    if(res.value == 'weather1') {
      weather();
    }
    if(res.value == 'gps1') {
      gps();
    }
    if(res.value == 'miscellaneous1') {
      miscellaneous();
    }
  })
  .then(askmore);
};

////////////////////////////////
var aboutus = function () {
  botui.message.add({
    loading: true,
    delay: 1000,
    content: 'For more information about us visit our <b>[About Us Chatbot page](/about)</b>'
  })
  .then(askmore);
};

////////////////////////////////
var contactus = function () {
  botui.message.add({
    loading: true,
    delay: 1000,
    content: 'To contact us visit our <b>[Contact Us Chatbot page](/contact)</b>'
  })
  .then(askmore);
};

////////////////////////////////
var ourcustomers = function () {
  botui.message.add({
    loading: true,
    delay: 1000,
    content: 'To see  our recent customers visit our <b>[Recent Customers Chatbot page](/customers)</b>'
  })
  .then(askmore);
};

////////////////////////////////
var exitnow = function () {
  ga_record('message', 'end'); //google analitics lock execution
  botui.message.add({
    loading: true,
    delay: 1000,
    content: 'It is nice day to have some conversational with you <b>'+ guestname +'</b>'
  })
  .then(function () {
    return botui.message.bot({
      delay: 3000,
      content: 'If you need further information drop me in line on !(mail) [contact@apexvalue.com](mailto:contact@apexvalue.com), I love meeting new people and making new friends!'
    });
  })
  .then(function () {
    return botui.message.bot({
      delay: 2000,
      content: '👋'
    });
  });
};

////////////////////////////////
var askmore = function () {
  botui.message.add({
    loading: true,
    delay: 1000,
    content: 'What else do you need <b>'+guestname+'</b>?'
  })
  .then(function () {
    return botui.action.button({
      delay: 500,
      action: [{
        text: 'Get Started',
        value: 'getstarted'
      }, {
        text: 'Other options',
        value: 'moreoptions'
      }]
      });
  })
  .then(function (res) {
    ga_record('btn_click', res.value); //google analitics lock execution
    if(res.value == 'getstarted') {
      getstarted();
    }
    if(res.value == 'moreoptions') {
      moreoptions();
    }
    if(res.value == 'exitnow') {
      exitnow();
    }
  });
};

////////////////////////////////
var moreoptions = function () {
  botui.message.add({
    loading: true,
    delay: 1000,
    content: 'Kindly select the following options below:'
  })
  .then(function () {
    return botui.action.button({
      delay: 500,
      size:30,
      action: [{
        text: 'About',
        value: 'aboutus2'
      }, {
        text: 'Contact',
        value: 'contactus'
      }, {
        text: 'Customers',
        value: 'ourcustomers2'
      }, {
        text: 'End',
        value: 'exitnow2'
      }]
      });
  })
  .then(function (res) {
    ga_record('btn_click', res.value); //google analitics lock execution
    if(res.value == 'aboutus2') {
      aboutus();
    }
    if(res.value == 'contactus') {
      contactus();
    }
    if(res.value == 'ourcustomers2') {
      ourcustomers();
    }
    if(res.value == 'exitnow2') {
      exitnow();
    }
  });
};


var ga_record = function(type, action) {
  if(ga) {
    ga('send', {
      hitType: 'event',
      eventCategory: type,
      eventAction: action
    });
  }
}
