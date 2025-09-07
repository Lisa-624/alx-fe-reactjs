import ProfilePage from "./ProfilePage";
import UserContext from "./UserContext";

function App() {
  // This is the user data we’ll provide via Context
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>
      <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#fafafa", padding: "20px" }}>
        <h1 style={{ color: "#333" }}>Welcome to the User Profile</h1>
        <ProfilePage />
      </div>
    </UserContext.Provider>
  );
}

export default App;






