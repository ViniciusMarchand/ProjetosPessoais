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
                    buttons[imageNum - 1] = true;
                    if(imageNum %2 == 1){
                        document.getElementById(id).style.backgroundImage = "url('Button1Sombra.png')"
                    }else{
                        document.getElementById(id).style.backgroundImage = "url('Button2Sombra.png')"
                    }

                }else if (buttons[imageNum -1] == true){
                    buttons[imageNum - 1] = false;
                    if(imageNum %2 == 1){
                        document.getElementById(id).style.backgroundImage = "url('Button1.png')"
                    }else{
                        document.getElementById(id).style.backgroundImage = "url('Button2.png')"
                    }

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