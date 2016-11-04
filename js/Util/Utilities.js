module.exports ={};

exports = {
  post:function (data=null, resource, successCallBack=null, errorCallback=null,returnType ='text'){
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
  get:function(resource,successCallBack,errorCallback,returnType="html"){
    $.get(
      {
        url:resource,
        dataType:returnType,
        success: successCallBack,
        error : errorCallback
      }
    );
  }
}
module.exports = exports;
