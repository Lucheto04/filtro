import {Expose, Transform} from 'class-transformer';
import {IsDefined, IsNumber, IsString, Matches} from 'class-validator';

export class storageAutomovil {

    @Expose({name: 'id-automovil'})
    @IsDefined({ message:() => { throw { status: 422, message: `El parametro id-automovil es obligatorio`}}})
    @IsNumber({}, { message: () => { throw { status: 406, message: `El formato del parametro id-automovil no es correcto` }}})
    ID_Automovil: number;

    @Expose({name: 'marca'})
    @IsDefined({ message: () => { throw { status: 422, message: `El parametro marca es obligatorio` }}})
    @IsString({ message: () => { throw { status: 406, message: `El parametro marca no cumple con el formato` }}})
    Marca: string;

    @Expose({name: 'modelo'})
    @IsDefined({ message: () => { throw { status: 422, message: `El parametro modelo es obligatorio` }}})
    @IsString({ message: () => { throw { status: 406, message: `El parametro modelo no cumple con el formato` }}})
    Modelo: string;

    @Expose({name: 'id-automovil'})
    @IsDefined({ message:() => { throw { status: 422, message: `El parametro id-automovil es obligatorio`}}})
    @IsNumber({}, { message: () => { throw { status: 406, message: `El formato del parametro id-automovil no es correcto` }}})
    Anio: number;

    @Expose({name: 'tipo'})
    @IsDefined({ message: () => { throw { status: 422, message: `El parametro tipo es obligatorio` }}})
    @IsString({ message: () => { throw { status: 406, message: `El parametro tipo no cumple con el formato` }}})
    Tipo: string;

    @Expose({name: 'capacidad'})
    @IsDefined({ message:() => { throw { status: 422, message: `El parametro capacidad es obligatorio`}}})
    @IsNumber({}, { message: () => { throw { status: 406, message: `El formato del parametro capacidad no es correcto` }}})
    Capacidad: number;

    @Expose({name: 'precio-diario'})
    @IsDefined({ message:() => { throw { status: 422, message: `El parametro precio-diario es obligatorio`}}})
    @IsNumber({}, { message: () => { throw { status: 406, message: `El formato del parametro precio-diario no es correcto` }}})
    Precio_Diario: number;

    constructor(
        ID_Automovil: number = 0,
        Marca: string = "",
        Modelo: string = "",
        Anio: number = 0,
        Tipo: string = "",
        Capacidad: number = 0,
        Precio_Diario: number = 0,
    ) {
        this.ID_Automovil = ID_Automovil;
        this.Marca = Marca;
        this.Modelo = Modelo;
        this.Anio = Anio;
        this.Tipo = Tipo;
        this.Capacidad = Capacidad;
        this.Precio_Diario = Precio_Diario;
    }
}