import { Container } from "react-bootstrap";
import DropdownList from "../components/DropdownList";
import MyTable from "../components/Table";


const BankAccount = () => {
    return <Container>
        <MyTable />
        <DropdownList />
    </Container>;
};
    
export default BankAccount;