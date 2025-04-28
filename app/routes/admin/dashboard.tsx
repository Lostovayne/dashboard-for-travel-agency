import { Header, StatsCard, TripCard } from "~/components";

const user = { name: "Jhon Doe" };
const dashboardStats = {
  totalUsers: 12450,
  usersJoined: { currentMonth: 218, lastMonth: 176 },
  totalTrips: 3540,
  tripsCreated: { currentMonth: 128, lastMonth: 110 },
  userRole: { total: 62, currentMonth: 30, lastMonth: 32 },
};

const allTrips = [{
  id: 1,
  name: "Tropical Rewind",
  imageUrls: ["/assets/images/sample1.jpg"],
  itinerary: [{ location: "Thailand" }],
  tags: ["Adventure", "Culture"],
  travelStyle: "Solo",
  estimatedPrice: "$1,000",
},
{
  id: 2,
  name: "French Reverie",
  imageUrls: ["/assets/images/sample2.jpg"],
  itinerary: [{ location: "Paris" }],
  tags: ["Relaxation", "Culinary"],
  travelStyle: "Family",
  estimatedPrice: "$2,000",
},
{
  id: 3,
  name: "Zen Break",
  imageUrls: ["/assets/images/sample3.jpg"],
  itinerary: [{ location: "Japan" }],
  tags: ["Shopping", "Luxury"],
  travelStyle: "Couple",
  estimatedPrice: "$3,000",
},
{
  id: 4,
  name: "Adventure in Westeros",
  imageUrls: ["/assets/images/sample4.jpg"],
  itinerary: [{ location: "Croatia" }],
  tags: ["Historical", "Culture"],
  travelStyle: "Friends",
  estimatedPrice: "$4,000",
},
];

const Dashboard = () => {
  const { totalUsers, userRole, usersJoined, totalTrips, tripsCreated } = dashboardStats;

  return (
    <main className="dashboard wrapper">
      <Header
        title={`Bievenido ${user?.name ?? "invitado"}👋`}
        description="Seguimiento en tiempo real de la actividad, las tendencias y los destinos más populares"
      />

      <section className="flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          <StatsCard
            headerTitle="Total de Usuarios"
            total={totalUsers}
            currentMonthCount={usersJoined.currentMonth}
            lastMonthCount={usersJoined.lastMonth}
          />
          <StatsCard
            headerTitle="Total de Viajes"
            total={totalTrips}
            currentMonthCount={tripsCreated.currentMonth}
            lastMonthCount={tripsCreated.lastMonth}
          />
          <StatsCard
            headerTitle="Total de Usuarios Activos"
            total={userRole.total}
            currentMonthCount={userRole.currentMonth}
            lastMonthCount={userRole.lastMonth}
          />
        </div>
      </section>
      <TripCard />
    </main>
  );
};
export default Dashboard;
