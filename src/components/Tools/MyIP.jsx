import { useState, useEffect } from "react";
import { Card, CardBody } from "@nextui-org/react";
import { getMyIp } from "./api";

const MyIP = () => {
  const [ip, setIp] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getMyIp()
      .then(data => setIp(data.ip))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="">
      {loading ? (
        <Card className="mb-8">
          <CardBody>Loading...</CardBody>
        </Card>
      ) : error ? (
        <Card className="mb-8 border-danger">
          <CardBody className="text-danger">{error}</CardBody>
        </Card>
      ) : (
        <Card>
          <CardBody>
            <div className="text-4xl text-center font-mono">{ip}</div>
          </CardBody>
        </Card>
      )}
    </div>
  );
};

export default MyIP;
