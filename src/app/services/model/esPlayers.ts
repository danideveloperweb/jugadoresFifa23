import { IEsPlayer } from "./esPlayers.interface";

export const EsPlayer :IEsPlayer[] = [
    {
        id: "1",
        name: 'Karim Benzema',
        penalties: 84,
        crosses: 71,
        acceleration: 82,
        dribbling: 85,
        volleys: 84,
        longShots: 83,
        img: "assets/img/benzema.png",
        vid:[
            "https://www.youtube.com/embed/1e4qBEDC3ZA",
            "https://www.youtube.com/embed/PEuveiDBHfs",
            "https://www.youtube.com/embed/S0Xd1IShdbI",
            "https://www.youtube.com/embed/GWc4F_DWPm4"
        ],
        teams: [
            { nameTeam: 'Olympique Lyon', years: '2004-2009',shield:'assets/img/olimpique.png' },
            { nameTeam: 'Real Madrid', years: '2009-2023',shield:'assets/img/madrid.png'}
          ]

    },
    {
        id: "2",
        name: 'Leo Messi',
        penalties: 75,
        crosses: 77,
        acceleration: 92,
        dribbling: 96,
        volleys: 86,
        longShots: 90,
        img: "assets/img/messi.png",
        vid:[
            "https://www.youtube.com/embed/Kq9FDBOBrtc",
            "https://www.youtube.com/embed/F-nxbw-O9VY",
            "https://www.youtube.com/embed/twOMe6o1eLU",
            "https://www.youtube.com/embed/rpo_mZXoyig"
        ],
        teams: [
            { nameTeam: 'FC Barcelona', years: '2004-2021',shield:'assets/img/barcelona.png' },
            { nameTeam: 'París Sanint-Germain FC', years: '2021-2023',shield:'assets/img/paris.png' }
          ]

    },
    {
        id: "3",
        name: 'Cristiano Ronaldo',
        penalties: 93,
        crosses: 77,
        acceleration: 89,
        dribbling: 88,
        volleys: 93,
        longShots: 92,
        img: "assets/img/cristiano.png",
        vid:[
            "https://www.youtube.com/embed/eFgSL_CHYwg",
            "https://www.youtube.com/embed/4O8fCv2hJP0",
            "https://www.youtube.com/embed/oc5Nj9HYCD8",
            "https://www.youtube.com/embed/xSyRtEI6iAU"
        ],
        teams: [
            { nameTeam: 'Sporting CP B', years: '2001-2003',shield:'assets/img/sporting.png' },
            { nameTeam: 'Manchester United', years: '2003-2009',shield:'assets/img/manch.png' },
            { nameTeam: 'Real Madrid', years: '2009-2018',shield:'assets/img/madrid.png' },
            { nameTeam: 'Juventus', years: '2018-2021',shield:'assets/img/juve.png' },
            { nameTeam: 'Manchester United', years: '2021-2023',shield:'assets/img/manch.png' },
          ]

    },
    {
        id:"4",
        name: 'Robert Lewandowski',
        penalties: 87,
        crosses: 69,
        acceleration: 84,
        dribbling: 87,
        volleys: 86,
        longShots: 90,
        img: "assets/img/lewandowski.png",
        vid:[
            "https://www.youtube.com/embed/1-HuV0R907Y",
            "https://www.youtube.com/embed/LId-0Ech1H4",
            "https://www.youtube.com/embed/nWfitbySEbc",
            "https://www.youtube.com/embed/DFcgVcwUYB8"
        ],
        teams: [
            { nameTeam: 'Lech', years: '2008-2010',shield:'assets/img/Lech.png' },
            { nameTeam: 'Borussia Dortmund', years: '2010-2014',shield:'assets/img/Borussia.png' },
            { nameTeam: 'Bayern Munich', years: '2014-2022',shield:'assets/img/Bayern.png' },
            { nameTeam: 'FC Barcelona', years: '2022-2023',shield:'assets/img/barcelona.png' }
          ]

    }
];
