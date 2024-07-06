import React from "react";
import Sidenav from "../../components/Sidenav";
import Box from "@mui/material/Box";
import Navbar from "../../components/Navbar";
import List from "../../pages/members/List";


function MembersPage() {
  return (
    <>
      <div className="bgcolor">
        <Navbar />
        <Box height={65} />
        <Box sx={{ display: "flex" }}>
          <Sidenav />
          <Box component="main" sx={{ flexGrow: 1, p: 1 }}>
            <List />
          </Box>
        </Box>
      </div>
    </>
  )
}

export default MembersPage