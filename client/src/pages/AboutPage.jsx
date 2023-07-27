import React from "react";
import Container from "@mui/material/Container";
import PageHeader from "./../components/PageHeader";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

const AboutPage = () => {
  return (
    <Container maxWidth="lg">
      <PageHeader
        title="About Page"
        subtitle="On this page you can find explanations about using the application"
      />

      <Grid container spacing={2}>
        <Grid item xs={12} md={8} alignItem="center">
          <Typography>
            <p class="welcome">
              Welcome to our site, Your Personal Business
              <br /> Card Management Solution!{" "}
            </p>
          </Typography>
          <b>Who We Are</b>{" "}
          <Typography>
            At the site, we are passionate about helping you manage your
            business cards in the most organized and efficient way possible. Our
            platform allows you to create, store, and access your business cards
            securely and conveniently.{" "}
          </Typography>
          <b> Easy Sign-up and Log-in</b>{" "}
          <Typography>
            With our user-friendly interface, signing up and logging in is a
            breeze. Just a few clicks, and you'll be ready to start managing
            your business cards.{" "}
          </Typography>
          <b>Create and Customize Your Cards</b>
          <Typography>
            Easily create digital business cards with all your essential
            information. You have full control over the design and content,
            ensuring your card reflects your unique brand and personality.
          </Typography>{" "}
          <b>Secure Data Storage</b>{" "}
          <Typography>
            Rest assured that your business card data is safe with us. We use
            state-of-the-art security measures to protect your information and
            privacy. Access Anywhere, Anytime No more carrying around physical
            business cards. Access all your cards from any device, whether it's
            a smartphone, tablet, or computer.
          </Typography>
          <b>Simple CRUD Operations</b>{" "}
          <Typography>
            You can perform all the CRUD operations - Create, Read, Update, and
            Delete - on your business cards with ease. Keep your contact
            information up to date and delete outdated cards hassle-free.
          </Typography>{" "}
          <b>Our Vision</b>{" "}
          <Typography>
            Our vision is to provide a reliable and user-friendly platform for
            managing business cards, streamlining your professional connections,
            and making networking a breeze.
          </Typography>{" "}
          <b>Get Started Now!</b>{" "}
          <Typography>
            Join us today and experience the convenience and organization our
            platform offers. Sign up now to start managing your business cards
            efficiently and effectively. Feel free to modify the content to
            match the specific features and branding of your website. Make sure
            to keep the tone friendly, informative, and engaging. An "About"
            page is an excellent opportunity to connect with your users and
            showcase the value your website provides.
          </Typography>
          <p class="welcome1">
            Good luck with your business card management website!
          </p>
        </Grid>
        <Grid
          item
          xs={7}
          sx={{
            display: { md: "flex", xs: "none" },
            justifyContent: "center",
          }}
        >
          <img src="/assets/images/success.jpg" alt="success" width="100%" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutPage;
