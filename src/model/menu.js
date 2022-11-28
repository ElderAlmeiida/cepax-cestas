function menu() {
document.getElementById("menu").innerHTML = [   `

<aside class=" fixed top-0 left-0 flex"> 




   <div id="menu-bar" class=" bg-red-600 bg-opacity-70  h-[100vh]   mr-4 transition-all  duration-1000 " style="width:0px" >
 
       <ul id="menu-content" style="display:none"  class="ul_menu_bar mt-3 ml  transition-all  duration-1000">


      

        <!--index-->
       <li class="li_menu_bar m-auto  text-center transition-all  duration-700 text-white font-bold hover:text-yellow-300 focus:text-yellow-300"> <a href="./"> <svg width="166" height="145" viewBox="0 0 166 145" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
       <img class="max-h-[8rem] m-auto items-center text-center transition-all  duration-700 text-white font-bold hover:text-yellow-300 focus:text-yellow-300" src="./public/icon.png"Salt="">
       
       </svg> <p>CEPAX</p> </a> </li>  
    
      
    
         
         <li class="li_menu_bar mt-1 mb-1 m-4  transition-all  duration-700 text-white font-bold hover:text-yellow-300 focus:text-yellow-300"> <a href="/view/dashboard.html">Dashboard</a></Li>
         <li class="li_menu_bar mt-1 mb-1 m-4  transition-all  duration-700 text-white font-bold hover:text-yellow-300 focus:text-yellow-300"> <a href="/view/gerenciamento_de_alimentos.html">Gerenciamento de Alimentos</a> </li>
        
    
    </ul>

   </div>

   <div class="icon-menu h-[4.25rem] w-[3rem] mt-4 hover:text-white items-center" onclick="abrirmenu()"  >
    
   <svg xmlns="http://www.w3.org/2000/svg" class="menu-icon items-center text-red-600 h-[5rem] w-[5rem] p-3 transition-all  duration-500 hover:text-white  hover:bg-red-600 hover:rounded-full hover:bg-opacity-70" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
      <path fill-rule="evenodd" d="M3 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 5.25zm0 4.5A.75.75 0 013.75 9h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 9.75zm0 4.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75zm0 4.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
      
      </svg>
     
  
   </div>

</aside>

` ] 

}

function abrirmenu(){
   let barraMenuaberto = document.getElementById('menu-bar')
   let menucontent = document.getElementById('menu-content')
   if(barraMenuaberto.style.width=="0px"){
      barraMenuaberto.style.width="14.25rem"
      menucontent.style.display="block"
      
   }else {
      barraMenuaberto.style.width="0px"
      menucontent.style.display="none"
   }
}