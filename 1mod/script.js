const slides = [
  // 1
  { title: "Introdução à Legislação (Pág. 05)",
    content: `
      <ul>
        <li><strong>CTB:</strong> Lei nº 9.503/1997 - vigente desde 22/01/1998</li>
        <li>Legislação: Decretos, Resoluções, Portarias e Normativas</li>
        <li>Trânsito: direito de todos, segurança e fluidez</li>
        <li>Definição: uso das vias por pessoas, veículos e animais</li>
        <li>Acordos Internacionais: Convenção de Viena, Mercosul</li>
        <li><strong>Dever do Aprendiz:</strong> Conhecer e cumprir a legislação</li>
      </ul>`
  },
  // 2
  { title: "Sistema Nacional de Trânsito - SNT (Pág. 06)",
    content: `
      <ul>
        <li><strong>Conceito:</strong> Órgãos da União, Estados, DF e Municípios</li>
        <li><strong>Finalidade:</strong> Habilitação, fiscalização, julgamento de infrações</li>
        <li><strong>Objetivos:</strong> segurança, fluidez, conforto, defesa ambiental</li>
        <li>Estabelece diretrizes da Política Nacional de Trânsito</li>
        <li>Padroniza critérios técnicos e administrativos</li>
      </ul>`
  },
  // 3
  { title: "Direitos e Deveres do Cidadão (Pág. 07)",
    content: `
      <ul>
        <li><strong>Dever do Condutor:</strong> transitar sem oferecer perigo</li>
        <li><strong>Direitos:</strong> vias seguras, educação, assistência médica</li>
        <li><strong>Motorista:</strong> prudência e cuidado com terceiros</li>
        <li><strong>Pedestre:</strong> prioridade em faixas e circulação segura</li>
        <li>Bicicletas têm prioridade sobre veículos motorizados</li>
      </ul>`
  },
  // 4
  { title: "Processo de Habilitação (Pág. 07)",
    content: `
      <ul>
        <li>Solicitação de ACC ou CNH - validade: 12 meses</li>
        <li><strong>Requisitos:</strong> 18 anos, ler/escrever, identidade e CPF</li>
        <li><strong>Exames (Res. 789/2020):</strong></li>
        <li>- Psicológico</li>
        <li>- Aptidão física e mental</li>
        <li>- Teórico-técnico (escrito)</li>
        <li>- Direção veicular (via pública)</li>
      </ul>`
  },
  // 5
  { title: "Licença de Aprendizagem - LADV (Pág. 08)",
    content: `
      <ul>
        <li><strong>Obrigatória</strong> para aulas práticas</li>
        <li><strong>Conteúdo:</strong></li>
        <li>- Identificação do órgão expedidor</li>
        <li>- Nome, CPF, RG, RENACH do candidato</li>
        <li>- CFC e categoria pretendida</li>
        <li>- Prazo de validade</li>
        <li>Expedida mediante solicitação com documentos</li>
      </ul>`
  },
  // 6
  { title: "Permissão, Renovação e Reciclagem (Pág. 09)",
    content: `
      <ul>
        <li><strong>PPD:</strong> 1 ano - CNH definitiva se sem infrações graves</li>
        <li><strong>Renovação CNH:</strong></li>
        <li>- 10 anos (<50 anos)</li>
        <li>- 5 anos (50-70 anos)</li>
        <li>- 3 anos (≥70 anos)</li>
        <li><strong>Exame Toxicológico:</strong> obrigatório para C, D, E</li>
        <li><strong>Reciclagem:</strong> obrigatória para pontos ou condenação</li>
      </ul>`
  },
  // 7
  { title: "Documentos e Registro de Veículos (Pág. 10)",
    content: `
      <ul>
        <li><strong>CRLV-e:</strong> registro + licenciamento eletrônico</li>
        <li><strong>Porte obrigatório:</strong> CNH, ACC ou PPD</li>
        <li><strong>Registro (CRV):</strong> obrigatório para todo veículo</li>
        <li><strong>Transferência:</strong> 30 dias para regularizar</li>
        <li><strong>DPVAT:</strong> morte R$ 13.500, invalidez R$ 13.500, despesas R$ 2.700</li>
        <li><strong>IPVA:</strong> Estado 50%, Município 50%</li>
      </ul>`
  },
  // 8
  { title: "Categorias de Habilitação (Pág. 11)",
    content: `
      <ul>
        <li><strong>A:</strong> 2 ou 3 rodas (motocicletas)</li>
        <li><strong>B:</strong> até 3.500 kg, até 8 lugares</li>
        <li><strong>C:</strong> PBT acima de 3.500 kg</li>
        <li><strong>D:</strong> lotação acima de 8 lugares</li>
        <li><strong>E:</strong> combinações com PBT > 6.000 kg</li>
        <li><strong>Exame toxicológico</strong> para C, D, E</li>
        <li><strong>Motociclista profissional:</strong> categoria A há 2 anos</li>
      </ul>`
  },
  // 9
  { title: "Classificação dos Veículos (Pág. 12)",
    content: `
      <ul>
        <li><strong>Tração:</strong> automotor, elétrico, humano, animal</li>
        <li><strong>Espécie:</strong> passageiros, carga, misto, especial, coleção</li>
        <li><strong>Categoria:</strong> particular, aluguel, oficial, aprendizagem</li>
        <li><strong>Placas Mercosul:</strong> cores identificam categoria</li>
        <li><strong>Dimensões máximas:</strong></li>
        <li>- Largura: 2,60m | Altura: 4,4m</li>
        <li>- Comprimento: 14m a 19,80m</li>
      </ul>`
  },
  // 10
  { title: "Classificação das Vias (Pág. 13)",
    content: `
      <ul>
        <li><strong>PBT máximo:</strong> 45 toneladas</li>
        <li><strong>Vias Urbanas:</strong></li>
        <li>- Trânsito Rápido: 80 km/h</li>
        <li>- Arterial: 60 km/h</li>
        <li>- Coletora: 40 km/h</li>
        <li>- Local: 30 km/h</li>
        <li><strong>Vias Rurais:</strong></li>
        <li>- Rodovias: pavimentadas</li>
        <li>- Estradas: não pavimentadas</li>
      </ul>`
  },
  // 11
  { title: "Velocidades Máximas e Mínimas (Pág. 13)",
    content: `
      <ul>
        <li><strong>Vias Urbanas:</strong></li>
        <li>- Trânsito Rápido: 80 km/h</li>
        <li>- Arterial: 60 km/h</li>
        <li>- Coletora: 40 km/h</li>
        <li>- Local: 30 km/h</li>
        <li><strong>Rodovias:</strong></li>
        <li>- Pista dupla: 110 km/h (automóveis)</li>
        <li>- Pista simples: 100 km/h (automóveis)</li>
        <li>- Estradas: 60 km/h</li>
        <li><strong>Mínima:</strong> metade da velocidade máxima</li>
      </ul>`
  },
  // 12
  { title: "Acessibilidade e Permissão Internacional (Pág. 14)",
    content: `
      <ul>
        <li><strong>Direito de Acessibilidade:</strong></li>
        <li>- Prioridade e segurança na locomoção</li>
        <li>- Uso de calçadas, faixas, refúgios</li>
        <li><strong>Permissão Internacional (PID):</strong></li>
        <li>- Dirigir em países signatários</li>
        <li>- Exige CNH válida e categoria correspondente</li>
        <li>- Convenções de Viena e Mercosul</li>
      </ul>`
  },
  // 13
  { title: "Regras Gerais de Circulação (Pág. 14-15)",
    content: `
      <ul>
        <li><strong>Mão de direção:</strong> lado direito da via</li>
        <li><strong>Distância de segurança:</strong> lateral e frontal</li>
        <li>Considerar velocidade, condições do local e climáticas</li>
        <li><strong>Distância lateral:</strong> mínima para cruzar/ultrapassar</li>
        <li><strong>Distância frontal:</strong> suficiente para deter o veículo</li>
        <li>Prudência constante ao volante</li>
      </ul>`
  },
  // 14
  { title: "Preferência nos Cruzamentos (Pág. 15)",
    content: `
      <ul>
        <li><strong>Cruzamentos sem sinalização:</strong></li>
        <li>1. Veículo na rodovia</li>
        <li>2. Veículo na rotatória</li>
        <li>3. Veículo pela direita</li>
        <li><strong>Ao aproximar-se:</strong></li>
        <li>- Prudência especial</li>
        <li>- Sinalizar com antecedência</li>
        <li>- Diminuir velocidade</li>
        <li>- Dar preferência</li>
        <li><strong>Semaforização:</strong> verde (prosseguir), amarelo (parar), vermelho (parar)</li>
      </ul>`
  },
  // 15
  { title: "Passagem e Ultrapassagem (Pág. 16)",
    content: `
      <ul>
        <li><strong>Passagem:</strong> faixas distintas, não retorna à origem</li>
        <li><strong>Ultrapassagem:</strong> sai e retorna à faixa de origem</li>
        <li><strong>Linhas de divisão (amarelas):</strong></li>
        <li>- Seccionada: permitida</li>
        <li>- Contínua: proibida</li>
        <li>- Dupla contínua: proibida ambos sentidos</li>
        <li><strong>Como ultrapassar:</strong> pela esquerda, sinalizar, afastar-se, retornar com segurança</li>
      </ul>`
  },
  // 16
  { title: "Regras de Ultrapassagem e Manobras (Pág. 17)",
    content: `
      <ul>
        <li><strong>NÃO ultrapassar quando:</strong></li>
        <li>- Outro veículo já iniciou</li>
        <li>- Em aclives/declives sem visibilidade</li>
        <li>- Em curvas, pontes, viadutos, túneis</li>
        <li>- Em interseções e passagens de nível</li>
        <li><strong>Manobras:</strong> executar com segurança</li>
        <li><strong>Sinalização:</strong> luz indicadora ou gesto de braço</li>
        <li><strong>Marcha à ré:</strong> apenas pequenas manobras</li>
      </ul>`
  },
  // 17
  { title: "Parada e Estacionamento (Pág. 18)",
    content: `
      <ul>
        <li><strong>Parada:</strong> temporário para embarque/desembarque</li>
        <li><strong>Estacionamento:</strong> tempo superior</li>
        <li><strong>Emergência:</strong> pisca-alerta + triângulo (30m)</li>
        <li><strong>Proibido</strong> restringir parada para embarque</li>
        <li><strong>Motocicletas:</strong> estacionar perpendicular à guia</li>
        <li>Respeitar sinalização específica</li>
      </ul>`
  },
  // 18
  { title: "Veículos com Prioridade de Passagem (Pág. 18)",
    content: `
      <ul>
        <li><strong>Veículos prioritários:</strong></li>
        <li>- Bombeiros, polícia, ambulância</li>
        <li>- Fiscalização de trânsito</li>
        <li><strong>Direitos:</strong></li>
        <li>- Prioridade de trânsito</li>
        <li>- Livre circulação e estacionamento</li>
        <li>- Uso de dispositivos sonoros/luminosos</li>
        <li><strong>Conduta dos demais:</strong></li>
        <li>- Deixar livre passagem pela esquerda</li>
        <li>- Aguardar ou parar</li>
      </ul>`
  },
  // 19
  { title: "Regras Específicas (Pág. 20)",
    content: `
      <ul>
        <li><strong>Veículos de tração animal:</strong> lado direito, junto à guia</li>
        <li><strong>Uso de luzes:</strong></li>
        <li>- Baixa: noite, túneis, chuva, rodovias</li>
        <li>- Alta: vias não iluminadas</li>
        <li>- Posição: parar, embarcar, desembarcar</li>
        <li><strong>Buzina:</strong> advertência breve, proibida 22h-6h</li>
        <li><strong>Retrorefletor:</strong> caminhões (laterais e traseira)</li>
      </ul>`
  },
  // 20
  { title: "Infrações e Penalidades (Pág. 21)",
    content: `
      <ul>
        <li><strong>Infração:</strong> inobservância do CTB</li>
        <li><strong>RNPC:</strong> registro de condutores sem infração em 12 meses</li>
        <li><strong>Recurso de multas:</strong></li>
        <li>- Defesa em 30 dias</li>
        <li>- Recurso à JARI</li>
        <li><strong>Pagamento com desconto:</strong></li>
        <li>- Antecipado: 80%</li>
        <li>- Notificação eletrônica: 60%</li>
      </ul>`
  },
  // 21
  { title: "Penalidades e Pontuação (Pág. 22)",
    content: `
      <ul>
        <li><strong>Responsabilidade:</strong></li>
        <li>- Condutor: atos na direção</li>
        <li>- Proprietário: regularização</li>
        <li><strong>Multas e pontos:</strong></li>
        <li>- Leve (3 pts): R$ 88,38</li>
        <li>- Média (4 pts): R$ 130,16</li>
        <li>- Grave (5 pts): R$ 195,23</li>
        <li>- Gravíssima (7 pts): R$ 293,47</li>
        <li><strong>Suspensão (12 meses):</strong></li>
        <li>- 20 pts: 2+ gravíssimas</li>
        <li>- 30 pts: 1 gravíssima</li>
        <li>- 40 pts: sem gravíssimas</li>
      </ul>`
  },
  // 22
  { title: "Cassação e Medidas Administrativas (Pág. 23)",
    content: `
      <ul>
        <li><strong>Cassação da CNH:</strong></li>
        <li>- Dirigir com direito suspenso</li>
        <li>- Condenação por delito de trânsito</li>
        <li>- Reincidência em infrações gravíssimas</li>
        <li>- Reabilitação após 2 anos</li>
        <li><strong>Medidas administrativas:</strong></li>
        <li>- Retenção e remoção do veículo</li>
        <li>- Recolhimento de CNH/CRLV</li>
        <li>- Transbordo de excesso de carga</li>
        <li>- Realização de exames</li>
      </ul>`
  },
  // 23
  { title: "Crimes de Trânsito (Pág. 23-24)",
    content: `
      <ul>
        <li><strong>Conceito:</strong> infrações sujeitas ao Código Penal</li>
        <li><strong>Exemplos:</strong></li>
        <li>- Homicídio culposo (Art. 302)</li>
        <li>- Lesão corporal culposa (Art. 303)</li>
        <li>- Omissão de socorro (Art. 304)</li>
        <li>- Embriaguez ao volante (Art. 306)</li>
        <li>- Participar em corrida (Art. 308)</li>
        <li>- Dirigir sem habilitação (Art. 309)</li>
        <li><strong>Penas:</strong> detenção, multa, suspensão</li>
      </ul>`
  },
  // 24
  { title: "Infrações Gravíssimas - 7 Pontos (Pág. 25-28)",
    content: `
      <ul>
        <li><strong>Multa base:</strong> R$ 293,47</li>
        <li><strong>Exemplos (7 pontos):</strong></li>
        <li>- Dirigir sem CNH/PPD</li>
        <li>- Dirigir com CNH cassada/suspensa</li>
        <li><strong>Multa 3x (R$ 880,41):</strong></li>
        <li>- Velocidade >50% da máxima</li>
        <li><strong>Multa 10x (R$ 2.934,70):</strong></li>
        <li>- Dirigir sob álcool/drogas</li>
        <li>- Recusar teste do bafômetro</li>
        <li><strong>Multa 20x (R$ 5.869,40):</strong></li>
        <li>- Interromper circulação sem autorização</li>
      </ul>`
  },
  // 25
  { title: "Infrações Graves - 5 Pontos (Pág. 29-31)",
    content: `
      <ul>
        <li><strong>Multa:</strong> R$ 195,23</li>
        <li><strong>Exemplos (5 pontos):</strong></li>
        <li>- Velocidade >20% até 50%</li>
        <li>- Farol desregulado</li>
        <li>- Deixar preferência a pedestre</li>
        <li>- Não reduzir velocidade em locais perigosos</li>
        <li>- Dirigir com uma mão ou sem calçado</li>
        <li>- Usar fones nos ouvidos</li>
        <li>- Estacionar em contramão</li>
      </ul>`
  },
  // 26
  { title: "Infrações Médias - 4 Pontos (Pág. 31-33)",
    content: `
      <ul>
        <li><strong>Multa:</strong> R$ 130,16</li>
        <li><strong>Exemplos (4 pontos):</strong></li>
        <li>- Arremessar água/detritos</li>
        <li>- Atirar objetos na via</li>
        <li>- Estacionar na contramão</li>
        <li>- Parar na faixa de pedestres</li>
        <li>- Transitar ao lado de outro veículo</li>
        <li>- Marcha à ré em distância excessiva</li>
        <li>- Usar buzina em local/horário proibido</li>
      </ul>`
  },
  // 27
  { title: "Infrações Leves - 3 Pontos (Pág. 34)",
    content: `
      <ul>
        <li><strong>Multa:</strong> R$ 88,38</li>
        <li><strong>Exemplos (3 pontos):</strong></li>
        <li>- Dirigir sem atenção</li>
        <li>- Estacionar afastado da guia (50cm-1m)</li>
        <li>- Parar afastado da guia (50cm-1m)</li>
        <li>- Usar buzina prolongadamente</li>
        <li>- Buzinar entre 22h e 6h (exceto emergência)</li>
        <li>- Não manter distância segura</li>
      </ul>`
  },
  // 28
  { title: "Sinalização de Trânsito: Conceitos (Pág. 35)",
    content: `
      <ul>
        <li><strong>Classificação dos sinais:</strong></li>
        <li>- Vertical</li>
        <li>- Horizontal</li>
        <li>- Luminosa</li>
        <li>- Dispositivos auxiliares</li>
        <li>- Sinais sonoros</li>
        <li>- Gestos de agentes</li>
        <li><strong>Sinalização Vertical:</strong></li>
        <li>- Regulamentação (obrigações)</li>
        <li>- Advertência (perigos)</li>
        <li>- Indicação (orientação)</li>
        <li><strong>Característica:</strong> legível e em boa posição</li>
      </ul>`
  },
  // 29
  { title: "Sinalização de Indicação e Turística (Pág. 39-41)",
    content: `
      <ul>
        <li><strong>Sinalização de Indicação:</strong></li>
        <li>- Identifica vias e orienta condutores</li>
        <li>- Placas de identificação, quilometragem</li>
        <li>- Sentido, distância, serviços</li>
        <li><strong>Placas Educativas:</strong></li>
        <li>- "USE CINTO DE SEGURANÇA"</li>
        <li>- "MOTOCICLISTA USE FAROL"</li>
        <li><strong>Serviços Auxiliares (SAU):</strong></li>
        <li>- Estacionamento, telefone, pronto-socorro</li>
        <li><strong>Atrativos Turísticos:</strong></li>
        <li>- Praia, museu, teatro, sítio arqueológico</li>
      </ul>`
  },
  // 30
  { title: "Sinalização Horizontal (Pág. 42)",
    content: `
      <ul>
        <li><strong>Conceito:</strong> marcas no pavimento</li>
        <li><strong>Fluxos Opostos (amarelo):</strong></li>
        <li>- Contínua: proíbe ultrapassagem</li>
        <li>- Seccionada: permite ultrapassagem</li>
        <li>- Dupla: proíbe ambos sentidos</li>
        <li><strong>Mesmo Sentido (branco):</strong></li>
        <li>- Contínua: não muda faixa</li>
        <li>- Seccionada: permite mudança</li>
        <li><strong>Marcação de canalização:</strong> orienta fluxos</li>
        <li><strong>Setas direcionais:</strong> segue, vira, preferência</li>
      </ul>`
  },
  // 31
  { title: "Dispositivos Auxiliares (Pág. 43)",
    content: `
      <ul>
        <li><strong>Conceito:</strong> elementos para via mais segura</li>
        <li><strong>Delimitadores:</strong> balizador</li>
        <li><strong>Alerta:</strong> obstáculos na via</li>
        <li><strong>Marcadores de perigo:</strong> passagem esq/dir</li>
        <li><strong>Marcadores de alinhamento:</strong> curvas</li>
        <li><strong>Uso Temporário (obras):</strong> cor alaranjada</li>
        <li><strong>Exemplos:</strong> cone, cilindro, tambor, cavalete</li>
        <li><strong>Função:</strong> tornar via eficiente e segura</li>
      </ul>`
  },
  // 32
  { title: "Sinalização Semafórica e Gestos (Pág. 44)",
    content: `
      <ul>
        <li><strong>Semáforo de regulamentação:</strong></li>
        <li>- Vermelho: proibição</li>
        <li>- Amarelo: advertência</li>
        <li>- Verde: permissão</li>
        <li><strong>Semáforo de advertência:</strong> amarelo intermitente</li>
        <li><strong>Gestos de agentes:</strong> prevalecem sobre tudo</li>
        <li>- Braço vertical: parada obrigatória</li>
        <li>- Braço horizontal: parada ortogonal</li>
        <li><strong>Gestos do condutor:</strong> mão/braço para sinalizar</li>
        <li><strong>Sinais sonoros (agente):</strong></li>
        <li>- 1 silvo: siga | 2 silvos: pare | 1 longo: diminua</li>
      </ul>`
  },
  // 33
  { title: "Conceitos e Definições (Pág. 45-46)",
    content: `
      <ul>
        <li><strong>Acoitamento:</strong> parada superior a embarque</li>
        <li><strong>Automóvel:</strong> até 8 lugares (excluído motorista)</li>
        <li><strong>Bicicleta:</strong> propulsão humana, 2 rodas</li>
        <li><strong>Ciclomotor:</strong> ≤50 cm³, até 50 km/h</li>
        <li><strong>Cruzamento:</strong> interseção em nível</li>
        <li><strong>Dispositivo segurança:</strong> reduz riscos</li>
        <li><strong>Estacionamento:</strong> imobilização prolongada</li>
        <li><strong>Luz posição:</strong> indica presença/largura</li>
        <li><strong>Motoneta:</strong> 2 rodas, condutor sentado</li>
        <li><strong>Pista rolamento:</strong> parte da via dos veículos</li>
      </ul>`
  },
  // 34
  { title: "Questões de Legislação (Pág. 47-50)",
    content: `
      <ul>
        <li><strong>Q1:</strong> ACC para ciclomotor</li>
        <li><strong>Q5:</strong> PPD vale 1 ano</li>
        <li><strong>Q7:</strong> Proibido ultrapassar com linha contínua</li>
        <li><strong>Q11:</strong> Via arterial: 60 km/h</li>
        <li><strong>Q45:</strong> Via rural não pavimentada: estrada</li>
        <li><strong>Q79:</strong> ≥70 anos: renovação a cada 3 anos</li>
        <li><strong>Q84:</strong> Embarque/desembarque pelo lado da calçada</li>
        <li><em>Conteúdo de revisão para estudo</em></li>
      </ul>`
  },
  // 35
  { title: "Questões de Infrações (Pág. 53-55)",
    content: `
      <ul>
        <li><strong>Q01:</strong> Ultrapassar em interseção: multa</li>
        <li><strong>Q03:</strong> Calçado inadequado: multa</li>
        <li><strong>Q05:</strong> Estacionar na calçada: gravíssima</li>
        <li><strong>Q42:</strong> Embriaguez: multa + suspensão</li>
        <li><strong>Q59:</strong> Dirigir categoria diferente: infração</li>
        <li><strong>Recursos:</strong> defesa em 30 dias, JARI</li>
        <li><strong>Pontuação:</strong> leve 3, média 4, grave 5, gravíssima 7</li>
        <li><em>Exercícios de fixação</em></li>
      </ul>`
  },
  // 36
  { title: "Testes de Infrações e Sinalização (Pág. 56-57)",
    content: `
      <ul>
        <li><strong>Q01:</strong> Linhas duplas contínuas amarelas: proibido ultrapassar</li>
        <li><strong>Q03:</strong> Sinalização vertical: regulamentação, advertência, indicação</li>
        <li><strong>Q11:</strong> Proibição ultrapassagem: linhas contínuas amarelas</li>
        <li><strong>Q18:</strong> Cores sinalização horizontal: amarela, vermelha, branca, azul, preta</li>
        <li><strong>Dispositivos:</strong> cone, balizador, marcadores</li>
        <li><strong>Semáforo:</strong> regulamentação e advertência</li>
        <li><em>Teste de conhecimentos</em></li>
      </ul>`
  },
  // 37
  { title: "Testes de Legislação e Infrações (Pág. 58-59)",
    content: `
      <ul>
        <li><strong>Q01:</strong> Requisitos CNH: 18 anos, ler/escrever, documentos</li>
        <li><strong>Q07:</strong> Vias urbanas: trânsito rápido, arterial, coletora, local</li>
        <li><strong>Q09:</strong> Via arterial: coleta e distribui fluxo</li>
        <li><strong>Q13:</strong> Categoria D: sem infrações graves/gravíssimas em 12 meses</li>
        <li><strong>Velocidades:</strong> respeitar limites por tipo de via</li>
        <li><strong>Documentação:</strong> CNH, CRLV-e obrigatórios</li>
        <li><em>Preparação para exame</em></li>
      </ul>`
  },
  // 38
  { title: "Testes de Normas de Circulação (Pág. 59-61)",
    content: `
      <ul>
        <li><strong>Q01:</strong> Linha contínua: evitar ultrapassagem</li>
        <li><strong>Q06:</strong> Distância cruzamento: 5 metros</li>
        <li><strong>Q10:</strong> Faixa aceleração: aumentar velocidade gradual</li>
        <li><strong>Q15:</strong> Distância bicicletas: 1,50 metro</li>
        <li><strong>Preferência:</strong> pedestres, veículos na via principal</li>
        <li><strong>Segurança:</strong> distâncias lateral e frontal</li>
        <li><strong>Manobras:</strong> sinalizar com antecedência</li>
        <li><em>Últimos exercícios do módulo</em></li>
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
  if (event.key === 'ArrowRight') {
    currentSlide = (currentSlide + 1) % slides.length;
    renderSlide(currentSlide);
  } else if (event.key === 'ArrowLeft') {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    renderSlide(currentSlide);
  }
});