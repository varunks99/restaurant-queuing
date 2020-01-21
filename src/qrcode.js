import React from 'react';

class QRCode extends React.Component {
  constructor(props) {
    super(props)
  }

  var qrcode=new QRCode(document.getElementById('qrResult'),{
    width:100,
    height:100
  });

function generate(){
  var message=document.getElementById('qr');
  if(!message.value){
    alert("Input a text");
    message.focus();
    return;
  }

  qrcode.makeCode(message.value);

  render() {
    <div>
      <form onsubmit="generate();return false;">
      	<input type="text" id="qr" name="">
      </form>

      <div id="qrResult" style="height: 100px;width: 100px">

      </div>
    </div>
  }
}
