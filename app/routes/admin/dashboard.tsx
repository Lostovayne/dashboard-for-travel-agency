import { Header } from "~/components";

const Dashboard = () => {
  
  const user = {name: "Jhon Doe"}

  return (
    <main className="dashboard wrapper">
      <Header 
      title={`Bievenido ${user?.name ?? "invitado"}👋`}
      description="Seguimiento en tiempo real de la actividad, las tendencias y los destinos más populares"
      />
      Dashboard content
    </main>
  );
};
export default Dashboard;
