function iniciarQuiz() {
    title.style.display = 'none';
    container_Perguntas.style.display = 'flex';
    enunciado1.style.display = 'flex';
    ipt_R1.style.display = 'flex';
}
//                0    1        2          3    4     5      6         7           8       9              10                   11                     12           13  14       15        16
vt_respostas = [CPU, ULA, Registradores, RAM, ROM, EPROM, Flash, MemoriaDeMassa, DMA, ChipSelect, BarramentoDeDados, BarramentoDeEndereços, BarramentoDeControle, i5, i7, DualCore, QuadCore]

function Avancar() {
    let indice = 1;
    
    enunciado1.style.display = 'flex';
    ipt_R1.style.display = 'flex';
}