module.exports ={};

exports = {
  sendData:function (data, resource, successCallBack, returnType ='text'){
    $.post(
      {
        url:resource,
        dataType : returnType,
        data:data,
        success: successCallBack
      }
    );

}
}
module.exports = exports;