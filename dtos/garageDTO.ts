export interface GarageDTO {
    id: number;
    number: number;
    name: string;
    typeCode?: number;
    type?: string;
    address?: string;
    settlement?: string;
    phone?: string;
    postalCode?: number;
    professionCode?: number;
    profession?: string;
    professionManager?: string;
    registrationNumber?: number;
    testTime?: string;
  }
  
  export const mapToGarageDTO = (garage: any): GarageDTO => ({
    id: garage._id,
    number: garage.mispar_mosah,
    name: garage.shem_mosah,
    typeCode: garage.cod_sug_mosah,
    type: garage.sug_mosah,
    address: garage.ktovet,
    settlement: garage.yishuv,
    phone: garage.telephone,
    postalCode: garage.mikud,
    professionCode: garage.cod_miktzoa,
    profession: garage.miktzoa,
    professionManager: garage.menahel_miktzoa,
    registrationNumber: garage.rasham_havarot,
    testTime: garage.TESTIME,
  });
  