import React from 'react';
import '../App.css';

function Table({ count }) {
    const range = Array.from({ length: 12 }, (_, i) => i + 1);

    return (
        <div className="table-container">
            <div className="grid-12">
                {/* Corner Cell */}
                <div className="cell header corner">×</div>

                {/* Horizontal Column Headers: 1 to 12 */}
                {range.map((col) => (
                    <div 
                        key={`col-header-${col}`} 
                        className={`cell header ${col === count ? 'highlight-header' : ''}`}
                    >
                        {col}
                    </div>
                ))}

                {/* Rows: Vertical Header (1 to 12) + Grid Cells */}
                {range.map((row) => (
                    <React.Fragment key={`row-${row}`}>
                        {/* Vertical Row Header */}
                        <div 
                            className={`cell header ${row === count ? 'highlight-header' : ''}`}
                        >
                            {row}
                        </div>

                        {/* Product Cells */}
                        {range.map((col) => {
                            const val = row * col;
                            const isMatch = val === count;
                            return (
                                <div 
                                    key={`cell-${row}-${col}`} 
                                    className={`cell ${isMatch ? 'highlight' : ''}`}
                                    title={`${row} × ${col} = ${val}`}
                                >
                                    {val}
                                </div>
                            );
                        })}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}

export default Table;
