import { ReactNode } from "react"

interface Props{
    children: ReactNode;
    childrens: string;
    onClick: () => void;
    color?:string
}

const alert = ({children, childrens, onClick, color= "primary"}:Props) => {
  return (
    <div className= {'alert alert-' + color}>{children}
    <div>
    <button type="button" className="btn btn-info" onClick={onClick}>{childrens}</button>
    </div>
</div>
  )
}

export default alert