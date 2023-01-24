let buttons = [false, false, false, false, false, false, false];

function getId(id) {
    const inicial = id;
    for (let c = 0; c < 3; c++) {

        let imageNum;
        for (let i = 1; i < 8; i++) {
            let testID = "b" + i;

            if (id == testID) {

                imageNum = id.charAt(1);
                
                if (buttons[imageNum - 1] == false) {
                    
                    const element = document.querySelector('style');
                    const stylesheet = element.sheet;

                    stylesheet.insertRule('#' + id + ' {box-shadow: 0px 0px  rgba(0, 0, 0, 0.298);}');


                    if (imageNum % 2 == 1) {
                        stylesheet.insertRule('#' + id + ' {background-image: url("Button1Sombra.png");}');
                    } else {
                        stylesheet.insertRule('#' + id + ' {background-image: url("Button2Sombra.png");}');
                    }

                    buttons[imageNum - 1] = true;

                }else if (buttons[imageNum -1] == true){

                   
                    const element = document.querySelector('style');
                    const stylesheet = element.sheet;

                    stylesheet.deleteRule('#' + id + ' {background-image: url("Button2Sombra.png");}');
                    stylesheet.deleteRule('#' + id + ' {background-image: url("Button1Sombra.png");}');
                    stylesheet.deleteRule('#' + id + ' {box-shadow: 0px 0px  rgba(0, 0, 0, 0.298);}');

                    if (imageNum % 2 == 1) {
                        stylesheet.insertRule('#' + id + ' {background-image: url("Button1.png");}');
                    } else {
                        stylesheet.insertRule('#' + id + ' {background-image: url("Button2.png");}');
                    }
  
                    buttons[imageNum - 1] = false;
                }



            }
        }


        if (c == 0) {
            let idNum = inicial.charAt(1);
            idNum--;
            if (idNum <= 0) {
                idNum = 7;
            }
            id = "b" + idNum;
        }
        if (c == 1) {
            let idNum = inicial.charAt(1);
            idNum++;
            if (idNum >= 8) {
                idNum = 1;
            }
            id = "b" + idNum;

        }
    }

}