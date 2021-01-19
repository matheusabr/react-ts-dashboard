import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import PageHeader from "../components/PageHeader";
import Button from "../components/ui/Button";
import ListItem from "../components/ui/ListItem";
import TextField from "../components/ui/TextField";

import { RootState } from "../store";
import PlayerActions from "../store/actions/playerActions";
import SpaceNewsActions from "../store/actions/spaceNewsActions";
import { FirebasePlayer } from "../store/types/playerTypes";

import { COLORS } from "../styles/colors";

const initialPlayerState = {
  docId: "",
  name: "",
  createdAt: null,
};

const DashboardPage: React.FC = () => {
  const dispatch = useDispatch();

  const { spaceNews, player } = useSelector((state: RootState) => state);

  const [playerName, setPlayerName] = useState("");
  const [editPlayer, setEditPlayer] = useState(initialPlayerState);

  useEffect(() => {
    // Get space news from external api
    dispatch(SpaceNewsActions.getUserProfile({ limit: 3 }));
    // Get players from Firebase
    dispatch(PlayerActions.getPlayers());
  }, [dispatch]);

  function getPlayers() {
    // Get players from Firebase
    dispatch(PlayerActions.getPlayers());
  }

  function handleAdd() {
    // [Firebase] Add data to Db
    dispatch(PlayerActions.addPlayer({ name: playerName }));
    // Reset field
    handleReset();
    // Update list
    getPlayers();
  }

  function handleEdit(player: FirebasePlayer) {
    setEditPlayer(player);
    setPlayerName(player.name);
  }

  function handleUpdate(player: FirebasePlayer) {
    // [Firebase] Update data
    dispatch(
      PlayerActions.updatePlayer({
        docId: player.docId,
        name: playerName,
        createdAt: player.createdAt,
      })
    );
    // Reset field
    handleReset();
    // Update list
    getPlayers();
  }

  function handleDelete(docId: string) {
    // [Firebase] Delete data
    dispatch(PlayerActions.deletePlayer({ docId }));
    if (!!editPlayer.name) {
      // Reset field
      handleReset();
    }
    // Update list
    getPlayers();
  }

  function handleReset() {
    setPlayerName("");
    setEditPlayer(initialPlayerState);
  }

  return (
    <div>
      <PageHeader title="Dashboard" />
      <div style={{ padding: 10 }}>
        <div style={{ paddingBottom: 20 }}>
          <h3 style={{ margin: 0 }}>Space Flight News from API</h3>
          <span>API: https://test.spaceflightnewsapi.net/api/v2/articles</span>
        </div>
        {spaceNews.news &&
          spaceNews.news.map((item: any) => {
            return (
              <ListItem
                key={item.id}
                title={item.title}
                thumbnail={item.imageUrl}
                subtitle={item.publishedAt}
              />
            );
          })}
      </div>
      <div style={{ padding: 10 }}>
        <div style={{ padding: "20px 0" }}>
          <h3 style={{ margin: 0 }}>Firebase CRUD</h3>
          <span>Create, Read, Update and Delete data</span>
        </div>
        <div style={{ display: "flex" }}>
          <TextField
            type="text"
            placeholder="Name a player"
            backgroundColor={COLORS.secondary}
            value={playerName}
            handleChange={(event) => setPlayerName(event.target.value)}
          />
          <Button
            label={!!editPlayer.name ? "UPDATE" : "ADD"}
            backgroundColor={COLORS.primary}
            onClick={() =>
              !!editPlayer.name ? handleUpdate(editPlayer) : handleAdd()
            }
          />
          {!!editPlayer.name && (
            <Button
              label="CANCELAR"
              backgroundColor={COLORS.grey.default}
              onClick={handleReset}
            />
          )}
        </div>
        {player.players &&
          player.players.map((item: FirebasePlayer) => (
            <div
              key={item.docId}
              style={{ display: "flex", alignItems: "center" }}
            >
              <ListItem title={item.name} />
              <Button
                label="EDIT"
                margin="0 5px"
                color={COLORS.grey.dark}
                backgroundColor={COLORS.grey.default}
                onClick={() => handleEdit(item)}
                small
              />
              <Button
                label="REMOVE"
                color={COLORS.grey.dark}
                backgroundColor={COLORS.grey.default}
                onClick={() => handleDelete(item.docId)}
                small
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default DashboardPage;
