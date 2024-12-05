interface MainMenu {
    label: string;
    route: string;
    active?: boolean;
}

const defMainMenu: MainMenu[] = [
    {
        label: 'Natural',
        route: 'natural',
        active: false
    },
    {
        label: 'Synthetics',
        route: 'synthetics',
        active: false
    },
    {
        label: 'Formula',
        route: 'formula',
        active: false
    },
]

export  {
    type MainMenu,
    defMainMenu
}