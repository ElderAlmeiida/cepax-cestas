
var alimentos = JSON.parse(localStorage.getItem('alimentos'))
var cesta_p = []
var cesta_m = []
var cesta_g = [ ]




  function cesta_pequena(){
        const gerar_cesta = cesta_p.push(alimentos.slice(0,11))
        const cesta_1 =  localStorage.setItem('Cesta Pequena',JSON.stringify(cesta_p))
        
        
      
 }


 function cesta_media() {
   
  const cesta_2 = localStorage.setItem('Cesta Media',JSON.stringify(cesta_m))

     const gerar_cesta = cesta_m.push(alimentos.slice(0,18)) 
    
 }

 function cesta_grande() {  
  const cesta_3 = localStorage.setItem('Cesta Grande',JSON.stringify(cesta_g))

  const gerar_cesta = cesta_g.push(alimentos.slice(0,23)) 

  document.getElementById('cesta_on_g').innerHTML = cesta_g.length
 }
























