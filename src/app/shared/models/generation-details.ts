export interface GenerationDetails {
    abilities:       any[];
    id:              number;
    main_region:     MainRegion;
    moves:           MainRegion[];
    name:            string;
    names:           Name[];
    pokemon_species: MainRegion[];
    types:           MainRegion[];
    version_groups:  MainRegion[];
}

export interface MainRegion {
    name: string;
    url:  string;
}

export interface Name {
    language: MainRegion;
    name:     string;
}
