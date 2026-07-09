$(document).ready(function () {
  let btn = document.getElementById("login-btn");
  let logPage = document.getElementById("login-id");
  let page1 = document.getElementById("book-id");
  let descHeader = document.getElementById("descH-id");
  let descDescript = document.getElementById("descD-id");
  let bg = document.getElementById("bg-id");
  let vidOwner = document.getElementById('capt-by');
  let sources;
  let count = 0;

  //Show The Login Page
  $(btn).click(function () {
    $(logPage).toggleClass('login-show');

  });

  //Chnage Background for every click
  $(page1).click(function () {
    count++;
    if (count === 4) {
      count = 0;
    };


    swapBg(count);
  });


  function swapBg(index) {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
      const xmlDoc = this.responseXML;
      sources = xmlDoc.getElementsByTagName('SOURCE');
    }

    xhttp.open('GET', 'main-bg.xml');
    xhttp.send();

    descHeader.innerHTML = sources[index].getElementsByTagName('PLACE')[0].childNodes[0].nodeValue; //HEADER DESCRIPTION
    descDescript.innerHTML = sources[index].getElementsByTagName('DESC')[0].childNodes[0].nodeValue; //DESCRIPTION
    vidOwner.innerHTML = "Captured by:" + sources[index].getElementsByTagName('OWNER')[0].childNodes[0].nodeValue; //OWNER OF VIDEO
    vidOwner.href = sources[index].getElementsByTagName('LINK')[0].childNodes[0].nodeValue; //VIDEO LINK

    // 0-PALAWAN 1-ALBAY 2-MANILA 3-ILOCOS NORTE

    switch (index) {
      case 0:
        bg.src = 'images/palawan.mp4';
        break;
      case 1:
        bg.src = 'images/albay.mp4';
        break;
      case 2:
        bg.src = 'images/manila.mp4';
        break;
      case 3:
        bg.src = 'images/ilocos-norte.mp4';
        break;
      default:
        console.log("ERROR IN CODE!")
    }
  }


  swapBg();
});
