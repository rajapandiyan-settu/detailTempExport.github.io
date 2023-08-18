
ej.base.enableRipple(true);

var grid = new ej.grids.Grid({
    dataSource: employeeData,
    detailTemplate: '#detailtemplate',
    toolbar: ['PdfExport', 'ExcelExport'],
    allowPdfExport: true,
    allowExcelExport: true,
    toolbarClick: toolbarClick,
    exportDetailTemplate: exportDetailTemplate,
    columns: [
        { field: 'FirstName', headerText: 'First Name', width: 200 },
        { field: 'LastName', headerText: 'Last Name', width: 200 },
        { field: 'Title', headerText: 'Title', width: 200 },
        { field: 'Country', headerText: 'Country', width: 200 },
    ],
});
grid.appendTo('#Grid');

function toolbarClick(args) {
    if (args.item.id === 'Grid_excelexport') {
        grid.excelExport({ hierarchyExportMode: 'All' });
    }
    if (args.item.id === 'Grid_pdfexport') {
        grid.pdfExport({ hierarchyExportMode: 'All' });
    }
}

function exportDetailTemplate(args) {
    if (args.parentRow.data.EmployeeID == 3) {
        args.value = {
            image: {
                base64: args.parentRow.data.EmployeeImage,
                height: 100, width: 200
            }
        }
    } else if (args.parentRow.data.EmployeeID == 4) {
        args.value = {
            text: "custom text"
        }
    } else if (args.parentRow.data.EmployeeID == 5) {
        args.value = {
            hyperLink: {
                target: 'mailto:' + args.parentRow.data.EmailID,
                displayText: args.parentRow.data.EmailID
            }
        }
    } else if (args.parentRow.data.EmployeeID == 2) {
        args.value = {
            colLength: 3,
            header: [
                {
                    cells: [{
                        index: 0, colSpan: 3, value: 'INVOICE',
                        style: { fontColor: '#C25050', fontSize: 25, hAlign: 'Center', bold: true, backColor: '#99ffcc', }
                    }]
                }
            ],
            content: [
                {
                    cells: [
                        {
                            index: 0, rowSpan: 4, image: {
                                base64: args.parentRow.data.EmployeeImage,
                                height: args.action == 'excelexport' ? 80 : undefined, width: args.action == 'excelexport' ? 200 : undefined
                            }
                        },
                        { index: 1, value: "First Name: " + args.parentRow.data.FirstName },
                        {
                            index: 2, value: "Postal Code: " + args.parentRow.data.PostalCode,
                            style: {
                                backColor: '#99ffcc',
                                bold: true,
                                fontSize: 15,
                                hAlign: 'Left',
                                indent: 1,
                                italic: true,
                                strikeThrough: true,
                                underline: true,
                                wrapText: true,
                            }
                        }
                    ]
                },
                {
                    cells: [
                        {
                            index: 1, value: "Last Name: " + args.parentRow.data.LastName,
                            style: { borders: { color: '#64FA50', lineStyle: 'Thin' } },
                        },
                        {
                            index: 2, value: "City: " + args.parentRow.data.City,
                            hyperLink: {
                                target: 'mailto:' + args.parentRow.data.EmailID,
                                displayText: args.parentRow.data.EmailID
                            },
                            style: { fontColor: '#C25050', fontSize: 25, hAlign: 'Center', bold: true }
                        }
                    ]
                },
                {
                    cells: [
                        { index: 1, value: "Title: " + args.parentRow.data.Title },
                        { index: 2, value: "Phone: " + args.parentRow.data.HomePhone }
                    ]
                },
                {
                    cells: [
                        { index: 1, value: "Address: " + args.parentRow.data.Address },
                        {
                            index: 2, value: "HireDate: 4/4/2023", style: {
                                backColor: '#99ffcc',
                                bold: true,
                                fontSize: 15,
                                hAlign: 'Right',
                                indent: 1,
                                italic: true,
                                strikeThrough: true,
                                underline: true,
                                wrapText: true,
                            }
                        }
                    ]
                }
            ],
        }
    } else {
        args.value = {
            content: [
                {
                    cells: [
                        { value: "First Name: " + args.parentRow.data.FirstName },
                        { value: "Postal Code: " + args.parentRow.data.PostalCode },
                    ]
                },
                {
                    cells: [
                        { value: "Last Name: " + args.parentRow.data.LastName },
                        { value: "City: " + args.parentRow.data.City }
                    ]
                },
                {
                    cells: [
                        { value: "Title: " + args.parentRow.data.Title },
                        { value: "Phone: " + args.parentRow.data.HomePhone }
                    ]
                },
                {
                    cells: [
                        { value: "Address: " + args.parentRow.data.Address },
                        { value: "HireDate: 4/4/2023" }
                    ]
                }
            ],
        }
    }
}