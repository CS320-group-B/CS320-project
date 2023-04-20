export interface Semester {
    season: string;
    year: number;
    classes: string[];

}

export interface Track {
    semesters: Semester[];
}


export const track: Track = {
    semesters: [
        {
            year: 2022,
            season: "Fall",
            classes: [
                "COMPSCI 220",

                "MATH 235",
                "COMPSCI 230",
                "KIN 110"
            ]
        },
        {
            year: 2023,
            season: "Spring",
            classes: ["COMPSCI 320",

                "COMPSCI 453",
                "MATH 411",
                "COMPSCI 311"
            ]

        },
        {
            year: 2023,
            season: "Fall",
            classes: ["COMPSCI 520",

                "COMPSCI 389",
                "COMPSCI 429",
                "ARCH 201"
            ]

        }
    ]
}