import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
  
  //template: "<p>Hemen jarriko genituzke langileetako baten jakingarriak</p>",
  //styles:["p{background:green; padding:5px; color:white}"]
})
export class EmpleadoComponent implements OnInit {
  
  nombre="Juan";
  apellido="Biain";
  edad=17;
  /*getEdad(){
    return this.edad;
  }*/
  adinadeika(value:String){ }
  
  lantokideika(value:String){ }
  habilitaCuadro=false;
  
  
  usuRegistrado=false;
  
  textoDeRegistro="Inor ez da erroldatu, oraindik.";
  erroldaTestua="Oraindaino, inor EZ DA ERROLDATU, lastima!!.";

  getRegistro(value:String){
    this.usuRegistrado=false;
  }
  setRegistro(event:Event){
    //alert("Bisitaria erroldatu egin da, oraintxe bertan");
    if((<HTMLInputElement>event.target).checked){
      this.textoDeRegistro = "Oraintxe bertan erroldatu dat BAT";
    }else{
      this.textoDeRegistro="Hara, joan zaigu erroldatua. KAKA!!!.";
    }
  }
  
  getRegistrousuario(){
    this.usuRegistrado=false;
  }
  setUsuarioregistrado(event:Event){
    //alert("Bisitaria erroldatu egin da, oraintxe bertan");
    if((<HTMLInputElement>event.target).value== "si"){
      this.erroldaTestua="Erroldatu da BAT, ederto!!";
    }else{
      this.erroldaTestua="Ostera be, erroldategia HUTSIK, KAKA ZAHARRA!!!.";
    }
    //alert(event.target)
    //this.textoDeRegistro = "Oraintxe erroldatu dat BAT, ederto!!";
  }
  
  constructor() {

   }

  ngOnInit(): void {

  }

}
