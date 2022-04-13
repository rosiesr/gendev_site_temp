export default function List({items}) {

    itemslist = items.map((item)=>{
        return <li>item</li>;
    });
    return (
        <>
            <ul>
                {itemslist}
            </ul>
        </>
    )
}