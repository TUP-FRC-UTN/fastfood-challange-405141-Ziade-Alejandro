import { JsonPipe } from '@angular/common';
import {Component, inject} from '@angular/core';
import { Pedido } from '../pedido';
import {PedidosListService} from "../pedidos-list.service";
import {listaInicial} from "../Data/pedido.storage";
import {PedidosReadyListService} from "../pedidos-ready-list.service";

@Component({
  selector: 'app-delivery-point',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './delivery-point.component.html',
  styleUrl: './delivery-point.component.css'
})
export class DeliveryPointComponent {

  private servicePedido = inject(PedidosListService)
  private serviceReadyPedidos = inject(PedidosReadyListService)

  Carlos:Pedido={
    number:348,
    name:'Carlos',
    description:'somthing i dunno'
  }
  Mauricio:Pedido={
    number:998,
    name:'Mauricio',
    description:'somthing i dunno'
  }

  deliveryList:Pedido[]=[]

  deliveryReady:Pedido[]= []

  ngOnInit() {
    this.getPedidos()
    this.serviceReadyPedidos.addPedido(this.Carlos)
    this.serviceReadyPedidos.addPedido(this.Mauricio)
    this.updateReadyList()
  }

  updateReadyList(){
    this.deliveryReady= this.serviceReadyPedidos.getList()
  }

   getPedidos() {
    this.deliveryList=this.servicePedido.getList()
  }

  servido(index:number){
    alert('tu pedido de: ' +JSON.stringify(this.deliveryReady[index].description)+ ' ya esta listo!')//aviso
    this.serviceReadyPedidos.removePedido(index)// se remueve de la lista en servicio
    this.updateReadyList()//se remueve de la lista local
  }
}
