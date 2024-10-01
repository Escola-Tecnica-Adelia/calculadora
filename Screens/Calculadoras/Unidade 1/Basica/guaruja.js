var descontInfantil = 54.113;
var recreInfantilmat = 28.463;
var recreInfantilvesp = 22.009;
var descontFund1s12 = 66.313;
var descontFund1s345 = 59.722;
var descontFund2 = 64.0346;
var descontMedioMat = 66.4375;
var descontMedioVes = 68.68;
var AntecipacaoRecreacao =
  "Antecipação da Anuidade: R$ 300,00 Pode ser dividido em até 4x de R$75,00 no Cartão de Crédito.";
var ApostilaInfantil =
  "Apostilas: R$ 1.218,00 Esse valor pode ser dividido em até 12x de R$ 101,50 no Cartão de Crédito. | Antecipação da Anuidade: R$ 552,00 Pode ser dividido em até 4x de R$138,00 no Cartão de Crédito.";
var ApostilaFund1 =
  "Apostilas:  R$ 2.244,00 Esse valor pode ser dividido em até 12x de R$ 187,00 no Cartão de Crédito. | Antecipação da Anuidade: R$ 552,00 Pode ser dividido em até 4x de R$138,00 no Cartão de Crédito.";
var ApostilaFund2 =
  "Apostilas:  R$ 2.613,00 Esse valor pode ser dividido em até 12x de R$ 217,75 no Cartão de Crédito. | Antecipação da Anuidade: R$ 552,00 Pode ser dividido em até 4x de R$138,00 no Cartão de Crédito.";
var ApostilaMed1e2 =
  "Apostilas: R$ 2.874,00 Esse valor pode ser dividido em até 12x de R$ 239,50 no Cartão de Crédito. | Antecipação da Anuidade: R$ 552,00 Pode ser dividido em até 4x de R$138,00 no Cartão de Crédito.";
var ApostilaMed3 =
  "Apostilas: R$ 3.180,00 Esse valor pode ser dividido em até 12x de R$ 265,00 no Cartão de Crédito. | Antecipação da Anuidade: R$ 552,00 Pode ser dividido em até 4x de R$138,00 no Cartão de Crédito.";
var ApostilaMed1vesp =
  "Apostilas: R$ 2.743,50 Esse valor pode ser dividido em até 12x de R$ 228,63 no Cartão de Crédito. | Antecipação da Anuidade: R$ 552,00 Pode ser dividido em até 4x de R$138,00 no Cartão de Crédito.";
var SegundaMensalidadeEducacaoInfantil = "- Até o dia 1º R$ 601,48 | - Até o dia 7º R$ 631,56| - Até o dia 25º R$ 751,86";
var SegundaMensalidadeFundamental1 = "- Até o dia 1º R$ 819,31 | - Até o dia 7º R$ 860,28| - Até o dia 25º R$ 1024,14";
var SegundaMensalidadeFundamental2 = "- Até o dia 1º R$ 1017,64 | - Até o dia 7º R$ 1068,53| - Até o dia 25º R$ 1272,05";
var SegundaMensalidadeEnsinoMedio = "- Até o dia 1º R$ 1197,27 | - Até o dia 7º R$ 1257,13| - Até o dia 25º R$ 1496,59";
var ApostilaMed4 = "";
var IdadeRecreacaoInfantil = "";
var IdadeRecreacaoInfantilVespertino = "";
var IdadeEducacaoInfantil =
    "Idade para matrícula: | Educação Infantil I - 2 anos, até 31 de março do ano letivo.. | Educação Infantil II - 3 anos, até 31 de março do ano letivo. | Educação Infantil III - 4 anos, até 31 de março do ano letivo. | Educação Infantil IV - 5 anos, até 31 de março do ano letivo.";
