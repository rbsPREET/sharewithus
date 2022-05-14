import React from 'react'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Delete from '@mui/icons-material/Delete';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const DataTable = ({ headerCells, rowsCells, handleDeletion }) => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        {headerCells.map((cell, index) => (
                            <StyledTableCell key={index} align={index === 0 ? "left" : "center"}>{cell}</StyledTableCell>
                        ))}
                        <StyledTableCell align="center"></StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rowsCells.map((row, index) => (
                        <StyledTableRow key={index}>
                            {Object.keys(row).map((item, index) => (
                                <StyledTableCell key={index} align={index === 0 ? "left" : "center"}>{row[item]}</StyledTableCell>
                            ))}
                            <StyledTableCell align="right" onClick={() => handleDeletion(row.id)}>
                                {row.permission !== "ADMIN" && <Delete color="error" sx={{ cursor: 'pointer' }} />}
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table >
        </TableContainer >
    )
}

export default DataTable