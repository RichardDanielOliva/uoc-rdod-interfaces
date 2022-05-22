import { BAYESIAN_MODELLING_CONTENT } from "./resources/bayesian-modelling/bayesian-modelling-resources";
import { CARBON_STORAGE_CONTENT } from "./resources/carbon-storage/carbon-storage-resources";
import { CLIMATE_CHANGE_CONTENT } from "./resources/climate-change/climate-change-resources";
import { COVID_19_CONTENT } from "./resources/covid-19/covid-19-resources";


export const SECTIONS = {
    ['climateChange']: {
        title: 'Climate Change',
        id: 'climateChange'
    },
    ['carbonStorage']: {
        title: 'Carbon Storage',
        id: 'carbonStorage'
    }, 
    ['covid19']: {
        title: 'COVID-19',
        id: 'covid19'
    }
}  

export const RESOURCES_CONTENT = {
    ...COVID_19_CONTENT,
    ...CARBON_STORAGE_CONTENT,
    ...CLIMATE_CHANGE_CONTENT,
    ...BAYESIAN_MODELLING_CONTENT
  };
  