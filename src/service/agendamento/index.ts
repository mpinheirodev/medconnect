import BASEAPI from "../../services/api/config"

export function criarUsuario({payload}: any) {
  return BASEAPI.post("/usuarios", payload)
}

export function loginUsuario({payload}: any) {
  return BASEAPI.post("/usuarios/login", payload)
}