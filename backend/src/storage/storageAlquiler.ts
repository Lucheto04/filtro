import {Expose, Transform} from 'class-transformer';
import {IsDefined, IsNumber, IsString, Matches} from 'class-validator';

export class storageAlquiler {
 
    @Expose({name: 'id-alquiler'})
    @IsDefined({ message:() => { throw { status: 422, message: `El parametro id-alquiler es obligatorio`}}})
    @IsNumber({}, { message: () => { throw { status: 406, message: `El formato del parametro id-alquiler no es correcto` }}})
    ID_Alquiler: number;

    @Expose({name: 'id-cliente'})
    @IsDefined({ message:() => { throw { status: 422, message: `El parametro id-cliente es obligatorio`}}})
    @IsNumber({}, { message: () => { throw { status: 406, message: `El formato del parametro id-cliente no es correcto` }}})
    ID_Cliente: number;

    @Expose({name: 'id-automovil'})
    @IsDefined({ message:() => { throw { status: 422, message: `El parametro id-automovil es obligatorio`}}})
    @IsNumber({}, { message: () => { throw { status: 406, message: `El formato del parametro id-automovil no es correcto` }}})
    ID_Automovil: number;

    @Expose({ name: 'fecha-inicio' })
    @IsString({ message: 'El parametro fecha-inicio debe ser un string' })
    @IsDefined({ message:() => { throw { status: 422, message: `El parametro fecha-inicio es obligatorio`}}})
    @Matches(/^\d{4}-\d{2}-\d{2}$/, { message: 'Error en el formato del parametro fecha-inicio. El dato debe estar con el formato YYYY-MM-DD' })
    Fecha_Inicio: string;

    @Expose({ name: 'fecha-fin' })
    @IsString({ message: 'El parametro fecha-fin debe ser un string' })
    @IsDefined({ message:() => { throw { status: 422, message: `El parametro fecha-fin es obligatorio`}}})
    @Matches(/^\d{4}-\d{2}-\d{2}$/, { message: 'Error en el formato del parametro fecha-fin. El dato debe estar con el formato YYYY-MM-DD' })
    Fecha_Fin: string;

    @Expose({name: 'costo-total'})
    @IsDefined({ message:() => { throw { status: 422, message: `El parametro costo-total es obligatorio`}}})
    @IsNumber({}, { message: () => { throw { status: 406, message: `El formato del parametro costo-total no es correcto` }}})
    Costo_Total: number;

    @Expose({name: 'estado'})
    @IsDefined({ message: () => { throw { status: 422, message: `El parametro estado es obligatorio` }}})
    @IsString({ message: () => { throw { status: 406, message: `El parametro estado no cumple con el formato` }}})
    Estado: string;

    constructor(
        ID_Alquiler: number = 0,
        ID_Cliente: number = 0,
        ID_Automovil: number = 0,
        Fecha_Inicio: string = "",
        Fecha_Fin: string = "",
        Costo_Total: number = 0,
        Estado: string = "",
    ) {
      this.ID_Alquiler = ID_Alquiler;
      this.ID_Cliente = ID_Cliente;
      this.ID_Automovil = ID_Automovil;
      this.Fecha_Inicio = Fecha_Inicio;
      this.Fecha_Fin = Fecha_Fin;
      this.Costo_Total = Costo_Total;
      this.Estado = Estado   
    }
}