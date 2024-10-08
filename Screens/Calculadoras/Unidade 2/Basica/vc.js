var descontInfantil = 54.113;
var recreInfantilmat = 28.463;
var recreInfantilvesp = 22.009;
var descontFund1s12 = 66.313;
var descontFund1s345 = 59.722;
var descontFund2 = 64.0346;
var descontMedioMat = 66.4236;
var descontMedioVes = 68.68;
var AntecipacaoRecreacao =
  "Antecipação da Anuidade: R$ 300,00 Pode ser dividido em até 4x de R$75,00 no Cartão de Crédito.";
var ApostilaInfantil =
  "Apostilas: R$ 1.218,00 Esse valor pode ser dividido em até 12x de R$ 101,50 no Cartão de Crédito. | Antecipação da Anuidade: R$ 507,00 Pode ser dividido em até 4x de R$126,75 no Cartão de Crédito.";
var ApostilaFund1 =
  "Apostilas:  R$ 2.244,00 Esse valor pode ser dividido em até 12x de R$ 187,00 no Cartão de Crédito. | Antecipação da Anuidade: R$ 507,00 Pode ser dividido em até 4x de R$126,75 no Cartão de Crédito.";
var ApostilaFund2 =
  "Apostilas:  R$ 2.613,00 Esse valor pode ser dividido em até 12x de R$ 217,75 no Cartão de Crédito. | Antecipação da Anuidade: R$ 507,00 Pode ser dividido em até 4x de R$126,75 no Cartão de Crédito.";
var ApostilaMed1e2 =
  "Apostilas: R$ 2.874,00 Esse valor pode ser dividido em até 12x de R$ 239,50 no Cartão de Crédito. | Antecipação da Anuidade: R$ 507,00 Pode ser dividido em até 4x de R$126,75 no Cartão de Crédito.";
var ApostilaMed3 =
  "Apostilas: R$ 3.180,00 Esse valor pode ser dividido em até 12x de R$ 265,00 no Cartão de Crédito. | Antecipação da Anuidade: R$ 507,00 Pode ser dividido em até 4x de R$126,75 no Cartão de Crédito.";
var ApostilaMed1vesp =
  "Apostilas: R$ 2.743,50 Esse valor pode ser dividido em até 12x de R$ 228,63 no Cartão de Crédito. | Antecipação da Anuidade: R$ 507,00 Pode ser dividido em até 4x de R$126,75 no Cartão de Crédito.";
var SegundaMensalidadeEducacaoInfantil = "- Até o dia 1º R$ 601,48 | - Até o dia 7º R$ 631,56| - Até o dia 25º R$ 751,86";
var SegundaMensalidadeFundamental1 = "- Até o dia 1º R$ 819,31 | - Até o dia 7º R$ 860,28| - Até o dia 25º R$ 1024,14";
var SegundaMensalidadeFundamental2 = "- Até o dia 1º R$ 1017,64 | - Até o dia 7º R$ 1068,53| - Até o dia 25º R$ 1272,05";
var SegundaMensalidadeEnsinoMedio = "- Até o dia 1º R$ 1197,27 | - Até o dia 7º R$ 1257,13| - Até o dia 25º R$ 1496,59";
var ApostilaMed4 = "";
var IdadeRecreacaoInfantil = "";
var IdadeRecreacaoInfantilVespertino = "";
var IdadeEducacaoInfantil =
    "Idade para matrícula: | Educação Infantil I - 2 anos, até 31 de março do ano letivo.. | Educação Infantil II - 3 anos, até 31 de março do ano letivo. | Educação Infantil III - 4 anos, até 31 de março do ano letivo. | Educação Infantil IV - 5 anos, até 31 de março do ano letivo.";
    
var TextoSegundaMensalidade = "Este documento e seus valores são válidos até que as vagas com descontos sejam preenchidas. Após o término dessas vagas, a proposta perderá sua vigência, e os valores praticados pela escola seguirão o modelo abaixo:";


