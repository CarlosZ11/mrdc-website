import React from "react";
import Sidenav from "../../components/Sidenav";
import Box from "@mui/material/Box";
import Navbar from "../../components/Navbar";
import MemberFormPage from "./MemberFormPage";
import MembersListPage from "./MemberListPage";


function MembersPage() {
  return (
    <>
      <div className="bgcolor">
        <Navbar />
        <Box height={70} />
        <Box sx={{ display: "flex" }}>
          <Sidenav />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <MembersListPage />
          </Box>
        </Box>
      </div>
    </>
  )
}

export default MembersPage