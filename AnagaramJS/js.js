const form = document.getElementById("foruum");
function handleForm(event) {
     event.preventDefault(); 
    } 
form.addEventListener('submit', handleForm);

function myFunction(){
    const x = document.getElementById("prvaRec").value;
    const y = document.getElementById("drugaRec").value;

    const prva = x.toLowerCase().split('').sort().join("");
    const druga = y.toLowerCase().split("").sort().join("");
    

    function proveravamo(a,b) {
        let x = a.length;
        let y = b.length;
        if( x === y) {
           for( i= 0 ; i < x; i++){
               if(a[i] !== b[i]){
                alert("nije Anagram!!!!") 
                   break;
               }else{
                document.getElementById("daLiJeAnagaram").innerHTML = "Rec je Anagram";
               }

           }
        }
        else{
            //document.getElementById("daLiJeAnagaram").innerHTML = "<p>Nije Anagram</p>"; 
            alert("nije Anagram") 
        }
    }
    proveravamo(prva,druga);

    console.log(prva);
    console.log(druga);



    /*
  document.getElementById("prikaziPrvuRec").innerHTML = prva;
  document.getElementById("prikaziDruguRec").innerHTML = druga;
*/



}

