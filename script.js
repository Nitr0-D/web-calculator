 function writeNumber(elementId){
        var screen = document.getElementById("screen");
        if(screen.value =='0' || screen.value =='Syntax error'){
            screen.value  =elementId.textContent;
        }else{
            screen.value  +=elementId.textContent;
        }
        }
        function totalValue(){
                    var screen = document.getElementById("screen");
                    if(screen.value !=''){
                        var result = eval(screen.value)
                        screen.value = result
                    }
        }
        function exponentiate() {
                    var screen = document.getElementById('screen');
                    screen.value  = screen.value + '**';
        }
        //made update that allows to exponentiate numbers. But I don't quite
        //know how to make it appear nicely like this: ^.
        //will check back later
        function backSpace() {
            var screen = document.getElementById("screen");
            screen.value = screen.value.substring(0,screen.value.length-1)
        }
        function clearAll(){
           var screen = document.getElementById("screen");
           screen.value = '0'
        }
        //Apart from understanding line 116, and occassional updates, 
        // my work here is done.;
