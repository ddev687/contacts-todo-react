import { Button } from "react-bootstrap"

const CustomButton = ({ onClick, buttonText, buttonVariant, type }: any) => {
    return (
        <Button variant={buttonVariant} onClick={onClick} type={type}>
           {buttonText}
        </Button>
    )
}

export default CustomButton;