import { GarageApiResponse } from "../models/garageApiResponse";
import { IGarage } from "../models/garage";

export const mapToGarageData = (record: GarageApiResponse['result']['records'][number]): Partial<IGarage> => ({
  _id: record._id,
  mispar_mosah: parseInt(record.mispar_mosah),
  shem_mosah: record.shem_mosah,
  cod_sug_mosah: parseInt(record.cod_sug_mosah),
  sug_mosah: record.sug_mosah,
  ktovet: record.ktovet,
  yishuv: record.yishuv,
  telephone: record.telephone,
  mikud: parseInt(record.mikud),
  cod_miktzoa: parseInt(record.cod_miktzoa),
  miktzoa: record.miktzoa,
  menahel_miktzoa: record.menahel_miktzoa,
  rasham_havarot: parseInt(record.rasham_havarot),
  TESTIME: record.TESTIME || ""
});
