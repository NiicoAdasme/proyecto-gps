import masterQuery from "../../helpers/masterQuery";

const useLogin = (params) => {
    return  useMutation((params) => masterQuery(url, params, "post"));
}

export default useLogin;