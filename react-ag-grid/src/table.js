import React from 'react';
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

export const Table = () => {
    const data = [
        {name : 'Dan', age : 20},
        {name : 'Max', age : 40},
        {name : 'Hero', age : 32},
        {name : 'fittuber', age : 47},
    ]
    const columns = [
        {
            headerName: "ID" , field: 'id' 
        },
        {
            headerName: "Name" , field: 'name' 
        },
        {
            headerName: "Email" , field: 'email' 
        },
        {
            headerName: "Body" , field: 'body' 
        },
    ]

    const defaultColDef={
        sortable:true,
        editable:true,
        filter:true,
        flex:1,
        floatingFilter:true,
    }





    let gridApi;
    const onGridReady = (params) => {
        console.log("grid is ready")
        fetch("https://jsonplaceholder.typicode.com/comments").then(resp=>resp.json())
        .then(resp=>params.api.applyTransaction({add:resp}))
        gridApi=params.api
    }
    
    const onExportClick=()=>{
        gridApi.exportDataAsCsv();
    }




    return (
        <div className="ag-theme-alpine" style={{height: 400, width: 600}}>
            <button onClick = {()=>onExportClick()}>Export</button>
            
            <AgGridReact 
            //rowData ={data} 
            defaultColDef={defaultColDef}
            columnDefs={columns} 
            onGridReady={onGridReady}
            pagination={true}
            paginationPageSize={5}
            
            />

        </div>
    )
}