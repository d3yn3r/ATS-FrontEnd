export interface GetReporteInterface{
    PK_Id_Reporte:number
    SNombreEstado:string
    FK_Id_UsuarioReporta:number
    SNombreUsuarioReporta:string
    FK_Id_UsuarioReportado:number
    SNombreUsuarioReportado:string
    SDescripcion:string
    SMotivo:string
    SEvidencia:string
    SFechaReporte:string
}