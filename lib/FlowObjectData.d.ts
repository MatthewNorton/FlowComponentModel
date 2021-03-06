import { FlowObjectDataProperty, IFlowObjectDataProperty } from './FlowObjectDataProperty';
export interface IFlowObjectData {
    developerName: string;
    externalId: string;
    internalId: string;
    isSelected: boolean;
    order: number;
    properties: IFlowObjectDataProperty[];
    typeElementId: string;
}
export declare class FlowObjectData {
    private DeveloperName;
    private ExternalId;
    private InternalId;
    private IsSelected;
    private Order;
    private TypeElementId;
    private Properties;
    get developerName(): string;
    set developerName(developerName: string);
    get externalId(): string;
    set externalId(externalId: string);
    get internalId(): string;
    set internalId(internalId: string);
    get isSelected(): boolean;
    set isSelected(isSelected: boolean);
    get order(): number;
    set order(order: number);
    get typeElementId(): string;
    set typeElementId(typeElementId: string);
    get properties(): {
        [key: string]: FlowObjectDataProperty;
    };
    constructor(data?: IFlowObjectData[]);
    static newInstance(developerName: string): FlowObjectData;
    addProperty(newProperty: FlowObjectDataProperty): void;
    removeProperty(key: string): void;
    clone(newTypeName?: string): FlowObjectData;
    iObjectData(): any;
    iFlowObjectDataArray(): IFlowObjectData[];
}
