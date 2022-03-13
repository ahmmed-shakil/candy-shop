import { useNavigate, useParams } from "react-router";

export default function withRouter(Child) {
    return (props) => {
        const params = useParams();
        console.log(params);
        const navigate = useNavigate()
        return <Child {...props} params={params} />
    }
}
