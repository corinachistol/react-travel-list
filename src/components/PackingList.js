// const initialItems = [
//     { id: 1, description: "Passports", quantity: 2, packed: false },
//     { id: 2, description: "Socks", quantity: 12, packed: false },
//     { id: 3, description: "Charger", quantity: 12, packed: true },
//   ];

 function PackingList({items,onDeleteItems, onToggleItem}) {
    return(
        <div className="list">
            <ul >
            {items.map( item=> {
                return <Item item={item} 
                            key={item.id} 
                            onDeleteItems={onDeleteItems} 
                            onToggleItem={onToggleItem}/>
            } )}
            </ul>

        </div>

    )
}

function Item({item, onDeleteItems,onToggleItem}) {
    return(
        <li>
            <input 
                type="checkbox" 
                value={item.packed} 
                onChange={()=>onToggleItem(item.id)}/>
            <span style={item.packed ? {textDecoration:"line-through"}: {}}>
                {item.quantity} {item.description}
            </span>
            <button onClick={()=>onDeleteItems(item.id)}>X</button>
        </li>
    )
}

export {PackingList}