import {Component, inject, numberAttribute} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Pedido} from "../pedido";
import {PedidosListService} from "../pedidos-list.service";

@Component({
  selector: 'app-pos',
  standalone: true,
    imports: [
        FormsModule
    ],
  templateUrl: './pos.component.html',
  styleUrl: './pos.component.css'
})
export class POSComponent {

   nombre=''
  description=''

  private serviceDelivery = inject(PedidosListService)

  ordenar(){//TODO aca hay errores

    let id:number= Math.floor(Math.random()*1000+1);
    console.log('the id is: '+ id)


    const newPedido:Pedido={
      number:id,
      name:this.nombre,
      description:this.description,
    }

    this.serviceDelivery.addPedido(newPedido);
    console.log()



    this.nombre=''
    this.description=''
  }

}
