import Center from "./platform/Center";
import Nav from "./platform/Nav";
import Sidebar from "./platform/Sidebar";
import Profile from "./platform/profile/Profile";
import Resume from "./platform/profile/Resume";
import ProfileSidebar from "./platform/profile/profileSidebar/ProfileSidebar";
import Experience from "./platform/profile/Experience";
import Education from "./platform/profile/Education";
import Skills from "./platform/profile/Skills";
import SimilarProfile from "./platform/profile/profileSidebar/SimilarProfile";
import JobSuggestion from "./platform/profile/profileSidebar/JobSuggestion";
function App() {
  return (
    <>
      <div className="bg-purple-100">
        <Nav />
      </div>
      <div className="flex px-24  gap-7 bg-purple-100">
        <Sidebar />
        <Center />
      </div>
      <div className="flex sm:gap-3  bg-purple-100 overflow-hidden md:pl-3 lg:px-10 xl:px-16 px-3 md:pr-5 lg:pr-5 xl:gap-7 lg:gap-7">
        <div className=" w-full  xl:w-[63%] md:w-[57%]">
          <Profile />

          <Resume />
          <Experience />
          <Education />
          <Skills />
        </div>

        <p className="border-l-2 hidden sm:block"></p>

        <div
          className="hidden md:w-[59%] md:flex md:flex-col md:gap-10 md:pr-4 xl:pr-0 
xl:w-[65%]"
        >
          <ProfileSidebar />
          <SimilarProfile />

          <JobSuggestion />
        </div>
      </div>
    </>
  );
}

export default App;
