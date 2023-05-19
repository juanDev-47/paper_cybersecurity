export const links = [
  {
    name: 'Planteamiento', submenu: true, sublinks: [
      {
        sublinks: [
          { name: 'Objetivos', link: "/objectives" },
          { name: 'Contexto', link: "/context" },
          { name: 'Entes', link: "/entities" },
          { name: 'Definiciones', link: "/definitions" },
          { name: 'Necesidad', link: "/necessity" },
          { name: 'Problema', link: "/problem" }
        ]
      }
    ]
  }, {
    name: 'Metodología', submenu: true, sublinks: [
      {
        sublinks: [
          { name: 'Descripción Metodológica', link: "/" },
          { name: 'Métodos', link: "/" },
          { name: 'Técnicas', link: "/" },
          { name: 'Instrumentos', link: "/" },
          { name: 'Procedimiento', link: "/" },
        ]
      }
    ]
  },
  {
    name: 'Resultados', submenu: true, sublinks: [
      {
        sublinks: [
          { name: 'Hallazgos', link: "/" },
          { name: 'Análisis', link: "/" }
        ]
      }
    ]
  },
  { name: 'Integrantes' },
  { name: 'Referencias' }
]