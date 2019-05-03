import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'MENU',
    group: true,
  },
  // {
  //   title: 'Extra Components',
  //   icon: 'nb-star',
  //   children: [
  //     {
  //       title: 'Calendar',
  //       link: '/pages/extra-components/calendar',
  //     },
  //   ],
  // },
  // {
  //   title: 'Forms',
  //   icon: 'nb-compose',
  //   children: [
  //     {
  //       title: 'Form Inputs',
  //       link: '/pages/forms/inputs',
  //     },
  //   ],
  // },


  // {
  //   title: 'Tables',
  //   icon: 'nb-tables',
  //   children: [
  //     {
  //       title: 'Smart Table',
  //       link: '/pages/tables/smart-table',
  //     },
  //   ],
  // },

  {
    title: 'Liga sudamericana',
    icon: 'nb-tables',
    children: [
      {
        title: 'Tabla de posiciones',
        link: '/pages/sudamericana/tabla',
      },
      {
        title: 'Equipos',
        link: '/pages/sudamericana/equipo',
      },
      {
        title: 'Partidos',
        link: '/pages/sudamericana/partido',
      },
      {
        title: 'Ciudades',
        link: '/pages/sudamericana/ciudad',
      },
      {
        title: 'Paises',
        link: '/pages/sudamericana/pais',
      },

    ],
  },


];
