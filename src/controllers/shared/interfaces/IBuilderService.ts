export interface IBuilderService<TSOURCE, TDESTINATION> {
    build(messourcesage:TSOURCE): Promise<TDESTINATION>
} 