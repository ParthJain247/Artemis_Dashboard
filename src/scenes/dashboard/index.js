import { Box, Grid, LinearProgress, Typography } from "@mui/material";
import React from "react";
import Line from "../../components/Line";
import LineInput from "../../components/LineInput";
import Bar from "../../components/Bar";
import Table from "../../components/Table";

function Dashboard() {
  return (
    <Box
      style={{ backgroundColor: "#f0f4f8", padding: `5% 10% 5% 10%` }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <Box sx={{ backgroundColor: `white`, padding: `5%` }}>
            <Typography sx={{ color: `grey` }}>Total Income</Typography>
            <Box display={`flex`}>
              <Typography variant="h4">$124,563.00</Typography>
              <Box
                sx={{
                  marginLeft: `2%`,
                  background: `#16bb83`,
                  borderRadius: `22px`,
                  width: `45px`,
                  height: `20px`,
                }}
              >
                +6.9%
              </Box>
            </Box>
            <LinearProgress variant="determinate" value={50} />
            <Typography sx={{ color: `grey` }}>Yearly Goal</Typography>
          </Box>

          <Box
            sx={{ backgroundColor: `white`, padding: `5%`, marginTop: `5%` }}
          >
            <Typography sx={{ color: `grey` }}>New Users</Typography>
            <Box display={`flex`}>
              <Typography variant="h4">94.2%</Typography>
              <Box
                sx={{
                  marginLeft: `2%`,
                  background: `#16bb83`,
                  borderRadius: `22px`,
                  width: `45px`,
                  height: `20px`,
                }}
              >
                +6.9%
              </Box>
            </Box>
            <Box sx={{ height: `20vh` }}>
              <Bar />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6}>
          <Box sx={{ backgroundColor: "white", paddingTop: `5%` }}>
            <Box
              sx={{ borderBottom: `grey 1px solid`, paddingBottom: `3%` }}
              display={`flex`}
              justifyContent={`space-between`}
            >
              <Typography sx={{ paddingLeft: `5%` }} variant="h4">
                Balance
              </Typography>
              <LineInput />
            </Box>
            <Grid container spacing={1} padding={`5%`}>
              <Grid item sx={{ border: `1px solid grey` }} lg={6}>
                <Typography>Earnings</Typography>
                <Box display={`flex`}>
                  <Typography variant="h4">43.41%</Typography>
                  <Box
                    sx={{
                      marginLeft: `2%`,
                      background: `#16bb83`,
                      borderRadius: `22px`,
                      width: `45px`,
                      height: `20px`,
                    }}
                  >
                    +2.5%
                  </Box>
                </Box>
              </Grid>
              <Grid sx={{ border: `1px solid grey` }} lg={6}>
                <Typography>Sales Value</Typography>
                <Box display={`flex`}>
                  <Typography variant="h4">$95,422</Typography>
                  <Box
                    sx={{
                      marginLeft: `2%`,
                      background: `#16bb83`,
                      borderRadius: `22px`,
                      width: `45px`,
                      height: `20px`,
                    }}
                  >
                    +13.5%
                  </Box>
                </Box>
              </Grid>
            </Grid>
            <Box sx={{ height: `25vh`, width: `100%`, paddingTop: `5%` }}>
              <Line />
            </Box>
          </Box>
        </Grid>
      </Grid>
  <Box sx={{backgroundColor:`white`, marginTop:`8%`}}>
  <Typography sx={{padding:`2% 0 0 2%`}} variant="h4">Recent Transactions</Typography>
  <Table/>
  </Box>                  
    



    </Box>
  );
}

export default Dashboard;
