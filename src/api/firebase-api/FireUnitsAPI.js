import axios from "axios"

const url = 'https://lab1-atp.firebaseio.com/';

export const UnitsAPI = {
    getAll: async () => {
        const res = await axios.get(`${url}/units.json`);
        return Object.keys(res.data).map(key => {
            return {
                ...res.data[key],
                id: key
            }
        })
    },
    addUnit: async unit => {
        const result = await axios.post(`${url}/units.json`, unit);
        return result;
    },
    deleteUnit: async unitId => {
        const result = await axios.delete(`${url}/units/${unitId}.json`, unitId);
        return unitId
    }
}