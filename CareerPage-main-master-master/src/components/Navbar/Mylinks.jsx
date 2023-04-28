export const links = [
  {
    name: "About us",
    submenu: false,
    sublinks: [
    ],
  },
  {
    name: "Products",
    submenu: true,
      sublinks: [
        {
          sublink: [
            { name: "Universal Banking", link: "/" },
            { name: "Open Banking", link: "/" },
            { name: "SME lending", link: "/" },
            { name: "Wallet", link: "/" },
            { name: "Banking as a service", link: "/" },
          ],
        },
      ]
    },
    {
      name: "Services",
    submenu: false,
    sublinks: [
    ],
  
  },
  {
    name: "Articles",
    submenu: false,
    sublinks: [
    ],
  },
  {
  name: "More",
  submenu: true,
    sublinks: [
      {
        sublink: [
          { name: "Dashboard", link: "/" },
          { name: "Settings", link: "/" },
          { name: "Earnings", link: "/" },
          { name: "Log Out", link: "/" },
        ],
      },
    ]
  },
  // {
  //   name: "Contact",
  //   submenu: false,
  //   sublinks: [
  //   ],
  // }
]