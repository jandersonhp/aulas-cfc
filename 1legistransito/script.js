const slides = [
  // 1
  { title: "Introdução à Legislação",
    content: `
      <ul>
        <li><strong>CTB:</strong> Lei nº 9.503/1997</li>
        <li>Decretos, Resoluções, Portarias e Normativas</li>
        <li>Trânsito: direito de todos, segurança e fluidez</li>
        <li>Uso de vias por pessoas, veículos e animais</li>
        <li>Acordos Internacionais: Convenção de Viena, Mercosul</li>
      </ul>`
  },
  // 2
  { title: "Sistema Nacional de Trânsito (SNT)",
    content: `
      <ul>
        <li>Órgãos da União, Estados, DF e Municípios</li>
        <li>Habilitação, fiscalização, julgamento de infrações</li>
        <li>Objetivos: segurança, fluidez, conforto, defesa ambiental</li>
      </ul>`
  },
  // 3
  { title: "Direitos e Deveres do Cidadão",
    content: `
      <ul>
        <li>Condutor: transitar com segurança</li>
        <li>Pedestre: prioridade em faixas e circulação segura</li>
        <li>Motorista: prudência e cuidado com terceiros</li>
      </ul>`
  },
  // 4
  { title: "Processo de Habilitação",
    content: `
      <ul>
        <li>Solicitação de ACC ou CNH</li>
        <li>Requisitos: 18 anos, ler/escrever, identidade e CPF</li>
        <li>Exames: psicológico, físico/mental, teórico e prático</li>
      </ul>`
  },
  // 5
  { title: "Licença de Aprendizagem (LADV)",
    content: `
      <ul>
        <li>Obrigatória para aulas práticas</li>
        <li>Contém identificação do candidato, CFC, categoria e validade</li>
      </ul>`
  },
  // 6
  { title: "Permissão, Renovação e Reciclagem",
    content: `
      <ul>
        <li>PPD: 1 ano, CNH definitiva se sem infrações graves</li>
        <li>Renovação: 10 anos (<50), 5 anos (50-70), 3 anos (≥70)</li>
        <li>Reciclagem obrigatória para pontos ou condenação</li>
      </ul>`
  },
  // 7
  { title: "Documentos e Registro de Veículos",
    content: `
      <ul>
        <li>CRLV-e: registro + licenciamento eletrônico</li>
        <li>Porte obrigatório: CNH, ACC ou PPD</li>
        <li>Registro, transferência, RENAVAM, DPVAT e IPVA</li>
      </ul>`
  },
  // 8
  { title: "Categorias de Habilitação",
    content: `
      <ul>
        <li>A: 2 ou 3 rodas</li>
        <li>B: veículos até 3.500 kg, até 8 lugares</li>
        <li>C, D, E: carga/passageiros e combinações</li>
        <li>Exame toxicológico para C, D, E</li>
      </ul>`
  },
  // 9
  { title: "Classificação dos Veículos",
    content: `
      <ul>
        <li>Tração: automotor, elétrico, humano, animal</li>
        <li>Espécie: passageiros, carga, misto, especial, coleção</li>
        <li>Categoria: particular, aluguel, oficial, diplomática</li>
        <li>Placas Mercosul: cores identificam categoria</li>
      </ul>`
  },
  // 10
  { title: "Sinalização de Trânsito",
    content: `
      <ul>
        <li>Sinalização vertical: regulamentação, advertência e indicação</li>
        <li>Sinalização horizontal: faixas, linhas de bordo, setas</li>
        <li>Dispositivos complementares: tachões, semáforos, placas auxiliares</li>
      </ul>`
  },
  // 11
  { title: "Infrações e Penalidades",
    content: `
      <ul>
        <li>Leves, médias, graves e gravíssimas</li>
        <li>Pontos na CNH: de 3 a 7 por infração</li>
        <li>Multas, suspensão e cassação</li>
      </ul>`
  },
  // 12
  { title: "Responsabilidade do Condutor",
    content: `
      <ul>
        <li>Civil, penal e administrativa</li>
        <li>Conduzir veículo em condições de segurança</li>
        <li>Respeitar normas de circulação e sinalização</li>
      </ul>`
  },
  // 13
  { title: "Educação e Cidadania no Trânsito",
    content: `
      <ul>
        <li>Campanhas educativas</li>
        <li>Princípios de convivência segura</li>
        <li>Respeito a pedestres e ciclistas</li>
      </ul>`
  },
  // 14
  { title: "Uso de Equipamentos Obrigatórios",
    content: `
      <ul>
        <li>Cinto de segurança</li>
        <li>Capacete</li>
        <li>Dispositivo de retenção infantil</li>
        <li>Faróis e luzes regulamentares</li>
      </ul>`
  },
  // 15
  { title: "Transporte de Passageiros",
    content: `
      <ul>
        <li>Ônibus, vans, táxis e transporte escolar</li>
        <li>Capacidade máxima e lugares</li>
        <li>Documentação e regulamentação especial</li>
      </ul>`
  },
  // 16
  { title: "Transporte de Carga",
    content: `
      <ul>
        <li>Veículos de carga e transporte de produtos perigosos</li>
        <li>Documentos: manifesto de carga, nota fiscal</li>
        <li>Condições de segurança e restrições de circulação</li>
      </ul>`
  },
  // 17
  { title: "Velocidade e Limites",
    content: `
      <ul>
        <li>Velocidade máxima e mínima</li>
        <li>Reduções em curvas, proximidade de escolas, áreas urbanas</li>
        <li>Fiscalização eletrônica e radares</li>
      </ul>`
  },
  // 18
  { title: "Ultrapassagem e Mudança de Faixa",
    content: `
      <ul>
        <li>Permitida apenas quando seguro e autorizado</li>
        <li>Sinalizar mudança de direção</li>
        <li>Ultrapassagem proibida em curvas, pontes e faixa contínua</li>
      </ul>`
  },
  // 19
  { title: "Parada e Estacionamento",
    content: `
      <ul>
        <li>Parar: temporário para embarque/desembarque</li>
        <li>Estacionar: permanente, obedecendo sinalização</li>
        <li>Locais proibidos: faixas de pedestre, esquinas, calçadas</li>
      </ul>`
  },
  // 20
  { title: "Condições Climáticas e Ambientais",
    content: `
      <ul>
        <li>Reduzir velocidade com chuva, neblina, gelo</li>
        <li>Acender luz baixa à noite ou em túneis</li>
        <li>Evitar poluição sonora e ambiental</li>
      </ul>`
  },
  // 21
  { title: "Álcool, Drogas e Direção",
    content: `
      <ul>
        <li>Proibido dirigir sob efeito de álcool ou drogas</li>
        <li>Exames: bafômetro e clínicos</li>
        <li>Penalidades: multa, suspensão e detenção</li>
      </ul>`
  },
  // 22
  { title: "Acidentes de Trânsito",
    content: `
      <ul>
        <li>Providências imediatas: sinalizar, socorrer vítimas</li>
        <li>Comunicar autoridades</li>
        <li>Responsabilidade civil e criminal</li>
      </ul>`
  },
  // 23
  { title: "Primeiros Socorros",
    content: `
      <ul>
        <li>Verificar segurança do local</li>
        <li>Acionar SAMU/Polícia</li>
        <li>Prestar socorro básico: respiração, sangramento, choque</li>
      </ul>`
  },
  // 24
  { title: "Equipamentos Obrigatórios do Veículo",
    content: `
      <ul>
        <li>Triângulo, extintor, estepe e macaco</li>
        <li>Luzes e sinalizadores em perfeito funcionamento</li>
      </ul>`
  },
  // 25
  { title: "Manutenção Preventiva",
    content: `
      <ul>
        <li>Revisões periódicas</li>
        <li>Pneus, freios, óleo, faróis e baterias</li>
        <li>Documentação em dia</li>
      </ul>`
  },
  // 26
  { title: "Transporte de Crianças",
    content: `
      <ul>
        <li>Cadeirinhas, assentos elevados, cinto de segurança</li>
        <li>Idade, peso e altura definidos por lei</li>
      </ul>`
  },
  // 27
  { title: "Uso de Celular e Distrações",
    content: `
      <ul>
        <li>Proibido manusear celular enquanto dirige</li>
        <li>Atenção total à via e sinalização</li>
      </ul>`
  },
  // 28
  { title: "Pedestres e Ciclistas",
    content: `
      <ul>
        <li>Prioridade nas faixas</li>
        <li>Respeitar ciclovias e ciclofaixas</li>
        <li>Reduzir velocidade próximo a áreas escolares</li>
      </ul>`
  },
  // 29
  { title: "Infrações Especiais",
    content: `
      <ul>
        <li>Conduzir sem CNH ou com documento vencido</li>
        <li>Excesso de velocidade</li>
        <li>Estacionamento irregular</li>
      </ul>`
  },
  // 30
  { title: "Sistema de Pontos na CNH",
    content: `
      <ul>
        <li>Infrações leves: 3 pontos</li>
        <li>Médias: 4 pontos</li>
        <li>Graves: 5 pontos</li>
        <li>Gravíssimas: 7 pontos</li>
        <li>Acúmulo de 20 pontos: suspensão</li>
      </ul>`
  },
  // 31
  { title: "Seguros Obrigatórios",
    content: `
      <ul>
        <li>DPVAT: danos pessoais causados por veículos</li>
        <li>Seguro opcional: cobertura contra terceiros</li>
      </ul>`
  },
  // 32
  { title: "Fiscalização e Operação",
    content: `
      <ul>
        <li>Polícia Militar e Rodoviária Federal</li>
        <li>Detran e agentes municipais</li>
        <li>Blitz, radares e fiscalização eletrônica</li>
      </ul>`
  },
  // 33
  { title: "Transporte de Animais",
    content: `
      <ul>
        <li>Condutor deve garantir segurança do animal</li>
        <li>Evitar transporte solto na cabine ou porta-malas</li>
      </ul>`
  },
  // 34
  { title: "Veículos de Emergência",
    content: `
      <ul>
        <li>Prioridade para ambulâncias, bombeiros, polícia e socorro</li>
        <li>Respeitar sirenes e sinais luminosos</li>
      </ul>`
  },
  // 35
  { title: "Condições de Circulação em Rodovias",
    content: `
      <ul>
        <li>Faixas de rolamento e acostamento</li>
        <li>Sinalização vertical e horizontal</li>
        <li>Respeitar limites de velocidade e ultrapassagens</li>
      </ul>`
  },
  // 36
  { title: "Emergências e Socorro",
    content: `
      <ul>
        <li>Acidentes graves: acionar serviços de emergência</li>
        <li>Evitar congestionamentos e novos acidentes</li>
      </ul>`
  },
  // 37
  { title: "Responsabilidade Ambiental",
    content: `
      <ul>
        <li>Evitar poluição sonora e atmosférica</li>
        <li>Transporte de resíduos: seguir normas ambientais</li>
      </ul>`
  },
  // 38
  { title: "Resumo Final",
    content: `
      <ul>
        <li>Respeito à legislação, pedestres e ciclistas</li>
        <li>Segurança, prudência e manutenção do veículo</li>
        <li>Documentação e habilitação sempre em dia</li>
        <li>Educação e cidadania no trânsito</li>
      </ul>`
  }
];

