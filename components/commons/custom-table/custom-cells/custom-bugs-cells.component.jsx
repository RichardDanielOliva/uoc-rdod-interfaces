import { AVAILABLE_ROUTES } from "../../../../config/routes";
import { CircleAddIcon, CircleCloseIcon } from "../../../../config/styles/icons-styles";
import { useLocaleBugsTable } from "../../../../hooks/locales/bugs.hook";
import DatesServices from "../../../../services/dates";
import { 
    BugCellContainer,
    CellSubjectContainer,
    CellDescriptionContainer,
    CellDateContainer,
    CellLink,
    BugOptionContainer,
    IconContainer
} from "./custom-cells.styles";

export const CustomBugDescriptionCell = ({
    onPreviewHandle,
    onViewBugHandle,
    row,
    ...props
}) => {
    const BUGS_TABLE = useLocaleBugsTable();
    let bugId = row.original.id;
    let { subject, description, date } = row.original['description'];
    return (<BugCellContainer>
        <CellSubjectContainer 
            onClick={() => onPreviewHandle(row)}
            >{subject}</CellSubjectContainer>
        <CellDescriptionContainer>{description}</CellDescriptionContainer>
        <CellDateContainer>{`${BUGS_TABLE.options.date.name} ${DatesServices.format(date)}`}</CellDateContainer>
        <CellLink href={`${AVAILABLE_ROUTES.productsBugReport}/${bugId}`}>{BUGS_TABLE.options.seeMore.name}</CellLink>
</BugCellContainer>)
}

export const CustomBugOptionsCell = ({
    onFollowerHandle,
    row,
    ...props
}) => {
    const BUGS_TABLE = useLocaleBugsTable();
    let { isFollower } = row.original['options'];
    return (<BugCellContainer>
        <BugOptionContainer
            onClick={() => onFollowerHandle(row)}
            >
            <IconContainer>
                {isFollower ? <CircleCloseIcon /> : <CircleAddIcon /> }
            </IconContainer>
                {isFollower ? BUGS_TABLE.options.unFollow.name : BUGS_TABLE.options.follow.name }
        </BugOptionContainer>
    </BugCellContainer>)
}

export const CustomBugStatusCell = ({
    row
}) => {
    let { status } = row.original['options'];
    return (<BugCellContainer>
        {status}
    </BugCellContainer>)
}