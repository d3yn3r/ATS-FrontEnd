export interface GetMensajeInterface{
    PK_Id_Mensaje: number
    FK_Id_UsuarioEnvia:number
    SNombreUsuarioEnvia:string
    FK_Id_UsuarioRecibe:number
    SNombreUsuarioRecibe:number
    SDescripcion:string
    SSeveridad:string
    NNumeroRefuerzos:number
    SFechaMensaje:string
    STipoMensaje:string
}

export interface PostMensajeInterface{
    FK_Id_UsuarioEnvia:number
    FK_Id_UsuarioRecibe:number
    SDescripcion:string
    SSeveridad:string
    NNumeroRefuerzos:number
    SFechaMensaje:string
    STipoMensaje:string
}