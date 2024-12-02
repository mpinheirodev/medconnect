import BASEAPI from "../../services/api/config"

export function criarUsuario({payload}: any) {
  return BASEAPI.post("/usuarios", payload)
}

export function loginUsuario({payload}: any) {
  return BASEAPI.post("/usuarios/login", payload)
}

export function criarAgendamento({ payload }: { payload: any }) {
  return BASEAPI.post("/agendamentos", payload);
}

export function listarAgendamentos() {
  return BASEAPI.get("/agendamentos");
}

export function listarClinicas() {
  return BASEAPI.get("/clinicas");
}

export function criarClinica({ payload }: any) {
  return BASEAPI.post("/clinicas", payload);
}

export function buscarClinicaPorId(id: string) {
  return BASEAPI.get(`/clinicas/${id}`);
}

export function atualizarClinica(id: string, { payload }: any) {
  return BASEAPI.put(`/clinicas/${id}`, payload);
}

export function excluirClinica(id: string) {
  return BASEAPI.delete(`/clinicas/${id}`);
}

export function listarClinicaMedicos() {
  return BASEAPI.get("/clinicaMedico");
}

export function criarClinicaMedico({ payload }: any) {
  return BASEAPI.post("/clinicaMedico", payload);
}

export function listarHorarios() {
  return BASEAPI.get("/horarios");
}

export function criarHorario({ payload }: any) {
  return BASEAPI.post("/horarios", payload);
}


export function listarMedicos() {
  return BASEAPI.get("/medicos");
}

export function criarMedico({ payload }: any) {
  return BASEAPI.post("/medicos", payload);
}

export function buscarMedicoPorId(id: string) {
  return BASEAPI.get(`/medicos/${id}`);
}

export function atualizarMedico(id: string, { payload }: any) {
  return BASEAPI.put(`/medicos/${id}`, payload);
}

export function excluirMedico(id: string) {
  return BASEAPI.delete(`/medicos/${id}`);
}

export function listarPacientes() {
  return BASEAPI.get("/pacientes");
}

export function criarPaciente({ payload }: any) {
  return BASEAPI.post("/pacientes", payload);
}

export function buscarPacientePorId(id: string) {
  return BASEAPI.get(`/pacientes/${id}`);
}

export function atualizarPaciente(id: string, { payload }: any) {
  return BASEAPI.put(`/pacientes/${id}`, payload);
}

export function excluirPaciente(id: string) {
  return BASEAPI.delete(`/pacientes/${id}`);
}

export function listarUsuarios() {
  return BASEAPI.get("/usuarios");
}

export function buscarUsuarioPorId(id: string) {
  return BASEAPI.get(`/usuarios/${id}`);
}

export function atualizarUsuario(id: string, { payload }: any) {
  return BASEAPI.put(`/usuarios/${id}`, payload);
}

export function excluirUsuario(id: string) {
  return BASEAPI.delete(`/usuarios/${id}`);
}