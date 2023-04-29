import {CAMPSITES} from '../../app/shared/campsites';

export const selectAllCampsites = () => {
    return CAMPSITES;
};
export const selectRandomCampsite = () => {
    return CAMPSITES[Math.floor(CAMPSITES.length * Math.random())];
};