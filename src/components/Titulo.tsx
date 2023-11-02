export default function Titulo(props) {
return (
    <div className={`flex flex-col justify-center p-4 drop-shadow-lg`}>
        <h1 className="px-5 pr-2 text-2xl ">{props.children}</h1>
        <hr className="border-2 border-black-500"/>
    </div>
)
}