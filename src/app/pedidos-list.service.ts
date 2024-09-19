import { Injectable } from '@angular/core';
import { Pedido } from './pedido';
import {listaInicial} from "./Data/pedido.storage";

@Injectable({
  providedIn: 'root'
})
export class PedidosListService {

  private pedidosList:Pedido[]=listaInicial

  addPedido(plate:Pedido){
    this.pedidosList.push(plate)
  }

  getList():Pedido[]{
    return this.pedidosList
  }

  remove(index:number){
    this.pedidosList.splice(index,1) //splice es el metodo correcto para remover cosas de un array con el index
  }

  constructor() { }
}
