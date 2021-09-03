import { TableContainer, Table, TableBody, TableCell, TableRow, IconButton,  makeStyles } from '@material-ui/core'
import React from 'react'
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart"
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'


const useStyles = makeStyles({
    iconCell:{
        height:48,
        width:48
    }
})

const SizeTable = (props) => {
    const classes = useStyles();
    const sizes = props.sizes;

    return (
        <TableContainer>
            <Table>
                <TableBody>
                    {sizes.length > 0 && (
                        sizes.map(size => (
                            <TableRow key={sizes.size}>
                                <TableCell component="th" scope="row">
                                    {size.size}
                                </TableCell>
                                <TableCell>
                                    Left {size.quantity}
                                </TableCell>
                                <TableCell className={classes.iconCell}>
                                    {size.quantity > 0 ? (
                                        <IconButton>
                                            <ShoppingCartIcon />
                                        </IconButton>
                                    ) : (
                                        <div>Sold Out</div>
                                    )}
                                </TableCell>
                                <TableCell className={classes.iconCell}>
                                    <IconButton>
                                        <FavoriteBorderIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default SizeTable;