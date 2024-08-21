var desconto183 = 59.33;
var desconto283 = 37;
var desconto360 = 20;
var TecPresencial="";
var ParcelasPresencial="Até o Dia 1º";


var cursos = [
  {
    cod: 1,
    curso: "EAD e Presencial",
    horario:
      "- EAD: Curso em EAD com provas presenciais previamente agendadas pelo aluno nos dias disponibilizados pela instituição. |- Presencial: 18h05 às 22h15.",
    categoria: 1,
    CBO: "2543-10 - Agente de Higiene e Segurança",
    Disciplinas:
      "- Desenho Técnico |- Segurança do Trabalho |- Gestão e Educação Ambiental |- Proteção de Máquinas e Equipamentos |- Português Instrumental",
    Perfil:
      "O Agente de Observação de Segurança do Trabalho acompanha serviços como liberação de entrada e saída de trabalhadores. Reconhece, avalia e controla riscos. Manuseia equipamentos e produtos. Realiza medições por meio de procedimentos estabelecidos, visando à prevenção de acidentes de trabalho, bem como à qualidade de vida.",
    Preco:
      "EAD: 12x de R$ 93,00 | Presencial: Entrada de R$ 120,00 + 7x de R$ 240,01",
  },
  {
    cod: 2,
    curso: "EAD",
    horario:
      "- EAD: Curso em EAD com provas presenciais previamente agendadas pelo aluno nos dias disponibilizados pela instituição.",
    categoria: 2,
    CBO: "4110-10 - Assistente Administrativo",
    Disciplinas:
      "- Economia e Mercado |- Contabilidade Geral |- Matemática Financeira |- Informática Aplicada |- Direito público privado, legislação trabalhista e previdenciária",
    Perfil:
      "Executa processos administrativos e atividades de apoio em recursos humanos, finanças, produção, logística e vendas. Atende fornecedores e clientes. Fornece e recebe informações sobre produtos e serviços. Trata de documentos variados.",
    Preco: "EAD: 12x de R$ 93,00",
  },
  {
    cod: 3,
    curso: "EAD",
    horario:
      "- EAD: Curso em EAD com provas presenciais previamente agendadas pelo aluno nos dias disponibilizados pela instituição.",
    categoria: 3,
    CBO: "4131-10 - Auxiliar de Contabilidade",
    Disciplinas:
      "- Economia e Mercado |- Contabilidade Geral |- Matemática Financeira |- Informática Aplicada |- Direito Público privado, legislação trabalhista e previdenciária",
    Perfil:
      "Executa, codifica e classifica históricos e escriturações contábeis. Realiza conciliações contábeis, pagamentos, conferência de livros fiscais e declarações fiscais. Elabora balancetes, balanços e demonstrativos contábeis, folha de pagamento e rescisões. Controla planos de contas, calcula custos de ativos, encargos trabalhistas, sociais e previdenciários, tributos, taxas, encargos e impostos e apura resultados financeiros.",
    Preco: "EAD: 12x de R$ 93,00",
  },
  {
    cod: 4,
    curso: "EAD e Presencial",
    horario:
      "- EAD: Curso em EAD com provas presenciais previamente agendadas pelo aluno nos dias disponibilizados pela instituição. |- Presencial: 18h05 às 22h15.",
    categoria: 4,
    CBO: "4141-40 - Auxiliar de Logistica",
    Disciplinas:
      "- Organização Empresarial |- Gestão da Cadeia de Suprimentos |- Gestão de Pessoas |- Matemática Financeira |- Português Instrumental",
    Perfil:
      "Auxilia na aplicação de procedimentos de logística, recebimento, armazenagem, movimentação, expedição e distribuição de materiais e produtos. Colabora no controle das operações logísticas na perspectiva da multimodalidade.",
    Preco:
      "EAD: 12x de R$ 93,00 | Presencial: Entrada de R$ 120,00 + 7x de R$ 281,02",
  },
  {
    cod: 5,
    curso: "EAD e Presencial",
    horario:
      "- EAD: Curso em EAD com provas presenciais previamente agendadas pelo aluno nos dias disponibilizados pela instituição. |- Presencial: 18h05 às 22h15.",
    categoria: 5,
    CBO: "2524 - Profissionais de Recursos Humanos",
    Disciplinas:
      "- Organização Empresarial |- Gestão de Pessoas |- Gestão da Cadeia de Suprimentos |- Matemática Financeira |- Português Instrumental",
    Perfil:
      "Executa rotinas de processos administrativos do setor de Recursos Humanos de uma empresa. Realiza atividades de apoio ao planejamento, execução, avaliação e controle dos processos de recrutamento e seleção, treinamento e desenvolvimento, avaliação de desenvolvimento, avaliação de desempenho, progressão funcional, cargos, salários e benefícios, jornada de trabalho, férias e rescisão de contrato. Prepara, organiza, solicita e emite documentos e processos de acordo com a legislação trabalhista. Organiza informações cadastrais dos funcionários.",
    Preco:
      "EAD: 12x de R$ 93,00 | Presencial: Entrada de R$ 120,00 + 7x de R$ 281,02",
  },
  {
    cod: 6,
    curso: "EAD e Presencial",
    horario:
      "- EAD: Curso em EAD com provas presenciais previamente agendadas pelo aluno nos dias disponibilizados pela instituição. |- Presencial: 18h05 às 22h15.",
    categoria: 6,
    CBO: "7311-10 - Montador de computadores e equipamentos auxiliares",
    Disciplinas:
      "- Lógica de Programação |- Fundamentos de Hardware |- Informática Aplicada |- Manutenção de Computadores |- Português Instrumental",
    Perfil:
      "Realiza manutenção em computadores. Documenta, monta, instala, repara e configura computadores e dispositivos de hardware (periféricos). Identifica, Instala e configura sistemas operacionais e software aplicativos.",
    Preco:
      "EAD: 12x de R$ 93,00 | Presencial: Entrada de R$ 120,00 + 7x de R$ 240,01",
  },
  {
    cod: 7,
    curso: "Presencial",
    horario: "- Presencial: 18h05 às 22h15.",
    categoria: 7,
    CBO: "5151-10 - Atendente de enfermagem",
    Disciplinas:
      "- Anatomia Sistêmica |- Fundamentos da Enfermagem |- Saúde do Adulto e do Idoso |- Saúde da Criança e do Adolescente |- Português Instrumental",
    Perfil:
      "Executa processos administrativos e atividades de apoio em ambientes de atendimento de saúde, incluindo hospitais, clínicas e consultórios. Presta assistência e apoio aos profissionais de saúde, pacientes e familiares. Realiza tarefas relacionadas à organização de materiais, controle de estoque de suprimentos médicos e atendimento a pacientes. Fornecer informações básicas sobre procedimentos e cuidados de enfermagem. Trata de documentos e registros relacionados aos procedimentos de atendimento de saúde.",
    Preco: "Presencial: Entrada de R$ 120,00 + 8x de R$ 397,44",
  },
  {
    cod: 8,
    curso: "EAD e Presencial",
    horario:
      "- EAD: Curso em EAD com provas presenciais previamente agendadas pelo aluno nos dias disponibilizados pela instituição. |- Presencial: 18h05 às 22h15.",
    categoria: 8,
    CBO: "5211-30 - Atendente de farmácia - balconista",
    Disciplinas:
      "- Anatomia Sistêmica |- Química e Bioquímica |- Farmacotécnica |- Dispensação Farmacêutica |- Português Instrumental",
    Perfil:
      "Comercializa e realiza a dispensação de medicamentos e correlatos. Interpreta receitas prescritas pelo médico ou dentista e presta os devidos esclarecimentos no que se refere ao uso correto dos medicamentos. Auxilia na organização do estabelecimento farmacêutico, no controle de estoques e no armazenamento de medicamentos. Trabalha sob a supervisão do profissional farmacêutico.",
    Preco:
      "EAD: 12x de R$ 93,00 | Presencial: Entrada de R$ 120,00 + 7x de R$ 281,02",
  },
  {
    cod: 9,
    curso: "EAD e Presencial",
    horario:
      "- EAD: Curso em EAD com provas presenciais previamente agendadas pelo aluno nos dias disponibilizados pela instituição. |- Presencial: 18h05 às 22h15.",
    categoria: 9,
    CBO: "9513-05 - Instalador de sistemas eletroeletrônicos de segurança",
    Disciplinas:
      "- Educação Para o Trabalho |- Eletrônica |- Sensores e Atuadores |- Eletricidade Básica |- Português Instrumental",
    Perfil:
      "Interpreta diagramas de motores elétricos, geradores e transformadores. Mede grandezas elétricas. Realiza o enrolamento de bobinas, induzidos, estatores e rotores.",
    Preco:
      "EAD: 12x de R$ 93,00 | Presencial: Entrada de R$ 120,00 + 7x de R$ 281,02",
  },
  {
    cod: 10,
    curso: "EAD",
    horario:
      "- EAD: Curso em EAD com provas presenciais previamente agendadas pelo aluno nos dias disponibilizados pela instituição.",
    categoria: 10,
    CBO: "5161-25 - Maquiador",
    Disciplinas:
      "- Técnicas de Maquiagem |- Técnicas de Maquiagem Avançadas para o Delineado |- Planejamento de Marketing |- Empreendedorismo |- Informática Aplicada",
    Perfil:
      "Utiliza cosméticos e tonalidades. Realiza maquiagens adequadas ao tipo e cor da pele. Identifica as preferências e características físicas. Adequa a maquiagem ao cliente e ao tipo de evento. Ensina técnicas de automaquiagem e de cuidado diário com a pele.",
    Preco: "EAD: 12x de R$ 93,00",
  },
  {
    cod: 11,
    curso: "EAD e Presencial",
    horario:
      "- EAD: Curso em EAD com provas presenciais previamente agendadas pelo aluno nos dias disponibilizados pela instituição. |- Presencial: 18h05 às 22h15.",
    categoria: 11,
    CBO: "7832 - Trabalhadores de Cargas e Descargas de Mercadorias",
    Disciplinas:
      "- Operações de Terminais |- Planejamento de Pátio (Yard Planner) |- Assistente Administrativo Operacional |- Recursos Humanos e Técnicos de Liderança em Portos |- Português Instrumental",
    Perfil:
      "Preparam cargas e descargas de mercadorias, movimentam e fixam mercadorias e cargas em navios, caminhões , vagões e instalações portuárias, entregam e coletam encomendas , manuseiam cargas especiais, reparam embalagens danificadas e controlam a qualidade dos serviços prestados.  Realizam atividades de limpeza e conservação nos armazéns portuários e nos navios, estabelecem comunicação, emitindo, recebendo e verificando mensagens, notificando e solicitando informações, autorizações e orientações de transporte, embarque e desembarque de mercadorias.",
    Preco:
      "EAD: 12x de R$ 93,00 | Presencial: Entrada de R$ 120,00 + 7x de R$ 240,01",
  },
  {
    cod: 12,
    curso: "EAD",
    horario:
      "- EAD: Curso em EAD com provas presenciais previamente agendadas pelo aluno nos dias disponibilizados pela instituição.",
    categoria: 12,
    CBO: "3548-20 - Organizador de Eventos; 3548-25 - Cerimonialista",
    Disciplinas:
      "- Teoria e Técnica Profissional |- Planejamento e Organização de Eventos |- Inglês + Espanhol Aplicado ao Turismo |- Fundamentos do Turismo e Hospitalidade |- Português Instrumental",
    Perfil:
      "Planejar e organizar eventos diversos, desde o levantamento das reais necessidades para sua produção, até o fechamento e a avaliação final de todo o processo de realização, intermediando e operacionalizando a contratação de fornecedores, profissionais especializados e serviços adequados a cada tipo de evento, de forma ética, com qualidade e criatividade, observando as demandas do cliente, visando sempre à sua satisfação e ao sucesso do evento.",
    Preco: "EAD: 12x de R$ 93,00",
  },
  {
    cod: 13,
    curso: "EAD",
    horario:
      "- EAD: Curso em EAD com provas presenciais previamente agendadas pelo aluno nos dias disponibilizados pela instituição.",
    categoria: 13,
    CBO: "3171-10 - Desenvolvedor de Sistemas de Tecnologia da Informação",
    Disciplinas:
      "- Lógica da Programação |- Banco de Dados |- Estrutura de Dados |- Engenharia de Software |- Programação Orientada a Objetos",
    Perfil:
      "Realiza a manutenção e o desenvolvimento de sistemas computacionais utilizando lógica de programação, estrutura de dados, engenharia de software e banco de dados, além de documentar as etapas de todo o processo de desenvolvimento de um projeto.",
    Preco: "EAD: 12x de R$ 93,00",
  },
  {
    cod: 14,
    curso: "EAD",
    horario:
      "- EAD: Curso em EAD com provas presenciais previamente agendadas pelo aluno nos dias disponibilizados pela instituição.",
    categoria: 14,
    CBO: "4221-05 - Recepcionista, em geral; 4221-10 Recepcionista de Consultório Médico ou Dentário",
    Disciplinas:
      "- Atendimento Humanizado em Saúde |- Português Instrumental |- Informática Aplicada |- Biossegurança em Saúde |- Primeiros Socorros",
    Perfil:
      "Recepciona e atende clientes, pacientes, usuários e visitantes. Organiza e opera sistemas de documentação de convênios. Facilita o acesso às consultas, exames, admissão e alta hospitalar.",
    Preco: "EAD: 12x de R$ 93,00",
  },
  {
    cod: 15,
    curso: "EAD",
    horario:
      "- EAD: Curso em EAD com provas presenciais previamente agendadas pelo aluno nos dias disponibilizados pela instituição.",
    categoria: 15,
    CBO: "5211-10 - Vendedor no Comércio de Mercadorias",
    Disciplinas:
      "- Técnicas de Negociação e Vendas |- Gestão Comercial |- Planejamento de Marketing |- Informática Aplicada |- Português Instrumental",
    Perfil:
      "Apresenta os produtos e serviços da empresa. Negocia e argumenta a venda. Prepara mercadorias para venda. Presta serviços ao cliente. Demonstra produtos. Executa a venda e a pós-venda. Expõe mercadorias no ponto de venda. Registra a entrada e a saída de mercadorias.",
    Preco: "EAD: 12x de R$ 93,00",
  },
];