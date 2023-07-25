import React, { useEffect } from "react";
import EditIcon from "@mui/icons-material/Edit";
import { Box, CardActions, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CallIcon from "@mui/icons-material/Call";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { array, func, string } from "prop-types";
import { useUser } from "../../../users/providers/UserProvider";
import { Link, useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";
import useCardActionBar from "./hooks/useCardActionBar";
import useCards from "../../hooks/useCards";
import cardType from "../../models/types/cardType";

const CardActionBar = ({ cardId, userId, card, cards, setCards }) => {
  const { user } = useUser();
  const navigate = useNavigate();
  console.log(setCards);
  const { handleLikeCard, handleDeleteCard } = useCards();
  const { onDelete, onLike, localLike, setLocalLike } = useCardActionBar(
    handleDeleteCard,
    handleLikeCard,
    setCards,
    cards
  );
  useEffect(() => {
    const isLiked = async () => {
      const hasUser = await card.likes.filter((like) => like === user?._id);
      if (hasUser.length > 0) {
        setLocalLike(true);
      }
    };
    isLiked();
  }, [card.likes, user?._id, setLocalLike]);

  return (
    <>
      <CardActions sx={{ pt: 0, justifyContent: "space-between" }}>
        <Box>
          {user && (user?._id === userId || user.isAdmin) && (
            <IconButton
              sx={{ "&:hover": { color: "black" } }}
              aria-label="delete"
              onClick={() => {
                onDelete(cardId);
              }}
            >
              <DeleteIcon />
            </IconButton>
          )}
          {user && user?._id === userId && (
            <IconButton
              aria-label="edit"
              onClick={() => navigate(`${ROUTES.EDIT_CARD}/${cardId}`)}
            >
              <EditIcon />
            </IconButton>
          )}
          <Link
            to={`mailto:?subject=${card.title}&body=${card.subtitle}%0D%0APhone: ${card.phone} %0D%0A Business Description: ${card.description}`}
            aria-label="edit"
          ></Link>
        </Box>
        <Box>
          <Link to={`tel:${card.phone}`}>
            <IconButton
              sx={{ "&:hover": { color: "#77DD77" } }}
              aria-label="call"
            >
              <CallIcon />
            </IconButton>
          </Link>
          {user && (
            <IconButton
              sx={{ color: localLike ? "#F9516B" : "inherit" }}
              aria-label="like"
              onClick={() => onLike(cardId)}
            >
              <FavoriteIcon />
            </IconButton>
          )}
        </Box>
      </CardActions>
      {/* <CardDeleteDialog
      
        onDelete={handleDeleteCard}
      /> */}
    </>
  );
};

// CardActionBar.propTypes = {
//   cardId: string.isRequired,
//   userId: string.isRequired,
//   card: cardType.isRequired,
//   cards: array.isRequired,
//   setCards: func,
// };

export default CardActionBar;
