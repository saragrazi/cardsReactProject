import { Navigate, useParams } from "react-router-dom";
import { useUser } from "../../users/providers/UserProvider";
import useCards from "../hooks/useCards";
import useForm from "../../forms/hooks/useForm";
import cardSchema from "../models/joi-schema/cardSchema";
import initialCardForm from "../helpers/initial-forms/initialCardForm";
import ROUTES from "../../routes/routesModel";
import { useEffect } from "react";
import { Container } from "@mui/material";
// import Input from "../../forms/components/Input";
import { getCard } from "../services/cardService";
import CardForm from "../components/CardForm";

const EditCardPage = () => {
  const { handleUpdateCard, setCardId } = useCards();
  const params = useParams();
  const { user } = useUser();
  const { value, ...rest } = useForm(
    initialCardForm,
    cardSchema,
    handleUpdateCard
  );

  useEffect(() => {
    const cardData = async () => {
      const card = await getCard(params.id);
      setCardId(card._id);
      rest.setData({
        title: card.title,
        subtitle: card.subtitle,
        description: card.description,
        phone: card.phone,
        email: card.email,
        webUrl: card.web,
        imageUrl: card.image.url,
        imageAlt: card.image.alt,
        state: card.address.state,
        country: card.address.country,
        city: card.address.city,
        street: card.address.street,
        houseNumber: card.address.houseNumber,
        zip: card.address.zip,
        user_id: card.user_id,
      });
    };
    cardData();
    // eslint-disable-next-line
  }, []);

  if (!user) return <Navigate replace to={ROUTES.CARDS} />;

  return (
    <Container
      sx={{
        paddingTop: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CardForm
        title="edit Card"
        onSubmit={rest.onSubmit}
        onReset={rest.handleReset}
        errors={value.errors}
        onFormChange={rest.validateForm}
        onInputChange={rest.handleChange}
        data={value.data}
      >
        {/* <Input
          name="title"
          label="title"
          error={value.errors.title}
          onChange={rest.handleChange}
          data={value.data}
          sm={6}
        /> */}
      </CardForm>
    </Container>
  );
};

export default EditCardPage;
