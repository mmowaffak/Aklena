var moment = require('moment');

module.exports ={};

exports = {
  getDate : function(){
  	return moment().get('date');
  },
  
  getHour24 : function(){
  	return moment().get('hour');
  },
  
  getHour12 : function(){
  if(moment().get('hour')>12){
  	return moment().get('hour')-12;
  }
  	return moment().get('hour');
  },

  getDayNumeric : function(){
  	return moment().format('D');
  },

  getDayChar : function(){
	return moment().format('dddd');
  },
  getMonthNumeric : function(){
  	return moment().format('M');
  },

  getMonthChar : function(){
	return moment().format('MMMM');
  },

  getMinute : function(){
  	return moment().get('minute');
  },
  getTimestamp : function(){
  	return moment().unix();
  },

  getTimeStampObject : function(){
  	return {'hour':exports.getHour24(),
  			'minute' : exports.getMinute(),
  			'day' : exports.getDayNumeric(),
  			'month' :exports.getMonthNumeric(),
  			'timestamp': exports.getTimestamp()};
  }
}
module.exports = exports;