module.exports ={};

exports = {
  sendData:function (data=null, resource, successCallBack=null, errorCallback=null,returnType ='text'){
    $.post(
      {
        url:resource,
        dataType : returnType,
        data:data,
        success: successCallBack,
        error : errorCallback
      }
    );
},
  get:function(resource,successCallBack,errorCallback){
    $.get(
      {
        url:resource,
        success: successCallBack,
        error : errorCallback
      }
    );
  }
}
module.exports = exports;
