import { useSetRecoilState } from "recoil";
import { IEvento } from "../../interfaces/IEvento";
import { listaDeEventosState } from "../atom";

const useAtualizarEvento = () => {
  const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState);
  return (evento: IEvento) => {
    return setListaDeEventos((lista) => {
      const indice = lista.findIndex((evt) => evt.id === evento.id);
      return [...lista.slice(0, indice), evento, ...lista.slice(indice + 1)];
    });
  };
};
export default useAtualizarEvento;
