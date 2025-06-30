import axios, { Axios } from "axios";
import { useEffect, useState } from "react";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";

export const Appbar = () => {
  const [name, setName] = useState("");
  const [logstatus, setLogstatus] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/user/name", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setName(response.data.firstName);
      });
  }, [name]);

  return (
    <div className="shadow h-14 flex justify-between">
      <div className="flex flex-col justify-center h-full ml-4">PayTM App</div>
      <div className="w-40">
        <img src="pulsepay.png" alt="" />
      </div>
      <div className="flex">
        <div className="flex flex-col justify-center h-full mr-4">{name}</div>
        <button
          onClick={() => {
            setLogstatus(!logstatus);
          }}
          className="hover:bg-sky-100 cursor-pointer rounded-full mt-3 h-8 w-8 bg-slate-200 flex justify-center mt-1 mr-2"
        >
          <div className="flex flex-col pb-1 justify-center h-full text-xl">
            {name?.[0]?.toUpperCase() || ""}
          </div>
        </button>
        {logstatus && (
          <div className="absolute top-20 left-340 bg-slate-150">
            <div className="flex justify-between">
              <div className="pb-2">you want to LogOut!</div>
            </div>
            <div className="flex">
              <Button
                onClick={() => {
                  localStorage.clear("token");
                  navigate("/");
                }}
                label={"yes"}
              />
              <Button
                onClick={() => {
                  setLogstatus(!logstatus);
                }}
                label={"no"}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
