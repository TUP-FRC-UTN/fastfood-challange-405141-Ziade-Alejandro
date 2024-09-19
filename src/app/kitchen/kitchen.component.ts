import {Component, inject} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {PedidosListService} from "../pedidos-list.service";
import {Pedido} from "../pedido";
import {PedidosReadyListService} from "../pedidos-ready-list.service";

@Component({
  selector: 'app-kitchen',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './kitchen.component.html',
  styleUrl: './kitchen.component.css'
})
export class KitchenComponent {

  private servicePedido= inject(PedidosListService)
  private serviceReady = inject(PedidosReadyListService)

  freeOven:boolean=false;

  luis:Pedido ={
    number:179,
    name:'Luis',
    description:'6 Empanadas de carne'
  }

  toCookList:Pedido[]=[]
  inCookList:Pedido[]=[this.luis]

  ngOnInit() {
    this.updateList()
  }

  updateList(){
    this.toCookList=this.servicePedido.getList();
  }

  toCook(index:number){
    this.inCookList.push(this.toCookList[index]) //pongo el plato en la nueva lista
    this.servicePedido.remove(index)//remuevo el plato del servicio
    this.updateList()//actualizo la lista
    this.freeOven=false//esto ocupa el horno asi que no se puede poner ningun otro plato
  }

  toServe(index:number){
    this.serviceReady.addPedido(this.inCookList[index])//subo al servicio
    this.inCookList.splice(index,1)
    this.freeOven=true//esto libera el Horno para que se pueda poner el siguiente plato
  }

}
