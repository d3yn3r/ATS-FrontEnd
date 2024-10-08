export interface GetNuevoUsuarioInterface {
    PK_Id_Usuario: number,
    SNombre: string,
    SApellido: string,
    SEmail:string,
    STelefono: string,
    BActivo:boolean,
    SEscuadron:string,
    NSaldo:number,
    BFotoPerfil:string,
    NIntentosLogin:number,
    DFechaCreacion:Date,
    FK_Id_Rol:number,
    SHashedPassword:string,
    token:string,
    rol:string,
    SRazon:string
}