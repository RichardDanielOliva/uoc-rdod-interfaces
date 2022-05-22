import React from 'react';
import { useTable, usePagination, useSortBy } from 'react-table';

import FooterToolbar from './footer-toolbar.component';

import { 
  CustomTableContainer,
} from './custom-table.styles';
import { DEFAULT_TABLE_PAGE_SIZE } from '../../../config/constants';
import CustomCell from './custom-cells/custom-cells.component';
import { CUSTOM_CELLS_TYPES } from '../../../config/enum';

const DEFAULT_CELLS = {
  Cell: CustomCell,
}

const Table = ({
  getTableProps,
  getTableBodyProps,
  headerGroups,
  prepareRow,
  page,
  rows,
  emptyMessage
}) => {
  let rowsToDisplay = page ? page : rows;
  let renderColumn = 'Header';
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => {
              let columnsProps = column.getSortByToggleProps ? column.getHeaderProps(column.getSortByToggleProps()) :
                column.getHeaderProps();
              return (
                <th 
                  //{...column.getHeaderProps()} 
                  {...columnsProps}>
                  {column.render(renderColumn)}
                </th>
            );
            })}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rowsToDisplay.length > 0 && !rowsToDisplay.isExpanded && rowsToDisplay.map(
          (row) => {
            prepareRow(row);
            return (
              !row.original.isExpanded ? <tr {...row.getRowProps()} 
                className={row.original.isSelected ? 'selected-row ' + row.original.className: 'row ' + row.original.className}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  )
                })}
              </tr> :           
              <tr {...row.getRowProps()} className={'expanded-row'} >
                <td {...row.cells[0].getCellProps()} colSpan="100%">
                  {row.cells[0].render('Cell')}
                </td>
              </tr>
            )
          }
        ) }
        
        {rowsToDisplay.length === 0 &&
          <tr><td className='empty-message'>{ emptyMessage }</td></tr>}
      </tbody>
    </table>
  );
}

const CustomTable = ({
  columns, 
  data,
  options,
  className='custom-table',
  id='custom-table',
  emptyMessage='No items to display',
  pageSize=DEFAULT_TABLE_PAGE_SIZE,
  enableUseSortBy=true,
  ...props
}) => {
  let plugins = enableUseSortBy ? 
    [useSortBy, usePagination] : [usePagination];
  const useTableProps = useTable(
    {
      columns,
      data,
      initialState: { pageSize },
      defaultColumn: DEFAULT_CELLS,
      ...props
    },
    ...plugins,
  )
  return (
    <CustomTableContainer 
      className={className} 
      id={id}>
      <Table 
        options={options}
        emptyMessage={emptyMessage}
        {...useTableProps}
        />

      {(useTableProps.rows.length !== 0 || useTableProps.page.length !== 0) && <FooterToolbar 
        {...useTableProps}/>}
    </CustomTableContainer>
  );
}

const CustomTableWrapper = ({ columns, onRowSelect, onRowUpdate, onRowDelete, ...props}) => {
    if (onRowSelect || onRowUpdate || onRowDelete)
    columns = [...columns,
    {
      Header: 'Actions',
      accessor: 'actions',
      type: CUSTOM_CELLS_TYPES.ACTIONS
    }]
  return (<CustomTable 
    columns={columns} 
    onRowSelect={onRowSelect}
    onRowUpdate={onRowUpdate}
    onRowDelete={onRowDelete}
    {...props}/>)
}

export default CustomTableWrapper;