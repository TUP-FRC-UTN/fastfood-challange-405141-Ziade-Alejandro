import {Pedido} from "../pedido";

const Muza: Pedido = {
  number: 266, // Numero de pedido random de 1 a 1000
  name : 'pedro',  // Nombre del cliente
  description:'Pizza de muzzarela'
}

const Panchos: Pedido={
  number: 895,
  name : 'Juan',
  description:'3 super panchos'
}

export const listaInicial:Pedido[]=[
  Muza,
  Panchos
]
