export function Card( { name, email } ){
    return (
        <div className="shadow rounded-md p-3 bg-white flex flex-col gap-3">
            <div className="flex items-center gap-2 pb-3 border-b">
                <p>Nome:</p>
                <p>{name}</p>
            </div>
            <div className="flex items-center gap-2 pb-3 border-b">
                <p>E-mail</p>
                <p>{email}</p>
            </div>
        </div>
    )
}
