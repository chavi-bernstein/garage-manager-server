export interface GarageApiResponse {
    result: {
      records: Array<{
        _id: number;
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
        TESTIME?: string;
      }>;
    };
  }
  