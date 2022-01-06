
import "./showcontest.css"


export const Pagination = ({ setpage, page }) => {
    return (
        <>
            <div className="pagination__button">
                <button
                    onClick={() => { setpage(1) }}
                    style={page === 1 ? { border: "1px solid #408bb1" } : { border: "1px solid #c8c8c8" }}
                >1</button>
                <button onClick={() => { setpage(2) }}
                    style={page === 2 ? { border: "1px solid #408bb1" } : { border: "1px solid #c8c8c8" }}
                >2</button>
                <button onClick={() => { setpage(3) }}
                    style={page === 3 ? { border: "1px solid #408bb1" } : { border: "1px solid #c8c8c8" }}
                >3</button>
                <button onClick={() => { setpage(4) }}
                    style={page === 4 ? { border: "1px solid #408bb1" } : { border: "1px solid #c8c8c8" }}
                >4</button>
                <button onClick={() => { setpage(5) }}
                    style={page === 5 ? { border: "1px solid #408bb1" } : { border: "1px solid #c8c8c8" }}
                >5</button>
                <button onClick={() => { setpage(6) }}
                    style={page === 6 ? { border: "1px solid #408bb1" } : { border: "1px solid #c8c8c8" }}
                >6</button>
                <button onClick={() => { setpage(7) }}
                    style={page === 7 ? { border: "1px solid #408bb1" } : { border: "1px solid #c8c8c8" }}
                >7</button>
                <button onClick={() => { setpage(8) }}
                    style={page === 8 ? { border: "1px solid #408bb1" } : { border: "1px solid #c8c8c8" }}
                >8</button>
                <button onClick={() => { setpage(9) }}
                    style={page === 9 ? { border: "1px solid #408bb1" } : { border: "1px solid #c8c8c8" }}
                >9</button>
                <button onClick={() => { setpage(10) }}
                    style={page === 10 ? { border: "1px solid #408bb1" } : { border: "1px solid #c8c8c8" }}
                >10</button>
                <button onClick={() => { setpage(page + 1) }}>&gt;</button>
            </div>
        </>
    )
}