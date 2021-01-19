import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import PageHeader from "../components/PageHeader";
import Button from "../components/ui/Button";
import ListItem from "../components/ui/ListItem";
import TextField from "../components/ui/TextField";
import { RootState } from "../store";
import SpaceNewsActions from "../store/actions/spaceNewsActions";
import { COLORS } from "../styles/colors";

interface Player {
  id: number;
  name: string;
}

const players = [
  {
    id: 1,
    name: "aaa",
  },
  {
    id: 2,
    name: "bbb",
  },
];

const DashboardPage: React.FC = () => {
  const dispatch = useDispatch();

  const { spaceNews } = useSelector((state: RootState) => state);

  const [playerName, setPlayerName] = useState("");
  const [editPlayer, setEditPlayer] = useState({});

  useEffect(() => {
    dispatch(SpaceNewsActions.getUserProfile({ limit: 3 }));
  }, [dispatch]);

  function handleAdd() {
    // [Firebase] Add data to Db
    console.log("playerName", playerName);
  }

  function handleEdit(player: Player) {
    console.log("edit player", player);

    setEditPlayer(player);
    setPlayerName(player.name);
  }

  function handleUpdate() {
    // [Firebase] Update data
    console.log("update player", editPlayer);
    // Reset field
    handleReset();
  }

  function handleDelete(id: number) {
    // [Firebase] Delete data
    console.log("delete id", id);
  }

  function handleReset() {
    setPlayerName("");
    setEditPlayer({});
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
            label={Object.keys(editPlayer).length > 0 ? "UPDATE" : "ADD"}
            backgroundColor={COLORS.primary}
            onClick={() =>
              Object.keys(editPlayer).length > 0 ? handleUpdate() : handleAdd()
            }
          />
          {Object.keys(editPlayer).length > 0 && (
            <Button
              label="CANCELAR"
              backgroundColor={COLORS.grey.default}
              onClick={() => handleReset()}
            />
          )}
        </div>
        {players &&
          players.map((item: Player) => (
            <div
              key={item.id}
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
                onClick={() => handleDelete(item.id)}
                small
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default DashboardPage;
