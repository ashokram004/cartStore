import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";

const Card = ({products, category, priority}) => {
    return (
        <div style={{display: 'flex', flexDirection:'column'}}>
            <h2>Defect Details</h2>
            <p className="sucess">Seach Results: {products.length}</p>
            <table>
                <thead>
                    <td>Category</td>
                    <td>Description</td>
                    <td>Priority</td>
                    <td>Status</td>
                    <td>Change Status</td>
                </thead>
                {products.map(product => {
                return (
                    <>
                    <tr>
                    <td>{product.Category}</td>
                    <td>{product.Description}</td>
                    <td>{product.Priority}</td>
                    <td>{product.Status}</td>
                    <td>{product['Change Status']}</td>
                    </tr>
                    </>
                )
                })}
            </table>
        </div>
    )
}

export default Card;