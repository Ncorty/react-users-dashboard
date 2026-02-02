import { Result, Button } from "antd";
import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";


export const NotFoundPage = () => {

    const navigate = useNavigate()
    return (
        <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={<Button onClick={()=> {navigate("/login")}} type="primary">Back Home</Button>}
        />
    )
}