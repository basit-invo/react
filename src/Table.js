import React, { useState } from 'react';
import { useTable, useFilters } from 'react-table';

function Table() {
  const data = React.useMemo(
    () => [
      {
        col1: 'Pizza + Coke',
        col2: '1123 Rs.',
      },
      {
        col1: 'Burger + Coke',
        col2: '1123 Rs.',
      },
      {
        col1: 'wrap + Coke',
        col2: '1123 Rs.',
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: 'Deals',
        accessor: 'col1', // accessor is the "key" in the data
      },
      {
        Header: 'Price',
        accessor: 'col2',
      },
    ],
    []
  );

  // Create a state
  const [filterInput, setFilterInput] = useState('');

  const handleFilterChange = (e) => {
    const value = e.target.value || undefined;
    setFilter('col1', value);
    setFilterInput(value);
  };

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    setFilter,
  } = useTable({ columns, data }, useFilters);

  return (
    <div className="max-w-screen-xl m-auto grid grid-cols-3 gap-4 mt-10">
      <div className="p-5 text-left">
        <input
          value={filterInput}
          onChange={handleFilterChange}
          placeholder={'Search name'}
          className="mb-3 px-3"
        />
        <table
          {...getTableProps()}
          className="w-full"
          style={{ border: 'solid 1px blue' }}
        >
          <thead>
            {headerGroups.map((headerGroup, i) => (
              <tr key={i} {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    key={i}
                    {...column.getHeaderProps()}
                    style={{
                      borderBottom: 'solid 3px red',
                      background: 'aliceblue',
                      color: 'black',
                      fontWeight: 'bold',
                    }}
                  >
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
              prepareRow(row);
              return (
                <tr key={i} {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td
                        key={i}
                        {...cell.getCellProps()}
                        style={{
                          padding: '10px',
                          border: 'solid 1px gray',
                          background: 'papayawhip',
                        }}
                      >
                        {cell.render('Cell')}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
