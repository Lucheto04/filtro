import {Expose, Transform} from 'class-transformer';
import {IsDefined, IsNumber, IsString, IsEmail} from 'class-validator';

export class storageEmpleado {

    @Expose({name: 'id-empleado'})
    @IsDefined({ message:() => { throw { status: 422, message: `El parametro id-empleado es obligatorio`}}})
    @IsNumber({}, { message: () => { throw { status: 406, message: `El formato del parametro id-empleado no es correcto` }}})
    ID_Empleado: number;

    @Expose({name: 'nombre'})
    @IsDefined({ message: () => { throw { status: 422, message: `El parametro nombre es obligatorio` }}})
    @IsString({ message: () => { throw { status: 406, message: `El parametro nombre no cumple con el formato` }}})
    Nombre: string;

    @Expose({name: 'apellido'})
    @IsDefined({ message: () => { throw { status: 422, message: `El parametro apellido es obligatorio` }}})
    @IsString({ message: () => { throw { status: 406, message: `El parametro apellido no cumple con el formato` }}})
    Apellido: string;

    @Expose({name: 'DNI'})
    @IsDefined({ message: () => { throw { status: 422, message: `El parametro DNI es obligatorio` }}})
    @IsString({ message: () => { throw { status: 406, message: `El parametro DNI no cumple con el formato` }}})
    DNI: string;

    @Expose({name: 'direccion'})
    @IsDefined({ message: () => { throw { status: 422, message: `El parametro direccion es obligatorio` }}})
    @IsString({ message: () => { throw { status: 406, message: `El parametro direccion no cumple con el formato` }}})
    Direccion: string;

    @Expose({name: 'telefono'})
    @IsDefined({ message: () => { throw { status: 422, message: `El parametro telefono es obligatorio` }}})
    @IsString({ message: () => { throw { status: 406, message: `El parametro telefono no cumple con el formato` }}})
    Telefono: string;

    @Expose({name: 'cargo'})
    @IsDefined({ message: () => { throw { status: 422, message: `El parametro cargo es obligatorio` }}})
    @IsString({ message: () => { throw { status: 406, message: `El parametro cargo no cumple con el formato` }}})
    Cargo: string;

    constructor (
        ID_Empleado: number = 0,
        Nombre: string = "",
        Apellido: string = "",
        DNI: string = "",
        Direccion: string = "",
        Telefono: string = "",
        Cargo: string = ""
    ) {
        this.ID_Empleado = ID_Empleado;
        this.Nombre = Nombre;
        this.Apellido = Apellido;
        this.DNI = DNI;
        this.Direccion = Direccion;
        this.Telefono = Telefono;
        this.Cargo = Cargo;
    }
}