// -- código de navegação permanece igual --
let currentSlide = 0;
const slideContent = document.getElementById('slide-content');
const slideNumber = document.getElementById('slide-number');
const slideList = document.getElementById('slide-list');

function renderSlide(index) {
  const slide = slides[index];
  slideContent.innerHTML = `<h2>${slide.title}</h2>${slide.content}`;
  slideNumber.textContent = `${index + 1} / ${slides.length}`;
  document.querySelectorAll('#slide-list li').forEach((li, i) => {
    li.classList.toggle('active', i === index);
  });
}

slides.forEach((slide, index) => {
  const li = document.createElement('li');
  li.textContent = slide.title;
  li.addEventListener('click', () => {
    currentSlide = index;
    renderSlide(currentSlide);
  });
  slideList.appendChild(li);
});

document.getElementById('prev').addEventListener('click', () => {
  if (currentSlide > 0) currentSlide--;
  renderSlide(currentSlide);
});

document.getElementById('next').addEventListener('click', () => {
  if (currentSlide < slides.length - 1) currentSlide++;
  renderSlide(currentSlide);
});

renderSlide(currentSlide);

// Navegação com teclado circular
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') { // seta para a direita
    currentSlide = (currentSlide + 1) % slides.length; // vai pro próximo ou volta pro primeiro
    renderSlide(currentSlide);
  } else if (event.key === 'ArrowLeft') { // seta para a esquerda
    currentSlide = (currentSlide - 1 + slides.length) % slides.length; // vai pro anterior ou último
    renderSlide(currentSlide);
  }
});

