
var botui = BotUI('about-index');
var guestname = 'Guest';

botui.message
	.bot('Hi, 👋 I\'m Jaymar, a bot by Apexvalue!')
	.then( function(){
  		return botui.message.bot({ // 
    		delay: 500, 
			loading: true,
			content: 'I\'m feeling good today. How about you ?',
  		});
	})
	.then( function() {
  		return botui.action.button({ // 
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
  		return botui.message.bot({
    		delay: 500,
			loading: true, // pretend like we are doing something
    		content: 'You are feeling ' + res.text.toLowerCase() + '!'
  		});
	})
	.then( function() {
		botui.message
		.bot({
      		delay: 500,
		  	loading: true,
      		content: 'By the way, what\'s your name?'
    	})
	})
	.then(function () {
      		return botui.action.text({
        		//delay: 1000,
        		action: {
          		  size: 38,
          		  icon: 'user-circle-o',
          		  placeholder: 'John ?'
        		}
      		});
    	})
    	.then(function(res) {
      		guestname = res.value; // save new value
      		botui.message
        	.bot({
	          	delay: 1000,
	          	//loading: true,
	          	content: 'Nice to meet you <b>' + guestname + '</b>! ![hello image](/assets/img/hello.gif)'
        	});
	})	
	.then(function () {
  		return botui.message.add({
    		delay: 1000,
    		content: 'Hey! <b>'+guestname+'</b>, you come to this page to found out more information about us right?'
  		});
	})
	.then(function () {
  		return botui.action.button({
    		delay: 500,
    		action: [{
      			text: 'Yes',
      			value: 'yesabout'
    		}, {
      			text: 'No, Give me other options',
      			value: 'noabout'
    		}]
  		});
	})
	.then(function (res) {
	  	if(res.value == 'yesabout') {
	    	aboutinfo();
	  	}
	  	if(res.value == 'noabout') {
	    	otherinfo();
	  	}
	});



////////////////////////////////////
var aboutinfo = function () {
  //ga_record('message', 'end'); //google analitics lock execution
  botui.message.add({
    delay: 2000,
    content: 'Alright <b>'+ guestname + '</b> here we go! Just read and listen :).'
  }).then(function () {
    return botui.message.bot({
      delay: 2000,
      content: 'We are a private company in Lapu-Lapu Cebu City Philippines.'
    });
  }).then(function () {
    return botui.message.bot({
      delay: 2000,
      content: 'Our motto is: <b><i>We put technology to work for you.</i></b>'
    });
  }).then(function () {
    return botui.message.add({
      delay: 2200,
      content: 'We are 24 years exclusive international dealer of Davis products here in the Philippines.'
    });
  }).then(function () {
    return botui.message.bot({
      delay: 2000,
      content: 'We are also a Leader of Meteorological Safety and Monitoring Systems distribution.'
    });
  }).then(function () {
    return botui.message.add({
      delay: 4000,
      content: 'You need more info <b>'+guestname+'</b>?'
    });
  }).then(function () {
  return botui.action.button({
    delay: 500,
    action: [{
      text: 'More',
      value: 'moreinfo'
    }, {
      text: 'No, Give me other options',
      value: 'noabout'
    }]
  });
}).then(function (res) {
  //ga_record('btn_click', res.value); //google analitics lock execution
  if(res.value == 'moreinfo') {
    moreinformation();
  }
  if(res.value == 'noabout') {
    otherinfo();
  }
});
};





//////////////////////////////////////////
////////////////////////////////////
var moreinformation = function () {
  //ga_record('message', 'end'); //google analitics lock execution
  botui.message.add({
    delay: 2000,
    content: 'Mr. Shel Shannon is the president, CEO and founder of the company.'
  }).then(function () {
    return botui.message.bot({
      delay: 2000,
      content: 'We are founded in 1994.'
    });
  }).then(function () {
    return botui.message.add({
      delay: 2200,
      content: 'We are also selling [Weather Products](https://www.apexvalue.com/weather)'
    });
  }).then(function () {
    return botui.message.add({
      delay: 2000,
      //type: 'html', // this is 'text' by default
      content: 'As of year 2012, we have sales partnerships in <b>Nigeria</b>, <b>Bolivia</b>, <b>Malaysia</b>, <b>Indonesia</b>, <b>Thailand</b>, <b>Brunei</b>, <b>Ecuador</b>, <b>Singapore</b>, <b>USA</b> and <b>Philippines</b> as well.'
    });
  }).then(function () {
    return botui.message.bot({
      delay: 4000,
      content: 'You need more info?'
    });
  }).then(function () {
  return botui.action.button({
    delay: 500,
    action: [{
      text: 'More',
      value: 'webinfo'
    }, {
      text: 'No, Give me other options',
      value: 'otherinfos'
    }]
  });
}).then(function (res) {
  //ga_record('btn_click', res.value); //google analitics lock execution
  if(res.value == 'webinfo') {
    websiteinfo();
  }
  if(res.value == 'otherinfos') {
    otherinfo();
  }
});
};




//////////////////////////////////////
var otherinfo = function () {
  //ga_record('message', 'end'); //google analitics lock execution
  botui.message.add({
    delay: 2000,
    content: 'Select the following buttons below for the other options:'
  }).then(function () {
  return botui.action.button({
    delay: 500,
    action: [{
      text: 'Customers',
      value: 'customerslist'
    }, {
      text: 'Contact Us',
      value: 'contactus'
    }]
  });
}).then(function (res) {
  //ga_record('btn_click', res.value); //google analitics lock execution
  if(res.value == 'customerslist') {
    customerslink();
  }
  if(res.value == 'contactus') {
    contactuslink();
  }
});
};





/////////////////
var customerslink = function () {
  //ga_record('message', 'end'); //google analitics lock execution
  botui.message.add({
    delay: 2000,
    content: 'Visit Customers page by <b>cliking this link.</b>'
  
  }).then(function () {
    return botui.message.bot({
      delay: 2000,
      content: 'If you need further information or have any doubts, drop me in line on !(mail) [contact@apexvalue.com](mailto:contact@apexvalue.com), I love meeting new people and making new friends!'
    });
  }).then(function () {
    return botui.message.bot({
      delay: 2000,
      content: '👋'
    });
  });
};




/////////////////////


/////////////////
var contactuslink = function () {
  //ga_record('message', 'end'); //google analitics lock execution
  botui.message.add({
    delay: 2000,
    content: 'Visit the <b>[Contact Us webpage](https://www.apexvalue.com/contact)</b>'
  
  }).then(function () {
    return botui.message.bot({
      delay: 2000,
      content: 'If you need further information, drop me in line on !(mail) [contact@apexvalue.com](mailto:contact@apexvalue.com), I love meeting new people and making new friends!'
    });
  }).then(function () {
    return botui.message.bot({
      delay: 2000,
      content: '👋'
    });
  });
};







//////////////////////////////////////
var websiteinfo = function () {
  //ga_record('message', 'end'); //google analitics lock execution
  botui.message.add({
    delay: 2000,
    content: 'We have designed and are currently marketing our own Motor Vehicle Safety and Monitoring Products.'
  }).then(function () {
    return botui.message.bot({
      delay: 3000,
      content: 'Our attention to customer feedback and concerns has proven to be a valuable resource for product development and improvement ideas.'
    });
  }).then(function () {
    return botui.message.bot({
      delay: 3000,
      content: 'You can read the rest of information about us by [visiting the about us page](https://www.apexvalue.com/about)'
    });
  }).then(function () {
    return botui.message.bot({
      delay: 2000,
      content: 'If you need further information or have any doubts, drop me in line on !(mail) [contact@apexvalue.com](mailto:contact@apexvalue.com), I love meeting new people and making new friends!'
    });
  }).then(function () {
    return botui.message.bot({
      delay: 2000,
      content: '👋'
    });
  });
};



