import Header from "./components/Header";
import UserProfile from "./components/UserProfile";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#fafafa" }}>
      <Header />
      <MainContent />
      
      {/* Example user profiles */}
      <UserProfile 
        name="Lisa Michaels" 
        age={25} 
        bio="A passionate traveler who loves exploring new cultures and foods." 
      />
      <UserProfile 
        name="John Doe" 
        age={30} 
        bio="Software engineer by day, adventurer by night. Loves hiking and photography." 
      />
      
      <Footer />
    </div>
  );
}

export default App;





