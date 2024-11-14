import mongoose, { Document, Schema } from "mongoose";

interface IGarage extends Document {
    mispar_mosah: number;
    shem_mosah: string;
    cod_sug_mosah: number;
    sug_mosah: string;
    ktovet: string;
    yishuv: string;
    telephone: string;
    mikud: number;
    cod_miktzoa: number;
    miktzoa: string;
    menahel_miktzoa: string;
    rasham_havarot: number;
    TESTIME: string;
}

const garageSchema: Schema = new Schema({
    mispar_mosah: { type: Number, required: true },
    shem_mosah: { type: String, required: true },
    cod_sug_mosah: { type: Number },
    sug_mosah: { type: String },
    ktovet: { type: String },
    yishuv: { type: String },
    telephone: { type: String },
    mikud: { type: Number },
    cod_miktzoa: { type: Number },
    miktzoa: { type: String },
    menahel_miktzoa: { type: String },
    rasham_havarot: { type: Number },
    TESTIME: { type: String }
});

const Garage = mongoose.model<IGarage>("Garage", garageSchema);

export { Garage, IGarage };
