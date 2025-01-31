/** @format */

import React from "react";
import { styled } from "styled-components";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./Pages/Home";
import LoginMain from "./Components/Actual_Components/LoginMain";
import AboutPage from "./Components/AboutPageComponents/AboutPage";
import Properties from "./Pages/Properties";
import MiddleMain from "./Components/PropertyViewComponents/MiddleMain";
import BlogMain from "./Components/Blog_Components/BlogMain";
import VerificationForm from "./Components/Forms.js/SignUpForm/VerificationForm";
import AdminMain from "./Components/AdminPanelComponents/AdminMain";
import ProfilePage from "./Components/ProfilePage";
import SingleBlog from "./Components/Blog_Components/SingleBlog";
import PropertyKnow from "./Components/KnowAbouts/PropertyKnow";
import Profile from "./Components/ProfileSec_Components/Profile";
import FinalNavBar from "./Components/HomePageComponents/NavBar";
import Footer from "./Components/Actual_Components/Footer";
import PageNotFound from "./Pages/PageNotFound";
import EditableProperty from "./Components/AdminPanelComponents/EditableProperty";
import Nav from "./anirudh_comps/nav";
import Form from "./Pages/Form";

function App() {
  const registeredData = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    mobile: '1234567890'
  };

  return (
    <Wrapper className='section'>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Navigate to='/Home' />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/login' element={<LoginMain />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/projects' element={<Properties />} />
          <Route path='/:url/' element={<MiddleMain />} />
          <Route path='/blog' element={<BlogMain />} />
          <Route path='/form' element={<Form registeredData={registeredData} />} />
          <Route path='/protected/private/admin' element={<AdminMain />} />
          <Route
            path='/protected/private/admin/editProject/:url'
            element={<EditableProperty />}
          />
          <Route path='/rough' element={<ProfilePage />} />
          <Route path='/blog/:name' element={<SingleBlog />} />
          <Route path='/knowabouts' element={<PropertyKnow />} />
          <Route path='/profile/:id' element={<Profile />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.section`
  font-family: 'DM Sans', sans-serif;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Inter', sans-serif !important;
  }
`;
