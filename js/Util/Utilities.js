module.exports ={};

exports = {
  sendData:function (data, resource, successCallBack, errorCallback ,returnType ='text'){
    $.post(
      {
        url:resource,
        dataType : returnType,
        data:data,
        success: successCallBack,
        error : errorCallback
      }
    );

}
}
module.exports = exports;