var cursos = [  
  //Recreação Infantil Vespertino
  {
    cod: 988,
    curso: "Recreação Infantil Vespertino",
    categoria: 6,
    valorIntegral: 557.76,
    docAluno:
      "Aluno: |- RG |- CPF|- Certidão de Nascimento |- 01 Foto 3x4 |- Comprovante de residência |- Carteirinha de vacinação",
    docResp:
      "Responsáveis: |- RG|- CPF|- Comprovante de residência|- Obrigatório a compra do uniforme escolar no ato da matrícula",
    valorApostila: AntecipacaoRecreacao,
    idadeMatricula: IdadeRecreacaoInfantilVespertino,
    TextoSegundaMensalidade: "",
    SegundaMensalidade: "",
    horaAula: "",
    desconto: recreInfantilvesp,

    vtgEixo: "Recreação Infantil",
    vtgLetivo: "",
    vtgHorario: "Horário das Aulas | Tarde: 12h às 18h",
    vtgVantagens: "Quais as vantagens de estudar no Colégio Adélia:",
    vtg01:
      "1 - Recreação Infantil: Nossa recreação infantil ajuda a integrar as crianças ao meio social, desenvolver habilidades motoras e estimular a curiosidade e autonomia de forma divertida e segura.",
    vtg02:
      "2 - Aprendizagem Lúdica: O aprendizado acontece por meio de brincadeiras e atividades que desenvolvem competências e habilidades essenciais, tornando o processo educativo mais leve e agradável.",
    vtg03:
      "3 - Equipe Qualificada: O ambiente lúdico é conduzido por profissionais capacitados, com o apoio de auxiliares, garantindo a atenção necessária em cada atividade.",
    vtg04:
      "4 - Estrutura Adaptada: Contamos com uma estrutura física preparada para as atividades recreativas, com materiais adequados para desenvolver a coordenação motora grossa e fina das crianças. Toda a área é monitorada por câmeras e supervisionada por inspetores, oferecendo total segurança.",
    vtg05:
      "5 - Atividades Diversificadas: Momentos como a hora da música, conto, arte, culinária, além de atividades na piscina e parquinho, são essenciais para promover a socialização e o bem-estar dos alunos.",
    vtg06:
      "6 - Banheiros Adaptados: Disponibilizamos banheiros exclusivos e adaptados para as crianças, sempre com a supervisão de um responsável, garantindo conforto e segurança.",
    vtg07:
      "7 - Hora do Lanche: Temos um horário de lanche exclusivo para este ciclo, acompanhado pelos professores e auxiliares, onde aproveitamos o momento para desenvolver habilidades de organização, limpeza e convivência.",
    vtg08:
      "8 - Valores Familiares: Valorizamos os princípios familiares, proporcionando um ambiente saudável e acolhedor, além de um aprendizado de qualidade.",
    vtg09:
      "9 - Acompanhamento Personalizado: Nossa equipe pedagógica está sempre presente, e os pais podem acompanhar de perto o desenvolvimento psicomotor, social e acadêmico do seu filho, com encontros previamente agendados.",
    vtg10:
      "10 - Uniforme Obrigatório: O uso do uniforme é obrigatório para promover igualdade entre as crianças, evitando comparações e incentivando a unidade.",
  },
  //1° Ano do Ensino Fundamental I
  {
    cod: 7,
    curso: "1° Ano do Ensino Fundamental I",
    categoria: 2,
    valorIntegral: 1638.63,
    docAluno:
      "Aluno: |- RG |- CPF |- Certidão de Nascimento |- 01 Foto 3x4 |- Comprovante de residência |- Carteirinha de vacinação |- Declaração de Transferência",
    docResp:
      "Responsáveis: |- RG|- CPF|- Comprovante de residência|- Declaração de Adimplência |- Obrigatório a compra do uniforme escolar no ato da matrícula",
    valorApostila: ApostilaFund1,
    idadeMatricula:
      "Idade para Matrícula: |1º Ano - 6 anos até 31 de março do ano letivo.",
    TextoSegundaMensalidade: TextoSegundaMensalidade,
    SegundaMensalidade: SegundaMensalidadeFundamental1,
    horaAula: "",
    desconto: descontFund1s12,

    vtgEixo: "ENSINO FUNDAMENTAL I ",
    vtgLetivo: "",
    vtgHorario:
      "Horário das Aulas | Tarde: 12H e 40min às 17h e 30min.",
    vtgVantagens: "Por que escolher o Colégio Adélia para o Ensino Fundamental I?",
    vtg01:
      "1 — Professores Qualificados: Contamos com professores capacitados para acompanhar e promover o aprendizado dos alunos ao longo dos cinco anos do curso, focando no desenvolvimento curricular completo.",
    vtg02:
      "2 — Currículo Ampliado: Além das disciplinas regulares, oferecemos aulas de Formação Socioemocional, Inglês e Laboratório de Informática. Para garantir um ensino mais completo, a carga horária é maior do que a de outras escolas, proporcionando mais tempo para o desenvolvimento integral dos alunos e aprofundamento dos conteúdos.",
    vtg03:
      "3 - Infraestrutura Completa: Nossas salas de aula são amplas e projetadas para o ambiente escolar. Os corredores são monitorados por inspetores e câmeras, e o horário de lanche é escalonado, sempre acompanhado pela professora e auxiliares.",
    vtg04:
      "4 — Auxílio em Sala: Do 1º ao 5º ano, todos os professores contam com auxiliares, que oferecem suporte no aprendizado e na manutenção da disciplina, assegurando atenção especial a cada aluno.",
    vtg05:
      "5 – Programa 'O Líder em Mim': Implementamos o programa de alto desempenho socioemocional 'O Líder em Mim', que desenvolve habilidades como responsabilidade, organização, priorização, proatividade e comunicação, somadas ao processo de ensino-aprendizagem, garantindo que os alunos adquiram competências diferenciadas que vão além do currículo tradicional.",
    vtg06:
      "6 — Sistema Anglo de Ensino: O processo de ensino é feito por meio do Sistema Anglo, com o suporte da plataforma digital Plurall, garantindo uma educação de qualidade e acompanhamento contínuo.",
    vtg07:
      "7 — Eventos ao Longo do Ano: Realizamos diversos eventos ao longo do ano letivo, proporcionando um ambiente acolhedor e familiar, sempre pensando no bem-estar dos alunos.",
    vtg08:
      "8 — Acompanhamento Pedagógico: A equipe pedagógica está sempre disponível, e os pais podem agendar reuniões para acompanhar de perto o desenvolvimento acadêmico dos filhos.",
    vtg09:
      "9 — Uniforme Obrigatório: O uso do uniforme é uma medida para promover igualdade entre os alunos, evitando comparações e prevenindo situações de bullying.",
    vtg10:
      "10 — Aulas de Educação Física: As aulas de Educação Física são realizadas dentro do horário regular de aulas, garantindo que os alunos se exercitem de forma supervisionada e organizada.",
  },
   //1° Ano do Ensino Fundamental I
   {
    cod: 60,
    curso: "1° Ano do Ensino Fundamental I - Casa",
    categoria: 2,
    valorIntegral: 1638.63,
    docAluno:
      "Aluno: |- RG |- CPF |- Certidão de Nascimento |- 01 Foto 3x4 |- Comprovante de residência |- Carteirinha de vacinação |- Declaração de Transferência",
    docResp:
      "Responsáveis: |- RG|- CPF|- Comprovante de residência|- Declaração de Adimplência |- Obrigatório a compra do uniforme escolar no ato da matrícula",
    valorApostila: ApostilaFund1,
    idadeMatricula:
      "Idade para Matrícula: |1º Ano - 6 anos até 31 de março do ano letivo.",
    TextoSegundaMensalidade: TextoSegundaMensalidade,
    SegundaMensalidade: SegundaMensalidadeFundamental1,
    horaAula: "",
    desconto: 69.06,

    vtgEixo: "ENSINO FUNDAMENTAL I ",
    vtgLetivo: "",
    vtgHorario:
      "Horário das Aulas | Tarde: 12H e 40min às 17h e 30min.",
    vtgVantagens: "Por que escolher o Colégio Adélia para o Ensino Fundamental I?",
    vtg01:
      "1 — Professores Qualificados: Contamos com professores capacitados para acompanhar e promover o aprendizado dos alunos ao longo dos cinco anos do curso, focando no desenvolvimento curricular completo.",
    vtg02:
      "2 — Currículo Ampliado: Além das disciplinas regulares, oferecemos aulas de Formação Socioemocional, Inglês e Laboratório de Informática. Para garantir um ensino mais completo, a carga horária é maior do que a de outras escolas, proporcionando mais tempo para o desenvolvimento integral dos alunos e aprofundamento dos conteúdos.",
    vtg03:
      "3 - Infraestrutura Completa: Nossas salas de aula são amplas e projetadas para o ambiente escolar. Os corredores são monitorados por inspetores e câmeras, e o horário de lanche é escalonado, sempre acompanhado pela professora e auxiliares.",
    vtg04:
      "4 — Auxílio em Sala: Do 1º ao 5º ano, todos os professores contam com auxiliares, que oferecem suporte no aprendizado e na manutenção da disciplina, assegurando atenção especial a cada aluno.",
    vtg05:
      "5 – Programa 'O Líder em Mim': Implementamos o programa de alto desempenho socioemocional 'O Líder em Mim', que desenvolve habilidades como responsabilidade, organização, priorização, proatividade e comunicação, somadas ao processo de ensino-aprendizagem, garantindo que os alunos adquiram competências diferenciadas que vão além do currículo tradicional.",
    vtg06:
      "6 — Sistema Anglo de Ensino: O processo de ensino é feito por meio do Sistema Anglo, com o suporte da plataforma digital Plurall, garantindo uma educação de qualidade e acompanhamento contínuo.",
    vtg07:
      "7 — Eventos ao Longo do Ano: Realizamos diversos eventos ao longo do ano letivo, proporcionando um ambiente acolhedor e familiar, sempre pensando no bem-estar dos alunos.",
    vtg08:
      "8 — Acompanhamento Pedagógico: A equipe pedagógica está sempre disponível, e os pais podem agendar reuniões para acompanhar de perto o desenvolvimento acadêmico dos filhos.",
    vtg09:
      "9 — Uniforme Obrigatório: O uso do uniforme é uma medida para promover igualdade entre os alunos, evitando comparações e prevenindo situações de bullying.",
    vtg10:
      "10 — Aulas de Educação Física: As aulas de Educação Física são realizadas dentro do horário regular de aulas, garantindo que os alunos se exercitem de forma supervisionada e organizada.",
  },
  //2° Ano do Ensino Fundamental I
  {
    cod: 8,
    curso: "2° Ano do Ensino Fundamental I",
    categoria: 2,
    valorIntegral: 1638.63,
    docAluno:
      "Aluno: |- RG |- CPF|- Certidão de Nascimento |- Comprovante de residência |- 01 Foto 3x4 |- Declaração de Transferência |- Histórico de Transferência |- Carteirinha de Vacinação ",
    docResp:
      "Responsáveis: |- RG|- CPF|- Comprovante de residência|- Declaração de Adimplência |- Obrigatório a compra do uniforme escolar no ato da matrícula",
    valorApostila: ApostilaFund1,
    idadeMatricula:
      "Idade para Matrícula: |2º Ano - 7 anos, até 31 de março do ano letivo e ter concluído o primeiro ano do Ensino Fundamental.",
    TextoSegundaMensalidade: TextoSegundaMensalidade,
    SegundaMensalidade: SegundaMensalidadeFundamental1,
    horaAula: "",
    desconto: descontFund1s12,

    vtgEixo: "ENSINO FUNDAMENTAL I ",
    vtgLetivo: "",
    vtgHorario:
      "Horário das Aulas | Tarde: 12h e 40min às 17h e 30min.",
      vtgVantagens: "Por que escolher o Colégio Adélia para o Ensino Fundamental I?",
      vtg01:
        "1 — Professores Qualificados: Contamos com professores capacitados para acompanhar e promover o aprendizado dos alunos ao longo dos cinco anos do curso, focando no desenvolvimento curricular completo.",
      vtg02:
        "2 — Currículo Ampliado: Além das disciplinas regulares, oferecemos aulas de Formação Socioemocional, Inglês e Laboratório de Informática. Para garantir um ensino mais completo, a carga horária é maior do que a de outras escolas, proporcionando mais tempo para o desenvolvimento integral dos alunos e aprofundamento dos conteúdos.",
      vtg03:
        "3 - Infraestrutura Completa: Nossas salas de aula são amplas e projetadas para o ambiente escolar. Os corredores são monitorados por inspetores e câmeras, e o horário de lanche é escalonado, sempre acompanhado pela professora e auxiliares.",
      vtg04:
        "4 — Auxílio em Sala: Do 1º ao 5º ano, todos os professores contam com auxiliares, que oferecem suporte no aprendizado e na manutenção da disciplina, assegurando atenção especial a cada aluno.",
      vtg05:
        "5 – Programa 'O Líder em Mim': Implementamos o programa de alto desempenho socioemocional 'O Líder em Mim', que desenvolve habilidades como responsabilidade, organização, priorização, proatividade e comunicação, somadas ao processo de ensino-aprendizagem, garantindo que os alunos adquiram competências diferenciadas que vão além do currículo tradicional.",
      vtg06:
        "6 — Sistema Anglo de Ensino: O processo de ensino é feito por meio do Sistema Anglo, com o suporte da plataforma digital Plurall, garantindo uma educação de qualidade e acompanhamento contínuo.",
      vtg07:
        "7 — Eventos ao Longo do Ano: Realizamos diversos eventos ao longo do ano letivo, proporcionando um ambiente acolhedor e familiar, sempre pensando no bem-estar dos alunos.",
      vtg08:
        "8 — Acompanhamento Pedagógico: A equipe pedagógica está sempre disponível, e os pais podem agendar reuniões para acompanhar de perto o desenvolvimento acadêmico dos filhos.",
      vtg09:
        "9 — Uniforme Obrigatório: O uso do uniforme é uma medida para promover igualdade entre os alunos, evitando comparações e prevenindo situações de bullying.",
      vtg10:
        "10 — Aulas de Educação Física: As aulas de Educação Física são realizadas dentro do horário regular de aulas, garantindo que os alunos se exercitem de forma supervisionada e organizada.",
  },
  //3° Ano do Ensino Fundamental I
  {
    cod: 9,
    curso: "3° Ano do Ensino Fundamental I",
    categoria: 2,
    valorIntegral: 1638.63,
    docAluno:
      "Aluno: |- RG |- CPF|- Certidão de Nascimento |- Comprovante de residência |- 01 Foto 3x4 |- Declaração de Transferência |- Histórico de Transferência |- Carteirinha de Vacinação |- Declaração de Escolaridade",
    docResp:
      "Responsáveis: |- RG|- CPF|- Comprovante de residência|- Declaração de Adimplência |- Obrigatório a compra do uniforme escolar no ato da matrícula",
    valorApostila: ApostilaFund1,
    idadeMatricula: "",
    TextoSegundaMensalidade: TextoSegundaMensalidade,
    SegundaMensalidade: SegundaMensalidadeFundamental1,
    horaAula: "",
    desconto: descontFund1s345,

    vtgEixo: "ENSINO FUNDAMENTAL I ",
    vtgLetivo: "",
    vtgHorario:
      "Horário das Aulas | Tarde: 12h e 40min às 17h e 30min.",
      vtgVantagens: "Por que escolher o Colégio Adélia para o Ensino Fundamental I?",
      vtg01:
        "1 — Professores Qualificados: Contamos com professores capacitados para acompanhar e promover o aprendizado dos alunos ao longo dos cinco anos do curso, focando no desenvolvimento curricular completo.",
      vtg02:
        "2 — Currículo Ampliado: Além das disciplinas regulares, oferecemos aulas de Formação Socioemocional, Inglês e Laboratório de Informática. Para garantir um ensino mais completo, a carga horária é maior do que a de outras escolas, proporcionando mais tempo para o desenvolvimento integral dos alunos e aprofundamento dos conteúdos.",
      vtg03:
        "3 - Infraestrutura Completa: Nossas salas de aula são amplas e projetadas para o ambiente escolar. Os corredores são monitorados por inspetores e câmeras, e o horário de lanche é escalonado, sempre acompanhado pela professora e auxiliares.",
      vtg04:
        "4 — Auxílio em Sala: Do 1º ao 5º ano, todos os professores contam com auxiliares, que oferecem suporte no aprendizado e na manutenção da disciplina, assegurando atenção especial a cada aluno.",
      vtg05:
        "5 – Programa 'O Líder em Mim': Implementamos o programa de alto desempenho socioemocional 'O Líder em Mim', que desenvolve habilidades como responsabilidade, organização, priorização, proatividade e comunicação, somadas ao processo de ensino-aprendizagem, garantindo que os alunos adquiram competências diferenciadas que vão além do currículo tradicional.",
      vtg06:
        "6 — Sistema Anglo de Ensino: O processo de ensino é feito por meio do Sistema Anglo, com o suporte da plataforma digital Plurall, garantindo uma educação de qualidade e acompanhamento contínuo.",
      vtg07:
        "7 — Eventos ao Longo do Ano: Realizamos diversos eventos ao longo do ano letivo, proporcionando um ambiente acolhedor e familiar, sempre pensando no bem-estar dos alunos.",
      vtg08:
        "8 — Acompanhamento Pedagógico: A equipe pedagógica está sempre disponível, e os pais podem agendar reuniões para acompanhar de perto o desenvolvimento acadêmico dos filhos.",
      vtg09:
        "9 — Uniforme Obrigatório: O uso do uniforme é uma medida para promover igualdade entre os alunos, evitando comparações e prevenindo situações de bullying.",
      vtg10:
        "10 — Aulas de Educação Física: As aulas de Educação Física são realizadas dentro do horário regular de aulas, garantindo que os alunos se exercitem de forma supervisionada e organizada.",
  },
  //4° Ano do Ensino Fundamental I
  {
    cod: 10,
    curso: "4° Ano do Ensino Fundamental I",
    categoria: 2,
    valorIntegral: 1638.63,
    docAluno:
      "Aluno: |- RG |- CPF|- Certidão de Nascimento |- Comprovante de residência |- 01 Foto 3x4 |- Declaração de Transferência |- Histórico de Transferência |- Carteirinha de Vacinação |- Declaração de Escolaridade",
    docResp:
      "Responsáveis: |- RG|- CPF|- Comprovante de residência|- Declaração de Adimplência |- Obrigatório a compra do uniforme escolar no ato da matrícula",
    valorApostila: ApostilaFund1,
    idadeMatricula: "",
    TextoSegundaMensalidade: TextoSegundaMensalidade,
    SegundaMensalidade: SegundaMensalidadeFundamental1,
    horaAula: "",
    desconto: descontFund1s345,

    vtgEixo: "ENSINO FUNDAMENTAL I ",
    vtgLetivo: "",
    vtgHorario:
      "Horário das Aulas | Tarde: 12h e 40min às 17h e 30min.",
    vtgVantagens: "Quais as vantagens de estudar no Colégio Adélia: ",
    vtgVantagens: "Por que escolher o Colégio Adélia para o Ensino Fundamental I?",
    vtg01:
      "1 — Professores Qualificados: Contamos com professores capacitados para acompanhar e promover o aprendizado dos alunos ao longo dos cinco anos do curso, focando no desenvolvimento curricular completo.",
    vtg02:
      "2 — Currículo Ampliado: Além das disciplinas regulares, oferecemos aulas de Formação Socioemocional, Inglês e Laboratório de Informática. Para garantir um ensino mais completo, a carga horária é maior do que a de outras escolas, proporcionando mais tempo para o desenvolvimento integral dos alunos e aprofundamento dos conteúdos.",
    vtg03:
      "3 - Infraestrutura Completa: Nossas salas de aula são amplas e projetadas para o ambiente escolar. Os corredores são monitorados por inspetores e câmeras, e o horário de lanche é escalonado, sempre acompanhado pela professora e auxiliares.",
    vtg04:
      "4 — Auxílio em Sala: Do 1º ao 5º ano, todos os professores contam com auxiliares, que oferecem suporte no aprendizado e na manutenção da disciplina, assegurando atenção especial a cada aluno.",
    vtg05:
      "5 – Programa 'O Líder em Mim': Implementamos o programa de alto desempenho socioemocional 'O Líder em Mim', que desenvolve habilidades como responsabilidade, organização, priorização, proatividade e comunicação, somadas ao processo de ensino-aprendizagem, garantindo que os alunos adquiram competências diferenciadas que vão além do currículo tradicional.",
    vtg06:
      "6 — Sistema Anglo de Ensino: O processo de ensino é feito por meio do Sistema Anglo, com o suporte da plataforma digital Plurall, garantindo uma educação de qualidade e acompanhamento contínuo.",
    vtg07:
      "7 — Eventos ao Longo do Ano: Realizamos diversos eventos ao longo do ano letivo, proporcionando um ambiente acolhedor e familiar, sempre pensando no bem-estar dos alunos.",
    vtg08:
      "8 — Acompanhamento Pedagógico: A equipe pedagógica está sempre disponível, e os pais podem agendar reuniões para acompanhar de perto o desenvolvimento acadêmico dos filhos.",
    vtg09:
      "9 — Uniforme Obrigatório: O uso do uniforme é uma medida para promover igualdade entre os alunos, evitando comparações e prevenindo situações de bullying.",
    vtg10:
      "10 — Aulas de Educação Física: As aulas de Educação Física são realizadas dentro do horário regular de aulas, garantindo que os alunos se exercitem de forma supervisionada e organizada.",
  },
  //5° Ano do Ensino Fundamental I
  {
    cod: 11,
    curso: "5° Ano do Ensino Fundamental I",
    categoria: 2,
    valorIntegral: 1638.63,
    docAluno:
      "Aluno: |- RG |- CPF|- Certidão de Nascimento |- Comprovante de residência |- 01 Foto 3x4 |- Declaração de Transferência |- Histórico de Transferência |- Carteirinha de Vacinação |- Declaração de Escolaridade",
    docResp:
      "Responsáveis: |- RG|- CPF|- Comprovante de residência|- Declaração de Adimplência |- Obrigatório a compra do uniforme escolar no ato da matrícula",
    valorApostila: ApostilaFund1,
    idadeMatricula: "",
    TextoSegundaMensalidade: TextoSegundaMensalidade,
    SegundaMensalidade: SegundaMensalidadeFundamental1,
    horaAula: "",
    desconto: descontFund1s345,

    vtgEixo: "ENSINO FUNDAMENTAL I ",
    vtgLetivo: "",
    vtgHorario:
      "Horário das Aulas | Tarde: 12h e 40min às 17h e 30min.",
      vtgVantagens: "Por que escolher o Colégio Adélia para o Ensino Fundamental I?",
      vtg01:
        "1 — Professores Qualificados: Contamos com professores capacitados para acompanhar e promover o aprendizado dos alunos ao longo dos cinco anos do curso, focando no desenvolvimento curricular completo.",
      vtg02:
        "2 — Currículo Ampliado: Além das disciplinas regulares, oferecemos aulas de Formação Socioemocional, Inglês e Laboratório de Informática. Para garantir um ensino mais completo, a carga horária é maior do que a de outras escolas, proporcionando mais tempo para o desenvolvimento integral dos alunos e aprofundamento dos conteúdos.",
      vtg03:
        "3 - Infraestrutura Completa: Nossas salas de aula são amplas e projetadas para o ambiente escolar. Os corredores são monitorados por inspetores e câmeras, e o horário de lanche é escalonado, sempre acompanhado pela professora e auxiliares.",
      vtg04:
        "4 — Auxílio em Sala: Do 1º ao 5º ano, todos os professores contam com auxiliares, que oferecem suporte no aprendizado e na manutenção da disciplina, assegurando atenção especial a cada aluno.",
      vtg05:
        "5 – Programa 'O Líder em Mim': Implementamos o programa de alto desempenho socioemocional 'O Líder em Mim', que desenvolve habilidades como responsabilidade, organização, priorização, proatividade e comunicação, somadas ao processo de ensino-aprendizagem, garantindo que os alunos adquiram competências diferenciadas que vão além do currículo tradicional.",
      vtg06:
        "6 — Sistema Anglo de Ensino: O processo de ensino é feito por meio do Sistema Anglo, com o suporte da plataforma digital Plurall, garantindo uma educação de qualidade e acompanhamento contínuo.",
      vtg07:
        "7 — Eventos ao Longo do Ano: Realizamos diversos eventos ao longo do ano letivo, proporcionando um ambiente acolhedor e familiar, sempre pensando no bem-estar dos alunos.",
      vtg08:
        "8 — Acompanhamento Pedagógico: A equipe pedagógica está sempre disponível, e os pais podem agendar reuniões para acompanhar de perto o desenvolvimento acadêmico dos filhos.",
      vtg09:
        "9 — Uniforme Obrigatório: O uso do uniforme é uma medida para promover igualdade entre os alunos, evitando comparações e prevenindo situações de bullying.",
      vtg10:
        "10 — Aulas de Educação Física: As aulas de Educação Física são realizadas dentro do horário regular de aulas, garantindo que os alunos se exercitem de forma supervisionada e organizada.",
  },
  //6° Ano do Ensino Fundamental II
  {
    cod: 12,
    curso: "6° Ano do Ensino Fundamental II",
    categoria: 3,
    valorIntegral: 2035.29,
    docAluno:
      "Aluno: |- RG |- CPF |- Certidão de Nascimento |- Comprovante de residência |- 01 Foto 3X4 |- Declaração de Transferência |- Histórico de Transferência |- Carteirinha de Vacinação |- Declaração de Escolaridade",
    docResp:
      "Responsáveis: |- RG|- CPF|- Comprovante de residência|- Declaração de Adimplência |- Obrigatório a compra do uniforme escolar no ato da matrícula",
    valorApostila: ApostilaFund2,
    idadeMatricula: "",
    TextoSegundaMensalidade: TextoSegundaMensalidade,
    SegundaMensalidade:
      "- Até o dia 1º R$ 1017,64 | - Até o dia 7º R$ 1068,53 | - Até o dia 25º R$ 1272,05",
    horaAula: "",
    desconto: descontFund2,

    vtgEixo: "ENSINO FUNDAMENTAL II",
    vtgLetivo: "",
    vtgHorario:
      "Horário das Aulas | Manhã: 07h às 12h 20min.",
    vtgVantagens: "Por que escolher o Colégio Adélia para o Ensino Fundamental II?",
      vtg01:
        "1 — Professores Qualificados: Contamos com professores altamente capacitados, focados no desenvolvimento acadêmico dos alunos ao longo dos quatro anos do curso, garantindo uma formação sólida e completa.",
      vtg02:
        "2 — Currículo Ampliado: Além das disciplinas tradicionais, oferecemos Inglês e laboratórios de Física, Química, Biologia e Informática. Ao terem contato com essas disciplinas e experiências práticas desde cedo, os alunos conhecem os equipamentos e realizam experimentos que fazem toda a diferença no despertar do interesse acadêmico para futuras disciplinas. Por isso, nossa carga horária é maior do que a de outras escolas, proporcionando mais tempo de aprendizado.",
      vtg03:
        "3 - Estrutura Completa: Nossas salas de aula são amplas e projetadas para o ambiente escolar. O horário de lanche é escalonado e os corredores são monitorados por inspetores, garantindo segurança e tranquilidade para os alunos.",
      vtg04:
        "4 — Sistema Anglo de Ensino: Todo o processo de ensino é realizado através do renomado Sistema Anglo, com suporte da plataforma digital Plurall, oferecendo recursos adicionais para o aprendizado.",
      vtg05:
        "5 – Eventos ao Longo do Ano: Promovemos diversos eventos durante o ano letivo, criando um ambiente acolhedor e familiar, onde os alunos se sentem à vontade e estimulados a participar.",
      vtg06:
        "6 — Acompanhamento Pedagógico: Nossa equipe pedagógica está sempre disponível para atender os responsáveis, que podem agendar reuniões presenciais ou online conforme sua conveniência. Dessa forma, os pais acompanham de perto o desenvolvimento acadêmico de seus filhos.",
      vtg07:
        "7 — Acesso Online: Os responsáveis têm acesso online a informações como boletins, ocorrências e questões financeiras, por meio do terminal web, permitindo acompanhar a vida escolar do aluno e outros acontecimentos importantes da escola com facilidade.",
      vtg08:
        "8 — Plurall: Utilizamos a plataforma Plurall, uma ferramenta tecnológica que permite aos alunos realizar tarefas pelo celular ou pela web. A plataforma também oferece um plantão de dúvidas com monitores virtuais, que respondem perguntas dos alunos, criando um banco de dados valioso para futuras consultas.",
      vtg09:
        "9 — Uniforme Obrigatório: O uso do uniforme (camisa da escola) é obrigatório, promovendo igualdade entre os alunos e prevenindo comparações que possam levar ao bullying, favorecendo um ambiente de estudo focado e saudável.",
      vtg10:
        "10 — Aulas de Educação Física: As aulas de Educação Física são realizadas em período contrário ao das aulas regulares, oferecendo um equilíbrio entre o aprendizado acadêmico e a prática esportiva.",
  },
  //7° Ano do Ensino Fundamental II
  {
    cod: 13,
    curso: "7° Ano do Ensino Fundamental II",
    categoria: 3,
    valorIntegral: 2035.29,
    docAluno:
      "Aluno: |- RG |- CPF |- Certidão de Nascimento |- Comprovante de residência |- 01 Foto 3X4 |- Declaração de Transferência |- Histórico de Transferência |- Carteirinha de Vacinação |- Declaração de Escolaridade",
    docResp:
      "Responsáveis: |- RG|- CPF|- Comprovante de residência|- Declaração de Adimplência |- Obrigatório a compra do uniforme escolar no ato da matrícula",
    valorApostila: ApostilaFund2,
    idadeMatricula: "",
    TextoSegundaMensalidade: TextoSegundaMensalidade,
    SegundaMensalidade:
      "- Até o dia 1º R$ 1017,64 | - Até o dia 7º R$ 1068,53 | - Até o dia 25º R$ 1272,05",
    horaAula: "",
    desconto: descontFund2,

    vtgEixo: "ENSINO FUNDAMENTAL II",
    vtgLetivo: "",
    vtgHorario:
      "Horário das Aulas | Manhã: 07h às 12h 20min.",
      vtgVantagens: "Por que escolher o Colégio Adélia para o Ensino Fundamental II?",
      vtg01:
        "1 — Professores Qualificados: Contamos com professores altamente capacitados, focados no desenvolvimento acadêmico dos alunos ao longo dos quatro anos do curso, garantindo uma formação sólida e completa.",
      vtg02:
        "2 — Currículo Ampliado: Além das disciplinas tradicionais, oferecemos Inglês e laboratórios de Física, Química, Biologia e Informática. Ao terem contato com essas disciplinas e experiências práticas desde cedo, os alunos conhecem os equipamentos e realizam experimentos que fazem toda a diferença no despertar do interesse acadêmico para futuras disciplinas. Por isso, nossa carga horária é maior do que a de outras escolas, proporcionando mais tempo de aprendizado.",
      vtg03:
        "3 - Estrutura Completa: Nossas salas de aula são amplas e projetadas para o ambiente escolar. O horário de lanche é escalonado e os corredores são monitorados por inspetores, garantindo segurança e tranquilidade para os alunos.",
      vtg04:
        "4 — Sistema Anglo de Ensino: Todo o processo de ensino é realizado através do renomado Sistema Anglo, com suporte da plataforma digital Plurall, oferecendo recursos adicionais para o aprendizado.",
      vtg05:
        "5 – Eventos ao Longo do Ano: Promovemos diversos eventos durante o ano letivo, criando um ambiente acolhedor e familiar, onde os alunos se sentem à vontade e estimulados a participar.",
      vtg06:
        "6 — Acompanhamento Pedagógico: Nossa equipe pedagógica está sempre disponível para atender os responsáveis, que podem agendar reuniões presenciais ou online conforme sua conveniência. Dessa forma, os pais acompanham de perto o desenvolvimento acadêmico de seus filhos.",
      vtg07:
        "7 — Acesso Online: Os responsáveis têm acesso online a informações como boletins, ocorrências e questões financeiras, por meio do terminal web, permitindo acompanhar a vida escolar do aluno e outros acontecimentos importantes da escola com facilidade.",
      vtg08:
        "8 — Plurall: Utilizamos a plataforma Plurall, uma ferramenta tecnológica que permite aos alunos realizar tarefas pelo celular ou pela web. A plataforma também oferece um plantão de dúvidas com monitores virtuais, que respondem perguntas dos alunos, criando um banco de dados valioso para futuras consultas.",
      vtg09:
        "9 — Uniforme Obrigatório: O uso do uniforme (camisa da escola) é obrigatório, promovendo igualdade entre os alunos e prevenindo comparações que possam levar ao bullying, favorecendo um ambiente de estudo focado e saudável.",
      vtg10:
        "10 — Aulas de Educação Física: As aulas de Educação Física são realizadas em período contrário ao das aulas regulares, oferecendo um equilíbrio entre o aprendizado acadêmico e a prática esportiva.",
  },
  //8° Ano do Ensino Fundamental II
  {
    cod: 14,
    curso: "8° Ano do Ensino Fundamental II",
    categoria: 3,
    valorIntegral: 2035.29,
    docAluno:
      "Aluno: |- RG |- CPF |- Certidão de Nascimento |- Comprovante de residência |- 01 Foto 3X4 |- Declaração de Transferência |- Histórico de Transferência |- Carteirinha de Vacinação |- Declaração de Escolaridade",
    docResp:
      "Responsáveis: |- RG|- CPF|- Comprovante de residência|- Declaração de Adimplência |- Obrigatório a compra do uniforme escolar no ato da matrícula",
    valorApostila: ApostilaFund2,
    idadeMatricula: "",
    TextoSegundaMensalidade: TextoSegundaMensalidade,
    SegundaMensalidade:
      "- Até o dia 1º R$ 1017,64 | - Até o dia 7º R$ 1068,53 | - Até o dia 25º R$ 1272,05",
    horaAula: "",
    desconto: descontFund2,

    vtgEixo: "ENSINO FUNDAMENTAL II",
    vtgLetivo: "",
    vtgHorario:
      "Horário das Aulas | Manhã: 07h às 12h 20min.",
      vtgVantagens: "Por que escolher o Colégio Adélia para o Ensino Fundamental II?",
      vtg01:
        "1 — Professores Qualificados: Contamos com professores altamente capacitados, focados no desenvolvimento acadêmico dos alunos ao longo dos quatro anos do curso, garantindo uma formação sólida e completa.",
      vtg02:
        "2 — Currículo Ampliado: Além das disciplinas tradicionais, oferecemos Inglês e laboratórios de Física, Química, Biologia e Informática. Ao terem contato com essas disciplinas e experiências práticas desde cedo, os alunos conhecem os equipamentos e realizam experimentos que fazem toda a diferença no despertar do interesse acadêmico para futuras disciplinas. Por isso, nossa carga horária é maior do que a de outras escolas, proporcionando mais tempo de aprendizado.",
      vtg03:
        "3 - Estrutura Completa: Nossas salas de aula são amplas e projetadas para o ambiente escolar. O horário de lanche é escalonado e os corredores são monitorados por inspetores, garantindo segurança e tranquilidade para os alunos.",
      vtg04:
        "4 — Sistema Anglo de Ensino: Todo o processo de ensino é realizado através do renomado Sistema Anglo, com suporte da plataforma digital Plurall, oferecendo recursos adicionais para o aprendizado.",
      vtg05:
        "5 – Eventos ao Longo do Ano: Promovemos diversos eventos durante o ano letivo, criando um ambiente acolhedor e familiar, onde os alunos se sentem à vontade e estimulados a participar.",
      vtg06:
        "6 — Acompanhamento Pedagógico: Nossa equipe pedagógica está sempre disponível para atender os responsáveis, que podem agendar reuniões presenciais ou online conforme sua conveniência. Dessa forma, os pais acompanham de perto o desenvolvimento acadêmico de seus filhos.",
      vtg07:
        "7 — Acesso Online: Os responsáveis têm acesso online a informações como boletins, ocorrências e questões financeiras, por meio do terminal web, permitindo acompanhar a vida escolar do aluno e outros acontecimentos importantes da escola com facilidade.",
      vtg08:
        "8 — Plurall: Utilizamos a plataforma Plurall, uma ferramenta tecnológica que permite aos alunos realizar tarefas pelo celular ou pela web. A plataforma também oferece um plantão de dúvidas com monitores virtuais, que respondem perguntas dos alunos, criando um banco de dados valioso para futuras consultas.",
      vtg09:
        "9 — Uniforme Obrigatório: O uso do uniforme (camisa da escola) é obrigatório, promovendo igualdade entre os alunos e prevenindo comparações que possam levar ao bullying, favorecendo um ambiente de estudo focado e saudável.",
      vtg10:
        "10 — Aulas de Educação Física: As aulas de Educação Física são realizadas em período contrário ao das aulas regulares, oferecendo um equilíbrio entre o aprendizado acadêmico e a prática esportiva.",
  },
  //9° Ano do Ensino Fundamental II
  {
    cod: 15,
    curso: "9° Ano do Ensino Fundamental II",
    categoria: 3,
    valorIntegral: 2035.29,
    docAluno:
      "Aluno: |- RG |- CPF |- Certidão de Nascimento |- Comprovante de residência |- 01 Foto 3X4 |- Declaração de Transferência |- Histórico de Transferência |- Carteirinha de Vacinação |- Declaração de Escolaridade",
    docResp:
      "Responsáveis: |- RG|- CPF|- Comprovante de residência|- Declaração de Adimplência |- Obrigatório a compra do uniforme escolar no ato da matrícula",
    valorApostila: ApostilaFund2,
    idadeMatricula: "",
    TextoSegundaMensalidade: TextoSegundaMensalidade,
    SegundaMensalidade:
      "- Até o dia 1º R$ 1017,64 | - Até o dia 7º R$ 1068,53 | - Até o dia 25º R$ 1272,05",
    horaAula: "",
    desconto: descontFund2,

    vtgEixo: "ENSINO FUNDAMENTAL II",
    vtgLetivo: "",
    vtgHorario:
      "Horário das Aulas | Manhã: 07h às 12h 20min.",
      vtgVantagens: "Por que escolher o Colégio Adélia para o Ensino Fundamental II?",
      vtg01:
        "1 — Professores Qualificados: Contamos com professores altamente capacitados, focados no desenvolvimento acadêmico dos alunos ao longo dos quatro anos do curso, garantindo uma formação sólida e completa.",
      vtg02:
        "2 — Currículo Ampliado: Além das disciplinas tradicionais, oferecemos Inglês e laboratórios de Física, Química, Biologia e Informática. Ao terem contato com essas disciplinas e experiências práticas desde cedo, os alunos conhecem os equipamentos e realizam experimentos que fazem toda a diferença no despertar do interesse acadêmico para futuras disciplinas. Por isso, nossa carga horária é maior do que a de outras escolas, proporcionando mais tempo de aprendizado.",
      vtg03:
        "3 - Estrutura Completa: Nossas salas de aula são amplas e projetadas para o ambiente escolar. O horário de lanche é escalonado e os corredores são monitorados por inspetores, garantindo segurança e tranquilidade para os alunos.",
      vtg04:
        "4 — Sistema Anglo de Ensino: Todo o processo de ensino é realizado através do renomado Sistema Anglo, com suporte da plataforma digital Plurall, oferecendo recursos adicionais para o aprendizado.",
      vtg05:
        "5 – Eventos ao Longo do Ano: Promovemos diversos eventos durante o ano letivo, criando um ambiente acolhedor e familiar, onde os alunos se sentem à vontade e estimulados a participar.",
      vtg06:
        "6 — Acompanhamento Pedagógico: Nossa equipe pedagógica está sempre disponível para atender os responsáveis, que podem agendar reuniões presenciais ou online conforme sua conveniência. Dessa forma, os pais acompanham de perto o desenvolvimento acadêmico de seus filhos.",
      vtg07:
        "7 — Acesso Online: Os responsáveis têm acesso online a informações como boletins, ocorrências e questões financeiras, por meio do terminal web, permitindo acompanhar a vida escolar do aluno e outros acontecimentos importantes da escola com facilidade.",
      vtg08:
        "8 — Plurall: Utilizamos a plataforma Plurall, uma ferramenta tecnológica que permite aos alunos realizar tarefas pelo celular ou pela web. A plataforma também oferece um plantão de dúvidas com monitores virtuais, que respondem perguntas dos alunos, criando um banco de dados valioso para futuras consultas.",
      vtg09:
        "9 — Uniforme Obrigatório: O uso do uniforme (camisa da escola) é obrigatório, promovendo igualdade entre os alunos e prevenindo comparações que possam levar ao bullying, favorecendo um ambiente de estudo focado e saudável.",
      vtg10:
        "10 — Aulas de Educação Física: As aulas de Educação Física são realizadas em período contrário ao das aulas regulares, oferecendo um equilíbrio entre o aprendizado acadêmico e a prática esportiva.",
  },
  //1° Ensino Médio - Matutino
  {
    cod: 16,
    curso: "1° Ensino Médio - Matutino",
    categoria: 4,
    valorIntegral: 2394.54,
    docAluno:
      "Aluno: |- RG |- CPF |- Certidão de Nascimento ou Casamento |- Comprovante de residência |- 01 Foto 3x4 |- Carteirinha de Vacinação |- Histórico do Ens. Fundamental com GDAE ou Transferência |- Declaração de Transferência |- Histórico de Transferência |Obs: na ausência do histórico com gdae deverá entregar uma declaração de conclusão do ensino fundamental |- Declaração de Escolaridade.",
    docResp:
      "Responsáveis: |- RG|- CPF|- Comprovante de residência|- Declaração de Adimplência |- Obrigatório a compra do uniforme escolar no ato da matrícula",
    valorApostila: ApostilaMed1e2,
    idadeMatricula: "",
    TextoSegundaMensalidade: TextoSegundaMensalidade,
    SegundaMensalidade: "- Até o dia 1º R$ 1197,27 | - Até o dia 7º R$ 1257,13 | - Até o dia 25º R$ 1496,59",
    horaAula: "",
    desconto: descontMedioMat,

    vtgEixo: "ENSINO MÉDIO",
    vtgLetivo: "",
    vtgHorario:
      "Horário das Aulas | Manhã: 07h às 12h e 20min.",
    vtgVantagens: "Por que escolher o Colégio Adélia para o Ensino Médio?",
    vtg01:
      "1 — Professores Qualificados e Foco no ENEM: Nossos professores são altamente capacitados e focados no desenvolvimento acadêmico dos alunos ao longo dos três anos do Ensino Médio. A preparação é especialmente voltada para o sucesso no ENEM e nos principais vestibulares, garantindo que os alunos tenham uma formação sólida e direcionada.;",
    vtg02:
      "2 — Infraestrutura Adequada para o ENEM: Contamos com salas de aula amplas e projetadas para um ambiente de estudo eficiente, ideal para o desenvolvimento de competências que serão cobradas no ENEM. Além disso, nossos corredores e horários de lanche são monitorados por inspetores, proporcionando um ambiente seguro e tranquilo para que os alunos possam se concentrar nos estudos.;",
    vtg03:
      "3 — Sistema Anglo de Ensino: O aprendizado é realizado por meio do renomado Sistema Anglo de Ensino, que oferece um currículo voltado para as exigências do ENEM. Com o suporte da plataforma digital Plurall, os alunos têm acesso a atividades e recursos complementares, reforçando a preparação para o exame e vestibulares;",
    vtg04:
      "4 — Ambiente Familiar e Acolhedor: Ao longo do ano letivo, realizamos diversos eventos que proporcionam um ambiente acolhedor e familiar, promovendo o bem-estar e a integração dos alunos;",
    vtg05:
      "5 — Acompanhamento Pedagógico: Nossa equipe pedagógica está sempre disponível e presente para acompanhar de perto o desempenho acadêmico dos alunos. Os pais e responsáveis podem agendar reuniões para discutir o progresso dos alunos e garantir que estão no caminho certo para alcançar os melhores resultados no ENEM e nos vestibularese;",
    vtg06:
      "6 — Acesso Online: Os pais ou responsáveis têm acesso online a informações importantes, como boletins, ocorrências e questões financeiras, por meio do terminal web. Isso permite acompanhar a vida escolar do aluno e estar sempre a par dos acontecimentos dentro da escola;",
    vtg07:
      "7 — Plurall: Tecnologia e Plantão de Dúvidas Focado no ENEM: A plataforma Plurall oferece não apenas a realização de tarefas online, mas também um plantão de dúvidas com monitores virtuais, que estão preparados para ajudar os alunos a esclarecer dúvidas sobre conteúdos que caem no ENEM. Isso forma um banco de dados valioso para consultas e revisão de temas importantes;",
    vtg08: "Simulados ENEM: Durante o ano letivo, aplicamos simulados com o formato do ENEM, preparando os alunos de forma prática e eficiente para enfrentar o exame com confiança e alto desempenho;",
    vtg09:
      "9 — Uniforme Obrigatório: O uso do uniforme (camisa da escola) é obrigatório, promovendo igualdade entre os alunos e prevenindo comparações que possam levar ao bullying, favorecendo um ambiente de estudo focado e saudável;",
    vtg10:
      "10 - Aulas de Educação Física: As aulas de Educação Física são realizadas em período contrário ao das aulas regulares, proporcionando um equilíbrio entre o aprendizado acadêmico e as atividades físicas, importante para a saúde e bem-estar dos alunos.",
  },
  //2° Ensino Médio - Matutino
  {
    cod: 17,
    curso: "2° Ensino Médio - Matutino",
    categoria: 4,
    valorIntegral: 2394.54,
    docAluno:
      "Aluno: |- RG |- CPF |- Certidão de Nascimento ou Casamento |- Comprovante de residência |- 01 Foto 3x4 |- Carteirinha de Vacinação |- Histórico do Ens. Fundamental com GDAE ou Transferência |- Declaração de Transferência |- Histórico de Transferência |Obs: na ausência do histórico com gdae deverá entregar uma declaração de conclusão do ensino fundamental |- Declaração de Escolaridade.",
    docResp:
      "Responsáveis: |- RG|- CPF|- Comprovante de residência|- Declaração de Adimplência |- Obrigatório a compra do uniforme escolar no ato da matrícula",
    valorApostila: ApostilaMed1e2,
    idadeMatricula: "",
    TextoSegundaMensalidade: TextoSegundaMensalidade,
    SegundaMensalidade:
      "- Até o dia 1º R$ 1197,27 | - Até o dia 7º R$ 1257,13 | - Até o dia 25º R$ 1496,59",
    horaAula: "",
    desconto: descontMedioMat,

    vtgEixo: "ENSINO MÉDIO",
    vtgLetivo: "",
    vtgHorario:
      " Horário das Aulas | Manhã: 07h às 12h e 20min.",
      vtgVantagens: "Por que escolher o Colégio Adélia para o Ensino Médio?",
      vtg01:
        "1 — Professores Qualificados e Foco no ENEM: Nossos professores são altamente capacitados e focados no desenvolvimento acadêmico dos alunos ao longo dos três anos do Ensino Médio. A preparação é especialmente voltada para o sucesso no ENEM e nos principais vestibulares, garantindo que os alunos tenham uma formação sólida e direcionada.;",
      vtg02:
        "2 — Infraestrutura Adequada para o ENEM: Contamos com salas de aula amplas e projetadas para um ambiente de estudo eficiente, ideal para o desenvolvimento de competências que serão cobradas no ENEM. Além disso, nossos corredores e horários de lanche são monitorados por inspetores, proporcionando um ambiente seguro e tranquilo para que os alunos possam se concentrar nos estudos.;",
      vtg03:
        "3 — Sistema Anglo de Ensino: O aprendizado é realizado por meio do renomado Sistema Anglo de Ensino, que oferece um currículo voltado para as exigências do ENEM. Com o suporte da plataforma digital Plurall, os alunos têm acesso a atividades e recursos complementares, reforçando a preparação para o exame e vestibulares;",
      vtg04:
        "4 — Ambiente Familiar e Acolhedor: Ao longo do ano letivo, realizamos diversos eventos que proporcionam um ambiente acolhedor e familiar, promovendo o bem-estar e a integração dos alunos;",
      vtg05:
        "5 — Acompanhamento Pedagógico: Nossa equipe pedagógica está sempre disponível e presente para acompanhar de perto o desempenho acadêmico dos alunos. Os pais e responsáveis podem agendar reuniões para discutir o progresso dos alunos e garantir que estão no caminho certo para alcançar os melhores resultados no ENEM e nos vestibularese;",
      vtg06:
        "6 — Acesso Online: Os pais ou responsáveis têm acesso online a informações importantes, como boletins, ocorrências e questões financeiras, por meio do terminal web. Isso permite acompanhar a vida escolar do aluno e estar sempre a par dos acontecimentos dentro da escola;",
      vtg07:
        "7 — Plurall: Tecnologia e Plantão de Dúvidas Focado no ENEM: A plataforma Plurall oferece não apenas a realização de tarefas online, mas também um plantão de dúvidas com monitores virtuais, que estão preparados para ajudar os alunos a esclarecer dúvidas sobre conteúdos que caem no ENEM. Isso forma um banco de dados valioso para consultas e revisão de temas importantes;",
      vtg08: "Simulados ENEM: Durante o ano letivo, aplicamos simulados com o formato do ENEM, preparando os alunos de forma prática e eficiente para enfrentar o exame com confiança e alto desempenho;",
      vtg09:
        "9 — Uniforme Obrigatório: O uso do uniforme (camisa da escola) é obrigatório, promovendo igualdade entre os alunos e prevenindo comparações que possam levar ao bullying, favorecendo um ambiente de estudo focado e saudável;",
      vtg10:
        "10 - Aulas de Educação Física: As aulas de Educação Física são realizadas em período contrário ao das aulas regulares, proporcionando um equilíbrio entre o aprendizado acadêmico e as atividades físicas, importante para a saúde e bem-estar dos alunos.",
  },
  //3° Ensino Médio - Matutino
  {
    cod: 18,
    curso: "3° Ensino Médio - Matutino",
    categoria: 4,
    valorIntegral: 2394.54,
    docAluno:
      "Aluno: |- RG |- CPF |- Certidão de Nascimento ou Casamento |- Comprovante de residência |- 01 Foto 3x4 |- Carteirinha de Vacinação |- Histórico do Ens. Fundamental com GDAE ou Transferência |- Declaração de Transferência |- Histórico de Transferência |Obs: na ausência do histórico com gdae deverá entregar uma declaração de conclusão do ensino fundamental |- Declaração de Escolaridade.",
    docResp:
      "Responsáveis: |- RG|- CPF|- Comprovante de residência|- Declaração de Adimplência |- Obrigatório a compra do uniforme escolar no ato da matrícula",
    valorApostila: ApostilaMed3,
    idadeMatricula: "",
    TextoSegundaMensalidade: TextoSegundaMensalidade,
    SegundaMensalidade:
      "- Até o dia 1º R$ 1197,27 | - Até o dia 7º R$ 1257,13 | - Até o dia 25º R$ 1496,59",
    horaAula: "",
    desconto: descontMedioMat,

    vtgEixo: "ENSINO MÉDIO",
    vtgLetivo: "",
    vtgHorario:
      "Horário das Aulas | Manhã: 07h às 13h 20min.",
      vtgVantagens: "Por que escolher o Colégio Adélia para o Ensino Médio?",
      vtg01:
        "1 — Professores Qualificados e Foco no ENEM: Nossos professores são altamente capacitados e focados no desenvolvimento acadêmico dos alunos ao longo dos três anos do Ensino Médio. A preparação é especialmente voltada para o sucesso no ENEM e nos principais vestibulares, garantindo que os alunos tenham uma formação sólida e direcionada.;",
      vtg02:
        "2 — Infraestrutura Adequada para o ENEM: Contamos com salas de aula amplas e projetadas para um ambiente de estudo eficiente, ideal para o desenvolvimento de competências que serão cobradas no ENEM. Além disso, nossos corredores e horários de lanche são monitorados por inspetores, proporcionando um ambiente seguro e tranquilo para que os alunos possam se concentrar nos estudos.;",
      vtg03:
        "3 — Sistema Anglo de Ensino: O aprendizado é realizado por meio do renomado Sistema Anglo de Ensino, que oferece um currículo voltado para as exigências do ENEM. Com o suporte da plataforma digital Plurall, os alunos têm acesso a atividades e recursos complementares, reforçando a preparação para o exame e vestibulares;",
      vtg04:
        "4 — Ambiente Familiar e Acolhedor: Ao longo do ano letivo, realizamos diversos eventos que proporcionam um ambiente acolhedor e familiar, promovendo o bem-estar e a integração dos alunos;",
      vtg05:
        "5 — Acompanhamento Pedagógico: Nossa equipe pedagógica está sempre disponível e presente para acompanhar de perto o desempenho acadêmico dos alunos. Os pais e responsáveis podem agendar reuniões para discutir o progresso dos alunos e garantir que estão no caminho certo para alcançar os melhores resultados no ENEM e nos vestibularese;",
      vtg06:
        "6 — Acesso Online: Os pais ou responsáveis têm acesso online a informações importantes, como boletins, ocorrências e questões financeiras, por meio do terminal web. Isso permite acompanhar a vida escolar do aluno e estar sempre a par dos acontecimentos dentro da escola;",
      vtg07:
        "7 — Plurall: Tecnologia e Plantão de Dúvidas Focado no ENEM: A plataforma Plurall oferece não apenas a realização de tarefas online, mas também um plantão de dúvidas com monitores virtuais, que estão preparados para ajudar os alunos a esclarecer dúvidas sobre conteúdos que caem no ENEM. Isso forma um banco de dados valioso para consultas e revisão de temas importantes;",
      vtg08: "Simulados ENEM: Durante o ano letivo, aplicamos simulados com o formato do ENEM, preparando os alunos de forma prática e eficiente para enfrentar o exame com confiança e alto desempenho;",
      vtg09:
        "9 — Uniforme Obrigatório: O uso do uniforme (camisa da escola) é obrigatório, promovendo igualdade entre os alunos e prevenindo comparações que possam levar ao bullying, favorecendo um ambiente de estudo focado e saudável;",
      vtg10:
        "10 - Aulas de Educação Física: As aulas de Educação Física são realizadas em período contrário ao das aulas regulares, proporcionando um equilíbrio entre o aprendizado acadêmico e as atividades físicas, importante para a saúde e bem-estar dos alunos.",
  },
];
