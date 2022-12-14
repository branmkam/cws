import { Table, TableBody, TableRow, TableCell } from '@mui/material'

export default function CWGrid(props) {
    const { len, squares } = props
    
    let rows = Array(len).fill('')
    for(let i = 0; i < len; i++) {
        rows[i] = 
        <TableRow
            key={'row' + i} 
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            {squares[i].map(c => <TableCell>{codify(c)}</TableCell>)}
        </TableRow>
    }
    return <Table>
        <TableBody>
            {rows}
        </TableBody>
    </Table>
}

// parse function for black squares
function codify(c) {
    return c
}