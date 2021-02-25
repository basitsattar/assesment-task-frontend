import React from 'react'
import './styles.css'
const CountriesList = ({ numbers }) => {
    return (
        <ul class="list-container">
            {
                numbers.map((number) =>
                    <li className="list-group-item w-100 text-muted small">{number.phoneNumber}</li>
                )
            }
        </ul>
    )
}

export default CountriesList
