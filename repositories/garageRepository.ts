// garageRepository.ts
import axios from 'axios';

interface ApiResponse {
    result: {
        total: number;
        records: Array<{
            _id: string;
            mispar_mosah: string;
            shem_mosah: string;
            cod_sug_mosah: string;
            sug_mosah: string;
            ktovet: string;
            yishuv: string;
            telephone: string;
            mikud: string;
            cod_miktzoa: string;
            miktzoa: string;
            menahel_miktzoa: string;
            rasham_havarot: string;
        }>;
    };
}

// Named export
 const fetchGarages = async (limit = 5, offset = 0) => {
    try {
        const response = await axios.get<ApiResponse>('https://data.gov.il/api/3/action/datastore_search', {
            params: {
                resource_id: 'bb68386a-a331-4bbc-b668-bba2766d517d',
                limit,
                offset
            }
        });
        
console.log("popop")
        return response.data.result.records;
    } catch (error) {
        console.error('Failed to fetch data:', error);
        throw error; // rethrow error for better error handling
    }
};

export {fetchGarages}
