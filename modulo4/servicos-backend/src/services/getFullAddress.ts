import axios from "axios";
import { Request, Response } from "express";
import { Address } from "../types/typeAddress";

export const getFullAddress = async (
  cep: string,
  numero: number
): Promise<Address | undefined> => {
  try {
    console.log(cep, numero);
    const result = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

    const address: Address = {
      logradouro: result.data.logradouro,
      bairro: result.data.bairro,
      cidade: result.data.localidade,
      estado: result.data.uf,
      numero: numero,
      complemento: result.data.complemento,
      cep:result.data.cep
    };
    return address;
  } catch (error: any) {
    return undefined;
  }
};
