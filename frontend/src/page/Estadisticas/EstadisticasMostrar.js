import { BarCharts } from "../../components";

const data = [
  { name: "María", age: 10, weight: 60 },
  { name: "Karina", age: 25, weight: 70 },
  { name: "Susana", age: 15, weight: 65 },
  { name: "Pedro", age: 35, weight: 85 },
  { name: "Felipe", age: 12, weight: 48 },
  { name: "Laura", age: 30, weight: 69 },
  { name: "Adrián", age: 15, weight: 78 },
];

const EstadisticasMostrar = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ width: "700px", fontWeight: "bold", boxShadow:"4px 4px 4px black" }}>
        <BarCharts data={data}/>
      </div>
    </div>
  );
};

export default EstadisticasMostrar;
