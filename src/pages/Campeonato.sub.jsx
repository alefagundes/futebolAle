export const dataMok = {
  campeonato_id: 10,
  nome: 'Campeonato Brasileiro',
  slug: 'campeonato-brasileiro',
  nome_popular: 'Brasileirão',
  edicao_atual: {
    edicao_id: 36,
    temporada: '2022',
    nome: 'Campeonato Brasileiro 2022',
    nome_popular: 'Brasileirão 2022',
    slug: 'campeonato-brasileiro-2022',
  },
  fase_atual: {
    fase_id: 168,
    nome: 'Fase Única',
    slug: 'fase-unica',
    tipo: 'pontos-corridos',
    _link: '/v1/campeonatos/10/fases/168',
  },
  rodada_atual: {
    nome: '38ª Rodada',
    slug: '38a-rodada',
    rodada: 38,
    status: 'encerrada',
  },
  status: 'finalizado',
  tipo: 'Pontos Corridos',
  logo: 'https://api.api-futebol.com.br/images/competicao/brasileiro-seriea.png',
  regiao: 'nacional',
  fases: [
    {
      fase_id: 168,
      edicao: {
        edicao_id: 36,
        temporada: '2022',
        nome: 'Campeonato Brasileiro 2022',
        nome_popular: 'Brasileirão 2022',
        slug: 'campeonato-brasileiro-2022',
      },
      nome: 'Fase Única',
      slug: 'fase-unica',
      status: 'finalizado',
      decisivo: false,
      eliminatorio: false,
      ida_e_volta: true,
      tipo: 'pontos-corridos',
      grupos: [],
      chaves: [],
      rodadas: [],
      proxima_fase: null,
      fase_anterior: null,
      _link: '/v1/campeonatos/10/fases/168',
    },
  ],
}
