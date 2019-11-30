import React, { useEffect, Fragment, useState } from 'react';
import logo from './logo.svg';
import {
  useTable,
  useGroupBy,
  useFilters,
  useSortBy,
  useExpanded,
  usePagination,
} from 'react-table'
import './App.css';
import io from 'socket.io-client';
import CustomInput from "./custom-input"
import CustomButton from "./custom-button"


function App() {
  const [data, setData] = useState([]);
  const [inputValueSearch, setInputValueSearch] = useState("")
  const columns = React.useMemo(
    () => [
      {
        Header: "Radio base",
        accessor: "radiobase"
      },
      {
        Header: "Fecha",
        accessor: "fecha"
      },
      {
        Header: "Región",
        accessor: "region"
      },
      {
        Header: "Trafico",
        accessor: "",
        Cell: row => {
          let valor = ""
          if (row.row.original.trafico <= 15) {
            valor = "text-danger"
          }
          if (row.row.original.trafico > 15 && row.row.original.trafico <= 40) {
            valor = "text-warning"
          }
          if (row.row.original.trafico > 40 && row.row.original.trafico <= 90) {
            valor = "text-warning"
          }
          if (row.row.original.trafico > 90) {
            valor = "text-success"
          }
          if (row.row.original.trafico === null) {
            valor = "text-secondary"
          }
          return <div className={valor}>{row.row.original.trafico}</div>;
        }
      }
    ],
    []
  );


  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 2 },
    },
    usePagination
  )


  const getTable = async () => {
    try {

      const response = await fetch("/api/data");
      console.log(response)
      const data = await response.json()
      setData(data.data);
      console.log(data)

    } catch (error) {
      console.log("error", error);

    }

  }

  useEffect(() => {
    getTable()

  }, [])



  let component = <div></div>;

  async function getTableFilter() {
    try {
      let response = []
      if (inputValueSearch == "") {
        response = await fetch("/api/data");
      } else {
        response = await fetch("/api/data/buscar", {
          method: 'POST', // or 'PUT'
          body: JSON.stringify({ params: inputValueSearch }), // data can be `string` or {object}!
          headers: {
            'Content-Type': 'application/json'
          }
        });
      }

      console.log(response)
      const data = await response.json()
      setData(data.data);
      console.log(data)

    } catch (error) {
      console.log("error", error);

    }
  }

  // Render the UI for your table

  component = (
    <Fragment>
      <div className="container-fluid">
        <div className="buscadores">
          <CustomInput
            disabled={false}
            isVisible
            value={inputValueSearch}
            placeholder="Ingrese trafico"
            onChange={(e, value) => setInputValueSearch(value)}
          />
          <CustomButton
            label="Buscar por trafico"
            isVisible
            className="btn-warning"
            onClick={() => {
              getTableFilter()
            }}
          />
        </div>
        <div className="table-registros">
          {data.length > 0 ? (
            <Fragment>
              <table className="table table-striped table-responsive" {...getTableProps()}>
                <thead>
                  {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map(column => (
                        <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                  {page.map(
                    (row, i) => {
                      prepareRow(row);
                      return (
                        <tr {...row.getRowProps()}>
                          {row.cells.map(cell => {
                            return (
                              <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            )
                          })}
                        </tr>
                      )
                    }
                  )}
                </tbody>
              </table>
              {/* 
        Pagination can be built however you'd like. 
        This is just a very basic UI implementation:
      */}
              <div className="pagination">
                <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                  {'<<'}
                </button>{' '}
                <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                  {'<'}
                </button>{' '}
                <button onClick={() => nextPage()} disabled={!canNextPage}>
                  {'>'}
                </button>{' '}
                <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                  {'>>'}
                </button>{' '}
                <span>
                  Page{' '}
                  <strong>
                    {pageIndex + 1} of {pageOptions.length}
                  </strong>{' '}
                </span>
                <span>
                  | Go to page:{' '}
                  <input
                    type="number"
                    defaultValue={pageIndex + 1}
                    onChange={e => {
                      const page = e.target.value ? Number(e.target.value) - 1 : 0
                      gotoPage(page)
                    }}
                    style={{ width: '100px' }}
                  />
                </span>{' '}
                <select
                  value={pageSize}
                  onChange={e => {
                    setPageSize(Number(e.target.value))
                  }}
                >
                  {[10, 20, 30, 40, 50].map(pageSize => (
                    <option key={pageSize} value={pageSize}>
                      Show {pageSize}
                    </option>
                  ))}
                </select>
              </div>
            </Fragment>
          ) : (
              <div className="alert alert-info">
                Falta que los registros se asignen a servidores
            </div>
            )}
        </div>
      </div>
    </Fragment>
  );

  return component
}

export default App;
