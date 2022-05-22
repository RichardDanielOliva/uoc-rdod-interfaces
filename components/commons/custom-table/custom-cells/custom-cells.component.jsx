import { Checkbox } from "@material-ui/core";
import { CUSTOM_CELLS_TYPES } from "../../../../config/enum";
import { InfoIcon, CircleCloseIcon } from "../../../../config/styles/icons-styles";
import DatesServices from "../../../../services/dates";
import FormatServices from "../../../../services/format";
import { 
    ActionCellContainer,
    CellLink,
    RowIconButton, } from "../custom-table.styles";
import { CustomBugDescriptionCell, CustomBugOptionsCell, CustomBugStatusCell } from "./custom-bugs-cells.component";

const CustomSimpleCell = ({
    value
}) => (<>{value}</>)

const CustomDateCell = ({
    value
}) => (<>{DatesServices.format(value)}</>)

const CustomActionCell = ({
    onRowSelect,
    onRowUpdate,
    onRowDelete,
    row,
    ...props
}) => {
    let enableDelete = row.original.enableDelete
    return (<ActionCellContainer>
    <RowIconButton onClick={() => onRowSelect(row)}>
        <InfoIcon />
    </RowIconButton>
    {onRowUpdate && <RowIconButton onClick={() => onRowUpdate(row)}>
        <InfoIcon />
    </RowIconButton>} 
    {onRowDelete && enableDelete && <RowIconButton onClick={() => onRowDelete(row)}>
        <CircleCloseIcon />
    </RowIconButton>}
</ActionCellContainer>)
}

const CustomLinkCell = ({
    value,
}) => {
    return (<CellLink 
                className='custom-link-cell'
                href={value.url}>{value.name}</CellLink>)
}

const CustomCurrencyCell = ({
    value
}) => (<div className='custom-currency-cell'>{FormatServices.formatCurrency(value)}</div>)

const CustomCheckboxCell = ({
    value: { checked, disabled },
    row,
    onCheckBoxHandle,
}) => (<ActionCellContainer><Checkbox
    className='custom-checkbox-cell'
    checked={checked}
    disabled={disabled}
    onChange={(event) => onCheckBoxHandle(row, event)}
    color="primary"
/>
</ActionCellContainer>)

const CustomCell = ({
    column,
    ...props
}) => {
    if(props.row.original.isExpanded)
        return <CustomSimpleCell column={column} {...props} />

    switch (column.type) {
        case CUSTOM_CELLS_TYPES.SIMPLE:
            return <CustomSimpleCell column={column} {...props} />
        case CUSTOM_CELLS_TYPES.DATE:
            return <CustomDateCell column={column} {...props} />
        case CUSTOM_CELLS_TYPES.ACTIONS:
            return <CustomActionCell column={column} {...props} />
        case CUSTOM_CELLS_TYPES.LINK:
            return <CustomLinkCell column={column} {...props} />
        case CUSTOM_CELLS_TYPES.CURRENCY:
            return <CustomCurrencyCell column={column} {...props} />
        case CUSTOM_CELLS_TYPES.CHECKBOX:
            return <CustomCheckboxCell column={column} {...props} />
        case CUSTOM_CELLS_TYPES.BUGS_DESCRIPTION:
            return <CustomBugDescriptionCell column={column} {...props} />
        case CUSTOM_CELLS_TYPES.BUGS_OPTIONS: 
            return <CustomBugOptionsCell column={column} {...props} />
        case CUSTOM_CELLS_TYPES.BUGS_STATUS: 
            return <CustomBugStatusCell column={column} {...props} />
        default:
            return <CustomSimpleCell column={column} {...props} />
    }
}

export default CustomCell;
