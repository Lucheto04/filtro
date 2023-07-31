import {Expose, Transform} from 'class-transformer';
import {IsDefined, IsNumber, IsString, IsEmail} from 'class-validator';

export class storageCliente {

    @Expose({name: 'id-cliente'})
    @IsDefined({ message:() => { throw { status: 422, message: `El parametro id-cliente es obligatorio`}}})
    @IsNumber({}, { message: () => { throw { status: 406, message: `El formato del parametro id-cliente no es correcto` }}})
    ID_Cliente: number;

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

    @Expose({name: 'Direccion'})
    @IsDefined({ message: () => { throw { status: 422, message: `El parametro Direccion es obligatorio` }}})
    @IsString({ message: () => { throw { status: 406, message: `El parametro Direccion no cumple con el formato` }}})
    Direccion: string;

    @Expose({name: 'Telefono'})
    @IsDefined({ message: () => { throw { status: 422, message: `El parametro Telefono es obligatorio` }}})
    @IsString({ message: () => { throw { status: 406, message: `El parametro Telefono no cumple con el formato` }}})
    Telefono: string;

    @Expose({ name: 'email' })
    @IsDefined({ message: () => { throw { status: 422, message: `El parametro email es obligatorio` }}})
    @IsEmail({}, { message: () => { throw { status: 406, message: `El parametro email no cumple con el formato` }}})
    Email: string;

    constructor(
        ID_Cliente: number = 0,
        Nombre: string = "",
        Apellido: string = "",
        DNI: string = "",
        Direccion: string = "",
        Telefono: string = "",
        Email: string = "aa@gmail.com") {
            this.ID_Cliente = ID_Cliente;
            this.Nombre = Nombre;
            this.Apellido = Apellido;
            this. DNI = DNI;
            this.Direccion = Direccion;
            this.Telefono = Telefono;
            this.Email = Email;
    }
}