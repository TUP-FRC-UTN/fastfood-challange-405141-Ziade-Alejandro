import { Injectable } from '@angular/core';
import {Pedido} from "./pedido";

@Injectable({
  providedIn: 'root'
})
export class PedidosReadyListService {

  private readyPlatesList:Pedido[]=[]

  addPedido(plate:Pedido){
    this.readyPlatesList.push(plate)
  }

  removePedido(index:number){
    this.readyPlatesList.splice(index,1)
  }

  getList():Pedido[]{
    return this.readyPlatesList
  }


  constructor() { }
}
