export default function BasketItem({item}) {

    return (
        <div>
            {item.name}
            <input 
                style={{
                    width: "20px"
                }}
                type="number"
            />    
        </div>

    )
}

