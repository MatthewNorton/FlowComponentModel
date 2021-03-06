import { eContentType } from "./FlowField";
export interface IFlowDisplayColumn {
    componentType: string;
    contentFormat: string;
    contentType: string;
    developerName: string;
    isDisplayValue: boolean;
    isEditable: boolean;
    label: string;
    order: number;
    typeElementPropertyId: string;
    typeElememtPropertyToDisplayId: string;
}
export declare class FlowDisplayColumn {
    private ComponentType;
    private ContentFormat;
    private ContentType;
    private DeveloperName;
    private Visible;
    private ReadOnly;
    private Label;
    private DisplayOrder;
    private TypeElementPropertyId;
    private TypeElememtPropertyToDisplayId;
    private Column;
    get componentType(): string;
    get contentFormat(): string;
    get contentType(): eContentType;
    get developerName(): string;
    get visible(): boolean;
    get readOnly(): boolean;
    get label(): string;
    get displayOrder(): number;
    get typeElementPropertyId(): string;
    get typeElememtPropertyToDisplayId(): string;
    constructor(column: IFlowDisplayColumn);
    iFlowDisplayColumn(): IFlowDisplayColumn;
}