var cursos = [
  //Recreação Infantil Matutino
  {
    cod: 955,
    curso: "Recreação Infantil Matutino",
    categoria: 6,
    valorIntegral: 557.76,
    docAluno:
      "Aluno: |- RG |- CPF|- Certidão de Nascimento |- 01 Foto 3x4 |- Comprovante de residência |- Carteirinha de vacinação",
    docResp:
      "Responsáveis: |- RG|- CPF|- Comprovante de residência|- Obrigatório a compra do uniforme escolar no ato da matrícula",
    valorApostila: AntecipacaoRecreacao,
    idadeMatricula: IdadeRecreacaoInfantil,
    TextoSegundaMensalidade: "",
    SegundaMensalidade: "",
    horaAula: "",
    desconto: recreInfantilmat,

    vtgEixo: "Recreação Infantil",
    vtgLetivo: "",
    vtgHorario: "Horário das Aulas | Manhã: 07h às 13h | Tarde: 12h às 18h",
    vtgVantagens: "Quais as vantagens de estudar no Colégio Adélia:",
    vtg01:
      "1 - A Recreação Infantil contribui para integrar a criança ao meio social, desenvolver habilidades motoras, e estimular a curiosidade, autonomia, entre outras coisas;",
    vtg02:
      "2 - A aprendizagem é realizada através da ludicidade e do desenvolvimento de habilidades e competências;",
    vtg03:
      "3 - O processo lúdico é realizado por profissionais capacitados e conta com o apoio de auxiliares;",
    vtg04:
      "4 - A estrutura física é adaptada para o desenvolvimento das atividades recreativas do educando com materiais próprios para o desenvolvimento da psicomotricidade (coordenação motora grossa e fina), monitorado por cameras e inspetoria;",
    vtg05:
      "5 - Atividades como: hora da música, do conto, da arte, da culinária, do montar e do relaxar, piscina e parquinho contribuem significativamente para a socialização das crianças;",
    vtg06:
      "6 - Banheiros exclusivos e adaptados para a utilização dos alunos desse ciclo, que são sempre acompanhados por um responsável;",
    vtg07:
      "7 - Horário de lanche separado dos demais ciclos com a participação dos professores e auxiliares, aproveitando desse momento para desenvolver habilidades como limpeza, organização e convivência social;",
    vtg08:
      "8 - A visão de valores familiares proporciona um ambiente sadio além do aprendizado;",
    vtg09:
      "9 - A escola conta com uma equipe pedagógica sempre presente, tendo os pais à possibilidade de saber sobre o desenvolvimento (psicomotor, social e outros) do aluno com hora marcada previamente;",
    vtg10:
      "10 - O uso do uniforme é obrigatório para que não se tenha comparações entre as crianças.",
  },
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
    vtgHorario: "Horário das Aulas | Manhã: 07h às 13h | Tarde: 12h às 18h",
    vtgVantagens: "Quais as vantagens de estudar no Colégio Adélia:",
    vtg01:
      "1 - A Recreação Infantil contribui para integrar a criança ao meio social, desenvolver habilidades motoras, e estimular a curiosidade, autonomia, entre outras coisas;",
    vtg02:
      "2 - A aprendizagem é realizada através da ludicidade e do desenvolvimento de habilidades e competências;",
    vtg03:
      "3 - O processo lúdico é realizado por profissionais capacitados e conta com o apoio de auxiliares;",
    vtg04:
      "4 - A estrutura física é adaptada para o desenvolvimento das atividades recreativas do educando com materiais próprios para o desenvolvimento da psicomotricidade (coordenação motora grossa e fina), monitorado por cameras e inspetoria;",
    vtg05:
      "5 - Atividades como: hora da música, do conto, da arte, da culinária, do montar e do relaxar, piscina e parquinho contribuem significativamente para a socialização das crianças;",
    vtg06:
      "6 - Banheiros exclusivos e adaptados para a utilização dos alunos desse ciclo, que são sempre acompanhados por um responsável;",
    vtg07:
      "7 - Horário de lanche separado dos demais ciclos com a participação dos professores e auxiliares, aproveitando desse momento para desenvolver habilidades como limpeza, organização e convivência social;",
    vtg08:
      "8 - A visão de valores familiares proporciona um ambiente sadio além do aprendizado;",
    vtg09:
      "9 - A escola conta com uma equipe pedagógica sempre presente, tendo os pais à possibilidade de saber sobre o desenvolvimento (psicomotor, social e outros) do aluno com hora marcada previamente;",
    vtg10:
      "10 - O uso do uniforme é obrigatório para que não se tenha comparações entre as crianças.",
  },
  //Infantil - Vespertino
  {
    cod: 6,
    curso: "Infantil - Vespertino",
    categoria: 1,
    valorIntegral: 1202.97,
    docAluno:
      "Aluno: |- RG |- CPF|- Certidão de Nascimento |- 01 Foto 3x4 |- Comprovante de residência |- Carteirinha de vacinação",
    docResp:
      "Responsáveis: |- RG|- CPF|- Comprovante de residência|- Declaração de Adimplência |- Obrigatório a compra do uniforme escolar no ato da matrícula",
    valorApostila: ApostilaInfantil,
    idadeMatricula: IdadeEducacaoInfantil,
    TextoSegundaMensalidade:
      "Este documento e seus valores são válidos por 3 (três) dias úteis contando da data que foi impresso, caso ultrapasse este prazo a proposta perderá vigência e os valores praticados pela escola seguirão no modelo abaixo:",
    SegundaMensalidade: SegundaMensalidadeEducacaoInfantil,
    horaAula: "",
    desconto: descontInfantil,

    vtgEixo: "EDUCAÇÃO INFANTIL",
    vtgLetivo: "",
    vtgHorario: "Horário das Aulas | Tarde: 12h e 40min às 16h e 40min.",
    vtgVantagens: "Quais as vantagens de estudar no Colégio Adélia: ",
    vtg01:
      "1 - Conta com o Sistema Anglo de Ensino, somando o lúdico ao aprendizado pedagógico;",
    vtg02:
      "2 — A pré-alfabetização trabalha com a ludicidade e o desenvolvimento de habilidades psicomotoras e socioemocionais;",
    vtg03:
      "3 — O processo de ensino-aprendizagem é realizado por profissionais capacitados e conta com o apoio de auxiliares;",
    vtg04:
      "4 — A estrutura física é adaptada para o desenvolvimento do ensino-aprendizagem do educando com materiais próprios para o desenvolvimento da psicomotricidade (coordenação motora grossa e fina), contando com atividades de música, informática, culinária e atividade física e recreação na piscina, com monitoramente de inspetoria e cameras;",
    vtg05:
      "5 — Os banheiros são exclusivos para a utilização dos alunos desse ciclo, que são sempre acompanhados por um responsável;",
    vtg06:
      "6 - Horário de lanche separado dos demais ciclos com a participação dos professores e auxiliares, aproveitando desse momento para desenvolver habilidades como limpeza, organização e convivência social;",
    vtg07:
      "7 — A visão de valores familiares proporciona um ambiente sadio além do aprendizado;",
    vtg08:
      "8 — A escola conta com uma equipe pedagógica sempre presente, tendo os pais à possibilidade de saber a vida acadêmica do aluno com hora marcada previamente;",
    vtg09:
      "9 — O uso do uniforme é obrigatório para que não se tenha comparações entre os alunos, evitando inclusive o bullying;",
    vtg10:
      "10 — O boletim (relatório bimestral) dos alunos da Educação Infantil, informa aos responsáveis o desenvolvimento psicopedagógico.",
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
    TextoSegundaMensalidade:
      "Este documento e seus valores são válidos por 3 (três) dias úteis contando da data que foi impresso, caso ultrapasse este prazo a proposta perderá vigência e os valores praticados pela escola seguirão no modelo abaixo:",
    SegundaMensalidade: SegundaMensalidadeFundamental1,
    horaAula: "",
    desconto: descontFund1s12,

    vtgEixo: "ENSINO FUNDAMENTAL I ",
    vtgLetivo: "",
    vtgHorario:
      "Horário das Aulas | Manhã: 07h às 11h 50min. | Tarde: 12H e 40min às 17h e 30min.",
    vtgVantagens: "Quais as vantagens de estudar no Colégio Adélia: ",
    vtg01:
      "1 — Professores capacitados para o aprendizado dos alunos e no desenvolvimento curricular nos cinco anos do curso;",
    vtg02:
      "2 — Disciplinas além do currículo normal a saber Formação Socioemocional, Inglês, e Laboratório de Informática; Para ministrar essas disciplinas o aluno passa mais tempo na escola, portanto a carga horária é maior que nas outras escolas;",
    vtg03:
      "3 - Salas amplas próprias ao ambiente escolar, corredores monitorados pelos inspetores e cameras, horário de lanche escalonado sempre monitorado pela professora e auxiliar;",
    vtg04:
      "4 — Todos os professores de 1º ao 5º ano trabalham com auxiliares que dão suporte no aprendizado e na disciplina dos alunos;",
    vtg05:
      "5 – O LÍDER EM MIM: Programa de alto desempenho socioemocional, baseados em hábitos e valores. Com intuito de desenvolver nos alunos habilidades e competências diferenciadas como: responsabilidade, organização, priorização, proatividade, comunicação e etc. Somadas ao processo de ensino – aprendizagem;",
    vtg06:
      "6 — Todo o aprendizado do curso é feito através do SISTEMA ANGLO DE ENSINO com apoio a plataforma PLURALL;",
    vtg07:
      "7 — Ao decorrer do ano letivo realizamos eventos proporcionando sempre um ambiente tranquilo e familiar;",
    vtg08:
      "8 — A escola conta com uma equipe pedagógica sempre presente, tendo os pais à possibilidade de saber a vida acadêmica do aluno com hora marcada previamente;",
    vtg09:
      "9 — O uso do uniforme é obrigatório para que não se tenha comparações entre os alunos, evitando inclusive o bullying;",
    vtg10:
      "10 — As aulas de Educação Física, são realizadas dentro do próprio período de aula",
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
    TextoSegundaMensalidade:
      "Este documento e seus valores são válidos por 3 (três) dias úteis contando da data que foi impresso, caso ultrapasse este prazo a proposta perderá vigência e os valores praticados pela escola seguirão no modelo abaixo:",
    SegundaMensalidade: SegundaMensalidadeFundamental1,
    horaAula: "",
    desconto: descontFund1s12,

    vtgEixo: "ENSINO FUNDAMENTAL I ",
    vtgLetivo: "",
    vtgHorario:
      "Horário das Aulas | Manhã: 07h às 11h 50min. | Tarde: 12h e 40min às 17h e 30min.",
    vtgVantagens: "Quais as vantagens de estudar no Colégio Adélia: ",
    vtg01:
      "1 — Professores capacitados para o aprendizado dos alunos e no desenvolvimento curricular nos cinco anos do curso;",
    vtg02:
      "2 — Disciplinas além do currículo normal a saber Formação Socioemocional, Inglês, e Laboratório de Informática; Para ministrar essas disciplinas o aluno passa mais tempo na escola, portanto a carga horária é maior que nas outras escolas;",
    vtg03:
      "3 - Salas amplas próprias ao ambiente escolar, corredores monitorados pelos inspetores e cameras, horário de lanche escalonado sempre monitorado pela professora e auxiliar;",
    vtg04:
      "4 — Todos os professores de 1º ao 5º ano trabalham com auxiliares que dão suporte no aprendizado e na disciplina dos alunos;",
    vtg05:
      "5 – O LÍDER EM MIM: Programa de alto desempenho socioemocional, baseados em hábitos e valores. Com intuito de desenvolver nos alunos habilidades e competências diferenciadas como: responsabilidade, organização, priorização, proatividade, comunicação e etc. Somadas ao processo de ensino – aprendizagem;",
    vtg06:
      "6 — Todo o aprendizado do curso é feito através do SISTEMA ANGLO DE ENSINO com apoio a plataforma PLURALL;",
    vtg07:
      "7 — Ao decorrer do ano letivo realizamos eventos proporcionando sempre um ambiente tranquilo e familiar;",
    vtg08:
      "8 — A escola conta com uma equipe pedagógica sempre presente, tendo os pais à possibilidade de saber a vida acadêmica do aluno com hora marcada previamente;",
    vtg09:
      "9 — O uso do uniforme é obrigatório para que não se tenha comparações entre os alunos, evitando inclusive o bullying;",
    vtg10:
      "10 — As aulas de Educação Física, são realizadas dentro do próprio período de aula",
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
    TextoSegundaMensalidade:
      "Este documento e seus valores são válidos por 3 (três) dias úteis contando da data que foi impresso, caso ultrapasse este prazo a proposta perderá vigência e os valores praticados pela escola seguirão no modelo abaixo:",
    SegundaMensalidade: SegundaMensalidadeFundamental1,
    horaAula: "",
    desconto: descontFund1s345,

    vtgEixo: "ENSINO FUNDAMENTAL I ",
    vtgLetivo: "",
    vtgHorario:
      "Horário das Aulas | Manhã: 07h às 11h 50min. | Tarde: 12h e 40min às 17h e 30min.",
    vtgVantagens: "Quais as vantagens de estudar no Colégio Adélia: ",
    vtg01:
      "1 — Professores capacitados para o aprendizado dos alunos e no desenvolvimento curricular nos cinco anos do curso;",
    vtg02:
      "2 — Disciplinas além do currículo normal a saber Formação Socioemocional, Inglês, e Laboratório de Informática; Para ministrar essas disciplinas o aluno passa mais tempo na escola, portanto a carga horária é maior que nas outras escolas;",
    vtg03:
      "3 - Salas amplas próprias ao ambiente escolar, corredores monitorados pelos inspetores e cameras, horário de lanche escalonado sempre monitorado pela professora e auxiliar;",
    vtg04:
      "4 — Todos os professores de 1º ao 5º ano trabalham com auxiliares que dão suporte no aprendizado e na disciplina dos alunos;",
    vtg05:
      "5 – O LÍDER EM MIM: Programa de alto desempenho socioemocional, baseados em hábitos e valores. Com intuito de desenvolver nos alunos habilidades e competências diferenciadas como: responsabilidade, organização, priorização, proatividade, comunicação e etc. Somadas ao processo de ensino – aprendizagem;",
    vtg06:
      "6 — Todo o aprendizado do curso é feito através do SISTEMA ANGLO DE ENSINO com apoio a plataforma PLURALL;",
    vtg07:
      "7 — Ao decorrer do ano letivo realizamos eventos proporcionando sempre um ambiente tranquilo e familiar;",
    vtg08:
      "8 — A escola conta com uma equipe pedagógica sempre presente, tendo os pais à possibilidade de saber a vida acadêmica do aluno com hora marcada previamente;",
    vtg09:
      "9 — O uso do uniforme é obrigatório para que não se tenha comparações entre os alunos, evitando inclusive o bullying;",
    vtg10:
      "10 — As aulas de Educação Física, são realizadas dentro do próprio período de aula",
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
    TextoSegundaMensalidade:
      "Este documento e seus valores são válidos por 3 (três) dias úteis contando da data que foi impresso, caso ultrapasse este prazo a proposta perderá vigência e os valores praticados pela escola seguirão no modelo abaixo:",
    SegundaMensalidade:
      "- Até o dia 1º R$ 731,53 | - Até o dia 7º R$ 768,10 | - Até o dia 25º R$ 914,41",
    horaAula: "",
    desconto: descontFund1s345,

    vtgEixo: "ENSINO FUNDAMENTAL I ",
    vtgLetivo: "",
    vtgHorario:
      "Horário das Aulas | Manhã: 07h às 11h 50min. | Tarde: 12h e 40min às 17h e 30min.",
    vtgVantagens: "Quais as vantagens de estudar no Colégio Adélia: ",
    vtg01:
      "1 — Professores capacitados para o aprendizado dos alunos e no desenvolvimento curricular nos cinco anos do curso;",
    vtg02:
      "2 — Disciplinas além do currículo normal a saber Formação Socioemocional, Inglês, e Laboratório de Informática; Para ministrar essas disciplinas o aluno passa mais tempo na escola, portanto a carga horária é maior que nas outras escolas;",
    vtg03:
      "3 - Salas amplas próprias ao ambiente escolar, corredores monitorados pelos inspetores e cameras, horário de lanche escalonado sempre monitorado pela professora e auxiliar;",
    vtg04:
      "4 — Todos os professores de 1º ao 5º ano trabalham com auxiliares que dão suporte no aprendizado e na disciplina dos alunos;",
    vtg05:
      "5 – O LÍDER EM MIM: Programa de alto desempenho socioemocional, baseados em hábitos e valores. Com intuito de desenvolver nos alunos habilidades e competências diferenciadas como: responsabilidade, organização, priorização, proatividade, comunicação e etc. Somadas ao processo de ensino – aprendizagem;",
    vtg06:
      "6 — Todo o aprendizado do curso é feito através do SISTEMA ANGLO DE ENSINO com apoio a plataforma PLURALL;",
    vtg07:
      "7 — Ao decorrer do ano letivo realizamos eventos proporcionando sempre um ambiente tranquilo e familiar;",
    vtg08:
      "8 — A escola conta com uma equipe pedagógica sempre presente, tendo os pais à possibilidade de saber a vida acadêmica do aluno com hora marcada previamente;",
    vtg09:
      "9 — O uso do uniforme é obrigatório para que não se tenha comparações entre os alunos, evitando inclusive o bullying;",
    vtg10:
      "10 — As aulas de Educação Física, são realizadas dentro do próprio período de aula",
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
    TextoSegundaMensalidade:
      "Este documento e seus valores são válidos por 3 (três) dias úteis contando da data que foi impresso, caso ultrapasse este prazo a proposta perderá vigência e os valores praticados pela escola seguirão no modelo abaixo:",
    SegundaMensalidade:
      "- Até o dia 1º R$ 731,53 | - Até o dia 7º R$ 768,10 | - Até o dia 25º R$ 914,41",
    horaAula: "",
    desconto: descontFund1s345,

    vtgEixo: "ENSINO FUNDAMENTAL I ",
    vtgLetivo: "",
    vtgHorario:
      "Horário das Aulas | Manhã: 07h às 11h 50min. | Tarde: 12h e 40min às 17h e 30min.",
    vtgVantagens: "Quais as vantagens de estudar no Colégio Adélia: ",
    vtg01:
      "1 — Professores capacitados para o aprendizado dos alunos e no desenvolvimento curricular nos cinco anos do curso;",
    vtg02:
      "2 — Disciplinas além do currículo normal a saber Formação Socioemocional, Inglês, e Laboratório de Informática; Para ministrar essas disciplinas o aluno passa mais tempo na escola, portanto a carga horária é maior que nas outras escolas;",
    vtg03:
      "3 - Salas amplas próprias ao ambiente escolar, corredores monitorados pelos inspetores e cameras, horário de lanche escalonado sempre monitorado pela professora e auxiliar;",
    vtg04:
      "4 — Todos os professores de 1º ao 5º ano trabalham com auxiliares que dão suporte no aprendizado e na disciplina dos alunos;",
    vtg05:
      "5 – O LÍDER EM MIM: Programa de alto desempenho socioemocional, baseados em hábitos e valores. Com intuito de desenvolver nos alunos habilidades e competências diferenciadas como: responsabilidade, organização, priorização, proatividade, comunicação e etc. Somadas ao processo de ensino – aprendizagem;",
    vtg06:
      "6 — Todo o aprendizado do curso é feito através do SISTEMA ANGLO DE ENSINO com apoio a plataforma PLURALL;",
    vtg07:
      "7 — Ao decorrer do ano letivo realizamos eventos proporcionando sempre um ambiente tranquilo e familiar;",
    vtg08:
      "8 — A escola conta com uma equipe pedagógica sempre presente, tendo os pais à possibilidade de saber a vida acadêmica do aluno com hora marcada previamente;",
    vtg09:
      "9 — O uso do uniforme é obrigatório para que não se tenha comparações entre os alunos, evitando inclusive o bullying;",
    vtg10:
      "10 — As aulas de Educação Física, são realizadas dentro do próprio período de aula",
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
    TextoSegundaMensalidade:
      "Este documento e seus valores são válidos por 3 (três) dias úteis contando da data que foi impresso, caso ultrapasse este prazo a proposta perderá vigência e os valores praticados pela escola seguirão no modelo abaixo:",
    SegundaMensalidade:
      "- Até o dia 1º R$ 908,61 | - Até o dia 7º R$ 954,04 | - Até o dia 25º R$ 1.135,76",
    horaAula: "",
    desconto: descontFund2,

    vtgEixo: "ENSINO FUNDAMENTAL II",
    vtgLetivo: "",
    vtgHorario:
      "Horário das Aulas | Manhã: 07h às 12h 20min. | Tarde: 12h e 40min às 18h.",
    vtgVantagens: "Quais as vantagens de estudar no Colégio Adélia: ",
    vtg01:
      "1 — Professores capacitados para o aprendizado dos alunos e no desenvolvimento curricular nos quatro anos do curso;",
    vtg02:
      "2 — Disciplinas além do currículo normal a saber: Inglês, Laboratórios de Física, Química, Biologia e Informática. Ao ter contato com essas disciplinas desde cedo, conhecendo equipamentos e realizando experiências que fazem toda diferença no despertar da vida acadêmica das disciplinas futuras, nossos alunos terão uma carga horária maior que nas outras escolas;",
    vtg03:
      "3 — Salas amplas próprias ao ambiente escolar, horário de lanche escalonado e corredores sempre monitorados pelos inspetores;",
    vtg04:
      "4 — Todo o aprendizado do curso é feito através do SISTEMA ANGLO DE ENSINO com apoio a plataforma PLURALL;",
    vtg05:
      "5 — Ao decorrer do ano letivo realizamos eventos proporcionando sempre um ambiente tranquilo e familiar;",
    vtg06:
      "6 — A escola conta com uma equipe pedagógica sempre presente, tendo os responsáveis à possibilidade de saber a vida acadêmica do aluno com hora marcada previamente, os atendimentos podem ocorrer de forma presencial e online, de acordo com a disponibilidade os responsáveis;",
    vtg07:
      "7 — Os responsáveis podem visualizar ON-LINE ocorrências, boletim e até mesmo o financeiro através do terminal WEB, assim como acompanhar a vida escolar do aluno ou importantes acontecimentos dentro da escola;",
    vtg08:
      "8 — Plurall: Inovação tecnológica para realização de tarefas por aplicativo de celular ou pela Web. Além das tarefas, disponibiliza plantão de dúvidas, com monitores virtuais, para responder toda e qualquer dúvida dos alunos formando um grande banco de dados para consulta;",
    vtg09:
      "9 — O uso do uniforme é obrigatório para que não se tenha comparações entre os alunos, evitando inclusive o bullying;",
    vtg10:
      "10 — As aulas de Educação Física, são realizadas em períodos contrário a matrícula realizada.",
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
    TextoSegundaMensalidade:
      "Este documento e seus valores são válidos por 3 (três) dias úteis contando da data que foi impresso, caso ultrapasse este prazo a proposta perderá vigência e os valores praticados pela escola seguirão no modelo abaixo:",
    SegundaMensalidade:
      "- Até o dia 1º R$ 908,61 | - Até o dia 7º R$ 954,04 | - Até o dia 25º R$ 1.135,76",
    horaAula: "",
    desconto: descontFund2,

    vtgEixo: "ENSINO FUNDAMENTAL II",
    vtgLetivo: "",
    vtgHorario:
      "Horário das Aulas | Manhã: 07h às 12h 20min. | Tarde: 12h e 40min às 18h.",
    vtgVantagens: "Quais as vantagens de estudar no Colégio Adélia: ",
    vtg01:
      "1 — Professores capacitados para o aprendizado dos alunos e no desenvolvimento curricular nos quatro anos do curso;",
    vtg02:
      "2 — Disciplinas além do currículo normal a saber: Inglês, Laboratórios de Física, Química, Biologia e Informática. Ao ter contato com essas disciplinas desde cedo, conhecendo equipamentos e realizando experiências que fazem toda diferença no despertar da vida acadêmica das disciplinas futuras, nossos alunos terão uma carga horária maior que nas outras escolas;",
    vtg03:
      "3 — Salas amplas próprias ao ambiente escolar, horário de lanche escalonado e corredores sempre monitorados pelos inspetores;",
    vtg04:
      "4 — Todo o aprendizado do curso é feito através do SISTEMA ANGLO DE ENSINO com apoio a plataforma PLURALL;",
    vtg05:
      "5 — Ao decorrer do ano letivo realizamos eventos proporcionando sempre um ambiente tranquilo e familiar;",
    vtg06:
      "6 — A escola conta com uma equipe pedagógica sempre presente, tendo os responsáveis à possibilidade de saber a vida acadêmica do aluno com hora marcada previamente, os atendimentos podem ocorrer de forma presencial e online, de acordo com a disponibilidade os responsáveis;",
    vtg07:
      "7 — Os responsáveis podem visualizar ON-LINE ocorrências, boletim e até mesmo o financeiro através do terminal WEB, assim como acompanhar a vida escolar do aluno ou importantes acontecimentos dentro da escola;",
    vtg08:
      "8 — Plurall: Inovação tecnológica para realização de tarefas por aplicativo de celular ou pela Web. Além das tarefas, disponibiliza plantão de dúvidas, com monitores virtuais, para responder toda e qualquer dúvida dos alunos formando um grande banco de dados para consulta;",
    vtg09:
      "9 — O uso do uniforme é obrigatório para que não se tenha comparações entre os alunos, evitando inclusive o bullying;",
    vtg10:
      "10 — As aulas de Educação Física, são realizadas em períodos contrário a matrícula realizada.",
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
    TextoSegundaMensalidade:
      "Este documento e seus valores são válidos por 3 (três) dias úteis contando da data que foi impresso, caso ultrapasse este prazo a proposta perderá vigência e os valores praticados pela escola seguirão no modelo abaixo:",
    SegundaMensalidade:
      "- Até o dia 1º R$ 908,61 | - Até o dia 7º R$ 954,04 | - Até o dia 25º R$ 1.135,76",
    horaAula: "",
    desconto: descontFund2,

    vtgEixo: "ENSINO FUNDAMENTAL II",
    vtgLetivo: "",
    vtgHorario:
      "Horário das Aulas | Manhã: 07h às 12h 20min. | Tarde: 12h e 40min às 18h.",
    vtgVantagens: "Quais as vantagens de estudar no Colégio Adélia: ",
    vtg01:
      "1 — Professores capacitados para o aprendizado dos alunos e no desenvolvimento curricular nos quatro anos do curso;",
    vtg02:
      "2 — Disciplinas além do currículo normal a saber: Inglês, Laboratórios de Física, Química, Biologia e Informática. Ao ter contato com essas disciplinas desde cedo, conhecendo equipamentos e realizando experiências que fazem toda diferença no despertar da vida acadêmica das disciplinas futuras, nossos alunos terão uma carga horária maior que nas outras escolas;",
    vtg03:
      "3 — Salas amplas próprias ao ambiente escolar, horário de lanche escalonado e corredores sempre monitorados pelos inspetores;",
    vtg04:
      "4 — Todo o aprendizado do curso é feito através do SISTEMA ANGLO DE ENSINO com apoio a plataforma PLURALL;",
    vtg05:
      "5 — Ao decorrer do ano letivo realizamos eventos proporcionando sempre um ambiente tranquilo e familiar;",
    vtg06:
      "6 — A escola conta com uma equipe pedagógica sempre presente, tendo os responsáveis à possibilidade de saber a vida acadêmica do aluno com hora marcada previamente, os atendimentos podem ocorrer de forma presencial e online, de acordo com a disponibilidade os responsáveis;",
    vtg07:
      "7 — Os responsáveis podem visualizar ON-LINE ocorrências, boletim e até mesmo o financeiro através do terminal WEB, assim como acompanhar a vida escolar do aluno ou importantes acontecimentos dentro da escola;",
    vtg08:
      "8 — Plurall: Inovação tecnológica para realização de tarefas por aplicativo de celular ou pela Web. Além das tarefas, disponibiliza plantão de dúvidas, com monitores virtuais, para responder toda e qualquer dúvida dos alunos formando um grande banco de dados para consulta;",
    vtg09:
      "9 — O uso do uniforme é obrigatório para que não se tenha comparações entre os alunos, evitando inclusive o bullying;",
    vtg10:
      "10 — As aulas de Educação Física, são realizadas em períodos contrário a matrícula realizada.",
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
    TextoSegundaMensalidade:
      "Este documento e seus valores são válidos por 3 (três) dias úteis contando da data que foi impresso, caso ultrapasse este prazo a proposta perderá vigência e os valores praticados pela escola seguirão no modelo abaixo:",
    SegundaMensalidade:
      "- Até o dia 1º R$ 908,61 | - Até o dia 7º R$ 954,04 | - Até o dia 25º R$ 1.135,76",
    horaAula: "",
    desconto: descontFund2,

    vtgEixo: "ENSINO FUNDAMENTAL II",
    vtgLetivo: "",
    vtgHorario:
      "Horário das Aulas | Manhã: 07h às 12h 20min. | Tarde: 12h e 40min às 18h.",
    vtgVantagens: "Quais as vantagens de estudar no Colégio Adélia: ",
    vtg01:
      "1 — Professores capacitados para o aprendizado dos alunos e no desenvolvimento curricular nos quatro anos do curso;",
    vtg02:
      "2 — Disciplinas além do currículo normal a saber: Inglês, Laboratórios de Física, Química, Biologia e Informática. Ao ter contato com essas disciplinas desde cedo, conhecendo equipamentos e realizando experiências que fazem toda diferença no despertar da vida acadêmica das disciplinas futuras, nossos alunos terão uma carga horária maior que nas outras escolas;",
    vtg03:
      "3 — Salas amplas próprias ao ambiente escolar, horário de lanche escalonado e corredores sempre monitorados pelos inspetores;",
    vtg04:
      "4 — Todo o aprendizado do curso é feito através do SISTEMA ANGLO DE ENSINO com apoio a plataforma PLURALL;",
    vtg05:
      "5 — Ao decorrer do ano letivo realizamos eventos proporcionando sempre um ambiente tranquilo e familiar;",
    vtg06:
      "6 — A escola conta com uma equipe pedagógica sempre presente, tendo os responsáveis à possibilidade de saber a vida acadêmica do aluno com hora marcada previamente, os atendimentos podem ocorrer de forma presencial e online, de acordo com a disponibilidade os responsáveis;",
    vtg07:
      "7 — Os responsáveis podem visualizar ON-LINE ocorrências, boletim e até mesmo o financeiro através do terminal WEB, assim como acompanhar a vida escolar do aluno ou importantes acontecimentos dentro da escola;",
    vtg08:
      "8 — Plurall: Inovação tecnológica para realização de tarefas por aplicativo de celular ou pela Web. Além das tarefas, disponibiliza plantão de dúvidas, com monitores virtuais, para responder toda e qualquer dúvida dos alunos formando um grande banco de dados para consulta;",
    vtg09:
      "9 — O uso do uniforme é obrigatório para que não se tenha comparações entre os alunos, evitando inclusive o bullying;",
    vtg10:
      "10 — As aulas de Educação Física, são realizadas em períodos contrário a matrícula realizada.",
  },
  //1° Ensino Médio - Matutino
  {
    cod: 16,
    curso: "1° Ensino Médio - Matutino",
    categoria: 4,
    valorIntegral: 2395.54,
    docAluno:
      "Aluno: |- RG |- CPF |- Certidão de Nascimento ou Casamento |- Comprovante de residência |- 01 Foto 3x4 |- Carteirinha de Vacinação |- Histórico do Ens. Fundamental com GDAE ou Transferência |- Declaração de Transferência |- Histórico de Transferência |Obs: na ausência do histórico com gdae deverá entregar uma declaração de conclusão do ensino fundamental |- Declaração de Escolaridade.",
    docResp:
      "Responsáveis: |- RG|- CPF|- Comprovante de residência|- Declaração de Adimplência |- Obrigatório a compra do uniforme escolar no ato da matrícula",
    valorApostila: ApostilaMed1e2,
    idadeMatricula: "",
    TextoSegundaMensalidade:
      "Este documento e seus valores são válidos por 3 (três) dias úteis contando da data que foi impresso.",
    SegundaMensalidade: "",
    horaAula: "",
    desconto: descontMedioMat,

    vtgEixo: "ENSINO MÉDIO",
    vtgLetivo: "",
    vtgHorario:
      "Horário das Aulas | Manhã: 07h às 12h e 20min | Tarde: 12h e 40min às 18h.",
    vtgVantagens: "Quais as vantagens de estudar no Colégio Adélia: ",
    vtg01:
      "1 — Professores capacitados para o aprendizado dos alunos e no desenvolvimento curricular nos três anos do curso;",
    vtg02:
      "2 — Salas amplas próprias ao ambiente escolar, corredores e horário de lanche sempre monitorados pelos inspetores;",
    vtg03:
      "3 — Todo o aprendizado do curso é feito através do SISTEMA ANGLO DE ENSINO com apoio a plataforma PLURALL;",
    vtg04:
      "4 — Ao decorrer do ano letivo realizamos eventos proporcionando sempre um ambiente tranquilo e familiar;",
    vtg05:
      "5 — A escola conta com uma equipe pedagógica sempre presente, tendo os pais à possibilidade de saber a vida acadêmica do aluno com hora marcada previamente;",
    vtg06:
      "6 — Os pais ou responsáveis podem visualizar ON-LINE ocorrências, boletim e até mesmo o financeiro através do terminal WEB, acompanhar a vida escolar do aluno ou importantes acontecimentos dentro da escola;",
    vtg07:
      "7 — Plurall: Inovação tecnológica para realização de tarefas por aplicativo de celular ou pela Web. Além das tarefas, disponibiliza plantão de dúvidas, com monitores virtuais, para responder toda e qualquer dúvida dos alunos formando um grande banco de dados para consulta;",
    vtg08: "8 — Aplicações de SIMULADOS PROVA ENEM (durante o ano letivo);",
    vtg09:
      "9 — O uso do uniforme (camisa da escola) é obrigatório para que não se tenha comparações entre os alunos, evitando inclusive o bullying;",
    vtg10:
      "10 - As aulas de Educação Física, são realizadas em períodos contrário a matrícula.",
  },
  //2° Ensino Médio - Matutino
  {
    cod: 17,
    curso: "2° Ensino Médio - Matutino",
    categoria: 4,
    valorIntegral: 2395.54,
    docAluno:
      "Aluno: |- RG |- CPF |- Certidão de Nascimento ou Casamento |- Comprovante de residência |- 01 Foto 3x4 |- Carteirinha de Vacinação |- Histórico do Ens. Fundamental com GDAE ou TransferênciaE |- Declaração de Transferência |- Histórico de Transferência |Obs: na ausência do histórico com gdae deverá entregar uma declaração de conclusão do ensino fundamental |- Declaração de Escolaridade.",
    docResp:
      "Responsáveis: |- RG|- CPF|- Comprovante de residência|- Declaração de Adimplência |- Obrigatório a compra do uniforme escolar no ato da matrícula",
    valorApostila: ApostilaMed1e2,
    idadeMatricula: "",
    TextoSegundaMensalidade:
      "Este documento e seus valores são válidos por 3 (três) dias úteis contando da data que foi impresso, caso ultrapasse este prazo a proposta perderá vigência e os valores praticados pela escola seguirão no modelo abaixo:",
    SegundaMensalidade:
      "- Até o dia 1º R$ 1.069,00 | - Até o dia 7º R$ 1.122,44 | - Até o dia 25º R$ 1.336,24",
    horaAula: "",
    desconto: descontMedioMat,

    vtgEixo: "ENSINO MÉDIO",
    vtgLetivo: "",
    vtgHorario:
      " Horário das Aulas | Manhã: 07h às 12h e 20min.",
    vtgVantagens: "Quais as vantagens de estudar no Colégio Adélia: ",
    vtg01:
      "1 — Professores capacitados para o aprendizado dos alunos e no desenvolvimento curricular nos três anos do curso;",
    vtg02:
      "2 — Salas amplas próprias ao ambiente escolar, corredores e horário de lanche sempre monitorados pelos inspetores;",
    vtg03:
      "3 — Todo o aprendizado do curso é feito através do SISTEMA ANGLO DE ENSINO com apoio a plataforma PLURALL;",
    vtg04:
      "4 — Ao decorrer do ano letivo realizamos eventos proporcionando sempre um ambiente tranquilo e familiar;",
    vtg05:
      "5 — A escola conta com uma equipe pedagógica sempre presente, tendo os pais à possibilidade de saber a vida acadêmica do aluno com hora marcada previamente;",
    vtg06:
      "6 — Os pais ou responsáveis podem visualizar ON-LINE ocorrências, boletim e até mesmo o financeiro através do terminal WEB, acompanhar a vida escolar do aluno ou importantes acontecimentos dentro da escola;",
    vtg07:
      "7 — Plurall: Inovação tecnológica para realização de tarefas por aplicativo de celular ou pela Web. Além das tarefas, disponibiliza plantão de dúvidas, com monitores virtuais, para responder toda e qualquer dúvida dos alunos formando um grande banco de dados para consulta;",
    vtg08: "8 — Aplicações de SIMULADOS PROVA ENEM (durante o ano letivo);",
    vtg09:
      "9 — O uso do uniforme (camisa da escola) é obrigatório para que não se tenha comparações entre os alunos, evitando inclusive o bullying;",
    vtg10:
      "10 - As aulas de Educação Física, são realizadas em períodos contrário a matrícula.",
  },
  //3° Ensino Médio - Matutino
  {
    cod: 18,
    curso: "3° Ensino Médio - Matutino",
    categoria: 4,
    valorIntegral: 2395.54,
    docAluno:
      "Aluno: |- RG |- CPF |- Certidão de Nascimento ou Casamento |- Comprovante de residência |- 01 Foto 3x4 |- Carteirinha de Vacinação |- Histórico do Ens. Fundamental com GDAE ou TransferênciaE |- Declaração de Transferência |- Histórico de Transferência |Obs: na ausência do histórico com gdae deverá entregar uma declaração de conclusão do ensino fundamental |- Declaração de Escolaridade.",
    docResp:
      "Responsáveis: |- RG|- CPF|- Comprovante de residência|- Declaração de Adimplência |- Obrigatório a compra do uniforme escolar no ato da matrícula",
    valorApostila: ApostilaMed3,
    idadeMatricula: "",
    TextoSegundaMensalidade:
      "Este documento e seus valores são válidos por 3 (três) dias úteis contando da data que foi impresso, caso ultrapasse este prazo a proposta perderá vigência e os valores praticados pela escola seguirão no modelo abaixo:",
    SegundaMensalidade:
      "- Até o dia 1º R$ 1.069,00 | - Até o dia 7º R$ 1.122,44 | - Até o dia 25º R$ 1.336,24",
    horaAula: "",
    desconto: descontMedioMat,

    vtgEixo: "ENSINO MÉDIO",
    vtgLetivo: "",
    vtgHorario:
      "Horário das Aulas | Manhã: 07h às 13h 20min.",
    vtgVantagens: "Quais as vantagens de estudar no Colégio Adélia: ",
    vtg01:
      "1 — Professores capacitados para o aprendizado dos alunos e no desenvolvimento curricular nos três anos do curso;",
    vtg02:
      "2 — Salas amplas próprias ao ambiente escolar, corredores e horário de lanche sempre monitorados pelos inspetores;",
    vtg03:
      "3 — Todo o aprendizado do curso é feito através do SISTEMA ANGLO DE ENSINO com apoio a plataforma PLURALL;",
    vtg04:
      "4 — Ao decorrer do ano letivo realizamos eventos proporcionando sempre um ambiente tranquilo e familiar;",
    vtg05:
      "5 — A escola conta com uma equipe pedagógica sempre presente, tendo os pais à possibilidade de saber a vida acadêmica do aluno com hora marcada previamente;",
    vtg06:
      "6 — Os pais ou responsáveis podem visualizar ON-LINE ocorrências, boletim e até mesmo o financeiro através do terminal WEB, acompanhar a vida escolar do aluno ou importantes acontecimentos dentro da escola;",
    vtg07:
      "7 — Plurall: Inovação tecnológica para realização de tarefas por aplicativo de celular ou pela Web. Além das tarefas, disponibiliza plantão de dúvidas, com monitores virtuais, para responder toda e qualquer dúvida dos alunos formando um grande banco de dados para consulta;",
    vtg08: "8 — Aplicações de SIMULADOS PROVA ENEM (durante o ano letivo);",
    vtg09:
      "9 — O uso do uniforme (camisa da escola) é obrigatório para que não se tenha comparações entre os alunos, evitando inclusive o bullying;",
    vtg10:
      "10 - As aulas de Educação Física, são realizadas em períodos contrário a matrícula.",
  },
  //1° Ensino Medio - Vespertino
  {
    cod: 19,
    curso: "1° Ensino Médio - Vespertino",
    categoria: 4,
    valorIntegral: 2395.54,
    docAluno:
      "Aluno: |- RG |- CPF |- Certidão de Nascimento ou Casamento |- Comprovante de residência |- 01 Foto 3x4 |- Carteirinha de Vacinação |- Histórico do Ens. Fundamental com GDAE ou Transferência |- Declaração de Transferência |- Histórico de Transferência |Obs: na ausência do histórico com gdae deverá entregar uma declaração de conclusão do ensino fundamental |- Declaração de Escolaridade.",
    docResp:
      "Responsáveis: |- RG|- CPF|- Comprovante de residência|- Declaração de Adimplência |- Obrigatório a compra do uniforme escolar no ato da matrícula",
    valorApostila: ApostilaMed1vesp,
    idadeMatricula: "",
    TextoSegundaMensalidade:
      "Este documento e seus valores são válidos por 3 (três) dias úteis contando da data que foi impresso.",
    SegundaMensalidade: "- Até o dia 1º R$ 1.069,00 | - Até o dia 7º R$ 1.122,44 | - Até o dia 25º R$ 1.336,24",
    horaAula: "",
    desconto: descontMedioVes,

    vtgEixo: "ENSINO MÉDIO",
    vtgLetivo: "",
    vtgHorario:
      "Horário das Aulas | Manhã: 07h às 12h e 20min. | Tarde: 12h e 40min às 18h.",
    vtgVantagens: "Quais as vantagens de estudar no Colégio Adélia: ",
    vtg01:
      "1 — Professores capacitados para o aprendizado dos alunos e no desenvolvimento curricular nos três anos do curso;",
    vtg02:
      "2 — Salas amplas próprias ao ambiente escolar, corredores e horário de lanche sempre monitorados pelos inspetores;",
    vtg03:
      "3 — Todo o aprendizado do curso é feito através do SISTEMA ANGLO DE ENSINO com apoio a plataforma PLURALL;",
    vtg04:
      "4 — Ao decorrer do ano letivo realizamos eventos proporcionando sempre um ambiente tranquilo e familiar;",
    vtg05:
      "5 — A escola conta com uma equipe pedagógica sempre presente, tendo os pais à possibilidade de saber a vida acadêmica do aluno com hora marcada previamente;",
    vtg06:
      "6 — Os pais ou responsáveis podem visualizar ON-LINE ocorrências, boletim e até mesmo o financeiro através do terminal WEB, acompanhar a vida escolar do aluno ou importantes acontecimentos dentro da escola;",
    vtg07:
      "7 — Plurall: Inovação tecnológica para realização de tarefas por aplicativo de celular ou pela Web. Além das tarefas, disponibiliza plantão de dúvidas, com monitores virtuais, para responder toda e qualquer dúvida dos alunos formando um grande banco de dados para consulta;",
    vtg08: "8 — Aplicações de SIMULADOS PROVA ENEM (durante o ano letivo);",
    vtg09:
      "9 — O uso do uniforme (camisa da escola) é obrigatório para que não se tenha comparações entre os alunos, evitando inclusive o bullying;",
    vtg10:
      "10 - As aulas de Educação Física, são realizadas em períodos contrário a matrícula.",
  },
];
