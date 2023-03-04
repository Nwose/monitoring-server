import React from 'react'
import Showcase from './shared/Showcase'
import { useState, useEffect, useMemo, useRef  } from 'react';
import MonitoringDataService from "../services/MonitoringService";
import { useTable, useFilters, useGlobalFilter, useAsyncDebounce, useSortBy, usePagination } from 'react-table'
import { ChevronDoubleLeftIcon, ChevronLeftIcon, ChevronRightIcon, ChevronDoubleRightIcon } from '@heroicons/react/solid'
import { Button, PageButton } from '../services/Button'
import { SortIcon, SortUpIcon, SortDownIcon } from '../services/Icons'


const Monitoring = () => {
   const [column ,setColumn] = useState([]);
   const [loading, setLoading] = useState(false);
   const [currentPage, setCurrentPage] = useState(1);
   const [postsPerPage] = useState(10);
  //  const [records, setRecords] = useState([]);
   const malpracticeRef = useRef();

  malpracticeRef.current = column;

  useEffect(() => {
     setLoading(true);
    retrieveMalpractice();
  }, []);

  // const onChangeSearchTitle = (e) => {
  //   const searchTitle = e.target.value;
  //   setSearchTitle(searchTitle);
  // };

  const retrieveMalpractice = () => {
    MonitoringDataService.getAll()
      .then((response) => {
        setColumn(response.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveMalpractice();
  };

   const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "registrationNumber",
        accessor: "registrationNumber",
      },
      {
        Header: "ExamDate",
        accessor: "examDate",
              },
                {
        Header: "Status",
        accessor: "status",
      },
      {
        Header: "SeatNo",
        accessor: "seatNo",
      },
      {
    Header: "ExamEnded",
    accessor: "examEnded",
    Cell: (props) => {
      return props.value ? "True" : "False";
    },
  },
      // {
      //   Header: "Actions",
      //   accessor: "actions",
      //   Cell: (props) => {
      //     const rowIdx = props.row.id;
      //     return (
      //       <div>
      //         <span onClick={() => openTutorial(rowIdx)}>
      //           <i className="far fa-edit action mr-2"></i>
      //         </span>

      //         <span onClick={() => deleteTutorial(rowIdx)}>
      //           <i className="fas fa-trash action"></i>
      //         </span>
      //       </div>
      //     );
      //   },
      // },
    ],
    []
  );

  const {
    rows,
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,

    state,
    preGlobalFilteredRows,
    setGlobalFilter,
  } = useTable({
    columns,
    data: column,
  },useFilters, // useFilters!
    useGlobalFilter,
    useSortBy,
    usePagination,);

  return (
    <>
      <Showcase title={'Center Monitoring'}
       route={'Center Monitoring'} />
      <div className='bg-white border h-[26rem] w-full'>
        <p className='border-b-2 p-2 text-gray-400 font-semibold'>Activation Time</p>
        <div className='flex items-center justify-center mt-7 gap-8'>
         {/* Table goes in here */}
               {/* <div className="col-md-12 list"> */}
        <div className="mt-4 flex flex-col">
        <div className="-my-2 overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table {...getTableProps()} className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-200 text-gray-400">
                  {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map(column => (
                        // Add the sorting props to control sorting. For this example
                        // we can add them into the header props
                        <th
                          scope="col"
                          className="group px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          {...column.getHeaderProps(column.getSortByToggleProps())}
                        >
                          <div className="flex items-center justify-between">
                            {column.render('Header')}
                            {/* Add a sort direction indicator */}
                            <span>
                              {column.isSorted
                                ? column.isSortedDesc
                                  ? <SortDownIcon className="w-4 h-4 text-gray-400" />
                                  : <SortUpIcon className="w-4 h-4 text-gray-400" />
                                : (
                                  <SortIcon className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100" />
                                )}
                            </span>
                          </div>
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody
                  {...getTableBodyProps()}
                  className="bg-white divide-y divide-gray-200"
                >
                  {page.map((row, i) => {  // new
                    prepareRow(row)
                    return (
                      <tr {...row.getRowProps()}>
                        {row.cells.map(cell => {
                          return (
                            <td
                              {...cell.getCellProps()}
                              className="px-6 py-4 whitespace-nowrap"
                              role="cell"
                            >
                              {cell.column.Cell.name === "defaultRenderer"
                                ? <div className="text-sm text-gray-500">{cell.render('Cell')}</div>
                                : cell.render('Cell')
                              }
                            </td>
                          )
                        })}
                      </tr>
                    )
                  })}
                </tbody>
              </table>
               <div className="py-3 flex items-center justify-between">
        <div className="flex-1 flex justify-between sm:hidden">
          <Button onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</Button>
          <Button onClick={() => nextPage()} disabled={!canNextPage}>Next</Button>
        </div>
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div className="flex gap-x-2">
            <span className="text-sm text-gray-700">
              Page <span className="font-medium">{state.pageIndex + 1}</span> of <span className="font-medium">{pageOptions.length}</span>
            </span>
            <select
              value={state.pageSize}
              onChange={e => {
                setPageSize(Number(e.target.value))
              }}
            >
              {[4, 10, 20].map(pageSize => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>
          </div>
          <div>
            <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
              <PageButton
                className="rounded-l-md"
                onClick={() => gotoPage(0)}
                disabled={!canPreviousPage}
              >
                <span className="sr-only">First</span>
                <ChevronDoubleLeftIcon className="h-5 w-5" aria-hidden="true" />
              </PageButton>
              <PageButton
                onClick={() => previousPage()}
                disabled={!canPreviousPage}
              >
                <span className="sr-only">Previous</span>
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              </PageButton>
              <PageButton
                onClick={() => nextPage()}
                disabled={!canNextPage
                }>
                <span className="sr-only">Next</span>
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              </PageButton>
              <PageButton
                className="rounded-r-md"
                onClick={() => gotoPage(pageCount - 1)}
                disabled={!canNextPage}
              >
                <span className="sr-only">Last</span>
                <ChevronDoubleRightIcon className="h-5 w-5" aria-hidden="true" />
              </PageButton>
            </nav>
          </div>
        </div>
        </div>
            </div>
          </div>
        </div>
      </div>
        
        </div>
      </div>
    </>
  )
}

export default Monitoring