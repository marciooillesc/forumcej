
// Turmas pré-definidas — usadas no cadastro e no formulário do professor
export const TURMAS = [
  // Ensino Fundamental I
  'EF1 - 2º Ano A','EF1 - 2º Ano B','EF1 - 2º Ano C','EF1 - 2º Ano D',
  'EF1 - 3º Ano A','EF1 - 3º Ano B','EF1 - 3º Ano C','EF1 - 3º Ano D',
  'EF1 - 4º Ano A','EF1 - 4º Ano B','EF1 - 4º Ano C','EF1 - 4º Ano D',
  'EF1 - 5º Ano A','EF1 - 5º Ano B','EF1 - 5º Ano C','EF1 - 5º Ano D',
  // Ensino Fundamental II
  'EF2 - 6º Ano A','EF2 - 6º Ano B','EF2 - 6º Ano C','EF2 - 6º Ano D',
  'EF2 - 7º Ano A','EF2 - 7º Ano B','EF2 - 7º Ano C','EF2 - 7º Ano D',
  'EF2 - 8º Ano A','EF2 - 8º Ano B','EF2 - 8º Ano C','EF2 - 8º Ano D',
  'EF2 - 9º Ano A','EF2 - 9º Ano B','EF2 - 9º Ano C','EF2 - 9º Ano D',
  // Ensino Médio
  'EM - 1º Ano A','EM - 1º Ano B','EM - 1º Ano C','EM - 1º Ano D',
  'EM - 2º Ano A','EM - 2º Ano B','EM - 2º Ano C','EM - 2º Ano D',
  'EM - 3º Ano A','EM - 3º Ano B','EM - 3º Ano C','EM - 3º Ano D',
];

export function turmasOptions(selecionado = '') {
  return '<option value="">Selecione a turma…</option>' +
    TURMAS.map(t => `<option value="${t}"${t === selecionado ? ' selected' : ''}>${t}</option>`).join('');
}
