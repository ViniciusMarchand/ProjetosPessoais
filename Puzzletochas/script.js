let buttons = [1, 2, 3, 4, 5, 6, 7];
function getId(id) {
    const inicial = id;
    for (let c = 0; c < 3; c++) {

        let imageNum;
        for (let i = 1; i < 8; i++) {
            let testID = "b" + i;
            
            if (id == testID) {
                const element = document.querySelector('style');
                const stylesheet = element.sheet;

                stylesheet.insertRule('#' + testID + ' {box-shadow: 0px 0px  rgba(0, 0, 0, 0.298);}');
                imageNum = testID.charAt(1);

                if (imageNum % 2 == 1) {
                    stylesheet.insertRule('#' + testID + ' {background-image: url("Button1Sombra.png");}');
                } else {
                    stylesheet.insertRule('#' + testID + ' {background-image: url("Button2Sombra.png");}');
                }
               

            }
        }
        if(c == 0){
            let idNum = inicial.charAt(1);
            idNum--;
            if(idNum <=0){
                idNum = 7;
            }
            id = "b" + idNum;
        }
        if(c == 1){
            let idNum = inicial.charAt(1);
            idNum++;
            if(idNum >=8){
                idNum = 1;
            }
            id = "b" + idNum;

        }
    }
}



/*if(id = "b1"){
    const element = document.querySelector('style');
    const stylesheet = element.sheet;
    
    stylesheet.insertRule('#b1 {box-shadow: 0px 0px  rgba(0, 0, 0, 0.298);}');
    stylesheet.insertRule('#b1 {background-image: url("Button1Sombra.png");}');
}
*/
